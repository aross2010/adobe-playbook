import logo from '@/public/logo.png'
import Image from 'next/image'

export default function Title() {
  return (
    <section className="flex items-end gap-16">
      <Image
        priority
        src={logo}
        alt="Adobe Logo"
        height={130}
      />
      <h1 className="text-white font-bold text-7xl">
        Americas Field & Demand
        <br />
        Services Marketing
      </h1>
    </section>
  )
}
