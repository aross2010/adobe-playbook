import ultimate1 from '@/public/Portfolio/Ultimate Success/IMG_7717.jpg'
import ultimate2 from '@/public/Portfolio/Ultimate Success/IMG_7718.jpg'
import ultimate3 from '@/public/Portfolio/Ultimate Success/IMG_7751.jpg'
import ultimate4 from '@/public/Portfolio/Ultimate Success/IMG_7757.jpg'
import ultimate5 from '@/public/Portfolio/Ultimate Success/IMG_7760.jpg'
import ultimate6 from '@/public/Portfolio/Ultimate Success/IMG_7764.jpg'
import ultimate7 from '@/public/Portfolio/Ultimate Success/IMG_7775.jpg'
import ultimate8 from '@/public/Portfolio/Ultimate Success/IMG_7778.jpg'
import ultimate9 from '@/public/Portfolio/Ultimate Success/IMG_7779.jpg'
import ultimate10 from '@/public/Portfolio/Ultimate Success/IMG_7781.jpg'
import ultimate11 from '@/public/Portfolio/Ultimate Success/IMG_7787.jpg'
import ultimate12 from '@/public/Portfolio/Ultimate Success/IMG_7828.jpg'
import ultimate13 from '@/public/Portfolio/Ultimate Success/IMG_7831.jpg'
import ultimate14 from '@/public/Portfolio/Ultimate Success/IMG_7833.jpg'
import ultimate15 from '@/public/Portfolio/Ultimate Success/IMG_7834.jpg'
import Image from 'next/image'
const content = [
  ultimate1,
  ultimate2,
  ultimate3,
  ultimate4,
  ultimate5,
  ultimate6,
  ultimate7,
  ultimate8,
  ultimate9,
  ultimate10,
  ultimate11,
  ultimate12,
  ultimate13,
  ultimate14,
  ultimate15,
]

const ultimateContent = content.map((content, i) => {
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

export default ultimateContent
