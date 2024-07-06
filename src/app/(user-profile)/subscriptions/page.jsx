import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import LeftSideBar from "@/components/LeftSideBar";
import { useUser } from "../../../../lib/UserContext";

const Page = () => {
  const router = useRouter();
  const { access_token: accessToken } = parseCookies();
  const userData = useUser();
  const [userApi, setUserApi] = useState(null);
  const [subscriptionData, setSubscriptionData] = useState([]);

  useEffect(() => {
    if (!accessToken) {
      router.push("/login");
    }
  }, [accessToken, router]);

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
        if (data.status === 200) {
          setSubscriptionData(data.data);
        } else {
          console.error("Failed to fetch subscription data:", data.message);
        }
      } else {
        console.error("Failed to fetch subscription data:", response.status);
      }
    } catch (error) {
      console.error("Request failed:", error.message);
    }
  };

  

  useEffect(() => {
    if (userData) {
      setUserApi(userData.data.api_key);
    }
  }, [userData]);

  useEffect(() => {

    if (userApi) {
      getSubscriptionData();
    }
  }, [accessToken, userApi]);

  const cancelSubscription = async (subscriptionId) => {
    try {
      const apiUrl = `${process.env.API_URL}/subscription/cancel`;
      const response = await fetch(apiUrl, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ subscriptionId }),
      });

      if (response.ok) {
        console.log("Subscription cancelled successfully");
        await getSubscriptionData();
      } else {
        console.error("Failed to cancel subscription:", response.status);
      }
    } catch (error) {
      console.error("Request failed:", error.message);
    }
  };

  return (
    <div className="overflow-hidden h-full">
      <section className="w-full flex items-start justify-start mt-20 min-h-screen">
        <LeftSideBar />
        <main className="max-w-[1800px] flex-1 bg-[#fbfbfb] px-[0px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto h-full">
          <h3 className="text-center leading-normal my-7 lg:leading-[50px] xll:leading-[60px] text-[30px] lg:text-[40px] xll:text-[50px] text-black-text font-medium font-worksans">
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
