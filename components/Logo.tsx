import { FiUser } from "react-icons/fi";

const Logo = () => {
  return (
    <div className="w-fit flex justify-end items-end gap-2">
     
        <div>
          <FiUser size={40} />
        </div>

        <div className="font-bold text-4xl">
          <span>Dozie</span>
        </div>
      
    </div>
  );
};

export default Logo;
