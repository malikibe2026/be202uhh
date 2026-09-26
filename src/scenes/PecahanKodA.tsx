import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { data, jumlahPecahanKodA } from "../data";
import { COLORS } from "../theme";
import { SceneHeader } from "../components/SceneHeader";
import { countUp, fadeUp, formatNombor, masuk } from "../components/anim";

const WARNA_BAR = [COLORS.accent, COLORS.accent2, COLORS.gold, COLORS.coral];

const isi = (frame: number, delay: number) =>
  interpolate(frame, [delay, delay + 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.33, 1, 0.68, 1),
  });

export const PecahanKodA: React.FC = () => {
  const frame = useCurrentFrame();
  const d = data.pecahanKodA;
  const jumlah = data.ringkasan.kodA;
  const asas = Math.max(jumlah, jumlahPecahanKodA(), 1);

  const delayJumlah = 24 + d.item.length * 14;
  const pJumlah = masuk(frame, delayJumlah);

  return (
    <AbsoluteFill style={{ justifyContent: "center", padding: "0 90px 80px" }}>
      <SceneHeader label={data.labelScene} tajuk={d.tajuk} />

      <div style={{ display: "flex", flexDirection: "column", gap: 64, marginTop: 100 }}>
        {d.item.map((it, i) => {
          const delay = 18 + i * 14;
          const p = masuk(frame, delay);
          const bahagian = it.nilai / asas;
          const f = isi(frame, delay + 6);
          const warna = WARNA_BAR[i % WARNA_BAR.length];
          return (
            <div key={it.label} style={fadeUp(p, 40)}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  marginBottom: 24,
                }}
              >
                <div>
                  <div style={{ fontSize: 46, fontWeight: 700, color: COLORS.text }}>
                    {it.label}
                  </div>
                  <div
                    style={{
                      fontSize: 32,
                      fontWeight: 500,
                      color: COLORS.textMuted,
                      marginTop: 6,
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {(bahagian * 100 * f).toFixed(1)}% daripada Kod A
                  </div>
                </div>
                <div
                  style={{
                    fontSize: 96,
                    fontWeight: 800,
                    color: COLORS.text,
                    letterSpacing: -2,
                    lineHeight: 1,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {formatNombor(countUp(frame, it.nilai, delay + 6, 40))}
                </div>
              </div>
              <div
                style={{
                  height: 34,
                  borderRadius: 17,
                  background: COLORS.track,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${bahagian * f * 100}%`,
                    height: "100%",
                    borderRadius: 17,
                    background: `linear-gradient(90deg, ${warna}AA, ${warna})`,
                    boxShadow: `0 0 30px ${warna}66`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Jumlah Kod A */}
      <div
        style={{
          ...fadeUp(pJumlah, 40),
          marginTop: 90,
          padding: "50px 56px",
          borderRadius: 32,
          background: `linear-gradient(135deg, ${COLORS.gold}2A 0%, ${COLORS.gold}0A 100%)`,
          border: `2px solid ${COLORS.gold}66`,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: 44, fontWeight: 700, color: COLORS.gold }}>
            {d.labelJumlah}
          </div>
          <div
            style={{
              fontSize: 110,
              fontWeight: 800,
              color: COLORS.text,
              letterSpacing: -3,
              lineHeight: 1,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {formatNombor(countUp(frame, jumlah, delayJumlah + 4, 40))}
          </div>
        </div>
        <div
          style={{
            marginTop: 32,
            height: 14,
            borderRadius: 7,
            background: COLORS.track,
            overflow: "hidden",
            display: "flex",
          }}
        >
          {d.item.map((it, i) => (
            <div
              key={it.label}
              style={{
                width: `${(it.nilai / asas) * isi(frame, delayJumlah + 8) * 100}%`,
                height: "100%",
                background: WARNA_BAR[i % WARNA_BAR.length],
              }}
            />
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
