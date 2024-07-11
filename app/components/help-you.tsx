'use client'
import { motion } from 'framer-motion'

const slas = [
  {
    title: 'No Last minute requests.',
    description:
      'We plan events out one quater in advance and spend most of our marketing funds in the first three weeks of a quarter.',
  },
  {
    title: 'Promote',
    description: 'Promote our events to your contacts early and often.',
  },
  {
    title: 'Connect',
    description: 'Use events to connect with new (relevant) contacts.',
  },
  {
    title: 'Business Only',
    description:
      "Don't expect to show up at events for a free night out. These are business building tools, not perks.",
  },
  {
    title: 'Event Ratio',
    description: 'The Adobe to Customer ratio expectation is 1:4',
  },
  {
    title: '1:1 Event Support',
    description:
      'For 1:1 event support, please submit requests at least two weeks in advance and add the expected attendees list. ',
  },
]

export default function HelpYou() {
  const renderedSlas = slas.map((sla, i) => {
    return (
      <motion.div
        key={i}
        className="rounded-lg border-2 border-white/75 p-4"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 + i * 0.15 }}
      >
        <h5 className="font-bold text-xl">{sla.title}</h5>
        <p>{sla.description}</p>
      </motion.div>
    )
  })

  return (
    <section
      id="help-us-help-you"
      className="flex lg:flex-row flex-col lg:gap-32 gap-16"
    >
      <motion.h3
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.25,
        }}
        viewport={{ once: true }}
        className="xl:w-1/4 font-bold md:text-5xl text-4xl"
      >
        Help Us, <br className="xl:block hidden" />
        Help You
        <br />
      </motion.h3>
      <div className="flex w-full flex-col gap-4">{renderedSlas}</div>
    </section>
  )
}
