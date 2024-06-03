'use client'
import CardCarousel from '@/components/Coursel';
import Image from 'next/image';
import { easeIn, easeInOut, motion } from 'framer-motion'
import BussnesCard from '@/components/BussnesCard';
import BussnesCardReversed from '@/components/BussnesCardReversed';
import { FaBalanceScale, FaGlobe, FaGlobeAfrica, FaLeaf, FaRecycle, FaTree } from 'react-icons/fa';
import Link from 'next/link';
import ProjectsCard from '@/components/ProjectsCard';

// export const metadata = {
//   title: "Explore Our Comprehensive Services | Joyn Digital",
//   description: "Explore our comprehensive range of digital services designed to help businesses thrive in today's digital landscape. From web development to SEO and digital marketing, we've got you covered.",
// };

const sec3CardData = [
  {
    title: "Creating Your Green Profile-How We Can Help",
    desc: "Elevate your eco-profile with our tailored support and solutions. Let us guide you towards sustainable practices for a greener future.",
    img: "/assets/images/enver-protection.jpg",
  },
  {
    title: "Corporate Social Responsibility",
    desc: "Many businesses want to give back to their communities, and we can help you do that in a way that also promotes sustainability. We create partnerships that enable businesses to sponsor tree planting initiatives, educate their employees and customers on sustainable practices, and make a positive impact on the environment.",
    img: "/assets/images/csr.jpg",
  },
  {
    title: "Tree Planting Projects",
    desc: "Our programs simplify business participation in tree planting for a sustainable environment. Tailored to your budget and goals, we ensure trees planted make a positive impact. With streamlined processes, trusted partnerships, and innovative solutions, we prioritize transparency and gender equality.",
    img: "/assets/images/tpp.jpg",
  },
]


const projCardDara = [
  {
    icon: <FaRecycle size={45} className='text-green mb-3' />,
    title: "Carbon Offset Projects",
    desc: "Businesses seek to shrink their carbon footprint, offsetting emissions they can't avoid. Our certified projects gauge your footprint, tally needed carbon credits for net-zero, or goal fulfillment. We guide you toward carbon neutrality, setting you ahead of rivals.",
    btnLink: "/carbon-offsets",
    img: "/assets/images/cop.jpg",
    reverse: false,
  },
  {
    icon: <FaBalanceScale size={45} className='text-green mb-3' />,
    title: "Sustainability Consulting",
    desc: "We provide holistic consulting to align businesses with sustainable practices. Collaborating closely, we pinpoint areas for environmental improvement and tailor programs to your needs.",
    btnLink: "/carbon-offsets",
    img: "/assets/images/soutbuss.jpg",
    reverse: true,
  },
  {
    icon: <FaLeaf size={45} className='text-green mb-3' />,
    title: "Green Marketing",
    desc: "After establishing your green profile, we assist in community promotion. Green marketing enhances brand image, setting you apart in today's market. Transparently showcasing sustainable practices fosters trust between your company and consumers.",
    btnLink: "/carbon-offsets",
    img: "/assets/images/grm.jpg",
    reverse: false,
  },
]

