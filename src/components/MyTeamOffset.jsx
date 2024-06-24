"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const MyTeamOffset = () => {
  const [standWork, setStandWork] = useState(0);
  const [freqTravel, setFreqTravel] = useState(0);
  const [globalTror, setGlobalTror] = useState(0);
  const [allPrice, setAllPrice] = useState(0);
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    if (standWork < 1 && freqTravel < 1 && globalTror < 1) {
      setDisable(true);
    } else {
      setDisable(false);
    }
    const sw = standWork * 8.25;
    const ft = freqTravel * 15.5;
    const gt = globalTror * 26.7;

    setAllPrice(sw + ft + gt);
  }, [standWork, freqTravel, globalTror]);

  const handleSelectChange = (setter) => (event) => {
    setter(parseInt(event.target.value));
  };

  const renderSelect = (value, setter) => (
    <select
      value={value}
      onChange={handleSelectChange(setter)}
      className="text-[22px] font-semibold text-white bg-gray-800 max-h-40 overflow-y-auto"
    >
      {[...Array(101).keys()].slice(1).map((num) => (
        <option className="text-white" key={num} value={num}>
          {num}
        </option>
      ))}
    </select>
  );

  return (
    <section className="mx-auto my-4 flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 mdd:grid-cols-3 items-center justify-center gap-10 flex-wrap">
        {/* card 1 */}
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(20,168,0,1) 65%, rgba(255,255,255,1) 100%)",
            borderRadius: "0px 30px 30px 0px",
          }}
          className="rounded-lg min-h-[450px]  hover:shadow-sm border px-4 mdd:px-9 gap-6 text-center py-10 shadow-sm bg-green flex items-center flex-col justify-center"
        >
          <Image
            src="/assets/images/list__image-remote-worker.svg"
            width={60}
            height={60}
            alt="image"
          />
          <h3 className="text-[22px] font-semibold font-poppins text-white">
            Big Impact
          </h3>
          <div>
            <h5 className="text-[20px] font-semibold  text-white">£8.25</h5>
            <p className="text-[12px] text-white">Per employee per month</p>
          </div>
          <p className="text-[14px] font-worksans text-white">
            Make the biggest difference for the environment.
          </p>
          {renderSelect(standWork, setStandWork)}
        </div>

        {/* card 2 */}
        <div className="min-h-[450px] border-4 border-green  rounded-lg hover:shadow-sm  px-4 mdd:px-9 gap-6 text-center py-10 shadow-sm bg-white flex items-center flex-col justify-center">
          <Image
            src="/assets/images/list__image-plane.svg"
            width={60}
            height={60}
            alt="image"
          />
          <h3 className="text-[22px] font-semibold font-poppins text-black-text">
            Reduce Your Footprint
          </h3>
          <div>
            <h5 className="text-[20px] font-semibold">£15.50</h5>
            <p className="text-[12px] text-black-text">
              Per employee per month
            </p>
          </div>
          <p className="text-black-text text-[14px] font-worksans">
            Do your part for a greener future.
          </p>
          {renderSelect(freqTravel, setFreqTravel)}
        </div>

        {/* card 3 */}
        <div className="min-h-[450px] rounded-lg bg-green hover:shadow-sm border px-4 mdd:px-9 gap-6 text-center py-10 shadow-sm  flex items-center flex-col justify-center">
          <Image
            src="/assets/images/list__image-plane.svg"
            width={60}
            height={60}
            alt="image"
          />
          <h3 className="text-[22px] font-semibold font-poppins text-white">
            Start Sustainable
          </h3>
          <div>
            <h5 className="text-[20px] font-semibold text-white">£26.70</h5>
            <p className="text-[12px] text-white">Per employee per month</p>
          </div>
          <p className="text-white text-[14px] font-worksans">
            Take the first step towards a sustainable workplace.
          </p>
          {renderSelect(globalTror, setGlobalTror)}
        </div>
      </div>
      <div className="flex my-10 items-center justify-between w-full">
        <p className="font-semibold text-[16px] xsm:text-[20px] sm:text-[30px] text-black">
          Total: £{allPrice.toFixed(2)} / month
        </p>
        <Link href={"/login"}>
          <button
            disabled={disable}
            className={`${
              disable ? "bg-[#14a80050]" : "bg-green"
            } px-4 xsm:px-6 sm:px-10 md:px-14 text-[14px] md:text-[18px] py-3 rounded-sm text-white font-semibold font-worksans tracking-wide`}
          >
            Continue
          </button>
        </Link>
      </div>
    </section>
  );
};

export default MyTeamOffset;
