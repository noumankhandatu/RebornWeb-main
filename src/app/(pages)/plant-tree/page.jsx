import StepperComp from '@/components/Stepper'
import React from 'react'

const page = () => {
  return (
    <div className='overflow-hidden mt-12 h-full'>



      <section className='w-full flex items-center justify-start flex-col bg-white mt-10 max-w-[1800px] mb-[60px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[4rem] mx-auto'>
        <StepperComp />
      </section>
    </div>
  )
}

export default page