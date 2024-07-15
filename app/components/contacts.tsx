'use client'
import { motion } from 'framer-motion'
import React, { Fragment } from 'react'
import kimPortrait from '@/public/portraits/Kim Castillo.jpg'
import anniePortrait from '@/public/portraits/Annie Kennedy.jpg'
import jessePortrait from '@/public/portraits/Jesse Heller.jpg'
import stephaniePortrait from '@/public/portraits/Stephanie Herzog.jpg'
import karenPortrait from '@/public/portraits/Karen Lee.jpg'
import talyaPortrait from '@/public/portraits/Talya Zandberg.jpg'
import Image from 'next/image'
import logo from '@/public/logo.png'

const contacts = [
  {
    name: 'Kim Castillo',
    email: 'kicastil@adobe.com',
    number: '408-836-3844',
    location: 'San Jose, CA',
    portrait: kimPortrait,
    jobs: [
      <Fragment key={1}>
        <h6 className="font-bold">Vertical 1</h6>
        <ul>
          <li>Matt Colquhoun</li>
          <li>Muchael Rodino (FSI)</li>
          <li>M&E FLM</li>
        </ul>
      </Fragment>,
      <Fragment key={2}>
        <span>
          <span className="font-bold uppercase">Summit</span> point of contact
        </span>
      </Fragment>,
    ],
  },
  {
    name: 'Annie Kennedy',
    email: 'annak@adobe.com',
    number: null,
    location: 'Bay Area, CA',
    portrait: anniePortrait,
    jobs: [
      <Fragment key={3}>
        <h6 className="font-bold">Vertical 2</h6>
        <ul>
          <li>V2 SLM</li>
          <li>Valerie Groneman (Healthcare)</li>
          <li>Rick Kanya (T&H)</li>
          <li>High Tech FL</li>
        </ul>
      </Fragment>,
    ],
  },
  {
    name: 'Jesse Heller',
    email: 'jesseh@adobe.com',
    number: '415-595-4072',
    location: 'Los Angeles, CA',
    portrait: jessePortrait,
    jobs: [
      <Fragment key={4}>
        <h6 className="font-bold">Vertical 3</h6>
        <ul>
          <li>Adam Schroeder</li>
          <li>Andrew Martin (Retail)</li>
          <li>MFG FLM</li>
        </ul>
      </Fragment>,
      <Fragment key={5}>
        <h6 className="font-bold">Vertical 4</h6>
        <ul>
          <li>Pavan Ghaje</li>
          <li>Chris Mahoney</li>
        </ul>
      </Fragment>,
    ],
  },
  {
    name: 'Stephanie Herzog',
    email: 'sherzog@adobe.com',
    number: '213-361-0056',
    location: 'Bay Area, CA',
    portrait: stephaniePortrait,
    jobs: [
      <Fragment key={6}>
        <h6>
          <span className="font-bold">EPIC Segment</span> - dedicated marketing
          support for CPs
        </h6>
        <ul>
          <li>Scott Johnson (V1 EPIC)</li>
          <li>Kathy Martin (V2 EPIC)</li>
          <li>Amit Wjuniski (V3 EPIC)</li>
        </ul>
      </Fragment>,
    ],
  },
  {
    name: 'Karen Lee',
    email: 'karenlee@adobe.com',
    number: null,
    location: 'San Jose, CA',
    portrait: karenPortrait,
    jobs: [
      <Fragment key={7}>
        <h6 className="font-bold">
          Digital Channel activations, field event promotions, and demand
          generation across all segments
        </h6>
        <p>1H focus on IL Core and SL segments</p>
      </Fragment>,
    ],
  },
  {
    name: 'Talya Zandberg',
    email: 'tzandberg@adobe.com',
    number: null,
    location: 'San Jose, CA',
    portrait: talyaPortrait,
    jobs: [
      <Fragment key={8}>
        <h6 className="font-bold">
          Program support for all marketers and light touch 1:1 event support
        </h6>
        <p>
          Dinners, sports, arts, concerts, gifting – can be requests through our{' '}
          <a
            className="underline"
            href="https://experience.adobe.com/#/@wfadoberm/so:adoberm-Production/workfront/requests/submitted"
            target="_blank"
          >
            Workfront form
          </a>
        </p>
      </Fragment>,
    ],
  },
]

