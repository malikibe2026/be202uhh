import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS } from "../theme";

/** Latar belakang kekal sepanjang video: gradien navy, grid halus dan cahaya lembut. */
export const Background: React.FC = () => {
  const frame = useCurrentFrame();
  const drift = interpolate(frame, [0, 600], [0, 1]);

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${COLORS.bgTop} 0%, ${COLORS.bgBottom} 100%)`,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 1100,
          height: 1100,
          borderRadius: "50%",
          left: -380 + drift * 120,
          top: -300 + drift * 80,
          background: `radial-gradient(circle, ${COLORS.accent}33 0%, transparent 65%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 1000,
          height: 1000,
          borderRadius: "50%",
          right: -420 + drift * 100,
          bottom: -260 - drift * 60,
          background: `radial-gradient(circle, ${COLORS.accent2}26 0%, transparent 65%)`,
        }}
      />
      <AbsoluteFill
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
          backgroundPosition: `0px ${-drift * 90}px`,
          maskImage:
            "linear-gradient(180deg, transparent 0%, black 30%, black 70%, transparent 100%)",
        }}
      />
    </AbsoluteFill>
  );
};
