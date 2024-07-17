"use client";
import LeftSideBar from "@/components/LeftSideBar";
import { redirect } from "next/navigation";
import Image from "next/image";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useUser } from "../../../../lib/UserConext";
const Page = () => {
  const userData = useUser();

  const [disable, setDiable] = useState(false);
  const [name, setName] = useState("");
  const [userApi, setUserApi] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [isGenrateApi, setIsGenrateApi] = useState(false);
  const [treePlanted, setTreePlanted] = useState(0);
  const [climatePoints, setClimatePoints] = useState(0);
  const [profilePicture, setProfilePicture] = useState("");

  useEffect(() => {
    const cookies = parseCookies();
    const name = cookies?.user_name;

    setName(name);
    if (userData !== undefined) {
      setUserApi(userData?.data.api_key);
      if (userData?.data.logo)
        setProfilePicture(
          `https://backend.reborngreen.org/${userData?.data.logo}`
        ); // Assuming profile picture URL is in userData
    }
    if (userApi !== undefined && userApi !== null) {
      setIsGenrateApi(true);
      console.log(isGenrateApi, userApi);
    }
    const accessToken = cookies?.access_token;
    if (!accessToken) {
      redirect("/login");
    } else {
      setAccessToken(accessToken);
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
              if (data.data.tree_planted) {
                const treePlanted = data.data.tree_planted;

                setTreePlanted(treePlanted);
              }
              if (data.data.climate_points) {
                const climatePoints = data.data.climate_points;

                setClimatePoints(climatePoints);
              }
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
          <div
            style={{
              backgroundImage: "url('/assets/dashboard/Backgroung.png')",
            }}
            className="w-full flex flex-col gap-5 items-center min-h-1/3 bg-cover bg-center"
          >
            <div className="flex items-center justify-center gap-4 mt-4">
              {profilePicture && (
                <div className="flex-shrink-0">
                  <Image
                    src={profilePicture}
                    alt="Profile Picture"
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                </div>
              )}
              <h3 className="text-center leading-normal lg:leading-[50px] xll:leading-[60px] text-[25px] lg:text-[35px] xll:text-[45px] text-black-text font-medium font-worksans">
                Welcome{" "}
                <span className="text-green font-semibold">{name && name}</span>
              </h3>
            </div>

            <h3 className=" text-center leading-normal lg:leading-[50px] xll:leading-[60px] text-[25px] lg:text-[35px] xll:text-[45px] text-black-text font-medium font-worksans">
              An Overview of your Climate Impact
            </h3>

            {/* two cards */}
            <div className="flex flex-wrap justify-center gap-4">
              <div className="w-1/4 max-w-lg bg-blue-100 shadow-md rounded-lg overflow-hidden flex flex-col items-center justify-center">
                <img
                  className="w-32 h-auto object-cover"
                  src="/assets/dashboard/1.svg"
                  alt="Card Image"
                />

                <div className="p-4 text-center">
                  <h2 className="text-xl font-semibold text-gray-800">
                   Tree Planted
                  </h2>
                  <p className="text-gray-600 mt-2">
                    You've planted {treePlanted}. These trees will absorbs  {treePlanted * 0.1096} tonnes of CO2 throughout their lifetime
                 
                  </p>
                </div>
              </div>

              <div className="w-1/4 max-w-lg bg-blue-100 shadow-md rounded-lg overflow-hidden flex flex-col items-center justify-center">
                <img
                  className="w-32 h-auto object-cover"
                  src="/assets/dashboard/2.svg"
                  alt="Card Image"
                />

                <div className="p-4 text-center">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {climatePoints} Tonnes CO2 Offset
                  </h2>
                  <p className="text-gray-600 mt-2">
                    You have offset {climatePoints} tonnes of CO2 by supporting verified carbon projects around the world.({climatePoints} tonnes from additional carbon credits)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* // bottom section */}

          <div className="bg-lightgrey mt-4 h-auto sm:h-screen sm:h-1/4 bg-cover bg-center flex items-center justify-center">
            <div className="flex flex-wrap justify-center max-w-screen-xl gap-8 p-4">
              {/* First Card */}
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <div className="bg-white rounded-lg shadow-lg">
                  <img
                    className="w-1/2 mx-auto mt-4"
                    src="/assets/dashboard/car.svg"
                    alt="Car Icon"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                      Equivalent Car Emissions
                    </h2>
                    <p className="text-gray-600 mt-2">
                      By offsetting{" "}
                      {(treePlanted * 0.1096 + climatePoints).toFixed(3)} tonnes
                      of CO2 is like taking a car off the road for about{" "}
                      {((treePlanted * 0.1096 + climatePoints) / 0.408).toFixed(
                        3
                      )}{" "}
                      kilometers (
                      {(
                        ((treePlanted * 0.1096 + climatePoints) / 0.408) *
                        0.621371
                      ).toFixed(3)}
                       {" "}miles).
                    </p>
                  </div>
                </div>
              </div>

              {/* Second Card */}
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <div className="bg-white rounded-lg shadow-lg">
                  <img
                    className="w-1/2 mx-auto mt-4"
                    src="/assets/dashboard/house.svg"
                    alt="House Icon"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                      Equivalent Energy Used
                    </h2>
                    <p className="text-gray-600 mt-2">
                    Offsetting{" "}
                      {(treePlanted * 0.1096 + climatePoints).toFixed(3)} tonnes
                      of CO2 is equivalent to the annual electricity use of an
                      average household for about{" "}
                      {(
                        (((treePlanted * 0.1096 + climatePoints) * 3.6) /
                          (11000 / 12)) *
                        1000
                      ).toFixed(0)}{" "}
                      months.
                    </p>
                  </div>
                </div>
              </div>

              {/* Third Card */}
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <div className="bg-white rounded-lg shadow-lg">
                  <img
                    className="w-1/2 mx-auto mt-4"
                    src="/assets/dashboard/cycle.svg"
                    alt="Cycle Icon"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                      Equivalent Waste Recycling
                    </h2>
                    <p className="text-gray-600 mt-2">
                      Offsetting{" "}
                      {(treePlanted * 0.1096 + climatePoints).toFixed(3)} tonnes
                      of CO2 is equivalent to recycling about{" "}
                      {(
                        ((treePlanted * 0.1096 + climatePoints) * 1000) /
                        0.15
                      ).toFixed(3)}{" "}
                      plastic bottles instead of sending them to landfill.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Page;
