import Image from "next/image";
import { FiUser } from "react-icons/fi";

// import logo2 from "../app/images/avatar-svgrepo-com.svg";

const Logo = () => {
  return (
    <div className="w-fit flex items-end gap-2">
      <div>
        {/* <Image src={logo2} alt="logo" width={50} height={50} /> */}
        <FiUser size={50}/>
      </div>

      <div className="font-bold text-4xl">
        <span>Dozie</span>
      </div>
    </div>
  );
};

export default Logo;
