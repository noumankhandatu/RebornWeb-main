import BgNavbar from "@/components/BgNavbar";
import Image from "next/image";
import Link from "next/link";
import { FaHandshake, FaLightbulb, FaRecycle } from "react-icons/fa";
import { IoMdLeaf } from "react-icons/io";
import { MdTravelExplore } from "react-icons/md";


// Define metadata

const sec2CardData = [
  {
    title: 'Planting & Creation',
    icon: <FaHandshake className="text-green"  size={55} />,
    text1: "RebornGreen prioritizes Reforestation and Collaborations to combat climate change. Partnering with businesses, we offer eco-friendly solutions such as carbon offsetting and consultancy services, fostering sustainability.",
  },
  {
    title: 'Sustainability Pledge',
    icon: <FaRecycle className="text-green"  size={55} />,
    text1: "RebornGreen prioritizes Tree Planting and Partnerships to combat climate change. Collaborating with businesses, we offer eco-friendly solutions like carbon offsetting, promoting sustainability.",
  },
  {
    title: 'Tree Innovation',
    icon: <IoMdLeaf className="text-green"  size={55} />,
    text1: "We're dedicated to involving everyone in tree planting. Through innovation, we make tree planting easy and attractive, ensuring that individuals and organizations can play a part in preserving our planet.",
  },
  {
    title: 'Animal Promise',
    icon: <MdTravelExplore className="text-green" size={55} />,
    text1: "Our mission goes beyond tree planting. We prioritize animal welfare, dedicating a portion of our revenue to support organizations. Committed to improving animals' lives, in forests and beyond.",
  }
];


