import Image from 'next/image'

const content = [
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420213/adobe%20playbook/innovation%20exchange/0094-Adobe-Summit-2024-Event-Photography_zvikwu.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420214/adobe%20playbook/innovation%20exchange/0088-Adobe-Summit-2024-Event-Photography_ll99eg.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420210/adobe%20playbook/innovation%20exchange/0127-Adobe-Summit-2024-Event-Photography_o5und4.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420208/adobe%20playbook/innovation%20exchange/0103-Adobe-Summit-2024-Event-Photography_t7i7qu.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420204/adobe%20playbook/innovation%20exchange/0145-Adobe-Summit-2024-Event-Photography_ql61oo.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420202/adobe%20playbook/innovation%20exchange/0169-Adobe-Summit-2024-Event-Photography_zudlmv.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420200/adobe%20playbook/innovation%20exchange/0139-Adobe-Summit-2024-Event-Photography_rlutxo.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420199/adobe%20playbook/innovation%20exchange/ADOBE_NYC_2024_-9_bdnsz1.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420196/adobe%20playbook/innovation%20exchange/ADOBE_NYC_2024_-5_tkru8k.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420194/adobe%20playbook/innovation%20exchange/ADOBE_NYC_2024_-53_cuw9fh.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420191/adobe%20playbook/innovation%20exchange/ADOBE_NYC_2024_-35_lfub69.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420188/adobe%20playbook/innovation%20exchange/ADOBE_NYC_2024_-33_qf6lkh.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420185/adobe%20playbook/innovation%20exchange/ADOBE_NYC_2024_-61_kjmfhk.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420183/adobe%20playbook/innovation%20exchange/ADOBE_NYC_2024_-84_onrevt.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420181/adobe%20playbook/innovation%20exchange/ADOBE_NYC_2024_-60_zjp6fs.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420179/adobe%20playbook/innovation%20exchange/ADOBE_NYC_2024_-54_vpw70f.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420174/adobe%20playbook/innovation%20exchange/ADOBE_NYC_2024_-89_yeeoqi.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720420164/adobe%20playbook/innovation%20exchange/ADOBE_NYC_2024_-91_ktyil9.jpg',
]

const innovationContent = content.map((content, i) => {
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

export default innovationContent
