import React,{useState, useEffect} from 'react';

import { motion, AnimatePresence } from 'framer-motion'

const containerVariants ={
  initial:{
    x:'100vw',
    opacity:0
  },
  animate:{
    opacity:1,
    x:0,
    transition:{
      type:'spring',
      mass:0.4, // higher spring mass = slow
      damping:8, // high = less ocillation
      when: "beforeChildren",
      staggerChildren:0.4
    }
  },
  exit:{
    x:"-100vw",
    transition:{
      ease:"easeInOut"
    }
  }
}
const childVariants = {
  initial:{
    opacity:0
  },
  animate:{
    opacity:1
  }
}

const Order = ({ pizza, setShowModal }) => {

  useEffect(() =>{
    setTimeout(() =>{
      setShowModal(true)
    }, 5000)
  },[])

  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;