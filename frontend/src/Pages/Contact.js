import React from "react";
import { PiMoonDuotone } from "react-icons/pi";
import { toast } from "react-hot-toast";

const Contact = () => {
  const msg = () => {
    toast("Hello  !  How can I help you ?");
  };
  return (
    <div className="flex w-full md:h-full justify-center items-center flex-col bg-slate-200 ">
      <br />
      <br />
      {/* <img src={empty} className="w-full max-w-sm" /> */}
      <p className="text-slate-500 text-s font-bold pt-8 flex flex-items-center ">
        ~ Developed by @mahek patel
        {/* <PiMoonDuotone /> */}
        <br />
        <br />
        <br />
      </p>
      <button
        className="bg-slate-500 w-1/6 text-lg font-bold py-2 text-white rounded"
        onClick={msg}
      >
        Say Hii!
      </button>
      <br />
      <br />
    </div>
  );
};

export default Contact;
