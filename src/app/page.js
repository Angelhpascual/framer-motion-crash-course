"use client"
import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

import AnimationControls from "./components/AnimationControls"
import BasicOfMotion from "./components/BasicOfMotion"
import Gestures from "./components/Gestures"

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })
  return (
    <div>
      <BasicOfMotion />
      <Gestures />
      <AnimationControls />
    </div>
  )
}
