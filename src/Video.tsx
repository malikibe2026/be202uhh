import React from "react";
import { AbsoluteFill } from "remotion";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { Background } from "./components/Background";
import { FONT, SCENES, TRANSITION } from "./theme";
import { Intro } from "./scenes/Intro";
import { Ringkasan } from "./scenes/Ringkasan";
import { PecahanKodA } from "./scenes/PecahanKodA";
import { Prestasi } from "./scenes/Prestasi";
import { Penutup } from "./scenes/Penutup";

const peralihan = () => (
  <TransitionSeries.Transition
    presentation={fade()}
    timing={linearTiming({ durationInFrames: TRANSITION })}
  />
);

export const BanciEkonomiVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ fontFamily: FONT }}>
      <Background />
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={SCENES.intro}>
          <Intro />
        </TransitionSeries.Sequence>
        {peralihan()}
        <TransitionSeries.Sequence durationInFrames={SCENES.ringkasan}>
          <Ringkasan />
        </TransitionSeries.Sequence>
        {peralihan()}
        <TransitionSeries.Sequence durationInFrames={SCENES.pecahan}>
          <PecahanKodA />
        </TransitionSeries.Sequence>
        {peralihan()}
        <TransitionSeries.Sequence durationInFrames={SCENES.prestasi}>
          <Prestasi />
        </TransitionSeries.Sequence>
        {peralihan()}
        <TransitionSeries.Sequence durationInFrames={SCENES.penutup}>
          <Penutup />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
