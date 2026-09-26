/**
 * DATA VIDEO — ubah angka dan teks di sini sahaja.
 * Kod animasi membaca semua nilai daripada fail ini.
 *
 * Nota: Data di bawah ialah DATA CONTOH (demo).
 */

export const data = {
  // Label kecil di atas setiap scene (Scene 2–4)
  labelScene: "DOSM WPKL • FASA 3",

  intro: {
    tajuk: "BANCI EKONOMI 2026",
    subtajuk: "Prestasi Fasa 3 — DOSM WPKL",
  },

  ringkasan: {
    tajuk: "Ringkasan Kes",
    jumlahKes: 5863,
    kodA: 4120,
    kodB: 743,
    baki: 1000,
  },

  pecahanKodA: {
    tajuk: "Pecahan Kod A",
    item: [
      { label: "Kod 11", nilai: 2450 },
      { label: "Kod 12–60", nilai: 1670 },
    ],
    labelJumlah: "Jumlah Kod A",
  },

  prestasi: {
    tajuk: "Pencapaian Kod A",
    // null = kira automatik (Kod A ÷ Jumlah Kes × 100).
    // Isi nombor (cth. 70.3) untuk tetapkan nilai secara manual.
    peratus: null as number | null,
  },

  penutup: {
    tajuk: "BANCI EKONOMI 2026",
    subtajuk: "DOSM WPKL",
    nota: "Data contoh • 26 September 2026",
  },
};

/** Peratus pencapaian Kod A yang dipaparkan dalam Scene 4. */
export const peratusPencapaian = (): number =>
  data.prestasi.peratus ??
  Math.round((data.ringkasan.kodA / data.ringkasan.jumlahKes) * 1000) / 10;

/** Jumlah Kod A dikira daripada pecahan (untuk semakan konsistensi). */
export const jumlahPecahanKodA = (): number =>
  data.pecahanKodA.item.reduce((s, i) => s + i.nilai, 0);

/** Semakan ringkas supaya angka tidak bercanggah. Amaran dipapar di konsol Studio. */
export const semakData = (): string[] => {
  const r = data.ringkasan;
  const amaran: string[] = [];
  if (r.kodA + r.kodB + r.baki !== r.jumlahKes) {
    amaran.push(
      `Kod A + Kod B + Baki (${r.kodA + r.kodB + r.baki}) ≠ Jumlah Kes (${r.jumlahKes})`,
    );
  }
  if (jumlahPecahanKodA() !== r.kodA) {
    amaran.push(
      `Jumlah pecahan Kod A (${jumlahPecahanKodA()}) ≠ Kod A ringkasan (${r.kodA})`,
    );
  }
  return amaran;
};
