import React from "react";
import Image from "next/image";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
import { SiWellfound } from "react-icons/si";

import pix from "../app/images/profile-pix.jpg";

const ProfilePix = () => {
  return (
    <div className="flex justify-center items-center mt-6">
      <div className="border-2 border-slate-950 dark:border-white w-fit flex">
        <div>
          <Image src={pix} alt="Profile Pix" width={250} height={250} />
          <div className="text-center bg-slate-950 text-white">
            <h3 className="text-xl font-bold">Dozie Udeagha</h3>
          </div>
        </div>
        <div className="bg-slate-950 text-white p-1 flex flex-col justify-between items-center">
          <div>
            <FaGithubSquare size={35} cursor="pointer" />
          </div>
          <div>
            <FaLinkedin size={35} cursor="pointer" />
          </div>
          <div>
            <FaSquareXTwitter size={35} cursor="pointer" />
          </div>
          <div>
            <SiWellfound size={40} cursor="pointer" />
          </div>
          <div>
            <TbWorldWww size={35} cursor="pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePix;
