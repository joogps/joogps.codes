"use client";

import { useEffect } from "react";
import { Gradient } from "whatamesh";

export default function MeshGradient() {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);

  return <canvas id="gradient-canvas" data-transition-in />;
}
