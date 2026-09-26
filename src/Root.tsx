import React from "react";
import { Composition } from "remotion";
import { BanciEkonomiVideo } from "./Video";
import { FPS, TOTAL_FRAMES } from "./theme";
import { semakData } from "./data";

semakData().forEach((m) => console.warn(`[data.ts] ${m}`));

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="BanciEkonomi2026"
      component={BanciEkonomiVideo}
      durationInFrames={TOTAL_FRAMES}
      fps={FPS}
      width={1080}
      height={1920}
    />
  );
};
