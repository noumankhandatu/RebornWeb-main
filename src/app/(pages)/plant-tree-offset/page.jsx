"use client";

import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import MyTeamOffset from "@/components/MyTeamOffset";

const steps = ["Step 1", "Step 2", "Step 3"];

export default function page() {
  const [activeStep, setActiveStep] = useState(0);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const everymonth = () => {
    setActiveStep(1);
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <main className="mx-auto flex items-center justify-center flex-col">
            <h1 className="text-center w-full sm:w-[70%] my-[60px] font-poppins text-[25px] xsm:text-[30px] lg:text-[35px] xll:text-[40px] font-[500] text-[#3d3d3d]">
              <span className="font-bold text-[#14a800]">
                Select Offset Plan <br />
              </span>
              <span className="text-[16px]">
                Certified Carbon Credits will be allocated to your company,
                which can be used to offset your emissions and included in your
                EGS (Environmental, Social, and Governance) reports.
              </span>
            </h1>
            <motion.div
              initial={{ x: -250, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "easeInOut" }}
              className="flex h-auto cursor-pointer gap-10 lg:h-[520px] flex-col w-full lg:flex-row items-center justify-center"
            >
              <div
                initial={{ y: 200 }}
                viewport={{ once: true }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center mt-6 justify-center gap-7 sm:gap-16 flex-wrap"
              >
                <div
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(20,168,0,1) 0%, rgba(6,38,2,1) 100%)",
                    boxShadow: "2px 4px 8px #434343",
                    borderRadius: "30px 0px 30px 0px",
                  }}
                  onClick={everymonth}
                  className=" cursor-pointer w-full sm:flex-1 hover:scale-110 duration-300 flex items-center justify-center flex-col text-center px-5 md:px-10 py-10 min-h-[300px]  hover:shadow-xl card  z-10 shadow-lg"
                >
                  <BsArrowRight size={30} className="mb-8 arrow text-white" />

                  <h4 className="text-2xl text-white  font-semibold">
                    Monthly
                    <span className="text-white gr-span"> Subscription</span>
                  </h4>
                  <p className="text-[16px] text-white  font-worksans pt-2">
                    Go Green at Work !
                  </p>
                </div>

                <Link
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(20,168,0,1) 0%, rgba(6,38,2,1) 100%)",
                    boxShadow: "2px 4px 8px #434343",
                    borderRadius: "30px 30px 0px 0px",
                  }}
                  href={"/contact"}
                  className="cursor-pointer w-full sm:flex-1 hover:scale-110 duration-300 flex items-center justify-center flex-col text-center px-5 md:px-10 py-10 min-h-[300px] bg-green hover:shadow-xl card  z-10 shadow-lg"
                >
                  <BsArrowRight size={30} className="mb-10 arrow text-white" />
                  <h4 className="text-2xl  font-semibold"></h4>
                  <p className="text-[16px] text-white  font-worksans pt-2">
                    For groups larger than 100 people, reach out to us for a
                    personalized carbon emissions report and offset plan.
                  </p>
                </Link>
              </div>
            </motion.div>
          </main>
        );

      case 1:
        return (
          <>
            <MyTeamOffset />
          </>
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeStep]);

  return (
    <div className="overflow-hidden mt-12 h-full">
      <section className="w-full flex items-center justify-start flex-col bg-white mt-10 max-w-[1800px] mb-[60px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[4rem] mx-auto">
        <Box mt={20} sx={{ width: "100%" }}>
          <div className="hidden sm:block">
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel className="px-4 py-4 rounded-lg bg-[#14A800] border-2 border-green ">
                    <span className="text-white"> {label}</span>
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
      </section>
    </div>
  );
}
