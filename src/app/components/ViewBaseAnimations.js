"use client"
import { motion, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

const ViewBaseAnimations = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    console.log("Is in view ---> ", isInView)
  }, [isInView])

  return (
    <>
      <div style={{ height: "150vh" }} />
      <motion.div
        style={{ height: "100vh", backgroundColor: "lightcoral" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>
      <div
        style={{
          height: "100vh",
          background: isInView ? "Tomato" : "AliceBlue",
          transition: "1s",
        }}
        ref={ref}
      ></div>
    </>
  )
}

export default ViewBaseAnimations
