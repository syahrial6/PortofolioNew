import { motion } from "framer-motion"

const FadeLefttoRight = ({children}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x:-200 }}
      animate={{ opacity: 1, x:0}}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >{children}</motion.div>
  )
}

export default FadeLefttoRight
