import React from 'react'
import { Link } from 'react-router-dom'
import { Motion, AnimatePresence, motion } from 'framer-motion'

const backdropVariants = {
    initial:{
        opacity:0
    },
    animate:{
        opacity:1
    }
}

const modalVariants = {
    initial:{
        y:"-100vh",
        opacity:0
    },
    animate:{
        y:"200px",
        opacity:1,
        transition:{
            delay:0.5
        }
    }
}

const Modal = ({showModal}) =>{

    return(
        <AnimatePresence exitBeforeEnter>
            {
                showModal && (
                    <motion.div className="backdrop"
                        variants={backdropVariants}
                        animate="animate"
                        initial="initial"
                        exit="initial"
                    >
                       <motion.div className="modal"
                        variants={modalVariants}
                       >
                            <p>Want to make another pizza?</p>
                            <Link to="/">
                                <button>Start Again</button>
                            </Link>
                        </motion.div> 
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}

export default Modal