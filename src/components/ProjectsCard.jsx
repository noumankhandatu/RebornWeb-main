import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'

const ProjectsCard = ({icon,title,desc,btnLink,image,reverse}) => {
  return (
    <motion.div initial={{y:200,opacity:0}} whileInView={{y:0,opacity:1}} transition={{type:'tween',duration:0.5}} className={`flex gap-15 ${reverse ? 'flex-col-reverse lg:flex-row-reverse' : 'flex-col lg:flex-row' } my-20 items-center justify-center`}>

    <div className='  w-full mt-8 lg:mt-0 xsm:w-10/12 lg:flex-1  flex items-center justify-center flex-col'>

      <div className='w-full xsm:w-10/12 lg:flex-1 flex items-center text-center lg:text-start lg:items-start  justify-center flex-col'>
        <p>{icon}</p>
        <h3 className=' text-center lg:text-left mb-[20px] font-poppins text-[25px] xsm:text-[30px] lg:text-[35px] xll:text-[40px] font-[500] text-green'>{title}</h3>
        <p className='leading-[30px] text-sm sm:text-[16px]  font-worksans tracking-wide text-black-text'>{desc}</p>
        <Link href={btnLink} className='btn my-10'>Read More</Link>
      </div>

    </div>


    <Image src={image} width={600} height={600} alt='bussnessec2' loading='lazy' className=' rounded-lg w-full sm:w-[80%] mdd:w-[50%] h-auto' />



  </motion.div>
  )
}

export default ProjectsCard