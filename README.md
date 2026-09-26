# Video Prestasi Banci Ekonomi 2026 — DOSM WPKL

Projek [Remotion](https://www.remotion.dev) untuk video infografik prestasi Banci Ekonomi 2026.

| Spesifikasi | Nilai |
|---|---|
| Format | 9:16 (1080 × 1920) |
| Durasi | 20 saat (600 bingkai) |
| FPS | 30 |
| Komposisi | `BanciEkonomi2026` |

## Kandungan video

| # | Scene | Kandungan |
|---|---|---|
| 1 | Intro | Tajuk "BANCI EKONOMI 2026" + subtajuk |
| 2 | Ringkasan | Kad statistik count-up: Jumlah Kes, Kod A, Kod B, Baki |
| 3 | Pecahan Kod A | Bar progres Kod 11, Kod 12–60 dan Jumlah Kod A |
| 4 | Prestasi | Donut 0% → peratus pencapaian Kod A |
| 5 | Penutup | Tajuk, DOSM WPKL, nota tarikh |

## Cara guna

Keperluan: Node.js 18 ke atas.

```bash
npm install        # sekali sahaja
npm run dev        # buka Remotion Studio (http://localhost:3000)
npm run render     # hasilkan out/banci-ekonomi-2026.mp4
npm run still      # hasilkan gambar kecil out/thumbnail.png
```

## Tukar data

Semua angka dan teks berada dalam **`src/data.ts`**. Ubah fail ini sahaja — kod animasi tidak perlu disentuh.

- `ringkasan` — Jumlah Kes, Kod A, Kod B, Baki
- `pecahanKodA.item` — senarai pecahan (boleh tambah item; bar dan warna menyesuaikan)
- `prestasi.peratus` — biarkan `null` untuk kira automatik (Kod A ÷ Jumlah Kes), atau isi nombor
- `penutup.nota` — tarikh / nota kaki

Semakan automatik: jika `Kod A + Kod B + Baki ≠ Jumlah Kes`, atau jumlah pecahan ≠ Kod A,
amaran `[data.ts]` akan dipaparkan dalam konsol Studio/render.

Tempoh setiap scene boleh diubah dalam `src/theme.ts` (`SCENES`, `TRANSITION`).

## Struktur

```
src/
  data.ts            ← DATA (ubah di sini)
  theme.ts           ← warna, fon, tempoh scene
  Root.tsx           ← daftar komposisi
  Video.tsx          ← susunan scene + peralihan fade
  components/        ← latar belakang, pengepala, fungsi animasi
  scenes/            ← Intro, Ringkasan, PecahanKodA, Prestasi, Penutup
public/fonts/        ← fon Plus Jakarta Sans (SIL OFL 1.1), disimpan lokal
```

## Nota

- Fon disimpan secara lokal supaya render tidak bergantung pada sambungan internet.
- Jika Remotion gagal memuat turun Chrome Headless Shell (rangkaian terhad), guna pelayar sedia ada:
  `npx remotion render BanciEkonomi2026 out/video.mp4 --browser-executable=/laluan/ke/chrome`
- Lesen Remotion: percuma untuk individu dan organisasi kecil; organisasi yang lebih besar mungkin
  memerlukan lesen syarikat. Semak <https://www.remotion.dev/license> sebelum guna secara rasmi.
