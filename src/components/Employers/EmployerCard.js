import React from "react";
import EmployerTags from "./EmployerTags";
import EmployerStats from "./EmployerStats";
import EmployerScore from "./EmployerScore";
import { motion } from "framer-motion"

function EmployerCard(props) {

  return (
    <motion.div 
      className="employer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true}}
      transition={{ duration: 0.5}}
      variants={{
        visible: { opacity: 1, scale: 1},
        hidden: { opacity: 0, scale: 0.9 }
      }}
    >
        <EmployerTags
          name={props.employer.name}
          tags={props.employer.tags}
          logo={props.employer.logo}
        />
        <EmployerStats
          employer={props.employer}
        />
        <EmployerScore
          employer={props.employer}
        />
    </motion.div>
  )
}

export default EmployerCard