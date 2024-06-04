import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FlipCard = ({ img, title, intro, text, link }) => {
  return (
    <Link href={link} className="relative w-full sm:w-[45%] xlg:w-[23%] rounded-xl shadow-lg border min-h-[220px]">
      <div className='thecard'>
        <div className="front gap-y-3 text-center rounded-xl flex items-center justify-start flex-col bg-white p-6">
          <Image src={img} alt='card image' width={60} height={60} />
          <div>
            <h2 className=' text-dark text-[16px] xsm:text-[20px] font-worksans font-semibold'>{title}</h2>
            <p className=' text-[12px] xsm:text-sm text-earthy-brown'>{intro}</p>
          </div>
        </div>
        <div className="backed flex items-center justify-center rounded-xl p-4 ">
          <p className=' text-[12px] xsm:text-[14px] leading-5 text-center text-white tracking-wide font-worksans'>{text}</p>
        </div>
      </div>
    </Link>
  )
}

export default FlipCard