import innovation1 from '@/public/Portfolio/Innovation Exchange/0088-Adobe-Summit-2024-Event-Photography.jpg'
import innovation2 from '@/public/Portfolio/Innovation Exchange/0094-Adobe-Summit-2024-Event-Photography.jpg'
import innovation3 from '@/public/Portfolio/Innovation Exchange/0100-Adobe-Summit-2024-Event-Photography.jpg'
import innovation4 from '@/public/Portfolio/Innovation Exchange/0103-Adobe-Summit-2024-Event-Photography.jpg'
import innovation5 from '@/public/Portfolio/Innovation Exchange/0108-Adobe-Summit-2024-Event-Photography.jpg'
import innovation6 from '@/public/Portfolio/Innovation Exchange/0127-Adobe-Summit-2024-Event-Photography.jpg'
import innovation7 from '@/public/Portfolio/Innovation Exchange/0139-Adobe-Summit-2024-Event-Photography.jpg'
import innovation8 from '@/public/Portfolio/Innovation Exchange/0145-Adobe-Summit-2024-Event-Photography.jpg'
import innovation9 from '@/public/Portfolio/Innovation Exchange/0169-Adobe-Summit-2024-Event-Photography.jpg'
import innovation10 from '@/public/Portfolio/Innovation Exchange/ADOBE NYC 2024 -5.jpeg'
import innovation11 from '@/public/Portfolio/Innovation Exchange/ADOBE NYC 2024 -9.jpeg'
import innovation12 from '@/public/Portfolio/Innovation Exchange/ADOBE NYC 2024 -10.jpeg'
import innovation13 from '@/public/Portfolio/Innovation Exchange/ADOBE NYC 2024 -26.jpeg'
import innovation14 from '@/public/Portfolio/Innovation Exchange/ADOBE NYC 2024 -33.jpeg'
import innovation15 from '@/public/Portfolio/Innovation Exchange/ADOBE NYC 2024 -35.jpeg'
import innovation16 from '@/public/Portfolio/Innovation Exchange/ADOBE NYC 2024 -41.jpeg'
import innovation17 from '@/public/Portfolio/Innovation Exchange/ADOBE NYC 2024 -53.jpeg'
import innovation18 from '@/public/Portfolio/Innovation Exchange/ADOBE NYC 2024 -54.jpeg'
import innovation19 from '@/public/Portfolio/Innovation Exchange/ADOBE NYC 2024 -60.jpeg'
import innovation20 from '@/public/Portfolio/Innovation Exchange/ADOBE NYC 2024 -61.jpeg'
import innovation21 from '@/public/Portfolio/Innovation Exchange/ADOBE NYC 2024 -77.jpeg'
import innovation22 from '@/public/Portfolio/Innovation Exchange/ADOBE NYC 2024 -84.jpeg'
import innovation23 from '@/public/Portfolio/Innovation Exchange/ADOBE NYC 2024 -85.jpeg'
import innovation24 from '@/public/Portfolio/Innovation Exchange/ADOBE NYC 2024 -89.jpeg'
import innovation25 from '@/public/Portfolio/Innovation Exchange/ADOBE NYC 2024 -91.jpeg'
import Image from 'next/image'

const content = [
  innovation1,
  innovation2,
  innovation3,
  innovation4,
  innovation5,
  innovation6,
  innovation7,
  innovation8,
  innovation9,
  innovation10,
  innovation11,
  innovation12,
  innovation13,
  innovation14,
  innovation15,
  innovation16,
  innovation17,
  innovation18,
  innovation19,
  innovation20,
  innovation21,
  innovation22,
  innovation23,
  innovation24,
  innovation25,
]

const innovationContent = content.map((content, i) => {
  return (
    <div
      key={i}
      className="transparent relative flex h-full justify-center"
    >
      {typeof content === 'object' && 'src' in content ? (
        <Image
          priority
          src={content}
          alt="Roadshow"
          className="max-h-[700px] w-auto h-full"
        />
      ) : (
        <video
          className="w-full"
          preload="true"
          autoPlay
          loop
        >
          <source
            src={content}
            type="video/mp4"
          />
        </video>
      )}
    </div>
  )
})

export default innovationContent
