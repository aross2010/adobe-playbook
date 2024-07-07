import dedicated1 from '@/public/Portfolio/Dedicated Accounts/Picture1.jpg'
import dedicated2 from '@/public/Portfolio/Dedicated Accounts/image001.jpg'
import dedicated3 from '@/public/Portfolio/Dedicated Accounts/image001[84].png'
import dedicated4 from '@/public/Portfolio/Dedicated Accounts/image001[90][28].png'
import Image from 'next/image'

const content = [dedicated1, dedicated2, dedicated3, dedicated4]

const dedicatedContent = content.map((content, i) => {
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

export default dedicatedContent
