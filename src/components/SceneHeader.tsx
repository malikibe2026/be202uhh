import React from "react";
import { useCurrentFrame } from "remotion";
import { COLORS } from "../theme";
import { fadeUp, masuk } from "./anim";

/** Label kecil + tajuk scene di bahagian atas. */
export const SceneHeader: React.FC<{ label: string; tajuk: string }> = ({
  label,
  tajuk,
}) => {
  const frame = useCurrentFrame();
  const p1 = masuk(frame, 0);
  const p2 = masuk(frame, 6);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
      <div
        style={{
          ...fadeUp(p1, 20),
          display: "flex",
          alignItems: "center",
          gap: 18,
          color: COLORS.gold,
          fontSize: 30,
          fontWeight: 700,
          letterSpacing: 6,
        }}
      >
        <div
          style={{
            width: 60 * p1,
            height: 4,
            borderRadius: 2,
            background: COLORS.gold,
          }}
        />
        {label}
      </div>
      <div
        style={{
          ...fadeUp(p2, 30),
          color: COLORS.text,
          fontSize: 84,
          fontWeight: 800,
          letterSpacing: -1.5,
          lineHeight: 1.05,
        }}
      >
        {tajuk}
      </div>
    </div>
  );
};
