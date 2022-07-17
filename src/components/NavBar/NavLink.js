import { motion } from "framer-motion"

function NavLink(props) {

  return (
    <motion.li
      initial={{ y: -100, opacity: 0 }}
      style={{ originY: 0 }}
      transition={{ 
        delay: props.index*0.1, duration: 0.5}}
      animate={{ y: 0, opacity: 1 }}
    >
      <a href={props.link.link}>{props.link.text}</a>
    </motion.li>
  )
}

export default NavLink