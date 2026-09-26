import { loadFont } from "@remotion/fonts";
import { staticFile } from "remotion";

// Fon disimpan secara lokal (public/fonts) supaya render tidak bergantung pada internet.
export const FONT = "Plus Jakarta Sans";
loadFont({
  family: FONT,
  url: staticFile("fonts/PlusJakartaSans-Variable-latin.woff2"),
  weight: "400 800",
  format: "woff2",
});

export const COLORS = {
  bgTop: "#0A1A33",
  bgBottom: "#04101F",
  navy: "#0F2A4F",
  card: "rgba(255,255,255,0.05)",
  cardBorder: "rgba(255,255,255,0.10)",
  text: "#FFFFFF",
  textMuted: "rgba(226,234,245,0.68)",
  accent: "#2EA8FF", // biru
  accent2: "#18C3A8", // hijau-teal
  gold: "#E5B754",
  coral: "#FF7A6B",
  track: "rgba(255,255,255,0.08)",
};

export const FPS = 30;

/** Tempoh setiap scene (bingkai). Jumlah akhir = jumlah scene − peralihan. */
export const TRANSITION = 15;
export const SCENES = {
  intro: 120,
  ringkasan: 150,
  pecahan: 150,
  prestasi: 135,
  penutup: 105,
};
export const TOTAL_FRAMES =
  Object.values(SCENES).reduce((a, b) => a + b, 0) -
  TRANSITION * (Object.keys(SCENES).length - 1);
