import Image from 'next/image'

const content = [
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720419156/adobe%20playbook/dedicated%20account/Picture1_wk6yyh.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720419155/adobe%20playbook/dedicated%20account/image001_lnastc.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720419155/adobe%20playbook/dedicated%20account/image001_84_h5voba.png',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720419155/adobe%20playbook/dedicated%20account/image001_90_28_cozojs.png',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720484027/adobe%20playbook/dedicated%20account/paramount_2_simjxf.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720484028/adobe%20playbook/dedicated%20account/jpmc_day_numkrm.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720484030/adobe%20playbook/dedicated%20account/Screenshot_2024-05-20_at_10.44.00_AM_qv1hvo.png',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720484031/adobe%20playbook/dedicated%20account/Screenshot_2023-08-15_at_8.04.55_PM_zvktzl.png',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720484031/adobe%20playbook/dedicated%20account/Screenshot_2024-06-17_at_1.01.51_PM_vfd0xo.png',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720484034/adobe%20playbook/dedicated%20account/IMG_0103_zcfln3.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720484035/adobe%20playbook/dedicated%20account/IMG_0090_zzncwz.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720484037/adobe%20playbook/dedicated%20account/Ford_-_12.7_vghfdd.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720484039/adobe%20playbook/dedicated%20account/ESPN_10-25_RT_Pic1_je6fli.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720484266/adobe%20playbook/dedicated%20account/Delta_Baesball_event_3_ahyfzs.jpg',
  'https://res.cloudinary.com/dxygrtzcg/image/upload/v1720484267/adobe%20playbook/dedicated%20account/Delta_Baseball_event_4_tgrxyi.jpg',
]

const dedicatedContent = content.map((content, i) => {
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

export default dedicatedContent
