import React from 'react'

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
      <div
        key={i}
        className="rounded-lg border-2 border-white p-4"
      >
        <h5 className="font-bold text-xl">{sla.title}</h5>
        <p>{sla.description}</p>
      </div>
    )
  })

  return (
    <section
      id="help-us-help-you"
      className="flex gap-32"
    >
      <h3 className="font-bold text-5xl">
        Help Us,
        <br />
        Help You
        <br />
      </h3>
      <div className="flex flex-col gap-4">{renderedSlas}</div>
    </section>
  )
}
