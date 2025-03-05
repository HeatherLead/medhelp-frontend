import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className=" w-full h-12 p-5 flex items-center bg-green-300 text-white">
      <Image
        alt="logo"
        src="/logo.svg"
        width={50}
        height={50}
        className="h-8 aspect-square"
      />
      <h1>MedHelp</h1>
    </div>
  );
};

export default Navbar;
