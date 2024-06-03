import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='overflow-hidden mt-12 h-full'>
    <section className='w-full flex min-h-[80vh] text-center items-center justify-center flex-col bg-white mt-10 max-w-[1800px] mb-[60px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[4rem] mx-auto'>

        <h2 className='font-bold text-4xl'>Payment Failed</h2>
        <p>Oops! It seems like there was an issue with your payment. Please try again later or
          contact support.</p>
        <Link className='bg-blue-900 hover:bg-blue-700 text-white mt-8 px-5 py-3 rounded-xl' href='/'>Back to home</Link>

    </section>
    </div>
  )
}

export default page