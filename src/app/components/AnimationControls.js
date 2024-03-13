"use client"
import { motion, useAnimationControls, MotionConfig } from "framer-motion"

const AnimationControls = () => {
  const controls = useAnimationControls()

  const handleClick = () => {
    controls.start("flip")
  }

  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
        backgroundColor: "lightblue",
      }}
    >
      <MotionConfig transition={{ duration: 2, ease: "backInOut" }}>
        <button onClick={handleClick} className="example-button">
          Flip It!
        </button>
        <motion.div
          style={{
            width: 200,
            height: 200,
            backgroundColor: "lightsalmon",
            borderRadius: "0.5vw",
          }}
          variants={{
            initial: {
              rotate: "0deg",
            },
            flip: {
              rotate: "360deg",
            },
          }}
          initial="initial"
          animate={controls}
        ></motion.div>
        <motion.div
          style={{
            width: 200,
            height: 200,
            backgroundColor: "lightgoldenrodyellow",
            borderRadius: "0.5vw",
          }}
          variants={{
            initial: {
              rotate: "0deg",
            },
            flip: {
              rotate: "360deg",
            },
          }}
          initial="initial"
          animate={controls}
        ></motion.div>
      </MotionConfig>
    </div>
  )
}

export default AnimationControls
