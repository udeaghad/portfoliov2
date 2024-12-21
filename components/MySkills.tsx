import { FaHtml5 } from "react-icons/fa6";
import {
  FaCss3,
  FaReact,
  FaNode,
  FaDatabase,
  FaGitAlt,
  FaChrome,
} from "react-icons/fa";
import { IoLogoJavascript, IoLogoFigma } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import {
  SiTypescript,
  SiExpress,
  SiRuby,
  SiJirasoftware,
} from "react-icons/si";
import { BiLogoPostgresql, BiLogoMongodb, BiLogoZoom } from "react-icons/bi";
import prince2logo from "../app/images/PRINCE2 .png";
import itilLogo from "../app/images/ITIL.png";
import { Separator } from "./ui/separator";
import Image from "next/image";

const MySkills = () => {
  return (
    <div className="mt-5">
      <Separator className="bg-slate-400" />
      <h3 className="text-3xl font-bold text-left m-3 italic dark:text-slate-200">
        My Skills
      </h3>
      <Separator className="bg-slate-400" />

      <div className=" m-4">
        <div className="w-full flex gap-2 justify-start items-start dark:text-slate-200 mb-3">
          <div className="bg-slate-600 text-white p-3 text-xl font-bold rounded-full w-fit">
            <span>Frontend</span>
          </div>

          <ul className="flex gap-5 flex-wrap">
            <li className="flex flex-col items-center">
              <FaHtml5 size={100} color="red" />
              <span className="text-2xl font-bold">HTML5</span>
            </li>
            <li className="flex flex-col items-center">
              <FaCss3 size={100} color="blue" />
              <span className="text-2xl font-bold">CSS3</span>
            </li>
            <li className="flex flex-col items-center">
              <IoLogoJavascript size={100} color="#ffe000" />
              <span className="text-2xl font-bold">JavaScript</span>
            </li>
            <li className="flex flex-col items-center">
              <FaReact size={100} color="blue" />
              <span className="text-2xl font-bold">React</span>
            </li>
            <li className="flex flex-col items-center">
              <RiNextjsFill
                size={100}
                className=" text-black dark:text-blue-50"
              />
              <span className="text-2xl font-bold">Next.js</span>
            </li>

            <li className="flex flex-col items-center">
              <RiTailwindCssFill size={100} color="blue" />
              <span className="text-2xl font-bold">Tailwind</span>
            </li>

            <li className="flex flex-col items-center">
              <TbBrandRedux size={100} color="purple" />
              <span className="text-2xl font-bold">Redux</span>
            </li>

            <li className="flex flex-col items-center">
              <SiTypescript size={100} color="blue" />
              <span className="text-2xl font-bold">TypeScript</span>
            </li>
          </ul>
        </div>
      </div>
      <Separator className="bg-slate-400" />

      <div className=" m-4">
        <div className="w-full flex gap-2 justify-start items-start dark:text-slate-200 mb-3">
          <div className="bg-slate-600 text-white p-3 text-xl font-bold rounded-full w-fit">
            <span>Backend</span>
          </div>

          <ul className="flex gap-5 flex-wrap">
            <li className="flex flex-col items-center">
              <FaNode size={100} color="green" />
              <span className="text-2xl font-bold">Node.js</span>
            </li>

            <li className="flex flex-col items-center">
              <SiExpress size={100} color="#3a3838" />
              <span className="text-2xl font-bold">Express.js</span>
            </li>

            <li className="flex flex-col items-center">
              <SiRuby size={100} color="red" />
              <span className="text-2xl font-bold">Ruby</span>
            </li>

            <li className="flex flex-col items-center">
              <FaDatabase size={100} color="blue" />
              <span className="text-xl font-bold">Databases</span>
            </li>

            <li className="flex flex-col items-center">
              <BiLogoPostgresql size={100} color="blue" />
              <span className="text-xl font-bold">PostgreSQL</span>
            </li>

            <li className="flex flex-col items-center">
              <BiLogoMongodb size={100} color="green" />
              <span className="text-xl font-bold">MongoDB</span>
            </li>
          </ul>
        </div>
      </div>
      <Separator className="bg-slate-400" />

      <div className=" m-4">
        <div className="w-full flex gap-2 justify-start items-start dark:text-slate-200 mb-3">
          <div className="bg-slate-600 text-white py-3 px-8 text-xl font-bold rounded-full w-fit">
            <span>Tools</span>
          </div>

          <ul className="flex gap-5 flex-wrap">
            <li className="flex flex-col items-center">
              <FaGitAlt size={100} color="red" />
              <span className="text-2xl font-bold">Git</span>
            </li>

            <li className="flex flex-col items-center">
              <FaChrome size={100} color="#3a3838" />
              <span className="text-2xl font-bold">DevTools</span>
            </li>

            <li className="flex flex-col items-center">
              <BiLogoZoom size={100} color="blue" />
              <span className="text-2xl font-bold text-center w-32">Remote Collaboration</span>
            </li>

            <li className="flex flex-col items-center">
              <IoLogoFigma size={100} color="blue" />
              <span className="text-2xl font-bold">Figma</span>
            </li>

            <li className="flex flex-col items-center">
              <SiJirasoftware size={100} color="blue" />
              <span className="text-2xl font-bold">Jira</span>
            </li>
          </ul>
        </div>

        <Separator className="bg-slate-400" />

        <div className=" m-4">
          <div className="w-full flex gap-2 justify-start items-start dark:text-slate-200 mb-3">
            <div className="bg-slate-600 text-white p-3 text-xl font-bold rounded-full w-fit">
              <span>Certifications</span>
            </div>

            <ul className="flex gap-5 flex-wrap">
              <li className="flex flex-col items-center w-32">
                <Image
                  src={prince2logo}
                  alt="prince2"
                  width={100}
                  height={100}
                  objectFit="cover"
                />
                <span className="text-2xl font-bold text-center">PRINCE2 Practitioner</span>
              </li>

              <li className="flex flex-col items-center">
                <Image
                  src={itilLogo}
                  alt="itil"
                  width={70}
                  height={70}
                  objectFit="cover"
                />

                <span className="text-2xl font-bold text-center w-32">ITIL Practitioner</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
