import BgNavbar from '@/components/BgNavbar'
import ContactCom from '@/components/ContactCom'
import React from 'react'

const page = () => {
  return (
    <div className='overflow-hidden h-full'>

       <section className='w-full mt-20 bg-[#f6f6f6]  max-w-[1800px] px-[30px] lg:px-[60px] xll:px-[120px] py-[4rem] mx-auto'>
       <div className='w-full flex flex-col items-center justify-center'>
           <h1 className='text-center mb-[20px] font-poppins text-[30px] xsm:text-[40px] lg:text-[55px] xll:text-[60px] font-[500] text-[#3d3d3d]'>  
             <span className='font-bold text-[#14a800]'>Contact Us</span>
           </h1>
           <p className=' mb-12 w-full xsm:w-[90%] leading-5 tracking-normal font-worksans mdd:w-[60%] text-center text-black-text text-sm xsm:text-[16px] '>Get in touch with us today to discuss how we can help you create a green profile and enhance your corporate social responsibility. Together, we can create a better future for our planet and our communities.</p>
         </div>
 
           <ContactCom />
 
 
       </section>
       </div>
  )
}

export default page