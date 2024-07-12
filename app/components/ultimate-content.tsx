import Image from 'next/image'
const content = [
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720419089/adobe%20playbook/ultimate%20success/IMG_7718_e2qtlm.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720419091/adobe%20playbook/ultimate%20success/IMG_7757_qhuu1v.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720419090/adobe%20playbook/ultimate%20success/IMG_7751_aqjy37.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720419082/adobe%20playbook/ultimate%20success/IMG_7760_kgf69v.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720419079/adobe%20playbook/ultimate%20success/IMG_7831_hh2ngj.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720419077/adobe%20playbook/ultimate%20success/IMG_7775_z4g5vc.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720419074/adobe%20playbook/ultimate%20success/IMG_7779_spxpop.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720419070/adobe%20playbook/ultimate%20success/IMG_7828_xpy9x1.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720419069/adobe%20playbook/ultimate%20success/IMG_7778_qzdbju.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720419060/adobe%20playbook/ultimate%20success/IMG_7787_sgd2xn.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720419060/adobe%20playbook/ultimate%20success/IMG_7781_btdvm5.jpg',
]

const ultimateContent = content.map((content, i) => {
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
        className="w-auto h-full object-cover object-center"
      />
    </div>
  )
})

export default ultimateContent
