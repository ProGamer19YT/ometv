const socket = io();

const remoteVideo = document.getElementById('remoteVideo');
const localVideo = document.getElementById('localVideo');
const statusText = document.getElementById('statusText');
const partnerMeta = document.getElementById('partnerMeta');
const onlineCount = document.getElementById('onlineCount');
const messages = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');
const myCountry = document.getElementById('myCountry');
const wantedCountry = document.getElementById('wantedCountry');
const myGender = document.getElementById('myGender');
const wantedGender = document.getElementById('wantedGender');
const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');
const muteBtn = document.getElementById('muteBtn');
const camBtn = document.getElementById('camBtn');
const reportBtn = document.getElementById('reportBtn');
const sendBtn = document.getElementById('sendBtn');

let localStream;
let pc;
let isMuted = false;
let isCameraOff = false;

const rtcConfig = {
  iceServers: [
    { urls: 'stun:stun.l.google.com:19302' },
    { urls: 'stun:stun1.l.google.com:19302' }
  ]
};

function addMessage(text, self = false) {
  const div = document.createElement('div');
  div.className = 'msg' + (self ? ' self' : '');
  div.textContent = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

async function ensureMedia() {
  if (localStream) return localStream;
  localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
  localVideo.srcObject = localStream;
  return localStream;
}

function cleanupPeer() {
  if (pc) {
    pc.onicecandidate = null;
    pc.ontrack = null;
    pc.close();
    pc = null;
  }
  remoteVideo.srcObject = null;
}

async function createPeer(initiator) {
  cleanupPeer();
  await ensureMedia();
  pc = new RTCPeerConnection(rtcConfig);

  localStream.getTracks().forEach(track => pc.addTrack(track, localStream));

  pc.ontrack = (event) => {
    remoteVideo.srcObject = event.streams[0];
  };

  pc.onicecandidate = (event) => {
    if (event.candidate) socket.emit('signal', { candidate: event.candidate });
  };

  if (initiator) {
    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);
    socket.emit('signal', { sdp: pc.localDescription });
  }
}

startBtn.onclick = async () => {
  try {
    await ensureMedia();
    statusText.textContent = 'Axtarılır...';
    partnerMeta.textContent = 'Uyğun istifadəçi gözlənilir';
    socket.emit('start-search', {
      country: myCountry.value || 'Unknown',
      wantsCountry: wantedCountry.value || 'ANY',
      gender: myGender.value || 'Unknown',
      wantsGender: wantedGender.value || 'ANY'
    });
  } catch (e) {
    addMessage('Kamera/mikrofon izni verilmedi.');
  }
};

nextBtn.onclick = () => {
  cleanupPeer();
  socket.emit('next');
  statusText.textContent = 'Yeni biri aranıyor...';
  partnerMeta.textContent = 'Bekleniyor';
};

muteBtn.onclick = () => {
  if (!localStream) return;
  isMuted = !isMuted;
  localStream.getAudioTracks().forEach(t => t.enabled = !isMuted);
  muteBtn.textContent = isMuted ? 'Mic Aç' : 'Mic Kapat';
};

camBtn.onclick = () => {
  if (!localStream) return;
  isCameraOff = !isCameraOff;
  localStream.getVideoTracks().forEach(t => t.enabled = !isCameraOff);
  camBtn.textContent = isCameraOff ? 'Kamera Aç' : 'Kamera Kapat';
};

reportBtn.onclick = () => {
  socket.emit('report', 'manual report');
};

sendBtn.onclick = sendMessage;
messageInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
  const text = messageInput.value.trim();
  if (!text) return;
  socket.emit('chat-message', text);
  addMessage(text, true);
  messageInput.value = '';
}

socket.on('online-count', (count) => {
  onlineCount.textContent = count;
});

socket.on('searching', () => {
  statusText.textContent = 'Axtarılır...';
  partnerMeta.textContent = 'Filtreye uygun kullanıcı bekleniyor';
});

socket.on('matched', async ({ initiator, partner }) => {
  statusText.textContent = 'Bağlandı';
  partnerMeta.textContent = `${partner.country} • ${partner.gender}`;
  addMessage(`Eşleşdin: ${partner.country} / ${partner.gender}`);
  await createPeer(initiator);
});

socket.on('signal', async (payload) => {
  if (!pc) await createPeer(false);
  if (payload.sdp) {
    await pc.setRemoteDescription(new RTCSessionDescription(payload.sdp));
    if (payload.sdp.type === 'offer') {
      const answer = await pc.createAnswer();
      await pc.setLocalDescription(answer);
      socket.emit('signal', { sdp: pc.localDescription });
    }
  }
  if (payload.candidate) {
    try {
      await pc.addIceCandidate(new RTCIceCandidate(payload.candidate));
    } catch (e) {}
  }
});

socket.on('chat-message', (text) => addMessage(text, false));
socket.on('system-message', (text) => addMessage(text, false));
socket.on('partner-left', () => {
  cleanupPeer();
  statusText.textContent = 'Partner ayrıldı';
  partnerMeta.textContent = 'Tekrar axtar';
  addMessage('Karşı tərəf ayrıldı.');
});
