import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { data } from "../data";
import { COLORS } from "../theme";
import { fadeUp, masuk } from "../components/anim";

export const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const perkataan = data.intro.tajuk.split(" ");

  const garis = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.65, 0, 0.35, 1),
  });
  const sub = masuk(frame, 14 + perkataan.length * 7);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        padding: "0 100px",
      }}
    >
      <div
        style={{
          width: 140 * garis,
          height: 8,
          borderRadius: 4,
          background: `linear-gradient(90deg, ${COLORS.gold}, ${COLORS.accent})`,
          marginBottom: 56,
        }}
      />

      {perkataan.map((w, i) => {
        const p = masuk(frame, 8 + i * 7, 18);
        const nombor = /^\d+$/.test(w);
        return (
          <div key={i} style={{ overflow: "hidden", paddingBottom: 6 }}>
            <div
              style={{
                transform: `translateY(${(1 - Math.min(p, 1)) * 110}%)`,
                fontSize: nombor ? 230 : 150,
                fontWeight: 800,
                lineHeight: 1,
                letterSpacing: nombor ? -6 : -3,
                color: COLORS.text,
                ...(nombor
                  ? {
                      background: `linear-gradient(90deg, ${COLORS.accent} 0%, ${COLORS.accent2} 100%)`,
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }
                  : {}),
              }}
            >
              {w}
            </div>
          </div>
        );
      })}

      <div
        style={{
          ...fadeUp(sub, 30),
          marginTop: 56,
          paddingTop: 40,
          borderTop: `2px solid ${COLORS.cardBorder}`,
          fontSize: 50,
          fontWeight: 500,
          color: COLORS.textMuted,
          lineHeight: 1.3,
        }}
      >
        {data.intro.subtajuk}
      </div>
    </AbsoluteFill>
  );
};
