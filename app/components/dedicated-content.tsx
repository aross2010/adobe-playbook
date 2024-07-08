import Image from 'next/image'

const content = [
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720419156/adobe%20playbook/dedicated%20account/Picture1_wk6yyh.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720419155/adobe%20playbook/dedicated%20account/image001_lnastc.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720419155/adobe%20playbook/dedicated%20account/image001_84_h5voba.png',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720419155/adobe%20playbook/dedicated%20account/image001_90_28_cozojs.png',
]

const dedicatedContent = content.map((content, i) => {
  return (
    <div
      key={i}
      className="transparent relative flex h-full justify-center"
    >
      <Image
        priority
        src={content}
        alt="Roadshow"
        width={1000}
        height={1000}
        className="max-h-[700px] w-auto h-full"
      />
    </div>
  )
})

export default dedicatedContent
