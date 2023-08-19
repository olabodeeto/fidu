import React from "react";
import Image from "next/image";

type PropT = {
  icon: string;
  description: string;
  id: number;
  title: string;
};

export default function FeatureCard({ title, id, description, icon }: PropT) {
  return (
    <div className="bg-[#FCFCFD] border border-slate-200 mb-20 p-5 md:p-1 lg:p-4 xl:p-7 min-h-[20vh] w-full md:w-[32%] xl:w-[32%]">
      <div className="p-4 h-36 overflow-hidden rounded-lg bg-fidu_primary text-fidu_lightPurple flex justify-between">
        <Image
          src={icon}
          width={40}
          height={40}
          alt="secure"
          className="w-[6rem] md:w-[4.5rem] lg:w-[4rem] xl:w-[5rem]"
        />
        <h2 className=" text-[13.8rem] -mt-11 md:text-[10.8rem] lg:text-[13.4rem] xl:text-[13.88rem] font-extrabold lg:-mt-10 xl:-mt-11">
          {id}
        </h2>
      </div>
      <div className="mt-10">
        <h2 className="text-3xl md:text-[1.3rem] lg:text-[1.5rem] xl:text-[2.14rem] font-semibold">
          {title}
        </h2>
        <div className="mt-2">
          <p className="text-[1.20rem] md:text-sm lg:text-[0.94rem] xl:text-xl font-light">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
