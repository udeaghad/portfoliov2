import { Button } from "./ui/button";
import { DownloadButtonProps } from "../types/index";

const DownloadButton = ({ link, filename, name }: DownloadButtonProps) => {
  return (
    <Button className="bg-yellow-700 text-white text-2xl font-bold py-7 px-3">
      <a href={link} download={filename} className="block p-3">
        {name}
      </a>
    </Button>
  );
};

export default DownloadButton;
