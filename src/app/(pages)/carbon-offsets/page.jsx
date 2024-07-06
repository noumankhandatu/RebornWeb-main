'use client';
import TracingBeam from '@/components/TracingBeam';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link'

const items = [
  {
    title: 'Energy Efficiency Audits',
    content: 'Identify areas for improvement in your facilities and implement energy-saving upgrades like LED lighting or smart thermostats.',
  },
  {
    title: 'Renewable Energy Procurement',
    content: 'Invest in renewable energy sources like solar or wind power to reduce reliance on fossil fuels.',
  },
  {
    title: 'Employee Engagement',
    content: 'Encourage eco-conscious behaviors among employees by promoting carpooling, and energy-saving practices in the workplace.',
  },
  {
    title: 'Circular Economy Principles',
    content: 'Embrace practices like product lifecycle optimization, waste reduction, and responsible recycling.',
  },
];

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(null);



  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="overflow-hidden h-full">
      <div
        style={{ backgroundImage: "url('/Untitled design - 2024-05-15T170119.931.png')" }}
        className="flex-col h-[95vh] flex items-center justify-center bg-cover w-full px-[30px] relative lg:px-[60px] xll:px-[120px] py-[6rem] mx-auto"
      >
        <motion.h3
          initial={{ y: 200 }}
          viewport={{ once: true }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="z-[1] leading-normal text-center lg:leading-[70px] xll:leading-[80px] text-[30px] sm:text-[50px] lg:text-[30px] xll:text-[30px] text-white font-medium font-worksans"
        >
          <span className="text-white">Start Your Net Zero Journey!</span>
        </motion.h3>
        <div className="w-full h-full absolute top-0 left-0 bg-black opacity-50 z-0"></div>
      </div>

      {/* Section 1 */}
      <section className="bg-[#F9F9F9]">
        <div className="w-full max-w-[1800px] my-[40px] px-[30px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto">
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: 'tween', duration: 0.5 }}
            className="flex gap-15 flex-col lg:flex-row my-20 items-center justify-center"
          >
            <div className="w-full mt-8 lg:mt-0 xsm:w-10/12 lg:flex-1 flex items-center justify-center flex-col">
              <div className="w-full xsm:w-10/12 lg:flex-1 flex items-center gap-24 text-center lg:text-start lg:items-start justify-center lg:flex-row flex-col">
                <h3 className="font-black text-center lg:text-left mb-[20px] font-poppins text-[25px] xsm:text-[30px] lg:text-[35px] xll:text-[40px] text-[#223645] border-b-8 border-b-green">
                  What is carbon&#39;offsetting?
                </h3>
                <p className="leading-[30px] text-sm sm:text-[16px] font-worksans tracking-wide text-black-text">
                  Carbon offsetting is a way for businesses and individuals to address the greenhouse gas emissions they can’t eliminate through their operations. It allows you to balance your environmental impact by supporting projects that actively reduce or remove carbon dioxide from the atmosphere.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 1.2 */}
      <section className="bg-white">
        <div className="w-full max-w-[1800px] my-[40px] px-[30px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto">
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: 'tween', duration: 0.5 }}
            className="flex gap-15 flex-col lg:flex-row my-20 items-center justify-center"
          >
            <div className="w-full mt-8 lg:mt-0 xsm:w-10/12 lg:flex-1 flex items-center justify-center flex-col">
              <div className="w-full xsm:w-10/12 lg:flex-1 flex items-center gap-24 text-center lg:text-start lg:items-start justify-center lg:flex-row flex-col">
                <h3 className="font-[500] w-full text-center lg:text-left mb-[20px] font-poppins text-[25px] xsm:text-[30px] lg:text-[35px] xll:text-[40px]">
                  Net zero starts with <span style={{ color: '#9E5BE5' }}> less!</span>
                </h3>
                <div>
                  <h3 className="font-black text-center lg:text-left mb-[20px] font-poppins text-[25px] xsm:text-[30px] lg:text-[35px] xll:text-[40px] text-[#223645]">
                    Minimize emissions first
                  </h3>
                  <p className="leading-[30px] text-sm sm:text-[16px] font-worksans tracking-wide text-black-text">
                    The journey to net zero emissions requires a collaborative effort, and businesses play a crucial role. Focusing on reduction is the cornerstone of achieving net zero. Every ton of CO2 your company avoids releasing translates to a significant positive impact.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* accordions */}

      <section className="bg-white">
        <div style={{ boxShadow: '0px 0px 25px 0px rgba(220.5, 220.5, 220.5, 0.5)', borderRadius: '6px', position: 'relative', zIndex: 10, background: 'white' }} className="w-[80%] mx-auto p-6">
          {items.map((item, index) => (
            <div style={{ zIndex: 10 }} key={index}>
              <div
                className="w-full flex justify-between items-center bg-white p-4 cursor-pointer rounded-lg"
                onClick={() => handleToggle(index)}
              >
                <h2 className="text-black text-lg">{item.title}</h2>
                <span>{activeIndex === index ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                )}</span>
              </div>
              {activeIndex === index && item.content && (
                <motion.div
                  initial={{ y: -20, opacity: 0.2 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0.2, transition: { duration: 0.2, type: "tween" } }}
                  transition={{ duration: 0.35, type: "tween" }}
                  className="text-sm text-neutral-700 p-4"
                >
                  <p className="text-gray-700">{item.content}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
        <div style={{ height: '100px', background: '#54CA41', borderRadius: 15, position: "relative", bottom: 50, zIndex: 0, left: '100px', width: '80%' }} />
      </section>

      <div style={{ height: 100 }} />
      <h2 className="text-center text-2xl lg:text-4xl font-light mb-10">
        Can&#39;t Avoid It? Offset It! <span className="text-[#5BE565] font-bold">The Sustainable Way</span>
      </h2>
      <div style={{ height: 40 }} />
      {/* image with 3 grid */}
      <section style={{
        backgroundImage: "url('https://reborngreen.co.uk/wp-content/uploads/2024/05/pexels-tomfisk-1605268-scaled.jpg')",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        opacity: 0.7
      }}
        className="pt-[300px] lg:pl-40 pl-0">
        <div className="bg-white py-20 w-full max-w-[1800px] mx-auto px-[30px] lg:px-[60px] xll:px-[120px]">

          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1 text-center lg:text-left">
              <img src="/calculate.png" alt="" />

              <h3 className="text-xl font-bold mt-4 text-black">Calculate your carbon footprint</h3>
              <p className="mt-2 text-sm text-gray-700">
                Estimate the total amount of greenhouse gases your activities produce. Contact us to obtain your emissions report.
              </p>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <img src="/supprot.png" alt="" />

              <h3 className="text-xl font-bold mt-4 text-black">Support projects that reduce or remove CO2</h3>
              <p className="mt-2 text-sm text-gray-700">
                These projects actively counteract your emissions, creating a net positive impact. You can purchase high-quality carbon credits from the RebornGreen platform.
              </p>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <img src="/reduce.png" alt="" />

              <h3 className="text-xl font-bold mt-4 text-black">Suitable Subheading</h3>
              <p className="mt-2 text-sm text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div style={{ height: 200 }} />

      {/* last banner */}
      <section className="bg-white">
        <div className="w-[90%] mx-auto">
          <section style={{
            backgroundImage: "url('https://reborngreen.co.uk/wp-content/uploads/2024/04/Untitled-design-73.png')",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }} className=" py-20 rounded-xl" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start">
              <div className="lg:ml-36 w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
                <h2 style={{ lineHeight: 1.5 }} className="text-3xl lg:text-5xl font-semibold text-white mb-4">
                  Offset Your <br /> Footprint & Make   <br /> a Difference!
                </h2>
                <p style={{ lineHeight: 2, fontSize: 15 }} className=" text-[#B3917E] mb-6">
                  Reduce your environmental footprint with high-quality projects that benefit the planet. Select your plan directly from your  account.                </p>
                  <Link href="/login">
                <button className="bg-blue-600 text-white font-semibold py-4 px-8 rounded ">
                  <div className='flex w-[150px] justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>

                </button>
                </Link>

              </div>
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end flex-col">
                <div className=" flex  justify-center items-center">
                  <img className='relative lg:top-[-200px] top-[-550px] right-0'
                    src="/Untitled-design-2024-05-29T202042.792.png"
                    alt="Phone 2"
                    width={400}
                  />

                </div>
              </div>

            </div>
          </section>
        </div>
      </section>
      <div style={{ height: 100 }} />
    </div>
  );
};

export default Page;



const BenefitsOfTheProgram = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  const items = [
    {
      title: 'Flight Greener',
      content: 'The program helps air travelers calculate and offset their flight emissions in less than a minute.',
    },
    {
      title: 'Environmental Benefit',
      content: 'By offsetting emissions, it contributes to preserving the environment and combating climate change.',
    },
    {
      title: 'Support high-quality projects',
      content: 'All carbon offsetting projects supported by RebornGreen are verified to the highest standards through the largest Carbon Certifications, including the Gold Standard Voluntary Emission Reductions (VER)',
    }
  ];

  return (
    <div className="container mx-auto py-20 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 px-4">
        <h2 className="text-3xl font-bold mb-6">Benefits of the Program</h2>
        <p className="text-gray-700 mb-8">
          By providing convenient access to calculate and offset carbon emissions, this initiative holds significant promise. With an estimated 6 million individuals traveling by air daily, it possesses the potential to make a substantial impact in preserving the environment and combating climate change.
        </p>
      </div>
      <div className="md:w-1/2 px-4">
        <div className="w-[80%] bg-white mx-auto p-6">
          {items.map((item, index) => (
            <div key={index} className="my-2">
              <div
                className="w-full flex justify-between items-center  p-4 cursor-pointer rounded-lg"
                onClick={() => toggleAccordion(index)}
              >
                <h2 className="text-black text-lg">{item.title}</h2>
                <span>{activeIndex === index ? <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                </svg>
                  : <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                }</span>
              </div>
              {activeIndex === index && item.content && (
                <motion.div
                  initial={{ y: -20, opacity: 0.2 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0.2, transition: { duration: 0.2, type: "tween" } }}
                  transition={{ duration: 0.35, type: "tween" }}
                  className="text-sm text-neutral-700 p-4"
                >
                  <p className="text-gray-700">{item.content}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const DataYouCanTrust = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (cardIndex) => {
    setHoveredCard(cardIndex);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="container mx-auto py-20">
      <h2 className="text-center text-2xl text-blue  mb-6">Flight Emissions Calculator</h2>
      <h3 className="text-center text-5xl font-bold mb-12 text-black">Data You Can Trust</h3>
      <div className="flex justify-center">
        <div
          className="cardxx mx-4 p-6 rounded-lg border shadow-lg transition-all duration-300 ease-in-out"
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        >
          <h4 className="text-lg font-bold mb-2">Accredited</h4>
          <p className="">
            {hoveredCard === 0
              ? "Data is verified and recognized by official standards."
              : "Accredited data and methodology, fully aligned with GHG Protocol and SBTi requirements."}
          </p>
        </div>
        <div
          className="cardxx mx-4 p-6 rounded-lg border shadow-lg transition-all duration-300 ease-in-out"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <h4 className="text-lg font-bold mb-2">Scientific</h4>
          <p className="">
            {hoveredCard === 1
              ? "Methodologies reviewed by leading scientists."
              : "Regularly updated data and methodologies, vetted by climate scientists."}
          </p>
        </div>
      </div>
    </div>
  );
};
