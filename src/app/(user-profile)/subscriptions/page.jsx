"use client";
import LeftSideBar from "@/components/LeftSideBar";
import { redirect } from "next/navigation";
import { parseCookies } from "nookies";
import { useEffect, useState, React } from "react";
import { useUser } from "../../../../lib/UserConext";
const Page = () => {
  const userData = useUser();

  const cookies = parseCookies();
  const accesstoken = cookies?.access_token;
  const [userApi, setUserApi] = useState(null);

  const [subscriptionData, setSubscriptionData] = useState([]);

  const getSubscriptionData = async () => {
    try {
      const apiUrl = `${process.env.API_URL}/subscription`;
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.status !== 200) {
        } else {
          setSubscriptionData(data.data);
        }
      } else {
      }
    } catch (error) {
      console.error("Request failed:", error.message);
    }
  };

  if (!accesstoken) {
    redirect("/login");
  }

  useEffect(() => {
    const cookies = parseCookies();

    if (userData !== undefined) {
      setUserApi(userData?.data.api_key);
    }

    const accessToken = cookies?.access_token;
    if (!accessToken) {
      redirect("/login");
    }

    if (userApi) {
      getSubscriptionData();
    }
  }, [userData, userApi]);

  const cancelSubscription = async (subscriptionId) => {
    try {
      const apiUrl = `${process.env.API_URL}/subscription/cancel`;
      const response = await fetch(apiUrl, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accesstoken}`,
        },
        body: JSON.stringify({ subscriptionId }),
      });

      if (response.ok) {
        // Subscription successfully cancelled
        // You may want to update the UI or fetch subscription data again
        console.log("Subscription cancelled successfully");
        await getSubscriptionData();
      } else {
        // Handle HTTP error responses
        console.error("Failed to cancel subscription:", response.status);
      }
    } catch (error) {
      console.error("Request failed:", error.message);
    }
  };

  return (
    <div className="overflow-hidden h-full">
      {/* about sec 1  */}
      <section className="w-full flex items-start justify-start mt-20 min-h-screen ">
        <LeftSideBar />
        <main className="max-w-[1800px] flex-1 bg-[#fbfbfb] px-[0px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto h-full">
          <h3 className=" text-center leading-normal my-7 lg:leading-[50px] xll:leading-[60px] text-[30px] lg:text-[40px] xll:text-[50px] text-black-text font-medium font-worksans">
            {" "}
            Subscriptions
          </h3>
          <div className="my-12 flex flex-row gap-6">
            {subscriptionData.map((subscription) => (
              <div
                key={subscription.id}
                className="subscription-item flex flex-col items-center justify-start gap-6"
              >
                <div>
                  <p>Status: {subscription.status}</p>
                  <p>
                    End Date:{" "}
                    {subscription.end_date
                      ? new Date(subscription.end_date).toLocaleDateString()
                      : "Ongoing"}
                  </p>
                  <p>Subscription Cost: {subscription.grand_total} GBP</p>
                </div>
                {subscription.status !== "canceled" && (
                  <button
                    onClick={() => cancelSubscription(subscription.id)}
                    className="cancel-button"
                  >
                    Cancel
                  </button>
                )}
              </div>
            ))}
          </div>
        </main>
      </section>
    </div>
  );
};

export default Page;
