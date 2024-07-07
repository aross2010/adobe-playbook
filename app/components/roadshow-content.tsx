import roadshow1 from '@/public/Portfolio/Roadshows/IMG_1071.jpg'
import roadshow2 from '@/public/Portfolio/Roadshows/IMG_2543.jpg'
import roadshow3 from '@/public/Portfolio/Roadshows/IMG_2546.jpg'
import roadshow4 from '@/public/Portfolio/Roadshows/IMG_2562.jpg'
import roadshow5 from '@/public/Portfolio/Roadshows/IMG_2547.jpg'
import roadshow6 from '@/public/Portfolio/Roadshows/IMG_2550.jpg'
import roadshow7 from '@/public/Portfolio/Roadshows/IMG_2551.jpg'
import roadshow8 from '@/public/Portfolio/Roadshows/IMG_2564.jpg'
import roadshow9 from '@/public/Portfolio/Roadshows/IMG_2576.jpg'
import roadshow10 from '@/public/Portfolio/Roadshows/IMG_6391.jpg'
import roadshow11 from '@/public/Portfolio/Roadshows/IMG_6397.jpg'
import roadshow12 from '@/public/Portfolio/Roadshows/IMG_6398.jpg'
import roadshow13 from '@/public/Portfolio/Roadshows/IMG_6400.jpg'
import roadshow14 from '@/public/Portfolio/Roadshows/IMG_6406.jpg'
import roadshow15 from '@/public/Portfolio/Roadshows/IMG_6411.jpg'
import roadshow16 from '@/public/Portfolio/Roadshows/IMG_6417.jpg'
import roadshow17 from '@/public/Portfolio/Roadshows/IMG_6445.jpg'
import roadshow18 from '@/public/Portfolio/Roadshows/IMG_6455.jpg'
import roadshow19 from '@/public/Portfolio/Roadshows/IMG_6460.jpg'
import roadshow20 from '@/public/Portfolio/Roadshows/IMG_6406.jpg'
import roadshow21 from '@/public/Portfolio/Roadshows/IMG_6411.jpg'
import roadshow22 from '@/public/Portfolio/Roadshows/IMG_6417.jpg'
import roadshow23 from '@/public/Portfolio/Roadshows/IMG_6445.jpg'
import roadshow24 from '@/public/Portfolio/Roadshows/IMG_6455.jpg'
import roadshow25 from '@/public/Portfolio/Roadshows/IMG_6460.jpg'
import roadshow26 from '@/public/Portfolio/Roadshows/IMG_6480.jpg'
import roadshow27 from '@/public/Portfolio/Roadshows/IMG_6482.jpg'
import roadshow28 from '@/public/Portfolio/Roadshows/IMG_6485.jpg'
import roadshow29 from '@/public/Portfolio/Roadshows/IMG_7025.jpg'
import roadshow30 from '@/public/Portfolio/Roadshows/IMG_7031.jpg'
import roadshow31 from '@/public/Portfolio/Roadshows/IMG_7053.jpg'
import roadshow32 from '@/public/Portfolio/Roadshows/IMG_7057.jpg'
import roadshow33 from '@/public/Portfolio/Roadshows/IMG_9644.jpg'
import roadshow34 from '@/public/Portfolio/Roadshows/IMG_9698.jpg'
import roadshow35 from '@/public/Portfolio/Roadshows/IMG_9714.jpg'
import roadshow36 from '@/public/Portfolio/Roadshows/IMG_9720.jpg'
import roadshow37 from '@/public/Portfolio/Roadshows/IMG_9723.jpg'
import Image from 'next/image'

const content = [
  roadshow1,
  roadshow2,
  roadshow3,
  roadshow4,
  roadshow5,
  roadshow6,
  roadshow7,
  roadshow8,
  roadshow9,
  roadshow10,
  roadshow11,
  roadshow12,
  roadshow13,
  roadshow14,
  roadshow15,
  roadshow16,
  roadshow17,
  roadshow18,
  roadshow19,
  roadshow20,
  roadshow21,
  roadshow22,
  roadshow23,
  roadshow24,
  roadshow25,
  roadshow26,
  roadshow27,
  roadshow28,
  roadshow29,
  roadshow30,
  roadshow31,
  roadshow32,
  roadshow33,
  roadshow34,
  roadshow35,
  roadshow36,
  roadshow37,
]
const roadshowContent = content.map((content, i) => {
  return (
    <div
      key={i}
      className="transparent relative flex h-full justify-center"
    >
      <Image
        priority
        src={content}
        alt="Roadshow"
        className="max-h-[700px] w-auto h-full"
      />
    </div>
  )
})

export default roadshowContent
