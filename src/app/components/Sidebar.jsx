import { site_data } from "@/lib/site_data";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

export default function Sidebar() {
  const {
    side_bar: {
      profile_img,
      name,
      title,
      personal_info: { experience, city, residence, skills, download_link },
    },
    colorSchima,
  } = site_data;
  return (
    <div className="h-full bg-white px-4 py-4 rounded-md">
      <div className=" text-center mx-auto   ">
        <Image
          alt="site admin iamge"
          src={profile_img}
          className="mx-auto text-center py-3 rounded-full"
          width={150}
          height={200}
        />
        <div>
          <p className="font-semibold text-lg capitalize">{name}</p>
        </div>
        <p
          className={`text-[${colorSchima.text_color}] capitalize border-b pb-4`}
        >
          {title}
        </p>
      </div>
      <div className="py-3 leading-8">
        <div className="flex justify-between items-center capitalize">
          <p> Residence:</p> <p className="text-gray-500">{residence}</p>{" "}
        </div>
        <div className="flex justify-between items-center capitalize">
          <p> City:</p> <p className="text-gray-500">{city}</p>{" "}
        </div>
        <div className="flex justify-between items-center capitalize">
          <p> Experience :</p> <p className="text-gray-500"> {experience}</p>{" "}
        </div>
        <div className="flex justify-between items-center capitalize">
          <p> Status:</p>{" "}
          <AiOutlineSafetyCertificate className="text-[#00bc91] text-lg" />{" "}
        </div>
      </div>
      <div className=" px-2 my-4   border-t py-6">
        <p className="font-semibold">Skills</p>
        {skills.map((item) => {
          return (
            <div
              key={Math.random()}
              className="flex justify-between leading-7  rounded-lg gray-red-500 py-1 px-2 my-2  "
            >
              <p className="text-gray-500 capitalize">{item.name}</p>
              <p
                className={`${
                  item.percent > 70 ? "text-gray-700" : "text-yellow-500"
                }`}
              >
                {item.percent}%
              </p>
            </div>
          );
        })}
        <div className="my-7 text-center">
          <Link
            target="_blank"
            className={`bg-[${colorSchima.primary || "#00bc91"}] hover:bg-[${
              colorSchima.hover_bakground
            }] px-6 py-2 rounded-full text-gray-100`}
            href={download_link}
          >
            Download
          </Link>
        </div>
      </div>
    </div>
  );
}
