import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { data } from "../data";
import { COLORS } from "../theme";
import { fadeUp, masuk } from "../components/anim";

export const Penutup: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const p1 = masuk(frame, 8);
  const p2 = masuk(frame, 18);
  const p3 = masuk(frame, 30);
  const garis = interpolate(frame, [10, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.65, 0, 0.35, 1),
  });
  // Fade keluar pada 15 bingkai terakhir
  const keluar = interpolate(
    frame,
    [durationInFrames - 15, durationInFrames - 1],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 90px",
        opacity: keluar,
      }}
    >
      <div
        style={{
          ...fadeUp(p1, 40),
          fontSize: 110,
          fontWeight: 800,
          color: COLORS.text,
          letterSpacing: -2,
          lineHeight: 1.05,
        }}
      >
        {data.penutup.tajuk}
      </div>

      <div
        style={{
          width: 220 * garis,
          height: 6,
          borderRadius: 3,
          margin: "56px 0",
          background: `linear-gradient(90deg, ${COLORS.gold}, ${COLORS.accent})`,
        }}
      />

      <div
        style={{
          ...fadeUp(p2, 30),
          fontSize: 64,
          fontWeight: 700,
          color: COLORS.accent,
          letterSpacing: 8,
        }}
      >
        {data.penutup.subtajuk}
      </div>

      <div
        style={{
          ...fadeUp(p3, 20),
          position: "absolute",
          bottom: 180,
          fontSize: 32,
          fontWeight: 500,
          color: COLORS.textMuted,
          letterSpacing: 1,
        }}
      >
        {data.penutup.nota}
      </div>
    </AbsoluteFill>
  );
};