const tools = [
  {
    title: 'Account Engagement Hub',
    href: 'https://nam04.safelinks.protection.outlook.com/?url=https%3A%2F%2Fapp.powerbi.com%2Fgroups%2Fme%2Fapps%2Fe919aa49-4193-4e24-afec-4a1b32eb1485%2Freports%2Ffa2552d5-3919-48a4-9919-53f76555f84e%2FReportSectionffc9379f64c9c5b07e60%3Fexperience%3Dpower-bi&data=05%7C02%7Caross%40adobe.com%7C8d33953a86424a98ae5008dc9a363607%7Cfa7b1b5a7b34438794aed2c178decee1%7C0%7C0%7C638554804819665804%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&sdata=aM8ple9O5GLR7wAJau7Zb7pCHdjv9M9grvdZrLW6hF8%3D&reserved=0',
  },

  {
    title: '1:1 Field Marketing Support',
    href: 'https://nam04.safelinks.protection.outlook.com/?url=https%3A%2F%2Fexperience.adobe.com%2F%23%2F%403E692814636C53B60A495EC3%40AdobeOrg%2Fso%3Aadoberm-Production%2Fworkfront%2Frequests%2Fnew%3FactiveTab%3Dtab-new-helpRequest%26projectID%3D622ac7af001ec30ae20deaaf82a1d8cf%26path%3D62f5246d0039ebbaaeb6d5cd2a6485eb&data=05%7C02%7Caross%40adobe.com%7C366718f658db452a332e08dca4f12dfd%7Cfa7b1b5a7b34438794aed2c178decee1%7C0%7C0%7C638566602965879265%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&sdata=40MXEzgbmhjEXwEZJV0GY7Vr%2FB8XCKNgw3x2GpFpxMw%3D&reserved=0',
  },
]

export default function Contacts() {
  const renderedTools = tools.map(({ title, href }, i) => {
    return (
      <li key={i}>
        <a
          target="_blank"
          href={href}
          className="underline"
        >
          {title}
        </a>
      </li>
    )
  })

  const renderedContacts = contacts.map((contact, i) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.15 + 0.5 }}
        key={i}
        className="flex items-center"
      >
        <div className="lg:h-[90px] lg:w-[90px] h-[70px] w-[70px] rounded-full p-1 border md:block hidden border-white/75 mr-6">
          <Image
            src={contact.portrait}
            alt={contact.name}
            className="rounded-full w-full h-full object-cover object-center"
          />
        </div>

        <div
          className={`flex md:flex-row flex-col flex-1 ${
            i == 0 && 'border-t border-white/75'
          }`}
        >
          <div
            className={`flex flex-1 md:flex-col md:items-start items-center py-6 border-r border-b border-b-white/25 md:border-b-white/75 border-white/75 px-4`}
          >
            <div className="flex-col flex">
              <span className="font-bold">{contact.name}</span>{' '}
              <span>
                <a
                  href={`mailto:${contact.email}`}
                  className="underline"
                >
                  Email
                </a>{' '}
                {contact.number && (
                  <span>
                    <br /> Mobile: {contact.number}
                  </span>
                )}
              </span>
              <span>Based in {contact.location}</span>
            </div>
            <div className="lg:h-[90px] lg:w-[90px] h-[70px] w-[70px] rounded-full p-1 border md:hidden ml-auto border-white/75">
              <Image
                src={contact.portrait}
                alt={contact.name}
                className="rounded-full w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <div className="flex-1 flex">
            {contact.jobs.map((job, i) => {
              return (
                <div
                  key={i}
                  className={`py-1 px-4 flex-1 border-b border-r ${
                    contact.jobs.length > 1 &&
                    i < contact.jobs.length - 1 &&
                    'md:border-r-white/75 border-r-white/25'
                  } border-white/75`}
                >
                  {job}
                </div>
              )
            })}
          </div>
        </div>
      </motion.div>
    )
  })

  return (
    <section
      id="contacts"
      className="flex lg:flex-row flex-col xl:gap-24 gap-16"
    >
      <div className="flex flex-col gap-6 lg:w-1/4">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          viewport={{ once: true }}
          className="font-bold text-5xl"
        >
          Let&apos;s
          <br /> Work!
        </motion.h3>
        <motion.h6
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          viewport={{ once: true }}
        >
          Click on a contact to get started.
        </motion.h6>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          viewport={{ once: true }}
          className="flex justify-between items-end"
        >
          <div>
            <h6 className="mb-2">Key tools and support request forms:</h6>
            <ul>{renderedTools}</ul>
          </div>
          <Image
            src={logo}
            alt="Adobe logo"
            className="w-auto sm:h-[80px] h-[65px] lg:hidden block"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2 }}
          className="lg:mt-auto lg:block hidden"
        >
          <Image
            src={logo}
            alt="Adobe logo"
            height={100}
          />
        </motion.div>
      </div>
      <div className="flex flex-col">{renderedContacts}</div>
    </section>
  )
}
