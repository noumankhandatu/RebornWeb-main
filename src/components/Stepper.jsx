"use client";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { FaGlobeAfrica, FaTree } from "react-icons/fa";
import MonthlyPlanting from "./MonthlyPlanting";
import MyTeam from "./MyTeam";
import Image from "next/image";

const steps = [
  "Choose your objective",
  "Choose your product",
  "Choose your scale",
  "Finalise your impact",
];

export default function StepperComp() {
  const [activeStep, setActiveStep] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [step1, setStep1] = useState("");
  const [step2, setStep2] = useState("");

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const step1plantClick = () => {
    setStep1("plant-tree");
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const step1offsetClick = () => {
    setStep1("offset");
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const step2teamClick = () => {
    setStep2("team");
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const everymonth = () => {
    setStep2("month");
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const oneOff = () => {
    setStep2("oneoff");
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <main className="mx-auto flex items-center justify-center flex-col">
            <h1 className="text-center w-full sm:w-[70%] my-[60px] font-poppins text-[25px] xsm:text-[30px] lg:text-[35px] xll:text-[40px] font-[500] text-[#3d3d3d]">
              <span className="font-bold text-[#14a800]">
                Empower Your Impact-{" "}
              </span>
              How Will You Make a Difference?
            </h1>
            <motion.div
              onClick={step1plantClick}
              initial={{ x: -250, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "easeInOut" }}
              className="flex h-auto cursor-pointer lg:h-[520px] flex-col w-full lg:flex-row items-center justify-center"
            >
              <div className=" h-full rounded-tr-lg rounded-tl-lg  lg:rounded-tr-none lg:rounded-s-xl  gre-card w-full  sm:w-[80%] mdd:w-[60%] py-16 lg:flex-1  flex items-center justify-center flex-col">
                <div className="w-full h-full xsm:w-10/12 lg:flex-1 flex items-center text-center lg:text-start lg:items-start  justify-center flex-col">
                  <p>
                    <FaTree className="text-white my-6 stepicon " size={35} />
                  </p>
                  <h3 className=" text-center lg:text-left mb-[20px] font-poppins text-[25px] xsm:text-[30px] lg:text-[35px] xll:text-[40px] font-[500] text-white">
                    Plant trees for my company
                  </h3>
                  <p className="leading-[26px] text-sm sm:text-[16px]  font-poppins tracking-wide text-[#dedbdb]">
                    Reach your sustainability objectives by growing your company
                    forest.
                  </p>
                </div>
              </div>
              <div className=" overflow-hidden rounded-br-lg rounded-bl-lg  lg:rounded-bl-none lg:rounded-e-lg w-full h-full relative sm:w-[80%] mdd:w-[60%] lg:flex-1 ">
                <Image
                  src="/assets/images/planttree.jpg"
                  width={300}
                  height={200}
                  alt="Plant Tree Image"
                  loading="lazy"
                  className="w-full h-full"
                />
                {/* <div className='w-full overflow-hidden  h-full absolute top-0 left-0 bg-black opacity-30 z-0'></div> */}
              </div>
            </motion.div>

            <motion.div
              onClick={step1offsetClick}
              initial={{ x: 250, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "easeInOut" }}
              className="flex my-24 cursor-pointer h-auto lg:h-[520px] flex-col w-full lg:flex-row items-center justify-center"
            >
              <div className=" overflow-hidden rounded-tr-lg rounded-tl-lg  lg:rounded-tr-none lg:rounded-s-xl  w-full h-full relative sm:w-[80%] mdd:w-[60%] lg:flex-1">
                <Image
                  src="/assets/images/bussness-offset.jpg"
                  width={300}
                  height={200}
                  alt="bussnessec2"
                  loading="lazy"
                  className="w-full border h-full"
                />
              </div>

              <div className=" h-full rounded-br-lg rounded-bl-lg  lg:rounded-bl-none lg:rounded-e-lg  gre-card w-full  sm:w-[80%] mdd:w-[60%] py-16 lg:flex-1  flex items-center justify-center flex-col">
                <div className="w-full h-full xsm:w-10/12 lg:flex-1 flex items-center text-center lg:text-start lg:items-start  justify-center flex-col">
                  <p>
                    <FaGlobeAfrica
                      className="text-white my-6 stepicon "
                      size={35}
                    />
                  </p>
                  <h3 className=" text-center lg:text-left mb-[20px] font-poppins text-[25px] xsm:text-[30px] lg:text-[35px] xll:text-[40px] font-[500] text-white">
                    Offset your business
                  </h3>
                  <p className="leading-[26px] text-sm sm:text-[16px]  font-poppins tracking-wide text-[#dedbdb]">
                    Choose what you want to offset through our carbon projects &
                    track your impact
                  </p>
                </div>
              </div>
            </motion.div>
          </main>
        );
      case 1:
        return (
          <>
            {step1 === "offset" ? (
              <div
                initial={{ y: 200 }}
                viewport={{ once: true }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center mt-6 justify-center gap-7 sm:gap-16 flex-wrap"
              >
                <div
                  onClick={step2teamClick}
                  className="cursor-pointer w-full sm:flex-1 hover:scale-110 duration-300 flex items-center justify-center flex-col text-center px-5 md:px-10 py-10 min-h-[300px] bg-white hover:shadow-xl card  z-10 shadow-lg"
                >
                  <h4 className="text-2xl  font-semibold">
                    My <span className="text-green gr-span">Team</span>
                  </h4>
                  <p className="text-[16px]  font-worksans pt-2">
                    Input your team size, we&apos;ll take care of the carbon
                    credits & trees
                  </p>
                  <BsArrowRight size={30} className="my-5 arrow" />
                </div>
                <Link
                  href={"/contact"}
                  className="cursor-pointer w-full sm:flex-1 hover:scale-110 duration-300 flex items-center justify-center flex-col text-center px-5 md:px-10 py-10 min-h-[300px] bg-white hover:shadow-xl card  z-10 shadow-lg"
                >
                  <h4 className="text-2xl  font-semibold">
                    My <span className="text-green gr-span">company</span>
                  </h4>
                  <p className="text-[16px]  font-worksans pt-2">
                    Use our extensive network of trusted projects that can cater
                    to any size. Contact us to discuss your needs.
                  </p>
                  <BsArrowRight size={30} className="my-5 arrow" />
                </Link>
                <Link
                  href={"/contact"}
                  className="cursor-pointer w-full sm:flex-1 hover:scale-110 duration-300 flex items-center justify-center flex-col text-center px-5 md:px-10 py-10 min-h-[300px] bg-white hover:shadow-xl card  z-10 shadow-lg"
                >
                  <h4 className="text-2xl  font-semibold">
                    Something <span className="text-green gr-span">else</span>
                  </h4>
                  <p className="text-[16px]  font-worksans pt-2">
                    Got a specific idea or need help deciding how best to make
                    an impact? Contact us!
                  </p>
                  <BsArrowRight size={30} className="my-5 arrow" />
                </Link>
              </div>
            ) : (
              <div
                initial={{ y: 200 }}
                viewport={{ once: true }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center mt-6 justify-center gap-7 sm:gap-16 flex-wrap"
              >
                <div
                  onClick={everymonth}
                  className="cursor-pointer w-full sm:flex-1 hover:scale-110 duration-300 flex items-center justify-center flex-col text-center px-5 md:px-10 py-10 min-h-[300px] bg-white hover:shadow-xl card  z-10 shadow-lg"
                >
                  <h4 className="text-2xl  font-semibold">
                    Every <span className="text-green gr-span"> month</span>
                  </h4>
                  <p className="text-[16px]  font-worksans pt-2">
                    Make a regular commitment that&apos;s completely flexible
                  </p>
                  <BsArrowRight size={30} className="my-5 arrow" />
                </div>
                <div
                  onClick={oneOff}
                  className="cursor-pointer w-full sm:flex-1 hover:scale-110 duration-300 flex items-center justify-center flex-col text-center px-5 md:px-10 py-10 min-h-[300px] bg-white hover:shadow-xl card  z-10 shadow-lg"
                >
                  <h4 className="text-2xl  font-semibold">
                    As a <span className="text-green gr-span">one-offset</span>
                  </h4>
                  <p className="text-[16px]  font-worksans pt-2">
                    Choose to plant a set amount to make an impact today
                  </p>
                  <BsArrowRight size={30} className="my-5 arrow" />
                </div>
                <Link
                  href={"/contact"}
                  className="cursor-pointer w-full sm:flex-1 hover:scale-110 duration-300 flex items-center justify-center flex-col text-center px-5 md:px-10 py-10 min-h-[300px] bg-white hover:shadow-xl card  z-10 shadow-lg"
                >
                  <h4 className="text-2xl  font-semibold">
                    <span className="text-green gr-span">Automatically</span>
                  </h4>
                  <p className="text-[16px]  font-worksans pt-2">
                    Integrate tree planting into your business with our
                    automated solutions
                  </p>
                  <BsArrowRight size={30} className="my-5 arrow" />
                </Link>
              </div>
            )}
          </>
        );
      case 2:
        return (
          <>
            {(step2 === "team" && <MyTeam />) ||
              (step2 === "month" && <MonthlyPlanting month={true} />) ||
              (step2 === "oneoff" && <MonthlyPlanting month={false} />)}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Box mt={20} sx={{ width: "100%" }}>
      <div className="hidden sm:block">
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel className="px-4 py-4 rounded-lg bg-green ">
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </>
      ) : (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box mt={4}>{renderStepContent()}</Box>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {/* <Button onClick={handleNext}>{activeStep === steps.length - 1 ? 'Finish' : 'Next'}</Button> */}
          </Box>
        </>
      )}
    </Box>
  );
}
