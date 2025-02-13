"use client";
import { site_data } from "@/lib/site_data";
import React from "react";
import toast from "react-hot-toast";

import { RiMessage2Line } from "react-icons/ri";

const formObj = {
  name: "",
  email: "",
  message: "",
};

export default function useConactpage() {
  const {
    contact_info: { title, sortDesc },
  } = site_data;

  const [contactstate, setcontactstate] = React.useState({ ...formObj });
  const [loading, setLoading] = React.useState(false);

  const handleChange = (value, name) => {
    setcontactstate({ ...contactstate, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (
        contactstate.name !== "" &&
        contactstate.email !== "" &&
        contactstate.message !== ""
      ) {
        let writeMsg = `<p  style="font-family: monospace;text-transform: capitalize;line-height: 13px><p>mailer name: ${contactstate.name}</p><p>mailer email :${contactstate.email}</p><div ><p>Message,</p> <p style="line-height: 20px">${contactstate.message}</p></div><div>`;

        const result = await fetch("https://amimazaharul.vercel.app/api/sendmail", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({message:writeMsg, subject:"Thanks for contact"}),
        });
        if(result.status==200){
          toast.success("Thanks for contact")
          setLoading(false)
        }else{
          toast.error("Email not send")
          setLoading(false)
        }
       
      } else {
        toast.error("Empty box");
        setLoading(false);
      }
    } catch (error) {
      toast.error("Connection error");
      setLoading(false);
    }
  };

  return (
    <div className="py-16 px-4 bg-white rounded-xl  mb-4 ">
      <div>
        <p className="flex items-center gap-1 border rounded-full w-fit px-2 py-1 text-sm uppercase text-gray-500 mb-6 ">
          Contact
          <RiMessage2Line className="text-[#00bc91]" />
        </p>
      </div>

      <div className="grid md:grid-cols-8">
        <div className="md:col-span-7">
          <h1 className=" font-bold text-4xl capitalize pb-3 text-[#00bc91]">
            {title}
          </h1>
          <p className="text-gray-500">{sortDesc}</p>

          <form onSubmit={handleSubmit} className="my-4 md:w-[50%] mx-auto">
            <div className=" my-4 text-gray-500  ">
              <input
                onChange={(e) => handleChange(e.target.value, "name")}
                value={contactstate.name}
                type="text"
                placeholder="Name"
                className="w-full capitalize border rounded-md py-2  px-3 outline-none"
              />
            </div>
            <div className=" my-4 text-gray-500  ">
              <input
                onChange={(e) => handleChange(e.target.value, "email")}
                value={contactstate.email}
                type="email"
                placeholder="Email"
                className="w-full border rounded-md py-2  px-3 outline-none"
              />
            </div>

            <textarea
              onChange={(e) => handleChange(e.target.value, "message")}
              value={contactstate.message}
              className="w-full border rounded-md py-2  px-3 outline-none"
              placeholder="Message"
            ></textarea>
            <button
              type="submit"
              className="bg-[#00bc91] text-white w-fit px-6 py-2 rounded-full"
            >
              {loading ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
