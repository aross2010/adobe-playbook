'use client'
import React, { useState } from 'react'
import roadshowThumb from '@/public/roadshow-thumb.jpg'
import innovationThumb from '@/public/innovation-thumb.jpg'
import ultimateThumb from '@/public/success-thumb.jpg'
import dedicatedThumb from '@/public/account-thumb.jpg'
import Image from 'next/image'
import CarouselComponent from './carousel'

const events = [
  {
    title: 'Roadshows',
    thumbnail: roadshowThumb,
    photos: [],
  },
  {
    title: 'Innovation Exchange',
    thumbnail: innovationThumb,
    photos: [],
  },
  {
    title: 'Ultimate Success',
    thumbnail: ultimateThumb,
    photos: [],
  },
  {
    title: 'Dedicated Account',
    thumbnail: dedicatedThumb,
    photos: [],
  },
] as const

export type Events =
  | 'Roadshows'
  | 'Innovation Exchange'
  | 'Ultimate Success'
  | 'Dedicated Account'

export default function EventPortfolio() {
  const [selectedEvent, setSelectedEvent] = useState<Events>('Roadshows')

  const renderedEvents = events.map(({ title, thumbnail }, i) => {
    return (
      <div
        key={i}
        className="flex flex-col gap-4 flex-1"
      >
        <div
          className={`bg-white rounded-lg p-1 relative overflow-hidden shadow-xl transition-all ${
            selectedEvent !== title && 'opacity-50 shadow-none'
          }`}
        >
          <h5 className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb1000] to-[#952b80] font-bold text-center text-xl">
            {title}
          </h5>
        </div>
        <button
          onClick={() => setSelectedEvent(title)}
          className={`h-[350px] rounded-lg border border-white hover:p-0 transition-all ${
            selectedEvent == title
              ? 'p-0 cursor-default hover:opacity-100 shadow-2xl'
              : 'p-2 opacity-50'
          }`}
        >
          <Image
            priority
            src={thumbnail}
            alt={title}
            className=" h-full w-full rounded-lg transition-all object-center object-cover"
          />
        </button>
      </div>
    )
  })

  return (
    <section
      id="event-portfolio"
      className="flex justify-center flex-col"
    >
      <h3 className="font-bold text-5xl text-center">Event Portfolio</h3>
      <h6 className="mt-4 text-sm text-center">
        Click an event picture to view more below
      </h6>

      <div className="flex gap-8 justify-evenly my-12">{renderedEvents}</div>
      <CarouselComponent selectedEvent={selectedEvent} />
    </section>
  )
}