const Page = () => {



  return (
    <div className='overflow-hidden h-full'>

  

      <div style={{ backgroundImage: "url('/assets/images/aboutmain.jpg')" }} className=" mb-[80px] bg-cover w-full px-[30px] lg:px-[60px] xll:px-[120px] py-[6rem] mx-auto">
        <h3 className='  leading-normal text-center lg:leading-[70px] xll:leading-[80px] text-[30px] sm:text-[50px] lg:text-[60px] xll:text-[65px] text-white font-medium font-worksans'>About Us</h3>
      </div>


      {/* about sec 1  */}
      <section className='w-full max-w-[1800px] mb-[160px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto'>
        <div className='flex gap-4 flex-col lg:flex-row items-center justify-center'>
          <div className='w-full xsm:w-10/12 lg:flex-1 flex items-center text-center lg:text-start lg:items-start justify-center flex-col'>
            <h3 className='  leading-normal lg:leading-[50px] xll:leading-[60px] text-[25px] lg:text-[35px] xll:text-[45px] text-black-text font-medium font-worksans'>RebornGreen&apos;s Commitment to  <span className='text-green font-semibold'>Sustainability</span></h3>
            <p className='leading-[20px] mt-10 text-[15px] font-worksans text-black-text'>RebornGreen is a company that is dedicated to sustainability and reducing carbon emissions. We specialize in planting trees in areas where they&apos;re most needed, creating partnerships with businesses to offset their carbon footprint, and helping them establish eco-friendly profiles.
              <br /> <br />
              Our mission is to create a more sustainable world and mitigate the impact of climate change. In this page, we will explore how we approach this mission and the solutions we offer. </p>
          </div>
          <div className=' w-full mt-8 lg:mt-0 xsm:w-10/12 lg:flex-1 relative flex items-center justify-center flex-col'>
            <Image src="/assets/images/bussnessec2.jpeg" width={300} height={300} alt='bussnessec2' loading='lazy' className='w-full h-full rounded-lg' />
          </div>
        </div>

      </section>



      {/* Section too big card 2 */}
      <section className='w-full flex bg-[#f6f6f6] items-center justify-start flex-col  mt-10 max-w-[1800px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[4rem] mx-auto'>

        <h1 className='text-center mb-[20px] font-poppins text-[30px] xsm:text-[40px] lg:text-[55px] xll:text-[60px] font-[500] text-[#3d3d3d]'>
          <span className='font-bold text-[#14a800]'>Empower: </span>Green Mission
    </h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 mdd:grid-cols-3 xl:grid-cols-4 gap-6 items-center justify-center'>

          {
            sec2CardData?.map((item, index) => (
              <div key={index} className=" w-full h-full hover:scale-90 text-center p flex items-start justify-between bg-white duration-500 rounded-xl border ">
                <div className="gap-y-3 px-2 py-8  w-full h-full rounded-xl flex items-center justify-start flex-col  ">
                  {item.icon}
                  <h1 className='text-center font-poppins text-[20px] lg:text-[25px] font-[500] text-[#3d3d3d]'>{item.title}
                  </h1>
                  <p className=' text-[10px] text-center ssm:text-[12px] xsm:text-[14px] xll:text-[15px] leading-4 ssm:leading-5 xsm:leading-6 capitalize text-black-text font-worksans'>{item.text1}</p>
                </div>
              </div>
            ))
          }

        </div>
      </section>


      {/* About Section 3 */}
      <section className='w-full max-w-[1800px] my-[160px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto'>
        <div className='flex gap-20 flex-col lg:flex-row items-center justify-center'>

          <div className=' w-full mt-8 lg:mt-0 xsm:w-10/12 lg:flex-1  flex items-center justify-center flex-col'>
            <Image src="/assets/images/sec4img1.jpg" width={300} height={200} alt='bussnessec2' loading='lazy' className=' rounded-lg w-[400px] h-auto' />
          </div>

          <div className='w-full xsm:w-10/12 lg:flex-1 flex items-center text-center lg:text-start lg:items-start  justify-center flex-col'>
            <h3 className=' text-center lg:text-left mb-[20px] font-poppins text-[30px] xsm:text-[40px] lg:text-[45px] xll:text-[50px] font-[500] text-[#3d3d3d]'>The Benefits of Working <span className='text-green font-semibold'>with Us</span></h3>
            <p className='leading-[26px] text-sm sm:text-[16px]  font-poppins tracking-wide text-black-text'>Partnering with RebornGreen provides several benefits for businesses and organizations, including:</p>
            <ol className=" text-[10px] ssm:text-sm sm:text-[16px] text-left flex items-center justify-start flex-col gap-y-3 text-black-text mt-4 ml-8">
              <li className="list-decimal" >Contributing to global sustainability efforts: We are committed to creating sustainable solutions and mitigating the effects of climate change globally.</li>
              <li className="list-decimal" >Reducing your carbon footprint: By partnering with us, we help you identify ways to reduce your carbon footprint and offset the unavoidable emissions you produce.</li>
              <li className="list-decimal" >Establishing a green and eco-friendly profile: Investing in sustainability and carbon offsetting initiatives can enhance your brand reputation and attract environmentally-conscious consumers.</li>
              <li className="list-decimal" >Increasing engagement among increase their motivation and commitment to their work.employees: Engaging your employees in sustainability initiatives increase their motivation and commitment to their work.</li>
            </ol>
          </div>

        </div>

      </section>




      {/* Section too big card 2
      <section className='w-full flex bg-[#f6f6f6] items-center justify-start flex-col  mt-10 max-w-[1800px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[4rem] mx-auto'>

        <h1 className='text-center mb-[20px] font-poppins text-[30px] xsm:text-[40px] lg:text-[55px] xll:text-[60px] font-[500] text-[#3d3d3d]'>
          <span className='font-bold text-[#14a800]'>Empowering Communities & Carbon:</span> Green Mission
        </h1>

        <div className='flex gap-6 flex-wrap items-center justify-center'>

          <div className=" w-full sm:w-[80%] lg:w-[45%] hover:scale-90 text-center px-2 ssm:px-3 py-6 sm:py-20  lg:px-6 lg:py-4 flex items-start justify-between bg-white duration-500 h-full rounded-xl shadow-lg hover:shadow-2xl border min-h-auto lg:min-h-[350px]">
            <div className="gap-y-5  w-full h-full rounded-xl flex items-center justify-center flex-col  ">
              <h1 className='text-left font-poppins text-[18px] lg:text-[20px] xll:text-[25px] font-semibold text-[#3d3d3d]'>Inspiring and Engaging Individuals in Tree Planting with Innovative Approach</h1>
              <p className='text-left text-[10px] ssm:text-[12px] xsm:text-[14px] xll:text-[15px] leading-4 ssm:leading-5 xsm:leading-6 capitalize text-black-text font-worksans'>  We believe that every person and organization can contribute to the well-being of our planet. That’s why we are committed to finding innovative ways to inspire and engage individuals in tree planting activities. We strive to develop new technologies and services that make the idea of planting trees appealing and accessible to everyone.</p>
            </div>
          </div>


          <div className=" w-full sm:w-[80%] lg:w-[45%] hover:scale-90 text-center px-1 ssm:px-3 py-6 sm:py-20  lg:px-6 lg:py-4 flex items-start justify-between bg-white duration-500 h-full rounded-xl shadow-lg hover:shadow-2xl border min-h-auto lg:min-h-[350px]">
            <div className="gap-y-5  w-full h-full rounded-xl flex items-center justify-center flex-col  ">
              <h1 className='text-left font-poppins text-[18px] lg:text-[20px] xll:text-[25px] font-semibold text-[#3d3d3d]'>Commitment to Animal Welfare alongside Tree Planting Efforts</h1>
              <p className='text-left text-[10px] ssm:text-[12px] xsm:text-[14px] xll:text-[15px] leading-4 ssm:leading-5 xsm:leading-6 capitalize text-black-text font-worksans'>Our mission goes beyond just planting trees. We also recognize the importance of animal welfare in creating a better world. With that in mind, a part of our revenue is dedicated to supporting animal welfare organizations. We believe that animals deserve a good life, both inside and outside the forest, and we are committed to making a difference for them.</p>
            </div>
          </div>

        </div>
      </section> */}
    </div>
  )
}

export default Page
