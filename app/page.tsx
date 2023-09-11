"use client";
import Image from "next/image";
import Header from "./shared/components/header";
import { Radio } from "@mui/material";
import FeatureCard from "./shared/components/home-feature-card";
import FaqComponent from "./shared/components/faq-component";
import Fiducheckbox from "./shared/components/Fiducheckbox/fidu-checkbox";
import { useEffect, useRef, useState } from "react";
import Talk from "talkjs";
import AOS from "aos";
import Marquee from "react-fast-marquee";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import http from "./shared/lib/httpService";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "./shared/components/Spinner";
import CongratDialog from "./shared/components/congrats/congrat";

export default function Home() {
  const [email, setemail] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [isModalOpen, setisModalOpen] = useState(false);

  const [isChecked, setisChecked] = useState(false);
  const { scrollYProgress } = useScroll();

  const chatboxEl: any = useRef();

  const featutes = [
    {
      id: 1,
      title: "Instant Payment Link",
      description:
        "On FIDU, you can create and share payment links in a snap, fostering trusts and faster transactions between two parties",
      icon: "/icons/secure.svg",
    },
    {
      id: 2,
      title: "Faster Payment Checkout",
      description:
        "With FIDU, payment checkout process is made faster and more seamless, with innovative technology to streamline payment flow",
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

  const handleSub = async (e: any) => {
    e.preventDefault();
    setisLoading(true);

    const payload = { email };
    try {
      const resp: any = await http.post("/api/earlybirds", payload);
      if (resp.status) {
        // toast.success(resp?.message);
        setisModalOpen(true);
        setemail("");
      } else {
      }
    } catch (error) {
      setisLoading(false);
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <ToastContainer hideProgressBar autoClose={4000} />
      <Header />

      <main className="">
        <div className="w-full herobg min-h-[60vh] md:h-[60vh] lg:min-h-[80vh] xl::min-h-[100vh] mt-10 lg:mt-16 lg:pt-14 xl:pt-20 xl:h-[800px]">
          <div className="w-full flex flex-col lg:flex-row lg:w-11/12 m-auto mt-4 md:h-[50vh] xl:mt-4 relative lg:px-2 xl:px-4 min-h-40 md:min-h-20 text-white">
            <div className="w-full mb-20 lg:mb-0 lg:w-7/12 px-4 md:px-10 mt-24 md:mt-32 lg:px-2 lg:mt-0">
              <h1 className="text-[2.6rem] leading-[2.88rem] md:text-5xl md:leading-[4rem] lg:text-[2.8rem] xl:text-[4rem] lg:leading-[3.4rem] xl:leading-[4.36rem] font-bold lg:mt-20">
                Fostering trust, one transaction at a time
              </h1>
              <p className="font-light text-lg lg:text-base xl:text-xl mt-2">
                Secured online payment for every purchase
              </p>

              <div className="md:w-8/12 lg:w-10/12 text-base xl:w-9/12 flex items-center gap-x-3 mt-16 font-light lg:text-base xl:text-xl ">
                {/* <Radio
                  checked={true}
                  onChange={() => ""}
                  value="a"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                  sx={{
                    color: "#ffffff",
                    "&.Mui-checked": {
                      color: "#ccbde1",
                    },
                  }}
                /> */}
                <Fiducheckbox
                  isChecked={isChecked}
                  setisChecked={setisChecked}
                />
                <p>
                  Send updates to my email regards product releases, features
                  and services
                </p>
              </div>
              <form
                className="mt-4 lg:mt-10 w-full md:w-8/12 lg:w-10/12 p-2 rounded-full flex flex-col gap-y-4 md:flex-row items-start lg:justify-between lg:items-center gap-x-2 md:bg-white text-fidu_textColor lg:focus-within:outline-none lg:focus-within:ring-4 focus-with:ring-offset-1 focus-within:ring-primary lg:ring-fidu_primary"
                onSubmit={handleSub}
              >
                <input
                  value={email}
                  type="email"
                  className="w-11/12 py-4 md:w-10/12 bg-white md:py-2 rounded-full outline-none pl-5"
                  required
                  placeholder="Enter emaill address"
                  onChange={(e: any) => setemail(e.target.value)}
                />
                <button className="py-4 flex justify-center items-center md:py-3 px-6 w-6/12 md:w-5/12 lg:w-5/12 xl:w-4/12 bg-[#4912bb] lg:bg-fidu_primary text-white rounded-full font-semibold lg:text-sm xl:text-lg xl:px-4">
                  {isLoading ? <Spinner isLoading={true} /> : "Join waitlist"}
                </button>
              </form>
            </div>
            {/* ==mockup=== */}
            <div
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
              className="w-full h-[400px] px-6 lg:h-[480px] xl:h-[650px] lg:px-0 lg:w-5/12 flex md:justify-center lg:justify-end overflow-hidden"
            >
              <img
                src="/images/mockup.svg"
                width={140}
                height={140}
                alt="Picture of the author"
                className="w-[90rem] absolute md:w-[2rem] lg:w-[32rem]"
              />
            </div>
            {/* ===== */}
          </div>
        </div>

        {/* ============ */}
        <section className="mt-20 m-auto w-11/12 px-2 lg:px-4 mb-14">
          <div className="text-center">
            <h2
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
              className="text-[2.85rem] leading-[2.94rem] lg:leading-none lg:text-5xl xl:text-6xl mb-4 font-[700] text-fidu_headingColor"
            >
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

        {/* ================ */}
        {/* <section
          id="faq"
          className="lg:-mt-10 xl:pt-40 w-full minHeight-40 relative"
        >
          <div className="bg-white lg:h-40 xl:h-90"></div>
          <div className=" bg-fidu_black hidden lg:block lg:h-[50vh] pb-12"></div>
          <div className="w-full absolute m-auto lg:top-14 xl:top-40">
            <div className="w-11/12 md:11/12 lg:w-11/12 xl:w-10/12 m-auto p-4 bg-fidu_lightPurple rounded-2xl">
              <div className="flex flex-col lg:flex-row w-full relative bg-fidu_primary">
                <div className="w-full py-20 md:py-10 lg:py-0 lg:h-none lg:w-[40%] flex justify-center items-center rounded-bl-xl md:rounded-bl-none rounded-br-xl md:rounded-br-none  bg-fidu_lightPurple relative lg:rounded-tr-[1rem]">
                  <h2 className="text-[5rem] md:text-[6.5rem] text-fidu_primary font-bold">
                    FAQ&apos;s
                  </h2>
                </div>
                <div className="w-full p-5 lg:w-7/12 bg-fidu_primary md:p-10">
                  <FaqComponent />
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* ================== */}

        {/* =============== */}
        <section className="py-5 bg-[#F7F5FF] pb-20 px-4">
          <div className="mt-4 mb-8">
            <Marquee>
              <h2 className="text-[10rem] font-extrabold tracking-[2rem] text-[#EBE2FC] mr-14">
                myFidu
              </h2>
              <h2 className="text-[10rem] font-extrabold tracking-[2rem] text-[#EBE2FC] mr-14">
                myFidu
              </h2>
              <h2 className="text-[10rem] font-extrabold tracking-[2rem] text-[#EBE2FC] mr-14">
                myFidu
              </h2>
            </Marquee>
          </div>

          <div>
            <p className="w-full md:w-7/12 m-auto text-center text-xl md:text-2xl lg:text-3xl mb-8">
              Empower individuals and businesses to transact confidently in an
              ever-evolving digital economy.
            </p>
            <div className="lg:w-9/12 m-auto">
              <Image
                src="./images/art.svg"
                alt=""
                width={400}
                height={250}
                className="w-full"
              />
            </div>
          </div>
        </section>
        {/* =============== */}
      </main>
      <footer className="border-t-4 border-t-fidu_lightPurple bg-fidu_textColor p-0 py-8">
        <div className="w-full">
          <div className="w-full px-4 m-auto flex items-center flex-col-reverse lg:flex-row justify-between gap-y-10">
            <h3 className="text-[#928e99] font-light text-sm lg:text-lg xl::text-xl">
              ©2023 Fidu Technologies. All Rights Reserved
            </h3>
            <div className=" flex gap-x-10">
              <div>
                <a href=" https://instagram.com/myfidu" target="_blank">
                  <Image
                    src="/icons/instagram.svg"
                    width={8}
                    height={8}
                    alt="secure"
                    className="w-6"
                  />
                </a>
              </div>
              {/* <div>
                <Image
                  src="/icons/facebook.svg"
                  width={8}
                  height={8}
                  alt="secure"
                  className="w-6"
                />
              </div> */}
              <div>
                <a
                  href="https://www.linkedin.com/company/myfidu/"
                  target="_blank"
                >
                  <Image
                    src="/icons/linkedin.svg"
                    width={8}
                    height={8}
                    alt="secure"
                    className="w-6"
                  />
                </a>
              </div>
              <div>
                <a href="https://twitter.com/myfidu" target="_blank">
                  <Image
                    src="/icons/twitter.svg"
                    width={8}
                    height={8}
                    alt="secure"
                    className="w-6"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div ref={chatboxEl} />

      {isModalOpen && (
        <div className="absolute z-50">
          <CongratDialog open={isModalOpen} toogle={setisModalOpen} />
        </div>
      )}
    </>
  );
}
