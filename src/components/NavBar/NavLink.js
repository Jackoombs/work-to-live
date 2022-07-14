import { motion } from "framer-motion"

function NavLink(props) {

  return (
    <motion.li
      initial={{ opacity: 0 }}
      style={{ originY: 0 }}
      transition={{ 
        delay: props.index*0.2, duration: 0.4}}
      animate={{ opacity: 1 }}
    >
      <a href={props.link.link}>{props.link.text}</a>
    </motion.li>
  )
}

export default NavLink