'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { AiOutlineDollarCircle, AiOutlineHistory, AiOutlineMenu, AiOutlineSetting } from 'react-icons/ai';
import { CgProfile } from "react-icons/cg";
import { MdApi } from 'react-icons/md';
import { TbMichelinStarGreen } from "react-icons/tb";
const links = [
    {
        id:1,
        link:'/user-profile',
        value:'Profile',
        icon:<CgProfile className=' text-green text-[20px] sm:text-[30px]' />,
    },
    // {
    //     id:2,
    //     link:'/history',
    //     value:'History',
    //     icon:<AiOutlineHistory className=' text-green text-[20px] sm:text-[30px]' />,
    // },
    {
        id:3,
        link:'/assets',
        value:'Green Assets',
        icon:<TbMichelinStarGreen  className=' text-green text-[20px] sm:text-[30px]' />,
    },
    {
        id:4,
        link:'/settings',
        value:'Settings',
        icon:<AiOutlineSetting className=' text-green text-[20px] sm:text-[30px]' />,
    },
    // {
    //     id:5,
    //     link:'/api-integrations',
    //     value:'Integrations',
    //     icon:<MdApi className=' text-green text-[20px] sm:text-[30px]' />,
    // },
]
const LeftSideBar = () => {
    const[navscroll,setNavscroll] = useState(false);
    const[open,setIsOpen] = useState(false);
    useEffect(() =>{
      
      const Click  = () =>{
        if(window.scrollY>=80){
          setNavscroll(true)
        }else{
          setNavscroll(false)   
        }
      }
        window.addEventListener('scroll',Click)
      
    },[])
  return (
    <div className={` ${navscroll ? 'top-[70px]': 'top-[155px]'} ${open ? 'w-[250px] fixed' : 'w-auto sticky'} mdd:sticky z-10 px-1 mt-7 sm:px-5 mdd:p-0 min-h-screen  mdd:w-[300px] left-0 py-4 bg-white shadow-lg  mx-auto`}>
    <ul className='flex mt-10 gap-[30px] flex-col items-start justify-start'>
        <AiOutlineMenu onClick={() => setIsOpen(!open)} className={`${open ? 'absolute top-3 right-4' : 'mdd:hidden'} cursor-pointer`} size={30} />
{
    links?.map((item,index) => (
        <li key={item.id} className='flex gap-3 items-center  pl-2 xsm:pl-6 mdd:pl-8 justify-start md:justify-start w-full'>
        {item.icon}
        <Link className={` ${open ? 'inline-block' : 'hidden'} mdd:inline-block text-[16px] text-black hover:text-gray-500 duration-200`} href={item.link}>{item.value}</Link>
        </li>
    ))
}
   

   
    </ul>
</div>
  )
}

export default LeftSideBar