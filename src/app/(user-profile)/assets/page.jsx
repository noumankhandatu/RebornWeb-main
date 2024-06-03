'use client'
import LeftSideBar from '@/components/LeftSideBar'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from "next/navigation";
import { parseCookies } from 'nookies'
import React from 'react'
import { FaLock, FaUnlock } from 'react-icons/fa'

const page = () => {

  const cookies = parseCookies();
  const accesstoken = cookies?.access_token;
    
  if(!accesstoken){
    redirect('/login')
    
  }


  return (
    <div className='overflow-hidden h-full'>




      {/* about sec 1  */}
      <section className='w-full flex items-start justify-start mt-20 min-h-screen '>
               <LeftSideBar />
               <main className='max-w-[1800px] flex-1 bg-[#fbfbfb] px-[0px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto h-full'>

          <h3 className=' text-center leading-normal my-7 lg:leading-[50px] xll:leading-[60px] text-[30px] lg:text-[40px] xll:text-[50px] text-black-text font-medium font-worksans'> Assets</h3>
          <div className='my-12 flex items-center justify-start flex-col gap-6'>
            <h3 className=' text-center leading-normal lg:leading-[50px] xll:leading-[60px] text-[30px] lg:text-[40px] xll:text-[50px] text-black-text font-medium font-worksans'>Your Packages</h3>
            <div className=' w-full sm:w-[70%] flex items-center justify-center flex-col gap-4 px-4 text-center py-5 bg-white border rounded-md shadow-lg min-h-[200px]'>
              <FaUnlock className='text-green' size={30} />
              <h5 className=' text-[20px] font-worksans font-medium xsm:text-[22px]'>Tree counter widget</h5>
              <p className=' text-[12px] xsm:text-[15px] text-black  font-poppins'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem provident quisquam fugit ipsam! Odio voluptate, non quae eum quis dolores porro commodi quod, sunt a quo ut, doloremque modi amet.</p>
              <button className='text-white rounded-md bg-green hover:bg-lime-700 duration-200 px-8 py-3 text-lg font-semibold'>Install Widget</button>
            </div>
            <div className=' w-full sm:w-[70%] flex items-center justify-center flex-col gap-4 px-4 text-center py-5 bg-white border rounded-md shadow-lg min-h-[200px]'>
              <FaLock className='text-green' size={30} />
              <h5 className=' text-[20px] font-worksans font-medium xsm:text-[22px]'>Tree counter widget</h5>
              <p className=' text-[12px] xsm:text-[15px] text-black  font-poppins'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem provident quisquam fugit ipsam! Odio voluptate, non quae eum quis dolores porro commodi quod, sunt a quo ut, doloremque modi amet.</p>
              <button disabled className='text-white rounded-md bg-green hover:bg-lime-700 duration-200 px-8 py-3 text-lg font-semibold'>Locked</button>
            </div>
          </div>


        </main>
      </section>
    </div>
  )
}

export default page