"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Select from "react-select";

import airportsData from "../../../../public/airports.json";

const Page = () => {
  const [departure, setDeparture] = useState(null);
  const [destination, setDestination] = useState(null);
  const [travelClass, setTravelClass] = useState("Economy Class");
  const [tripType, setTripType] = useState("Outbound & return flight");
  const [passengers, setPassengers] = useState(1);
  const [error, setError] = useState(null);

  const [project, setProject] = useState(null);
  const [paymentLink, setPaymentLink] = useState("");
  const [co2, setCO2] = useState(0);
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  // Populate options for departure and destination dropdowns
  const departureOptions = airportsData.map((airport) => ({
    value: airport.iata,
    label: airport.name,
  }));

  const destinationOptions = departureOptions; // Assuming you want the same options for both

  const handleTravelClassChange = (e) => {
    setTravelClass(e.target.value);
  };

  const handleTripTypeChange = (e) => {
    setTripType(e.target.value);
  };

  const handleAddEntry = () => {
    // Logic to handle adding the entry
  };

  const handleNext = async () => {
    if (!departure || !destination) {
      setError("Please select both departure and destination airports.");
      return;
    }

    if (departure.value === destination.value) {
      setError("Departure and destination airports cannot be the same.");
      return;
    }

    setError(null);
    setLoading(true); // Set loading to true
    const requestBody = {
      calculation_options: [
        {
          type: "travel-air",
          departure: departure.value,
          destination: destination.value,
          passengers: passengers,
          return_trip: tripType === 'Outbound & return flight'?true:false
        },
      ],
      success_url: "<string>",
      cancel_url: "<string>",
      change_allowed: false,
      order_count: 1,
      fractional_digits: 2,
    };

    try {
      const response = await fetch(
        "https://api.klimapi.com/v2/orders/link/calculate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY":
              "sk_test_vfPTS9Tn2cBa6sXNTHe5O4QG7pyGT7zyO2mTk7B7mBGaO0imoasl7eQgoudhHKFieacR09veVxV2KWFeLrHvs",
            "X-LOCALE":"EN"
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        setError(`Error: ${errorData.error || "Network response was not ok"}`);
        return;
      }

      const data = await response.json();
      console.log(data); // Handle the response data

      const checkout = data.checkout_links[0];
      const projectData = checkout.project;

      setCO2(data.results?.[0]?.kgCO2e ?? 0);

      setPrice(checkout.price);

      setProject(projectData);
      setPaymentLink(checkout.payment_link);

      // Optionally redirect or display the result
    } catch (error) {
      setError("An error occurred while fetching data.");
      console.error("Fetch error:", error);
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  return (
    <section>
      <div className="w-full max-w-[1800px] my-[40px] px-[30px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto">
        <div className="relative flex shadow-m p-10 bg-white">
          <div className="w-full text-center flex flex-col justify-center items-center">
            <h2 className="mb-6 text-2xl">Air Travel</h2>
            <hr />
            {error && <p className="text-red-500 mb-3">{error}</p>}
            <div className="flex gap-4">
              <div className="flex flex-col gap-4">
                <label className="text-left">
                  Departure <small>Airport or IATA Code</small>
                </label>
                <Select
                  value={departure}
                  onChange={(option) => setDeparture(option)}
                  options={departureOptions}
                  className="text-lg border border-gray-300 rounded-md w-full"
                  placeholder="Select departure airport"
                />

                <label className="text-left">
                  Destination <small>Airport or IATA Code</small>
                </label>
                <Select
                  value={destination}
                  onChange={(option) => setDestination(option)}
                  options={destinationOptions}
                  className="text-lg border border-gray-300 rounded-md"
                  placeholder="Select destination airport"
                />

                <div className="flex gap-4">
                  <div className="flex flex-col w-1/3">
                    <label className="text-left">Travel Class</label>
                    <select
                      value={travelClass}
                      onChange={handleTravelClassChange}
                      className="px-3 py-2 text-lg border border-gray-300 rounded-md bg-white"
                    >
                      <option>Economy Class</option>
                      <option>Premium Economy Class</option>
                      <option>Business Class</option>
                      <option>First Class</option>
                    </select>
                  </div>

                  <div className="flex flex-col w-1/3">
                    <label className="text-left">Trip Type</label>
                    <select
                      value={tripType}
                      onChange={handleTripTypeChange}
                      className="px-3 py-2 text-lg border border-gray-300 rounded-md w-full bg-white"
                    >
                      <option>Outbound & Return Flight</option>
                      <option>Single Flight (One Way)</option>
                    </select>
                  </div>

                  <div className="flex flex-col w-1/3">
                    <label className="text-left">Passengers</label>
                    <input
                      type="number"
                      value={passengers}
                      onChange={(e) => setPassengers(Number(e.target.value))}
                      className="px-3 py-2 text-lg border border-gray-300 rounded-md w-full bg-white"
                      required
                      min="1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            type="button"
            onClick={handleNext}
            className="bg-green text-white px-4 py-2 rounded"
          >
            Next
          </button>
        </div>

        {loading && (
          <div className="flex justify-center items-center h-full mt-4">
            <div className="loader" />
          </div>
        )}
        {project && (
          <div className="mt-10 justify-content-center text-centee">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p>{project.summary}</p>
            <div className="flex flex-wrap gap-4 mt-4">
  {project.images.map((image) => (
    <img
      key={image}
      src={image}
      alt={project.title}
      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 rounded"
      style={{ maxWidth: "100%", height: "auto" }}
    />
  ))}
</div>
            <div className="flex justify-center items-center h-full mt-4">
              <p className="text-2xl font-bold text-center">Your Result is {co2} kg CO2e for € {price}</p>
            </div>
            <div className="flex justify-center items-center h-full mt-4">
              <a
                href={paymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Checkout
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Page;
