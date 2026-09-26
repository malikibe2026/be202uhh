import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { data } from "../data";
import { COLORS } from "../theme";
import { SceneHeader } from "../components/SceneHeader";
import { countUp, fadeUp, formatNombor, masuk } from "../components/anim";

export const Ringkasan: React.FC = () => {
  const frame = useCurrentFrame();
  const r = data.ringkasan;

  const kad = [
    { label: "Kod A", nilai: r.kodA, warna: COLORS.accent2 },
    { label: "Kod B", nilai: r.kodB, warna: COLORS.gold },
    { label: "Baki", nilai: r.baki, warna: COLORS.coral },
  ];

  const pHero = masuk(frame, 14);

  return (
    <AbsoluteFill style={{ justifyContent: "center", padding: "0 90px 80px" }}>
      <SceneHeader label={data.labelScene} tajuk={r.tajuk} />

      {/* Kad utama: Jumlah Kes */}
      <div
        style={{
          ...fadeUp(pHero, 50),
          marginTop: 80,
          padding: "56px 60px",
          borderRadius: 36,
          background: `linear-gradient(135deg, ${COLORS.accent}30 0%, ${COLORS.accent}0D 100%)`,
          border: `2px solid ${COLORS.accent}55`,
        }}
      >
        <div style={{ fontSize: 36, fontWeight: 600, color: COLORS.textMuted }}>
          Jumlah Kes
        </div>
        <div
          style={{
            fontSize: 190,
            fontWeight: 800,
            color: COLORS.text,
            letterSpacing: -5,
            lineHeight: 1.05,
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {formatNombor(countUp(frame, r.jumlahKes, 16, 50))}
        </div>
      </div>

      {/* Kad kecil */}
      <div style={{ display: "flex", flexDirection: "column", gap: 28, marginTop: 36 }}>
        {kad.map((k, i) => {
          const delay = 30 + i * 9;
          const p = masuk(frame, delay);
          const bahagian = r.jumlahKes > 0 ? k.nilai / r.jumlahKes : 0;
          const bar = masuk(frame, delay + 10) * bahagian;
          return (
            <div
              key={k.label}
              style={{
                ...fadeUp(p, 40),
                padding: "38px 48px",
                borderRadius: 28,
                background: COLORS.card,
                border: `2px solid ${COLORS.cardBorder}`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 11,
                      background: k.warna,
                    }}
                  />
                  <div style={{ fontSize: 42, fontWeight: 600, color: COLORS.text }}>
                    {k.label}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: 76,
                    fontWeight: 800,
                    color: COLORS.text,
                    fontVariantNumeric: "tabular-nums",
                    letterSpacing: -1,
                  }}
                >
                  {formatNombor(countUp(frame, k.nilai, delay + 4, 45))}
                </div>
              </div>
              <div
                style={{
                  marginTop: 22,
                  height: 10,
                  borderRadius: 5,
                  background: COLORS.track,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${bar * 100}%`,
                    height: "100%",
                    borderRadius: 5,
                    background: k.warna,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
