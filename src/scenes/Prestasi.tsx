import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { data, peratusPencapaian } from "../data";
import { COLORS } from "../theme";
import { SceneHeader } from "../components/SceneHeader";
import { fadeUp, formatNombor, masuk } from "../components/anim";

const SAIZ = 760;
const TEBAL = 56;
const R = (SAIZ - TEBAL) / 2;
const LILITAN = 2 * Math.PI * R;

export const Prestasi: React.FC = () => {
  const frame = useCurrentFrame();
  const sasaran = Math.min(Math.max(peratusPencapaian(), 0), 100);

  const pDonut = masuk(frame, 10);
  const progres = interpolate(frame, [16, 76], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.33, 1, 0.68, 1),
  });
  const nilai = sasaran * progres;
  const pNota = masuk(frame, 70);

  return (
    <AbsoluteFill style={{ justifyContent: "center", padding: "0 90px 80px" }}>
      <SceneHeader label={data.labelScene} tajuk={data.prestasi.tajuk} />

      <div
        style={{
          marginTop: 110,
          display: "flex",
          justifyContent: "center",
          opacity: pDonut,
          transform: `scale(${0.9 + 0.1 * pDonut})`,
        }}
      >
        <div style={{ position: "relative", width: SAIZ, height: SAIZ }}>
          <svg width={SAIZ} height={SAIZ} style={{ transform: "rotate(-90deg)" }}>
            <defs>
              <linearGradient id="gradDonut" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor={COLORS.accent} />
                <stop offset="100%" stopColor={COLORS.accent2} />
              </linearGradient>
            </defs>
            <circle
              cx={SAIZ / 2}
              cy={SAIZ / 2}
              r={R}
              fill="none"
              stroke={COLORS.track}
              strokeWidth={TEBAL}
            />
            <circle
              cx={SAIZ / 2}
              cy={SAIZ / 2}
              r={R}
              fill="none"
              stroke="url(#gradDonut)"
              strokeWidth={TEBAL}
              strokeLinecap="round"
              strokeDasharray={LILITAN}
              strokeDashoffset={LILITAN * (1 - nilai / 100)}
              style={{ filter: `drop-shadow(0 0 18px ${COLORS.accent}88)` }}
            />
          </svg>
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                fontSize: 190,
                fontWeight: 800,
                color: COLORS.text,
                letterSpacing: -6,
                lineHeight: 1,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {nilai.toFixed(1)}
              <span style={{ fontSize: 100, color: COLORS.accent2 }}>%</span>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          ...fadeUp(pNota, 30),
          marginTop: 90,
          textAlign: "center",
          fontSize: 42,
          fontWeight: 500,
          color: COLORS.textMuted,
          fontVariantNumeric: "tabular-nums",
        }}
      >
        <span style={{ color: COLORS.text, fontWeight: 700 }}>
          {formatNombor(data.ringkasan.kodA)}
        </span>{" "}
        daripada {formatNombor(data.ringkasan.jumlahKes)} kes
      </div>
    </AbsoluteFill>
  );
};
