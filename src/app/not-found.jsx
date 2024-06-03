import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='w-full h-[90vh] font-Montserrat font-semibold gap-4 flex-col flex items-center justify-center'>
      <h1 className='text-3xl'>This Page Could Not be Found</h1>
      <Link href={'/'} className='px-[20px] py-[10px] text-white rounded-lg bg-[#2957a7]' >Back To Home</Link>
    </div>
  )
}

export default NotFound
