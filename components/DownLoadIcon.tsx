import { FaDownload } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const DownLoadIcon = () => {
  return (
    <div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            {/* <Button variant="ghost" size="icon"> */}
              <FaDownload size={30} className="text-yellow-600" />
            {/* </Button> */}
          </TooltipTrigger>
          <TooltipContent>
            <p>Download Resume</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default DownLoadIcon;
