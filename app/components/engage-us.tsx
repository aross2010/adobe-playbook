'use client'

import { useEffect } from 'react'
import { ArcherContainer, ArcherElement } from 'react-archer'

const engagements = [
  'Vertical Marketers attend weekly forecast calls',
  'Email / Phone / Slack / Teams Chat us directly',
  'Americas Field Marketing Weekly Marketing Emails',
]

export default function EngangeUs() {
  const renderedEngagements = engagements.map((engagement, i) => {
    return (
      <ArcherElement
        key={i}
        id={`element${i}`}
      >
        <div
          key={i}
          className="bubble rounded-full h-56 w-56 p-4 flex flex-col justify-center items-center border-2 border-white"
        >
          <span className="text-center text-xl">{engagement}</span>
        </div>
      </ArcherElement>
    )
  })

  return (
    <ArcherContainer
      strokeColor="white"
      endMarker={false}
    >
      <section
        id="engage-us"
        className="flex justify-center items-center flex-col gap-28"
      >
        <ArcherElement
          id="root"
          relations={[
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
          ]}
        >
          <div className="bubble rounded-full h-72 w-72 p-4 flex justify-center items-center border-2 border-white">
            <h3 className="text-white font-bold text-5xl text-center">
              Ways to Engage Us
            </h3>
          </div>
        </ArcherElement>

        <div className="flex justify-evenly gap-36">{renderedEngagements}</div>
      </section>
    </ArcherContainer>
  )
}
