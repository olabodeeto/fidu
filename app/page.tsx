"use client";
import Image from "next/image";
import Header from "./shared/components/header";
import { Radio } from "@mui/material";
import FeatureCard from "./shared/components/home-feature-card";

export default function Home() {
  const featutes = [
    {
      id: 1,
      title: "Secured Ecosystem",
      description:
        "With FIDU, a safer and secured ecosystem has been set in place for all of your transaction.",
      icon: "/icons/secure.svg",
    },
    {
      id: 2,
      title: "Integrated Widgets",
      description:
        "With our integrated widgets built for you, checkouts and payments can be be more faster, and safer",
      icon: "/icons/dash.svg",
    },

    {
      id: 3,
      title: "Secured Ecosystem",
      description:
        "With FIDU, a safer and secured ecosystem has been set in place for all of your transaction",
      icon: "/icons/secure.svg",
    },
  ];

  const featureList = featutes.map((obj, index: number) => (
    <FeatureCard
      key={index}
      icon={obj.icon}
      title={obj?.title}
      description={obj?.description}
      id={obj?.id}
    />
  ));
  return (
    <main className="">
      <Header />
      <div className="w-full herobg min-h-[100vh] lg:min-h-[94vh] mt-10 lg:mt-16 lg:pt-14 xl:pt-20">
        <div className="w-full flex flex-col lg:flex-row lg:w-11/12 m-auto mt-4 xl:mt-4 relative lg:px-2 xl:px-4 min-h-40 text-white">
          <div className="w-full mb-20 lg:mb-0 lg:w-7/12 px-4 md:px-10 mt-24 md:mt-32 lg:px-2 lg:mt-0">
            <h1 className="text-[2.6rem] leading-[2.88rem] md:text-5xl md:leading-[4rem] lg:text-[2.8rem] xl:text-[4rem] lg:leading-[3.4rem] xl:leading-[4.36rem] font-bold lg:mt-20">
              Fostering trust, one transaction at a time
            </h1>
            <p className="font-light text-lg lg:text-base xl:text-xl mt-2">
              Secured online payment for every purchase
            </p>

            <div className="md:w-8/12 lg:w-10/12 text-base xl:w-9/12 flex items-center gap-x-3 mt-16 font-light lg:text-base xl:text-xl ">
              <Radio
                checked={false}
                onChange={() => ""}
                value="a"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
                sx={{
                  color: "#ffffff",
                  "&.Mui-checked": {
                    color: "#5e13ce",
                  },
                }}
              />
              <p>
                Send updates to my email regards product releases, features and
                services
              </p>
            </div>
            <div className="mt-4 lg:mt-10 w-full md:w-8/12 lg:w-10/12 p-2 rounded-full flex flex-col gap-y-4 md:flex-row items-start lg:justify-between lg:items-center gap-x-2 md:bg-white text-fidu_textColor">
              <input
                type="email"
                className="w-11/12 py-4 md:w-10/12 bg-white md:py-2 rounded-full outline-none pl-5"
                placeholder="Enter emaill address"
              />
              <button className="py-4 md:py-3 px-6 w-6/12 md:w-5/12 lg:w-5/12 xl:w-4/12 bg-fidu_primary text-white rounded-full font-semibold lg:text-sm xl:text-lg xl:px-4">
                Join waitlist
              </button>
            </div>
          </div>
          {/* ==mockup=== */}
          <div className="w-full px-6 lg:px-0 lg:w-5/12 flex md:justify-center lg:justify-end pb-20">
            <Image
              src="/images/mockup.svg"
              width={140}
              height={140}
              alt="Picture of the author"
              className="w-[34rem] md:w-[28rem] lg:w-[34rem]"
            />
          </div>
          {/* ===== */}
        </div>
      </div>

      {/* ============ */}
      <section className="mt-20 m-auto w-11/12 px-2 lg:px-4 mb-20">
        <div className="text-center">
          <h2 className="text-[2.85rem] leading-[2.94rem] lg:leading-none lg:text-5xl xl:text-6xl mb-4 font-[700] text-fidu_headingColor">
            More than just payments
          </h2>
          <p className="w-11/12 lg:w-8/12  xl:w-7/12 m-auto text-[1.158rem] lg:text-xl  xl:text-2xl font-light text-slate-600">
            With FIDU, we are committed to bridging the gap between merchants
            and sellers, fostering trust and safe environment
          </p>
        </div>

        <div className="mt-14">
          <div className="w-full flex flex-col md:flex-row gap-x-10 justify-between">
            {featureList}
          </div>
        </div>
      </section>
      {/* ============== */}
    </main>
  );
}
