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
    const sw = standWork * 26.7;
    const ft = freqTravel * 15.5;
    const gt = globalTror * 8.25;

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
          className="min-h-[450px] rounded-lg bg-green hover:shadow-sm border px-4 mdd:px-9 gap-6 text-center py-10 shadow-sm  flex items-center flex-col justify-center"
        >
          <Image
            src="/svg/£8.25 Per employee per month (1).svg"
            width={100}
            height={100}
            alt="image"
          />
          <h3 className="text-[22px] font-semibold font-poppins text-white">
            Start Sustainable
          </h3>
          <div>
            <h5 className="text-[20px] font-semibold text-white font-poppins">
              £8.25
            </h5>
            <p className="text-[12px] text-white font-poppins">
              Per employee per month
            </p>
          </div>
          <p className="text-white text-[14px] font-poppins">
            <b>
              <i> Take the first step towards a sustainable workplace.</i>
            </b>
          </p>
          {renderSelect(globalTror, setGlobalTror)}
        </div>

        {/* card 2 */}
        <div className="min-h-[450px] border-4 border-green  rounded-lg hover:shadow-sm  px-4 mdd:px-9 gap-6 text-center py-10 shadow-sm bg-white flex items-center flex-col justify-center">
          <Image
            src="/svg/£15.50 Per employee per month.svg"
            width={100}
            height={100}
            alt="image"
          />
          <h3 className="text-[22px] font-semibold font-poppins text-black-text">
            Reduce Your Footprint
          </h3>
          <div>
            <h5 className="text-[20px] font-semibold font-poppins">£15.50</h5>
            <p className="text-[12px] text-black-text font-poppins">
              Per employee per month
            </p>
          </div>
          <p className="text-black-text text-[14px] font-poppins">
            <i>
              {" "}
              <b>Do your part for a greener future.</b>
            </i>
          </p>
          {renderSelect(freqTravel, setFreqTravel)}
        </div>

        {/* card 3 */}
        <div className="rounded-lg min-h-[450px]  hover:shadow-sm border px-4 mdd:px-9 gap-6 text-center py-10 shadow-sm bg-green flex items-center flex-col justify-center">
          <Image
            src="/svg/£26.70 Per employee per month.svg"
            width={100}
            height={100}
            alt="image"
          />
          <h3 className="text-[22px] font-semibold font-poppins text-white">
            Big Impact
          </h3>
          <div>
            <h5 className="text-[20px] font-semibold  text-white font-poppins">
              £26.70
            </h5>
            <p className="text-[12px] text-white font-poppins">
              Per employee per month
            </p>
          </div>
          <p className="text-[14px] font-poppins text-white">
            <i>
              <b> Make the biggest difference for the environment.</b>
            </i>
          </p>
          {renderSelect(standWork, setStandWork)}
        </div>
      </div>
      <div className="flex my-10 items-center justify-between w-full">
        <p class="block max-w-sm p-6 bg-green  border border-green rounded-lg shadow hover:bg-lime-700 ">
          <p class=" font-poppins font-normal text-white ">
            Total: £{allPrice.toFixed(2)} / month
          </p>
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
