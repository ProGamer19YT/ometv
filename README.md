# Hayal Baku Admin Panel

Bu layihə Next.js + TypeScript + Tailwind CSS üzərində qurulmuş ayrıca admin paneldir.

## Xüsusiyyətlər

- `/admin/login` ayrıca giriş səhifəsi
- `/admin/*` üçün protected route və auth guard strukturu
- Dashboard, sayt məzmunu, menyu, rezervasiyalar, qrup rezervasiyaları, qalereya, rəylər, FAQ, əlaqə, SEO, istifadəçilər və ayarlar modulları
- LocalStorage üzərində işləyən seed məlumatlı CRUD baza strukturu
- Toast bildirişləri, modal, drawer, status badge, skeleton və audit log
- Sonradan real backend və database qoşulmasına uyğun service/data strukturu

## Başlanğıc giriş

- E-poçt: `admin@hayalbaku.local`
- Şifrə: `HayalBaku#2026`

## İşə salmaq

```bash
npm install
npm run dev
```

və ya

```bash
pnpm install
pnpm dev
```

## Əsas struktur

- `app/admin/login` — giriş səhifəsi
- `app/admin/(panel)` — qorunan admin səhifələri
- `components/admin/*` — admin UI və modul komponentləri
- `lib/admin/*` — tiplər, mock data, auth və state idarəetməsi
- `middleware.ts` — admin auth yönləndirmə qaydası

## Qeyd

Bu layihədə biznesə aid dəqiq məlumat bilinmədiyi yerlərdə redaktə edilə bilən placeholder-lər istifadə olunub.
