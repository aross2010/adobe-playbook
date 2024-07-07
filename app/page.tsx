import Image from 'next/image'
import Title from './components/title'
import HowWeSupport from './components/how-we-support'
import EngangeUs from './components/engage-us'
import HelpYou from './components/help-you'
import EventPortfolio from './components/event-portfolio'
import Contacts from './components/contacts'

export default function Home() {
  return (
    <main className=" w-full max-w-[1300px] px-6 py-24 flex flex-col gap-36 scroll-smooth">
      <Title />
      <HowWeSupport />
      <EngangeUs />
      <HelpYou />
      <EventPortfolio />
      <Contacts />
    </main>
  )
}
