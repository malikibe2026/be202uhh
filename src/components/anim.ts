import { Easing, interpolate, spring } from "remotion";
import { FPS } from "../theme";

export const formatNombor = (n: number) =>
  Math.round(n).toLocaleString("en-US");

/** Nilai 0→1 dengan spring lembut, bermula pada `delay` bingkai. */
export const masuk = (frame: number, delay = 0, damping = 200) =>
  spring({ frame: frame - delay, fps: FPS, config: { damping, mass: 0.9 } });

/** Count-up dengan easing (bermula pada `delay`, tempoh `durasi` bingkai). */
export const countUp = (
  frame: number,
  target: number,
  delay = 0,
  durasi = 45,
) =>
  interpolate(frame, [delay, delay + durasi], [0, target], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

/** Gaya fade + naik ke atas untuk elemen masuk. */
export const fadeUp = (p: number, jarak = 40): React.CSSProperties => ({
  opacity: p,
  transform: `translateY(${(1 - p) * jarak}px)`,
});
