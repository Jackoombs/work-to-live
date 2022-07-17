import NavLink from "./NavLink";
import { motion } from "framer-motion"

function NavLinks() {

  const links = [
    {
      link: "/", 
      text: "Big Employers"
    },
    {
      link: "/", 
      text: "Standouts"
    },
    {
      link: "/", 
      text: "About"
    }
  ]

  return (
    <motion.ul
      initial={{ opacity: 0}}
      style={{ originY: 0 }}
      animate={{ opacity: 1 }}
    >
      {links.map((link, index) => (
        <NavLink
          key={index}
          index={index}
          link={link}
        />
      ))}
    </motion.ul>
  )
}

export default NavLinks