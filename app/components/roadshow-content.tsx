import Image from 'next/image'

const content = [
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420498/adobe%20playbook/roadshow/IMG_1071_djj1ov.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420509/adobe%20playbook/roadshow/IMG_2543_f9t5az.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420500/adobe%20playbook/roadshow/IMG_2546_zcaqtl.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420494/adobe%20playbook/roadshow/IMG_2551_uxn7po.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420492/adobe%20playbook/roadshow/IMG_2576_xogng5.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420491/adobe%20playbook/roadshow/IMG_6391_efiotc.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420490/adobe%20playbook/roadshow/IMG_6397_x53bkr.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420488/adobe%20playbook/roadshow/IMG_6398_qgfla5.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420487/adobe%20playbook/roadshow/IMG_6400_coac1z.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420486/adobe%20playbook/roadshow/IMG_6406_t3edhw.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420485/adobe%20playbook/roadshow/IMG_6411_lcfzpf.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420483/adobe%20playbook/roadshow/IMG_6417_beb3b8.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420482/adobe%20playbook/roadshow/IMG_6445_fr5tap.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420480/adobe%20playbook/roadshow/IMG_6455_csbz5r.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420479/adobe%20playbook/roadshow/IMG_6460_p9vcy9.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420478/adobe%20playbook/roadshow/IMG_6480_nwrstk.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420477/adobe%20playbook/roadshow/IMG_6482_wyswrv.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420476/adobe%20playbook/roadshow/IMG_6485_vkbze9.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420475/adobe%20playbook/roadshow/IMG_7025_gxlm3y.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420474/adobe%20playbook/roadshow/IMG_7031_spi2nu.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420472/adobe%20playbook/roadshow/IMG_7053_kjyxse.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420471/adobe%20playbook/roadshow/IMG_7057_qylbbi.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420470/adobe%20playbook/roadshow/IMG_9644_h01cat.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420470/adobe%20playbook/roadshow/IMG_9698_af6fv8.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420469/adobe%20playbook/roadshow/IMG_9714_lcptjt.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420445/adobe%20playbook/roadshow/IMG_2547_u7u8dh.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420444/adobe%20playbook/roadshow/IMG_9720_brpru4.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420444/adobe%20playbook/roadshow/IMG_2550_zhjciz.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420443/adobe%20playbook/roadshow/IMG_2564_j7zb4j.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420443/adobe%20playbook/roadshow/IMG_9723_vjqzpw.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420442/adobe%20playbook/roadshow/IMG_2562_rg4dr0.jpg',
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
        width={1000}
        height={1000}
        className="max-h-[700px] w-auto h-full"
      />
    </div>
  )
})

export default roadshowContent
