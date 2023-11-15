import { motion } from "framer-motion"

const FadeRighttoLeft = ({children}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x:200 }}
      animate={{ opacity: 1, x:0}}
      transition={{
        duration: 0.8,
        delay: 0.5,
      }}
    >{children}</motion.div>
  )
}

export default FadeRighttoLeft
