import { PiDotsNineBold } from "react-icons/pi";
import { Dispatch, SetStateAction } from "react";

interface IMenu {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}

const Hamburger = ({setOpen, open}: IMenu) => {

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <div>
      <PiDotsNineBold size={48} onClick={handleClick} className="cursor-pointer"/>
    </div>
  )
}

export default Hamburger