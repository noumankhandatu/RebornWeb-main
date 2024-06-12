import Image from "next/image";
import React from "react";

const PlantingPartner = () => {
  return (
    <div className="w-full flex flex-col items-end justify-end">
      <Image
        src="/tree.png"
        width={800}
        height={600}
        alt="bussnessec2"
        loading="lazy"
        className=" rounded-lg w-[180px]  h-auto lg:mr-24"
      />
      <p className="text-[black] mt-8 font-medium text-[24px] lg:mr-24">
        Planting Partner
      </p>
    </div>
  );
};

export default PlantingPartner;
