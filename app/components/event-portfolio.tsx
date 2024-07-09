'use client'
import React, { cloneElement, Fragment, useState } from 'react'
import roadshowThumb from '@/public/roadshow-thumb.jpg'
import innovationThumb from '@/public/innovation-thumb.jpg'
import ultimateThumb from '@/public/success-thumb.jpg'
import dedicatedThumb from '@/public/account-thumb.jpg'
import Image from 'next/image'
import CarouselComponent from './carousel'
import { FaWineGlassAlt, FaLightbulb, FaRocket } from 'react-icons/fa'
import { MdSupervisorAccount } from 'react-icons/md'

const events = [
  {
    title: 'Roadshows',
    thumbnail: roadshowThumb,
    icon: <FaWineGlassAlt />,
  },
  {
    title: 'Innovation Exchange',
    thumbnail: innovationThumb,
    icon: <FaLightbulb />,
  },
  {
    title: 'Ultimate Success',
    thumbnail: ultimateThumb,
    icon: <FaRocket />,
  },
  {
    title: 'Dedicated Account',
    thumbnail: dedicatedThumb,
    icon: <MdSupervisorAccount />,
  },
] as const

export type Events =
  | 'Roadshows'
  | 'Innovation Exchange'
  | 'Ultimate Success'
  | 'Dedicated Account'

export default function EventPortfolio() {
  const [selectedEvent, setSelectedEvent] = useState<Events>('Roadshows')

  const renderedEvents = (
    <Fragment>
      <div className="lg:flex hidden gap-8 justify-evenly my-12 ">
        {events.map(({ title, thumbnail }, i) => {
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
                className={`xl:h-[300px] lg:h-[250px] lg:block hidden rounded-lg border border-white hover:p-0 transition-all ${
                  selectedEvent == title
                    ? 'p-0 cursor-default hover:opacity-100 shadow-2xl'
                    : 'p-2 opacity-50'
                }`}
              >
                <Image
                  src={thumbnail}
                  alt={title}
                  className="h-full w-full rounded-lg transition-all object-cover object-center"
                />
              </button>
            </div>
          )
        })}
      </div>
      <div className="lg:hidden grid grid-cols-2 gap-2 my-12">
        {events.map(({ title, icon }, i) => {
          return (
            <button
              key={i}
              className={`bg-white p-1 rounded-lg flex flex-col gap-4 justify-center items-center w-full h-[150px] ${
                selectedEvent == title ? 'shadow-2xl' : 'opacity-50'
              }`}
              onClick={() => setSelectedEvent(title)}
            >
              {cloneElement(icon, {
                className: 'text-4xl text-[#eb1000]',
              })}
              <h5 className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb1000] to-[#952b80] font-bold text-center md:text-lg">
                {title}
              </h5>
            </button>
          )
        })}
      </div>
    </Fragment>
  )

  return (
    <section
      id="event-portfolio"
      className="flex justify-center flex-col"
    >
      <h3 className="font-bold text-5xl text-center">Event Portfolio</h3>
      <h6 className="mt-4 text-sm text-center">
        Click an event to view more below
      </h6>
      {renderedEvents}
      <CarouselComponent selectedEvent={selectedEvent} />
    </section>
  )
}
