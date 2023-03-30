import React from "react";
import Lottie, { LottieProps } from "react-lottie-player";

interface Props {
  animation: any;
}

export default function Animations({ animation }: Props) {
  const defaultOptions: LottieProps = {
    loop: true,
    play: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="animation">
      <Lottie {...defaultOptions} />
    </div>
  );
}
