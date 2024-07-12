import Image from 'next/image'

const content = [
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420498/adobe%20playbook/roadshow/IMG_1071_djj1ov.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420500/adobe%20playbook/roadshow/IMG_2546_zcaqtl.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420494/adobe%20playbook/roadshow/IMG_2551_uxn7po.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420492/adobe%20playbook/roadshow/IMG_2576_xogng5.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420491/adobe%20playbook/roadshow/IMG_6391_efiotc.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420488/adobe%20playbook/roadshow/IMG_6398_qgfla5.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420487/adobe%20playbook/roadshow/IMG_6400_coac1z.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420480/adobe%20playbook/roadshow/IMG_6455_csbz5r.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420477/adobe%20playbook/roadshow/IMG_6482_wyswrv.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420476/adobe%20playbook/roadshow/IMG_6485_vkbze9.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420470/adobe%20playbook/roadshow/IMG_9644_h01cat.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420469/adobe%20playbook/roadshow/IMG_9714_lcptjt.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420445/adobe%20playbook/roadshow/IMG_2547_u7u8dh.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420444/adobe%20playbook/roadshow/IMG_9720_brpru4.jpg',
]
const roadshowContent = content.map((content, i) => {
  return (
    <div
      key={i}
      className="transparent relative flex h-full justify-center"
    >
      <Image
        src={content}
        alt="Roadshow"
        width={1000}
        height={1000}
        className=" w-auto h-full object-cover object-center"
      />
    </div>
  )
})

export default roadshowContent
