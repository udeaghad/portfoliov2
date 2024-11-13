import { Dispatch, SetStateAction } from "react";

declare type IMenu = {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}

export type { IMenu };
