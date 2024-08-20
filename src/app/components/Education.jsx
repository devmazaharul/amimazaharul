import { site_data } from "@/lib/site_data";
import React from "react";
import { RiGraduationCapLine } from "react-icons/ri";

export default function Education() {
  const {
    education: { title, sortDesc, university },
  } = site_data;

  return (
    <div className="py-16 px-4 bg-white rounded-xl  mb-4 ">
      <div>
        <p className="flex items-center gap-1 border rounded-full w-fit px-2 py-1 text-sm uppercase text-gray-500 mb-6 ">
          EDucation
          <RiGraduationCapLine className="text-[#00bc91]" />
        </p>
      </div>

      <div className="grid md:grid-cols-8">
        <div className="md:col-span-7">
          <h1 className=" font-bold text-4xl capitalize pb-3 text-[#00bc91]">
            {title}
          </h1>
          <p className="text-gray-500 ">{sortDesc}</p>

          <div className="my-4 grid md:grid-cols-1 grid-cols-1  ">
            {university.map((item) => (
              <div
                key={Math.random()}
                className=" md:m-2 my-2 text-gray-500  rounded-xl mx-auto "
              >
                <table
                  className={`block  rounded-md px-4 py-6 border border-l-[#00bc91]`}
                >
                  <thead>
                    <tr>
                      <td className="w-[35%] text-cyan-700 ">{item.name}</td>
                      <td className="text-lg font-semibold">{item.title}</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{item.stayTime}</td>
                      <td>{item.text}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
