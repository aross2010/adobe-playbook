'use client'
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import roadshowContent from './roadshow-content'
import innovationContent from './innovation-content'
import ultimateContent from './ultimate-content'
import dedicatedContent from './dedicated-content'
import { Events } from './event-portfolio'
import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

type CarouselProps = {
  selectedEvent: Events
}

export default function CarouselComponent({ selectedEvent }: CarouselProps) {
  const responsive = {
    all: {
      breakpoint: { max: 40000, min: 0 },
      items: 1,
    },
  }

  const [slideNumber, setSlideNumber] = useState(1)
  const [content, setContent] = useState(roadshowContent)
  const ref = useRef<Carousel>(null)
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: false,
  })

  useEffect(() => {
    setSlideNumber(1)
    setContent(
      selectedEvent == 'Roadshows'
        ? roadshowContent
        : selectedEvent == 'Innovation Exchange'
        ? innovationContent
        : selectedEvent == 'Ultimate Success'
        ? ultimateContent
        : dedicatedContent
    )
    if (ref.current) ref.current.goToSlide(2, true)
  }, [selectedEvent])

  const changeSlideIndex = () => {
    const list = document.querySelector('.react-multi-carousel-track')
    list?.querySelectorAll('li').forEach((el, i) => {
      if (el.classList.contains('react-multi-carousel-item--active')) {
        const index = el.getAttribute('data-index') as unknown as number
        if (index > content.length + 1) setSlideNumber(1)
        else if (index >= 2) setSlideNumber(index - 1)
        else if (index == 1) setSlideNumber(content.length)
        else setSlideNumber(content.length - 1)
      }
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      viewport={{ once: true }}
      ref={inViewRef}
      className="border md:h-[600px] sm:h-[525px] md:overflow-x-hidden h-[400px] md:static relative object-fill object-center md:w-auto w-screen md:left-auto left-[50%] md:right-auto right-[50%] md:mr-0 mr-[-50vw] md:ml-0 ml-[-50vw] md:border border-l-0 border-r-0 md:rounded-lg rounded-none md:shadow-2xl shadow-xl"
    >
      <div
        className={`left-1/2 -translate-x-1/2 opacity-75 md:w-auto w-max z-10 m-4 absolute bg-white rounded-lg p-1 overflow-hidden shadow-xl transition-all`}
      >
        <h5 className="text-transparent px-8 bg-clip-text bg-gradient-to-r from-[#eb1000] to-[#952b80] font-bold text-center">
          {selectedEvent} ({slideNumber}/{content.length})
        </h5>
      </div>
      <Carousel
        infinite
        autoPlay={inView}
        autoPlaySpeed={3000}
        responsive={responsive}
        removeArrowOnDeviceType={['mobile']}
        containerClass=" w-full h-full"
        sliderClass="h-full"
        afterChange={() => {
          changeSlideIndex()
        }}
        ref={ref}
      >
        {content}
      </Carousel>
    </motion.div>
  )
}
