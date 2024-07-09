import logo from '@/public/logo.png'
import Image from 'next/image'

export default function Title() {
  return (
    <section className="flex-col flex md:flex-row xl:items-end md:items-center items-start md:gap-16 gap-8">
      <Image
        src={logo}
        alt="Adobe Logo"
        className="xl:h-[130px] h-[100px] w-auto"
      />
      <h1 className="font-bold xl:text-7xl md:text-6xl text-5xl ">
        Americas Field & Demand
        <br />
        Services Marketing
      </h1>
    </section>
  )
}
