import { site_data } from "@/lib/site_data";
import Image from "next/image";
import React from "react";
import { TbMessage2Star } from "react-icons/tb";

export default function Testimonial() {
  const {
    testimonial: { title, sortDesc, clientInfo },
  } = site_data;

  return (
    <div className="py-16 px-4 bg-white rounded-xl  mb-4 ">
      <div>
        <p className="flex items-center gap-1 border rounded-full w-fit px-2 py-1 text-sm uppercase text-gray-500 mb-6 ">
          TESTIMONIAL
          <TbMessage2Star className="text-[#00bc91]" />
        </p>
      </div>

      <div className="grid md:grid-cols-8">
        <div className="md:col-span-7">
          <h1 className=" font-bold text-4xl capitalize pb-3 text-[#00bc91]">
            {title}
          </h1>
          <p className="text-gray-500 ">{sortDesc}</p>

          <div className="my-4 grid md:grid-cols-2 grid-cols-1  ">
            {clientInfo.map((item) => (
              <div
                key={Math.random()}
                className=" shadow-sm border border-gray-100  p-4   md:m-2 my-2 text-gray-500  rounded-md text-center mx-auto "
              >
                <Image
                  src={item.client_image}
                  width={70}
                  height={50}
                  className="mx-auto mb-3"
                  alt="client image"
                ></Image>
                <p className="text-yellow-400  text-4xl">
                  {item.ratig == "5"
                    ? "*****"
                    : item.ratig === 4
                    ? "****"
                    : item.ratig == 3
                    ? "***"
                    : item.ratig == 3
                    ? "****"
                    : "**"}
                </p>
                <h1 className="capitalize">{item.message}</h1>
                <h1 className="text-lg font-semibold capitalize text-[#00bc91]">
                  {item.name}
                </h1>
                <h1>{item.status}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