const page = () => {
  return (
    <div className='overflow-hidden h-full'>



      <div style={{ backgroundImage: "url('/assets/images/bussnessmain.jpg')" }} className=" flex-col h-[80vh] flex items-center justify-center bg-cover w-full  px-[30px] relative lg:px-[60px] xll:px-[120px] py-[6rem] mx-auto">
        <motion.h3 initial={{y:200}} viewport={{once:true}} whileInView={{y:0}} transition={{duration:0.5}} className=' z-[1] leading-normal text-center lg:leading-[70px] xll:leading-[80px] text-[30px] sm:text-[50px] lg:text-[60px] xll:text-[65px] text-white font-medium font-worksans'>For Business</motion.h3>
        <motion.p initial={{y:200}} viewport={{once:true}} whileInView={{y:0}} transition={{duration:0.5}} className=' w-full font-worksans mt-6 sm:w-[70%] mdd:w-[60%] text-white z-[1] text-center'>We support hundreds of brands with their sustainability goals by funding climate projects and planting trees where they’re most needed.</motion.p>
    
        <div className='w-full h-full absolute top-0 left-0 bg-black opacity-50 z-0'></div>
      </div>



      <section className='w-full flex items-center justify-start flex-col bg-white mt-10 max-w-[1800px] mb-[60px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[4rem] mx-auto'>
        <motion.div initial={{y:200}} viewport={{once:true}} whileInView={{y:0}} transition={{duration:0.5}} className='w-full flex flex-col items-center justify-center'>
          <h1 className='text-center mb-[20px] font-poppins text-[30px] xsm:text-[40px] lg:text-[55px] xll:text-[60px] font-[500] text-[#3d3d3d]'> 
            <span className='font-bold text-[#14a800]'>Transform</span> Your Business with Quick Impact
          </h1>
          <p className=' mb-12 w-full xsm:w-[90%] leading-5 tracking-normal font-worksans mdd:w-[60%] text-center text-black-text text-sm xsm:text-[16px]'>We empower brands to achieve sustainability goals by funding climate projects and planting trees in critical areas.</p>
        </motion.div>
          
        <motion.div initial={{y:200}} viewport={{once:true}} whileInView={{y:0}} transition={{duration:0.5}} className='flex items-center mt-6 justify-center gap-7 sm:gap-16 flex-wrap'>
            <Link className=' w-[340px] sm:w-[500px] hover:scale-110 duration-300 flex items-center justify-center flex-col text-center px-4 py-5 min-h-[300px] bg-green  z-10 rounded-xl ' href='/plant-tree'>
              <p><FaTree className='text-white' size={25} /></p>
              <h4 className='text-2xl text-white font-semibold'>Plant trees for my company</h4>
              <p className='text-[16px] text-white font-worksans pt-2'>Reach your sustainability objectives by growing your company forest.</p>
            </Link>

            <Link className=' w-[340px] sm:w-[500px] hover:scale-110 duration-300 flex items-center justify-center flex-col text-center px-4 py-5 min-h-[300px] bg-green  z-10 rounded-xl ' href='/plant-tree'>
              <p><FaGlobeAfrica className='text-white' size={25} /></p>
              <h4 className='text-2xl text-white font-semibold'>Offset your business</h4>
              <p className='text-[16px] text-white font-worksans pt-2'>Choose what you want to offset through our carbon projects & track your impact</p>
            </Link>
        </motion.div>
          </section>
      {/* section 1  */}

      <CardCarousel />


      {/* section 2  */}
      <section className='bg-[#f6f6f6]'>


        <div className='w-full flex items-center justify-start flex-col  mt-10 max-w-[1800px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[4rem] mx-auto'>

          <h1 className='text-center my-[80px] font-poppins text-[30px] xsm:text-[40px] lg:text-[55px] xll:text-[60px] font-[500] text-[#3d3d3d]'>
            Importance of Planting Trees
          </h1>

          <div className='flex items-center gap-5 xsm:gap-16 justify-center flex-wrap'>
            <div className='bg-white w-[120px] xsm:w-[150px] sm:w-[200px] text-center px-3 sm:px-6 h-[160px] xsm:h-[220px] gap-[10px] flex flex-col items-center justify-center shadow-sm hover:shadow-xl duration-300 rounded-lg py-4'>
              <Image src='/assets/images/cleanair.png' className='h-full w-[80px] xsm:w-[150px] object-cover' alt='clean air image' width={150} height={80} />
              <p className='font-bold text-green font-poppins tracking-wide text-sm xsm:text-[16px] sm:text-xl'>Cleaner air </p>
            </div>
            <div className='bg-white w-[120px] xsm:w-[150px] sm:w-[200px] text-center px-3 sm:px-6 h-[160px] xsm:h-[220px] gap-[10px] flex flex-col items-center justify-center shadow-sm hover:shadow-xl duration-300 rounded-lg py-4'>
              <Image src='/assets/images/biodiversity.png' className='h-full w-[80px] xsm:w-[150px] object-cover' alt='clean air image' width={150} height={80} />
              <p className='font-bold text-green font-poppins tracking-wide text-sm xsm:text-[16px] sm:text-xl'>Biodiversity support </p>
            </div>
            <div className='bg-white w-[120px] xsm:w-[150px] sm:w-[200px] text-center px-3 sm:px-6 h-[160px] xsm:h-[220px] gap-[10px] flex flex-col items-center justify-center shadow-sm hover:shadow-xl duration-300 rounded-lg py-4'>
              <Image src='/assets/images/corbon.png' className='h-full w-[80px] xsm:w-[150px] object-cover' alt='clean air image' width={150} height={80} />
              <p className='font-bold text-green font-poppins tracking-wide text-sm xsm:text-[16px] sm:text-xl'>Carbon sequestration  </p>
            </div>
            <div className='bg-white w-[120px] xsm:w-[150px] sm:w-[200px] text-center px-3 sm:px-6 h-[160px] xsm:h-[220px] gap-[10px] flex flex-col items-center justify-center shadow-sm hover:shadow-xl duration-300 rounded-lg py-4'>
              <Image src='/assets/images/climate.png' className='h-full w-[80px] xsm:w-[150px] object-cover' alt='clean air image' width={150} height={80} />
              <p className='font-bold text-green font-poppins tracking-wide text-sm xsm:text-[16px] sm:text-xl'>Climate regulation</p>
            </div>
            <div className='bg-white w-[120px] xsm:w-[150px] sm:w-[200px] text-center px-3 sm:px-6 h-[160px] xsm:h-[220px] gap-[10px] flex flex-col items-center justify-center shadow-sm hover:shadow-xl duration-300 rounded-lg py-4'>
              <Image src='/assets/images/comunity.png' className='h-full w-[80px] xsm:w-[150px] object-cover' alt='clean air image' width={150} height={80} />
              <p className='font-bold text-green font-poppins tracking-wide text-sm xsm:text-[16px] sm:text-xl'>Community well-being </p>
            </div>
          </div>

        </div>
      </section>




      {/* Enverment Protection Section 3 */}
      <section className='w-full max-w-[1800px] my-[100px] sm:my-[160px] px-[30px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto'>

        {
          sec3CardData.map((item, index) => (
            index % 2 !== 0 ? (<BussnesCard key={index} title={item.title} desc={item.desc} img={item.img} />) : (
              <BussnesCardReversed key={index} title={item.title} desc={item.desc} img={item.img} />
            )
          ))
        }

      </section>


      {/* Project Card Section 3 */}
      <section className='bg-[#f6f6f6]'>
        <div className='w-full max-w-[1800px] my-[100px] sm:my-[160px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto'>
          {projCardDara.map((item, index) => (
            <ProjectsCard key={index} icon={item.icon} title={item.title} desc={item.desc} btnLink={item.btnLink} image={item.img} reverse={item.reverse} />
          ))}
        </div>
      </section>


      <motion.section  initial={{y:200}} viewport={{once:true}} whileInView={{y:0}} transition={{duration:0.5}} className='bg-[#1b2f47]'>
        <div className='w-full max-w-[1800px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto'>

          <div className='flex items-center flex-wrap justify-center gap-5 sm:justify-between'>
         <div className=' w-full sm:w-[70%] mdd:w-[60%]'>
         <h1 className='text-center my-[40px] font-poppins text-[30px] xsm:text-[40px] lg:text-[55px] xll:text-[60px] font-[500] text-sunshine-yellow'>
          Green Partnerships Made
          </h1>
            <p className=' text-center text-white tracking-wide font-poppins text-[16px] '>Experience the Benefits: Cost savings, Enhanced brand image, Increased customer loyalty, Improved employee morale</p>
         </div>

          <Link href='/contact' className='btn ' >Contact Us</Link>
          </div>


        </div>

      </motion.section>



    </div>
  )
}

export default page