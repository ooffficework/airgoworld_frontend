'use client'
import {motion} from 'framer-motion'

export default function Framer({children}: {children: React.ReactNode}) {
    const variants = {
        initial: {
            opacity: 0
        },
        animate:{
            opacity: 1,
            transition: {
                duration: .75,
            }
        }
    }
  return (
    <motion.div variants={variants} initial="initial" animate="animate" className='h-full flex-1 w-full flex flex-col overflow-y-auto '>{children}</motion.div>
  )
}
