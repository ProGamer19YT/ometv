const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });
const PORT = process.env.PORT || 3001;

const waiting = [];
const peers = new Map();
const profiles = new Map();

function getSocket(id) {
  return io.sockets.sockets.get(id);
}

function removeFromWaiting(id) {
  const i = waiting.findIndex(u => u.id === id);
  if (i !== -1) waiting.splice(i, 1);
}

function compatible(a, b) {
  const awc = (a.wantsCountry || 'ANY').toUpperCase();
  const bwc = (b.wantsCountry || 'ANY').toUpperCase();
  const ac = (a.country || 'UNKNOWN').toUpperCase();
  const bc = (b.country || 'UNKNOWN').toUpperCase();
  const awg = (a.wantsGender || 'ANY').toUpperCase();
  const bwg = (b.wantsGender || 'ANY').toUpperCase();
  const ag = (a.gender || 'UNKNOWN').toUpperCase();
  const bg = (b.gender || 'UNKNOWN').toUpperCase();
  return (awc === 'ANY' || awc === bc) &&
         (bwc === 'ANY' || bwc === ac) &&
         (awg === 'ANY' || awg === bg) &&
         (bwg === 'ANY' || bwg === ag);
}

function findMatch(me) {
  for (let i = 0; i < waiting.length; i++) {
    const other = waiting[i];
    if (other.id === me.id) continue;
    if (!compatible(me, other)) continue;
    waiting.splice(i, 1);
    return other;
  }
  return null;
}

function leavePartner(socket, notify = true) {
  const partnerId = peers.get(socket.id);
  if (!partnerId) return;
  peers.delete(socket.id);
  const partnerSocket = getSocket(partnerId);
  if (partnerSocket) {
    peers.delete(partnerId);
    if (notify) partnerSocket.emit('partner-left');
  }
}

function pair(aSocket, bSocket) {
  peers.set(aSocket.id, bSocket.id);
  peers.set(bSocket.id, aSocket.id);
  const a = profiles.get(aSocket.id) || {};
  const b = profiles.get(bSocket.id) || {};
  aSocket.emit('matched', { initiator: true, partner: { country: b.country || 'Unknown', gender: b.gender || 'Unknown' } });
  bSocket.emit('matched', { initiator: false, partner: { country: a.country || 'Unknown', gender: a.gender || 'Unknown' } });
}

io.on('connection', (socket) => {
  io.emit('online-count', io.of('/').sockets.size);

  socket.on('start-search', (payload = {}) => {
    removeFromWaiting(socket.id);
    leavePartner(socket, true);

    const profile = {
      id: socket.id,
      country: String(payload.country || 'Unknown').slice(0, 40),
      wantsCountry: String(payload.wantsCountry || 'ANY').slice(0, 40),
      gender: String(payload.gender || 'Unknown').slice(0, 20),
      wantsGender: String(payload.wantsGender || 'ANY').slice(0, 20)
    };

    profiles.set(socket.id, profile);
    const match = findMatch(profile);
    if (match) {
      const otherSocket = getSocket(match.id);
      if (otherSocket) pair(socket, otherSocket);
      else {
        waiting.push(profile);
        socket.emit('searching');
      }
    } else {
      waiting.push(profile);
      socket.emit('searching');
    }
  });

  socket.on('next', () => {
    removeFromWaiting(socket.id);
    leavePartner(socket, true);
    const profile = profiles.get(socket.id);
    if (!profile) return socket.emit('system-message', 'Önce bağlan.');
    const match = findMatch(profile);
    if (match) {
      const otherSocket = getSocket(match.id);
      if (otherSocket) pair(socket, otherSocket);
      else {
        waiting.push(profile);
        socket.emit('searching');
      }
    } else {
      waiting.push(profile);
      socket.emit('searching');
    }
  });

  socket.on('chat-message', (text) => {
    const partnerId = peers.get(socket.id);
    if (!partnerId) return;
    const partnerSocket = getSocket(partnerId);
    if (!partnerSocket) return;
    const clean = String(text || '').trim().slice(0, 500);
    if (clean) partnerSocket.emit('chat-message', clean);
  });

  socket.on('signal', (payload) => {
    const partnerId = peers.get(socket.id);
    if (!partnerId) return;
    const partnerSocket = getSocket(partnerId);
    if (partnerSocket) partnerSocket.emit('signal', payload);
  });

  socket.on('report', (reason) => {
    socket.emit('system-message', 'Rapor alındı.');
    console.log('REPORT', { reporter: socket.id, partner: peers.get(socket.id), reason: String(reason || 'unknown').slice(0, 200) });
  });

  socket.on('disconnect', () => {
    removeFromWaiting(socket.id);
    leavePartner(socket, true);
    profiles.delete(socket.id);
    io.emit('online-count', io.of('/').sockets.size);
  });
});

app.get('/', (_req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/style.css', (_req, res) => res.sendFile(path.join(__dirname, 'style.css')));
app.get('/app.js', (_req, res) => res.sendFile(path.join(__dirname, 'app.js')));

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
