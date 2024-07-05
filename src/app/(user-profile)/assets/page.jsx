"use client";
import LeftSideBar from "@/components/LeftSideBar";
import ScriptGenrate from "@/components/ScriptGenrate";
import { redirect } from "next/navigation";
import { parseCookies } from "nookies";
import { useEffect, useState, React } from "react";

import { useUser } from "../../../../lib/UserConext";
const page = () => {
  const userData = useUser();

  const cookies = parseCookies();
  const accesstoken = cookies?.access_token;
  const [userApi, setUserApi] = useState(null);
  const [isGenrateApi, setIsGenrateApi] = useState(false);
  const [disable, setDiable] = useState(false);

  if (!accesstoken) {
    redirect("/login");
  }

  useEffect(() => {
    const cookies = parseCookies();

    if (userData !== undefined) {
      setUserApi(userData?.data.api_key);
    }
    if (userApi !== undefined && userApi !== null) {
      setIsGenrateApi(true);
      console.log(isGenrateApi, userApi);
    }
    const accessToken = cookies?.access_token;
    if (!accessToken) {
      redirect("/login");
    }
    if (userApi) {
      const getTreeData = async () => {
        try {
          const apiUrl = `${process.env.API_URL}/user/tree-record?api_key=${userApi}`;
          const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          if (response.ok) {
            const data = await response.json();
            if (data.status !== 200) {
              // toast.error(data.message)
              setDiable(false);
            } else {
              setTreePlanted(data.data.tree_planted);
              setDiable(false);
            }
          } else {
            setDiable(false);
            toast.error("Request failed");
          }
        } catch (error) {
          console.error("Request failed:", error.message);
          setDiable(false);
        }
      };
      getTreeData();
    }
  }, [userData, userApi, isGenrateApi]);

  return (
    <div className="overflow-hidden h-full">
      {/* about sec 1  */}
      <section className="w-full flex items-start justify-start mt-20 min-h-screen ">
        <LeftSideBar />
        <main className="max-w-[1800px] flex-1 bg-[#fbfbfb] px-[0px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto h-full">
          <h3 className=" text-center leading-normal my-7 lg:leading-[50px] xll:leading-[60px] text-[30px] lg:text-[40px] xll:text-[50px] text-black-text font-medium font-worksans">
            {" "}
            Assets
          </h3>
          {isGenrateApi && <ScriptGenrate userApi={userApi} />}
          <div className="my-12 flex items-center justify-start flex-col gap-6">
            {/* <h3 className=' text-center leading-normal lg:leading-[50px] xll:leading-[60px] text-[30px] lg:text-[40px] xll:text-[50px] text-black-text font-medium font-worksans'>Your Packages</h3> */}
            {/* <div className=' w-full sm:w-[70%] flex items-center justify-center flex-col gap-4 px-4 text-center py-5 bg-white border rounded-md shadow-lg min-h-[200px]'>
              <FaUnlock className='text-green' size={30} />
              <h5 className=' text-[20px] font-worksans font-medium xsm:text-[22px]'>Tree counter widget</h5>
              <p className=' text-[12px] xsm:text-[15px] text-black  font-poppins'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem provident quisquam fugit ipsam! Odio voluptate, non quae eum quis dolores porro commodi quod, sunt a quo ut, doloremque modi amet.</p>
              <button className='text-white rounded-md bg-green hover:bg-lime-700 duration-200 px-8 py-3 text-lg font-semibold'>Install Widget</button>
            </div>
            <div className=' w-full sm:w-[70%] flex items-center justify-center flex-col gap-4 px-4 text-center py-5 bg-white border rounded-md shadow-lg min-h-[200px]'>
              <FaLock className='text-green' size={30} />
              <h5 className=' text-[20px] font-worksans font-medium xsm:text-[22px]'>Tree counter widget</h5>
              <p className=' text-[12px] xsm:text-[15px] text-black  font-poppins'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem provident quisquam fugit ipsam! Odio voluptate, non quae eum quis dolores porro commodi quod, sunt a quo ut, doloremque modi amet.</p>
              <button disabled className='text-white rounded-md bg-green hover:bg-lime-700 duration-200 px-8 py-3 text-lg font-semibold'>Locked</button>
            </div> */}
          </div>
        </main>
      </section>
    </div>
  );
};

export default page;
