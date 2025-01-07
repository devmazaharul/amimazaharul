import { site_data } from "@/lib/site_data";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoHomeOutline } from "react-icons/io5";
import { GiNetworkBars } from "react-icons/gi";
import { IoIosTimer } from "react-icons/io";

export default function Hero() {
  const {
    hero_section: { title, sortDesc, actionButton, heroImage },
    colorSchima: { primary, hover_bakground },
  } = site_data;
  return (
    <div className="py-16 px-4 bg-white rounded-xl  mb-4 ">
      <div>
        <p className="flex items-center gap-1 border rounded-full w-fit px-2 py-1 text-sm text-gray-500 mb-6 ">
          INTRODUCE <IoHomeOutline className="text-[#00bc91]" />
        </p>
      </div>

      <div className="md:grid md:grid-cols-3">
        <div className="md:col-span-2">
          <h1 className=" font-bold text-3xl capitalize pb-2">
            I am Full-stack{" "}
          </h1>
          <h1 className=" font-bold text-4xl capitalize pb-3 text-[#00bc91]">
            {title}
          </h1>
          <p className="text-gray-500">{sortDesc}</p>
          <div className="flex w-fit items-center gap-2 text-gray-400 text-sm py-3">
            <p className="flex gap-1 items-center">
              {" "}
              <GiNetworkBars className="text-[#00bc91]" /> Available for work
            </p>
            <p className="flex gap-1 items-center">
              {" "}
              <IoIosTimer className="text-[#00bc91] text-lg" />
              Full Time Job
            </p>
          </div>
          <div className="my-6 md:hidden ">
            <Image
              alt="site admin iamge"
              src={heroImage}
              width={200}
              height={150}
              className="rounded-xl shadow-lg border mx-auto"
            />
          </div>

          <div className="my-4 text-center md:text-left">
            {actionButton.map((item) => (
              <Link
                key={Math.random()}
                className={` bg-[#00bc91] text-gray-100  px-7 py-2 rounded-full hover:bg-[${hover_bakground}]`}
                href="#"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="col-span-1 hidden md:block ">
          <Image
            alt="site admin iamge"
            src={heroImage}
            width={200}
            height={150}
            className="rounded-xl shadow-lg border mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
