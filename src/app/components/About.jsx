import { site_data } from "@/lib/site_data";
import React from "react";

import { TbMessage2Question } from "react-icons/tb";


export default function About() {
  const {
    about_section: { title, desc, work_status, contactInfo },
    colorSchima,
  } = site_data;
  return (
    <div className="py-16 px-4 bg-white rounded-xl  mb-4 ">
      <div>
        <p className="flex items-center gap-1 border rounded-full w-fit px-2 py-1 text-sm uppercase text-gray-500 mb-6 ">
         about
          <TbMessage2Question className="text-[#00bc91]" />
        </p>
      </div>

      <div className="">
        <div className="">
          <h1 className=" font-bold text-4xl capitalize pb-3 text-[#00bc91]">
            {title}
          </h1>
          <p className="text-gray-500 pb-8">{desc}</p>

          <table className=" w-full justify-between pb-8   p-3">
            <thead>
              {contactInfo.map((item) => (
                <tr className="rounded-xl ">
                  <td className="py-2 px-3 text-left md:w-[30%] w-[30%] ">
                    {item.name}{" "}
                  </td>
                  <td className="py-2 px-3 text-left md:w-[10%]"> : </td>
                  <td className="py-2 px-3 text-justify md:w-[58%] w-[70%] ">
                    {item.text}
                  </td>
                </tr>
              ))}
            </thead>
          </table>

          <div className="my-8 grid md:grid-cols-4 grid-cols-2  text-center ">
            {work_status.map((item) => (
              <div
                key={Math.random()}
                className=" m-1 border md:border-none text-gray-500  py-6 px-4 rounded-md  "
              >
                <p
                  className={`text-[${colorSchima.text_color}] text-2xl font-semibold`}
                >
                  {item.title}
                </p>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
