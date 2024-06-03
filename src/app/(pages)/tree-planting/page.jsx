'use client'
import { motion } from 'framer-motion'
import { FaCalculator, FaSearch } from 'react-icons/fa'
import { PiPottedPlant } from 'react-icons/pi'
import { LiaSearchSolid } from 'react-icons/lia'
import Image from 'next/image'
import ProjectsCard from '@/components/ProjectsCard'
import Link from 'next/link'




const workse2cData = [
  {
    icon: <FaCalculator size={40} className='text-green' />,
    title: 'No double counting',
    des: 'We ensure that the carbon sequestered from our trees is not counted more than once. Each tree is planted directly due to an action by a user or business partner.',
  },
  {
    icon: <PiPottedPlant size={40} className='text-green' />,
    title: 'Longevity',
    des: 'Our tree planting sites are protected by local government and community contracts. By doing so, land is safeguarded from being bought or used for a different purpose.',
  },
  {
    icon: <LiaSearchSolid size={40} className='text-green' />,
    title: 'Transparency',
    des: 'With 150+ species planted across our global sites, we pride ourselves on transparency.',
  },
]

const sec3TimelineData = [
  {
    id: 1,
    desc: "Trees must benefit the local communities in planting zones.",
  },
  {
    id: 2,
    desc: "Contracts between landowners and local governments are a necessity and last 15+ years.",
  },
  {
    id: 3,
    desc: "Financial statements & external audits are reviewed by Treeapp in detail.",
  },
  {
    id: 4,
    desc: "Other factors such as access to sites, fencing and local seed providers are all closely evaluated. This enables us to have 85%+ of trees reaching maturity.",
  },
]

