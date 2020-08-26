import React from 'react';
import { Link } from 'react-router-dom';

import Loader from './Loader'

import { motion } from 'framer-motion'

const containerVariants = {
  initial:{
    opacity:0
  },
  animate:{
    opacity:1,
    transition:{
      delay:1.5,
      duration: 1.5
    }
  },
  exit:{
    x:"-100vw",
    transition:{
      ease:"easeInOut"
    }
  }
}

const buttonVariants = {
  whileHover:{
    //scale:[1,1.1,1,1.1,1,1.1,1], // this is applying keyframes
    scale:1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow:"0px 0px 8px rgb(255,255,255)",
    transition:{
      duration:0.3,
      yoyo:Infinity
    }
  }
}

const Home = () => {

  return (
    <motion.div className="home container"
      variants={containerVariants} 
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2>Welcome to Pizza Joint </h2>
      <Link to="/base">
        <motion.button 
          variants={buttonVariants}
          animate="animate"
          whileHover="whileHover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader/>
    </motion.div>
  )
}

export default Home;