'use client'

import { useState, useEffect } from 'react'
import { ArcherContainer, ArcherElement } from 'react-archer'
import { motion } from 'framer-motion'

const engagements = [
  'Vertical Marketers attend weekly forecast calls',
  'Email / Phone / Slack / Teams Chat us directly',
  'Americas Field Marketing Weekly Marketing Emails',
]

export default function EngangeUs() {
  const [width, setWidth] = useState(2000)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const renderedEngagements = engagements.map((engagement, i) => {
    return (
      <ArcherElement
        key={i}
        id={`element${i}`}
        relations={
          width >= 750 || i === engagements.length - 1
            ? []
            : [
                {
                  targetId: `element${i + 1}`,
                  targetAnchor: 'top',
                  sourceAnchor: 'bottom',
                },
              ]
        }
      >
        <div className="bubble rounded-full h-56 w-56 p-4 flex flex-col justify-center items-center border-2 border-white/75">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.5 }}
            viewport={{ once: true }}
            className="text-center lg:text-xl text-lg"
          >
            {engagement}
          </motion.span>
        </div>
      </ArcherElement>
    )
  })

  return (
    <ArcherContainer
      endMarker={false}
      strokeColor="#FFFFFFBF"
    >
      <section
        id="engage-us"
        className="flex justify-center items-center flex-col md:gap-28 gap-24"
      >
        <ArcherElement
          id="root"
          relations={
            width >= 750
              ? [
                  {
                    targetId: 'element0',
                    targetAnchor: 'top',
                    sourceAnchor: 'bottom',
                  },
                  {
                    targetId: 'element1',
                    targetAnchor: 'top',
                    sourceAnchor: 'bottom',
                  },
                  {
                    targetId: 'element2',
                    targetAnchor: 'top',
                    sourceAnchor: 'bottom',
                  },
                ]
              : [
                  {
                    targetId: 'element0',
                    targetAnchor: 'top',
                    sourceAnchor: 'bottom',
                  },
                ]
          }
        >
          <div className="bubble rounded-full h-72 w-72 p-6 flex justify-center items-center border-2 border-white/75">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              viewport={{ once: true }}
              className="text-white font-bold lg:text-5xl text-4xl text-center"
            >
              Ways to Engage Us
            </motion.h3>
          </div>
        </ArcherElement>

        <div className="flex md:flex-row flex-col justify-evenly xl:gap-36 lg:gap-32 md:gap-24 gap-8">
          {renderedEngagements}
        </div>
      </section>
    </ArcherContainer>
  )
}