const page = () => {
  return (
    <div className='overflow-hidden h-full'>


      <div style={{ backgroundImage: "url('/assets/images/treeplantmain.jpg')" }} className=" flex-col h-[80vh] flex items-center justify-center bg-cover w-full  px-[30px] relative lg:px-[60px] xll:px-[120px] py-[6rem] mx-auto">
        <motion.h3 initial={{ y: 200 }} viewport={{ once: true }} whileInView={{ y: 0 }} transition={{ duration: 0.5 }} className=' z-[1] leading-normal text-center lg:leading-[70px] xll:leading-[80px] text-[30px] sm:text-[50px] lg:text-[60px] xll:text-[65px] text-white font-medium font-worksans'><span className='text-green'>Tree-Tastic:  </span>Planting for Success!</motion.h3>
        <motion.p initial={{ y: 200 }} viewport={{ once: true }} whileInView={{ y: 0 }} transition={{ duration: 0.5 }} className=' w-full font-worksans mt-6 sm:w-[70%] mdd:w-[60%] text-white z-[1] text-center'>Discover Our Commitment to Sustainable and Transparent Operations!</motion.p>

        <div className='w-full h-full absolute top-0 left-0 bg-black opacity-50 z-0'></div>
      </div>



      {/* our work section 1 */}
      <section className='w-full flex items-center justify-start flex-col bg-white mt-10 max-w-[1800px] mb-[60px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[4rem] mx-auto'>
        <motion.div initial={{ y: 200 }} viewport={{ once: true }} whileInView={{ y: 0 }} transition={{ duration: 0.5 }} className='w-full flex flex-col items-center justify-center'>
          <h1 className='text-center mb-[20px] font-poppins text-[30px] xsm:text-[35px] lg:text-[50x] xll:text-[55px] font-[500] text-[#3d3d3d]'>
            <span className='text-[#14a800]'>Our </span> working principles
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 mdd:grid-cols-3 items-center justify-center gap-10 flex-wrap">
          {
            workse2cData?.map((item, index) => (
              <div key={index} className=" transition-all duration-300 hover:shadow-2xl px-4 mdd:px-9 h-[300px] gap-8 text-left py-10 shadow-sm bg-white flex items-start flex-col justify-start">
                <div className='flex items-center gap-5'>
                  <p>{item.icon}</p>
                  <h5 className='font-poppins font-semibold text-[18px]'>{item.title}</h5>
                </div>
                <p className='font-worksans font-normal leading-[23px] text-black-text text-[15px]'>{item.des}</p>
              </div>
            ))

          }
        </div>




      </section>




      {/* our work section 1 */}
      <section className='w-full flex items-center justify-start flex-col bg-white mt-10 max-w-[1800px]  px-[30px] lg:px-[60px] xll:px-[120px] mx-auto'>
        <motion.div initial={{ y: 200 }} viewport={{ once: true }} whileInView={{ y: 0 }} transition={{ duration: 0.5 }} className='w-full flex flex-col items-center justify-center'>
          <h1 className='text-center mb-[20px] font-poppins text-[30px] xsm:text-[35px] lg:text-[50x] xll:text-[55px] font-[500] text-[#3d3d3d]'>
            Why plant trees with us?
          </h1>
          <p className='text-[16px] font-worksans text-green font-semibold sm:text-[18px]'>Treeapp helps grow your positive impact on the planet in 3 steps</p>
        </motion.div>

        <div className="w-full my-10">
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <div className="timeline-middle mx-3">
                <Image src='/assets/images/ecology.png' alt='Images' width={70} height={50} className='' />
              </div>
              <div className="timeline-start md:text-end mb-10">

                <div className="text-[30px] font-poppins font-semibold">Acknowledge</div>
                Forests are crucial for all life, but climate change is escalating faster than we can manage. Coastal areas, like Madagascar, endure prolonged droughts devastating communities and farms. The answer: urgent ecosystem restoration.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle mx-3">
                <Image src='/assets/images/list__image-remote-worker.svg' alt='Images' width={70} height={50} className='' />
              </div>
              <div className="timeline-end mb-10">

                <div className="text-[30px] font-poppins font-semibold">Monitor</div>
                We&#39;re documenting our sites on the open-source platform restor.eco, a collaborative effort by Crowther Lab, ETH Zurich, and Google to democratize reforestation. Restor provides public access to our sites, allowing anyone to view them. Using satellite imagery, we analyze land-use changes over time with research-backed methods.
              </div>
              <hr />
            </li>

            <li>
              <div className="timeline-middle mx-3">
                <Image src='/assets/images/ecology.png' alt='Images' width={70} height={50} className='' />
              </div>
              <div className="timeline-start md:text-end mb-10">

                <div className="text-[30px] font-poppins font-semibold">Measure</div>
                We employ allometric equations, onsite data, and academic sources to accurately estimate carbon sequestration in our forests over their lifespan. With Treeapp, monitor your carbon footprint and determine the number of trees needed for carbon neutrality.
              </div>
              <hr />
            </li>
          </ul>
        </div>
      </section>


      {/* sec 2  */}
      <section className='bg-[#f6f6f6]'>
        <div className='w-full max-w-[1800px] my-[40px]   px-[30px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto'>



          <motion.div initial={{ y: 200, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ type: 'tween', duration: 0.5 }} className={`flex gap-15 flex-col lg:flex-row my-20 items-center justify-center`}>
            <Image src='/assets/images/tpp.jpg' width={700} height={500} alt='bussnessec2' loading='lazy' className=' rounded-lg w-full sm:w-[80%] mdd:w-[50%] h-auto' />
            <div className='  w-full mt-8 lg:mt-0 xsm:w-10/12 lg:flex-1  flex items-center justify-center flex-col'>

              <div className='w-full xsm:w-10/12 lg:flex-1 flex items-center text-center lg:text-start lg:items-start  justify-center flex-col'>

                <h3 className=' text-center lg:text-left mb-[20px] font-poppins text-[25px] xsm:text-[30px] lg:text-[35px] xll:text-[40px] font-[500] text-green'>Uniting Experts for Impactful Tree-Planting</h3>
                <p className='leading-[30px] text-sm sm:text-[16px]  font-worksans tracking-wide text-black-text'>Tree planting requires expertise. Our expert board ensures care and knowledge in growing nurseries.</p>
              </div>

            </div>
          </motion.div>
        </div>
      </section>




      {/* sec 3  */}
      <section className='w-full flex items-center justify-start flex-col bg-white  max-w-[1800px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[4rem] mx-auto'>
        <motion.div initial={{ y: 200 }} viewport={{ once: true }} whileInView={{ y: 0 }} transition={{ duration: 0.5 }} className='w-full flex flex-col items-center justify-center'>
          <h1 className='text-center mb-[20px] font-poppins text-[30px] xsm:text-[35px] lg:text-[50x] xll:text-[55px] font-[500] text-[#3d3d3d]'>
            Selecting Our Planting Partner&#39;s
          </h1>
          <p className='text-[16px] font-worksans text-green font-semibold sm:text-[18px]'>Our forestry board meticulously assesses partner&#39;s planting methods.</p>
        </motion.div>

        <motion.div initial={{ y: 200, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ type: 'tween', duration: 0.5 }} className='flex gap-28 flex-col lg:flex-row my-20 items-center justify-center'>

          <div className='  w-full mt-8 lg:mt-0 xsm:w-10/12 lg:flex-1  flex items-center justify-center flex-col'>
            <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
              {
                sec3TimelineData?.map((item, index) => {
                  return (
                    <li key={item.id}>
                      <hr />
                      <div className="timeline-middle w-[80px] text-white text-2xl h-[80px] flex items-center justify-center font-semibold bg-yellow-500 rounded-full mx-3">
                        {item.id}
                      </div>
                      <div className="timeline-end bg-white shadow-md px-4 py-6 mb-10">
                        <p className='text-black-text text-[16px] font-worksans'>{item.desc}</p>
                      </div>
                      <hr />
                    </li>

                  )
                })
              }
            </ul>
          </div>
          <Image src='/assets/images/farmer.jpg' width={600} height={600} alt='bussnessec2' loading='lazy' className=' rounded-lg w-full sm:w-[80%] mdd:w-[50%] h-auto' />
        </motion.div>

      </section>


      {/* sec 4  */}
      <section className='bg-[#f6f6f6]'>
        <div className='w-full max-w-[1800px] my-[40px]   px-[30px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto'>



          <motion.div initial={{ y: 200, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ type: 'tween', duration: 0.5 }} className={`flex gap-15 flex-col lg:flex-row my-20 items-center justify-center`}>
            <Image src='/assets/images/bussnessmain.jpg' width={600} height={600} alt='bussnessec2' loading='lazy' className=' rounded-lg w-full sm:w-[80%] mdd:w-[50%] h-auto' />
            <div className='  w-full mt-8 lg:mt-0 xsm:w-10/12 lg:flex-1  flex items-center justify-center flex-col'>

              <div className='w-full xsm:w-10/12 lg:flex-1 flex items-center text-center lg:text-start lg:items-start  justify-center flex-col'>

                <h3 className=' text-center lg:text-left mb-[20px] font-poppins text-[25px] xsm:text-[30px] lg:text-[35px] xll:text-[40px] font-[500] text-green'>Tree Planting in the UK</h3>
                <p className='leading-[30px] text-sm sm:text-[16px]  font-worksans tracking-wide text-black-text'>Plant trees for your company in our local sites!</p>
                <p>Contact us at <Link className='underline font-semibold text-green' href='mailto:hello@thetreeapp.org' >hello@thetreeapp.org</Link></p>
              </div>

            </div>
          </motion.div>


          <motion.div initial={{ y: 200, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ type: 'tween', duration: 0.5 }} className={`flex gap-15 flex-col lg:flex-row my-20 items-center justify-center`}>

            <div className='  w-full mt-8 lg:mt-0 xsm:w-10/12 lg:flex-1  flex items-center justify-center flex-col'>

              <div className='w-full xsm:w-10/12 lg:flex-1 flex items-center text-center lg:text-start lg:items-start  justify-center flex-col'>

                <h3 className=' text-center lg:text-left mb-[20px] font-poppins text-[25px] xsm:text-[30px] lg:text-[35px] xll:text-[40px] font-[500] text-green'>Our 2023 Impact Report </h3>
                <p className='leading-[30px] text-sm sm:text-[16px]  font-worksans tracking-wide text-black-text'>
                  Discover the profound impact we&#34;ve achieved year after year. Dive into our comprehensive 2023 Impact Report to witness our accomplishments and unveil our ambitious future endeavors!
                </p>

              </div>
            </div>
            <Image src='/assets/images/aboutmain.jpg' width={600} height={600} alt='bussnessec2' loading='lazy' className=' rounded-lg w-full sm:w-[80%] mdd:w-[50%] h-auto' />
          </motion.div>

          <div className='flex items-center gap-10 justify-center flex-col'>
            <h1 className=' text-center mb-[20px] font-poppins text-[25px] xsm:text-[30px] lg:text-[35px] xll:text-[40px] font-[500] text-green'>Offset the carbon footprint of your business</h1>
            <div className='flex flex-wrap items-center justify-center gap-x-10 w-full'>
              <Image src='/assets/images/vcs.svg' alt='Vsc Logo' width={300} height={200} className=' w-[150px] xsm:w-[200px] md:w-[250px] h-auto' />
              <Image src='/assets/images/gold-standard.svg' alt='gold-standard Logo' width={300} height={200} className=' w-[150px] xsm:w-[200px] md:w-[250px] h-auto' />
            </div>
            <p className='text-[14px] font-poppins'>Treeapp retires carbon credits on behalf of yourself or your organization. Receive your carbon credit certificate and share your impact.</p>
            <Link href='/contact' className='btn'>Contact Us</Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default page