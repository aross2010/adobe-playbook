'use client'
import logo from '@/public/logo.png'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Title() {
  return (
    <section className="flex-col flex md:flex-row xl:items-end md:items-center items-start md:gap-16 gap-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Image
          src={logo}
          alt="Adobe Logo"
          className="xl:h-[130px] h-[100px] w-auto"
        />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.25 }}
        className="font-bold xl:text-7xl md:text-6xl text-5xl "
      >
        Americas Field & Demand
        <br />
        Services Marketing
      </motion.h1>
    </section>
  )
}
