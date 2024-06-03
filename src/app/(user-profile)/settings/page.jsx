'use client'
import LeftSideBar from '@/components/LeftSideBar'
import { redirect } from "next/navigation";
import { parseCookies } from 'nookies'
import React, { useEffect, useState } from 'react'
import { useUser } from '../../../../lib/UserConext';

const Page = () => {
    const userData = useUser();  
    const [userInfor,setUserInfor] = useState({
        name:'',
        email:'',
      })
  useEffect(() =>{
    const cookies = parseCookies();

    if(userData){
        setUserInfor({
            name:userData?.data.name,
            email:userData?.data.email,
        })
       }

    const accessToken = cookies?.access_token;
    if(!accessToken){
      redirect('/login')
    }
  },[userData])


    return (
        <div className='overflow-hidden h-full'>




        
            <section className='w-full flex items-start justify-start mt-20 min-h-screen '>
               <LeftSideBar />
                <main className='max-w-[1800px] flex-1 bg-[#fbfbfb] px-[0px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto h-full'>

                    <h3 className=' text-center leading-normal my-7 lg:leading-[50px] xll:leading-[60px] text-[30px] lg:text-[40px] xll:text-[50px] text-black-text font-medium font-worksans'> Settings</h3>

                    <div className='w-full flex flex-col gap-5 items-center justify-center'>
                        <form className=' w-[240px] ssm:w-[300px] xsm:max-w-[600px] px-3 sm:px-10 py-20 rounded-lg sm:w-[600px] bg-white shadow-lg'>
                            <h2 className='text-left font-worksans text-[20px] xsm:text-[25px] lg:text-[30px] xll:text-[35px] uppercase font-semibold text-[#3d3d3d]'>Personal Details</h2>
                            <div>
                                <div className='flex my-4 flex-col'>
                                    <label className='mb-1'>Company Name</label>
                                    <input type="text" placeholder='full name' className='a company-none border-2 rounded-md shadow-lg border-[#443d3d82] px-4 py-2' />
                                </div>
                                <div className='flex my-4 flex-col'>
                                    <label className='mb-1'>Full Name</label>
                                    <input onChange={(e) => setUserInfor({name:e.target.value})} value={userInfor?.name} type="text" placeholder='full name' className='outline-none border-2 rounded-md shadow-lg border-[#443d3d82] px-4 py-2' />
                                </div>
                                <div className='flex my-4 flex-col'>
                                    <label className='mb-1'>Email</label>
                                    <input value={userInfor?.email} readOnly type="email" placeholder='Email' className='outline-none border-2 rounded-md shadow-lg border-[#443d3d82] px-4 py-2' />
                                </div>
                            </div>

                            <div className='flex flex-col gap-4 items-center justify-start w-full'>
                                <button className='w-full px-7 py-3 bg-blue-900 hover:bg-blue-700 duration-300 text-white rounded-lg font-poppins text-[16px] xll:text-[18px] font-medium tracking-wide'>Save</button>
                            </div>
                        </form>




                    </div>


                   
                    <div className='my-12 flex items-center justify-start flex-col gap-6'>
                    <h3 className=' text-center leading-normal lg:leading-[50px] xll:leading-[60px] text-[30px] lg:text-[40px] xll:text-[50px] text-black-text font-medium font-worksans'>Your Packages</h3>
                    <div className=' w-full sm:w-[70%] flex items-center justify-center flex-col gap-4 px-4 text-center py-5 bg-white border shadow-lg min-h-[200px]'>
                        <p className=' text-[18px] xsm:text-[20px]'>200 trees for £200.00 / month </p>
                        <button className='text-white rounded-md bg-blue-700 hover:bg-blue-500 duration-200 px-8 py-3 text-lg font-semibold'>Inactive</button>
                    </div>
                    </div>



                    <div className='my-12 flex items-center justify-start flex-col gap-6'>
                    <h3 className=' text-center leading-normal lg:leading-[50px] xll:leading-[60px] text-[30px] lg:text-[40px] xll:text-[50px] text-black-text font-medium font-worksans'>Account Management</h3>
                    <div className=' w-full sm:w-[70%] flex items-center justify-center flex-col gap-1 px-4 text-center py-5 bg-white border shadow-lg min-h-[200px]'>
                        <p className=' text-[18px] xsm:text-[20px]'>Would you like to close your account with Treeapp?</p>
                        <button className='text-red-600 hover:text-red-400 duration-200 px-6 py-3 rounded-sm text-lg font-semibold'>Delete Your Account</button>
                    </div>
                    </div>


                </main>
            </section>
        </div>
    )
}

export default Page