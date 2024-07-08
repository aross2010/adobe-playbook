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
      <Fragment>
        <h6 className="font-bold">Vertical 1</h6>
        <ul>
          <li>Matt Colquhoun</li>
          <li>Muchael Rodino (FSI)</li>
          <li>M&E FLM</li>
        </ul>
      </Fragment>,
      <Fragment>
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
      <Fragment>
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
      <Fragment>
        <h6 className="font-bold">Vertical 3</h6>
        <ul>
          <li>Adam Schroeder</li>
          <li>Andrew Martin (Retail)</li>
          <li>MFG FLM</li>
        </ul>
      </Fragment>,
      <Fragment>
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
      <Fragment>
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
      <Fragment>
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
      <Fragment>
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
    title: 'ACS Field MKTG Request Form',
    href: '',
  },
  {
    title: '1:1 Field Marketing Support',
    href: '',
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
      <div
        key={i}
        className="flex items-center"
      >
        <div className="h-[90px] w-[90px] rounded-full p-1 border mr-6">
          <Image
            priority
            src={contact.portrait}
            alt={contact.name}
            className="rounded-full w-full h-full object-cover object-center"
          />
        </div>

        <div className={`flex flex-1 ${i == 0 && 'border-t'}`}>
          <div className={`flex flex-1 flex-col py-6 border-r border-b px-4`}>
            <span className="font-bold">{contact.name}</span>
            <span>
              <a
                href={`mailto:${contact.email}`}
                className="underline"
              >
                Email
              </a>{' '}
              {contact.number && (
                <Fragment>| Mobile: {contact.number}</Fragment>
              )}
            </span>
            <span>Based in {contact.location}</span>
          </div>
          <div className="flex-1 flex ">
            {contact.jobs.map((job, i) => {
              return (
                <div
                  key={i}
                  className={`py-1 px-4 flex-1 border-b border-r`}
                >
                  {job}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  })

  return (
    <section
      id="contacts"
      className="flex gap-24"
    >
      <div className="flex flex-col gap-6 w-1/4">
        <h3 className="font-bold text-5xl">
          Let's
          <br /> Work!
        </h3>
        <h6>Click on a contact to get started.</h6>
        <div>
          <h6 className="mb-2">Key tools and support request forms:</h6>
          <ul>{renderedTools}</ul>
        </div>
        <Image
          priority
          src={logo}
          alt="Adobe logo"
          height={100}
          className="mt-auto"
        />
      </div>
      <div className="flex flex-col">{renderedContacts}</div>
    </section>
  )
}
