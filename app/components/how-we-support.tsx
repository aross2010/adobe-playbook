'use client'
import React from 'react'
import { motion } from 'framer-motion'

const supports = [
  {
    title: 'Pipeline Generations/Progression',
    processes: [
      'Summit',
      'Roadshows',
      'Forums',
      'Thought Leaderhip',
      'Digital Wundergrounds',
      'Supercharger Workshops',
      'Executive Roundtables',
      'Webinars',
      'Internal Customer-led Workshops or Events',
      'Innovation Exhange',
      'Adobde Days/Innovator Days/Mini-Summit',
    ],
  },
  {
    title: 'Relationship Building',
    processes: [
      'Summit VIP Experiences',
      'Entertainment Experiences (Concerts, Sports, Shows)',
      'Welcome Receptions',
      'Executive Dinners/Happy Hours',
      'Sponsorships',
      'CEC/Customer Briefing',
      'Swag Gifting',
    ],
  },
  {
    title: 'Indentify & Engage',
    processes: [
      'Identify & engage key contacts within accounts.',
      'Business Intelligence Report',
      'Data Requests on platform usage/Services Marketing engagements',
      'Market Research',
      'Customer Reference Connections',
      'Content Creation',
      'Social Media',
    ],
  },
  {
    title: 'Internal Marketing',
    processes: [
      'Customer Success Stories',
      'Incentive Programs',
      'License team promotion/swag campaigns',
      'Custom Pitch Decks',
    ],
  },
]

export default function HowWeSupport() {
  const renderedSupports = supports.map((support, i) => {
    return (
      <motion.div
        key={i}
        className="rounded-lg border-2 border-white/75 p-4"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.15 }}
      >
        <h5 className="font-bold text-xl">{support.title}</h5>
        {support.processes.map((process, i) => {
          return (
            <span key={i}>
              {process}
              {i !== support.processes.length - 1 && (
                <span className="text-white/75"> | </span>
              )}
            </span>
          )
        })}
      </motion.div>
    )
  })

  return (
    <section
      id="how-we-support"
      className="flex lg:flex-row flex-col lg:gap-32 gap-16"
    >
      <motion.h3
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.25,
          delay: 0.5,
        }}
        viewport={{ once: true }}
        className="xl:w-1/4 font-bold md:text-5xl text-4xl"
      >
        How We <br className="md:block hidden" />
        Support
      </motion.h3>
      <div className="flex w-full flex-col gap-4">{renderedSupports}</div>
    </section>
  )
}
