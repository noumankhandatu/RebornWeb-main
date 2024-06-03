import React from 'react'

const Integration = ({data}) => {

    console.log(data)
    
    return (
        <div className='bg-white w-full  flex relative items-start flex-col justify-start px-3 min-h-screen mt-4 shadow-2xl py-10 bg-cover bg-no-repeat rounded-xl '>


          {
            data?.map((item,index) =>{
                return (
                    <div key={index}>
                          {/* --- guide  */}
            <div className='w-full text-center px3 sm:px-5 mdd:px-10 xlg:px-16 h-full'>
                <h1 className='z-10 text-center leading-normal lg:leading-[50px] xll:leading-[60px] text-[25px] lg:text-[35px] xll:text-[45px] my-4 text-black font-medium font-worksans'>{item.name}</h1>
                <p className='text-[14px] mdd:text-[16px] xlg:text-lg font-normal font-poppins text-[#444141]'>{item.desc}</p>

                {item.li && (
             <ul className='api-li my-3 px-5'>
              {item.liData.map((li, index) => (
                <li key={index} style={{ listStyle: 'decimal!important' }} className='font-poppins leading-6 text-[12px] xsm:text-[14px]  xlg:text-[16px] text-[#343a40'>{li}</li>
              ))}
            </ul>
          )}
         

                <button className='text-white ml-4 my-3 bg-green hover:bg-blue-500 rounded-md px-6 tracking-wide z-10 font-worksans py-3'>View the Docs </button>
            </div>



            <div className='w-full px3 sm:px-5 mdd:px-10 xlg:px-16 text-center border-t my-10 h-full'>
                <h1 className='z-10 text-center leading-normal  lg:leading-[50px] xll:leading-[60px] text-[25px] lg:text-[35px] xll:text-[45px] my-4 text-black font-medium font-worksans'>{item.sTitle}</h1>
                <p className='text-[14px] mdd:text-[16px] xlg:text-lg font-normal font-poppins text-[#444141]'>{item.sDes}</p>



                <button className='text-white block w-full  my-3 bg-[#be9131] hover:bg-green rounded-md px-6 tracking-wide z-10 font-worksans py-3'> + Add a New Api Key </button>
            </div>

            {item.TData && <div className='w-full text-center px3 sm:px-5 mdd:px-10 xlg:px-16 border-t my-10 h-full'>
                <h1 className='z-10 text-center leading-normal  lg:leading-[50px] xll:leading-[60px] text-[25px] lg:text-[35px] xll:text-[45px] my-4 text-black font-medium font-worksans'>{item.tTitle}</h1>
                <p className=' text-[14px] mdd:text-[16px] xlg:text-lg font-normal font-poppins text-[#444141]'>{item.TDes}</p>
            </div>}
                    </div>
                )
            })
          }



        </div>
    )
}

export default Integration