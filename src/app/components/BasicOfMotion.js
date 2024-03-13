"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const BasicOfMotion = () => {
  const [isVisible, setIsVisible] = useState(true)

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
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="example-button"
        layout
      >
        Show/hide
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            initial={{ rotate: "0deg", scale: 0, y: 0 }}
            animate={{ rotate: "180deg", scale: 1, y: [0, 150, -150, -150, 0] }}
            exit={{
              rotate: "0deg",
              scale: 0,
              y: 0,
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
            transition={{ duration: 1, ease: "backInOut" }}
            style={{
              width: 200,
              height: 200,
              backgroundColor: "lightsalmon",
              borderRadius: "0.5vw",
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default BasicOfMotion
