import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='overflow-hidden h-full'>



    {/* about sec 1  */}
    <section style={{ backgroundImage: "url('/assets/images/aboutmain.jpg')" }} className='w-full bg-[#f5f5f6] bg-cover object-center max-w-[1800px]  px-[10px] xsm:px-[30px] lg:px-[60px] xll:px-[120px] py-[6rem] mx-auto'>
        <div className='flex w-full min-h-screen items-center justify-center'>
            <form className='max-w-[600px] px-3 xsm:px-5 py-10 rounded-lg w-[500px] bg-white shadow-lg'>
                <h2 className='text-left font-worksans text-[20px] xsm:text-[25px] lg:text-[30px] xll:text-[35px] uppercase font-semibold text-[#3d3d3d]'>Forget Password </h2>
                <div>
                    <div className='flex my-4 flex-col'>
                        <label className='mb-1'>Email</label>
                        <input type="email" placeholder='Email' className='outline-none border-2 rounded-md shadow-lg border-[#443d3d82] px-4 py-2' />
                    </div>                
                </div>

                <div className='flex flex-col gap-4 items-center justify-start w-full'>
                <Link href='/Reset-password' className='w-full text-center px-7 py-3 bg-blue-900 hover:bg-blue-700 duration-300 text-white rounded-lg font-poppins text-[16px] xll:text-[18px] font-medium tracking-wide'>Reset Password</Link>

                <p>Login Here<Link className='font-semibold hover:text-blue-900 text-green' href='/login'> Login</Link></p>
               
                </div>
            </form>
        </div>
    </section>
</div>
  )
}

export default page