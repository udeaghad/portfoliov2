import { PiDotsNineBold } from "react-icons/pi";
import { MdClose } from "react-icons/md";
import { IMenu } from "../types";

const Hamburger = ({ setOpen, open }: IMenu) => {
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      {open ? (
        <MdClose size={40} onClick={handleClick} className="cursor-pointer" />
      ) : (
        <PiDotsNineBold
          size={40}
          onClick={handleClick}
          className="cursor-pointer"
        />
      )}
      {/* <PiDotsNineBold size={48} onClick={handleClick} className="cursor-pointer"/> */}
    </div>
  );
};

export default Hamburger;
