import React from "react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div className="container mx-auto justify-center lg:w-[1200px] md:w-8/12 w-11/12 mt-20 relative overflow-y-hidden pb-66">
      <div className="w-full flex justify-center gap-8">
        <Button
          variant="ghost"
          className="text-[#0A2918] hover:bg-transparent text-lg font-medium"
        >
          Terms & Condition
        </Button>
        <Button
          variant="ghost"
          className="text-[#0A2918] hover:bg-transparent text-lg font-medium"
        >
          Privacy Policy
        </Button>
      </div>
      <div className="absolute mt-0 flex justify-center w-full">
        <p className="text-[260px] text-[#030C0712] font-medium">EasyWrite</p>
      </div>
    </div>
  );
};

export default Footer;
