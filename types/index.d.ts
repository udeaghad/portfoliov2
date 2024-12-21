import { Dispatch, SetStateAction } from "react";

declare type IMenu = {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}

declare type DownloadButtonProps = {
  link: string;
  filename: string;
  name: string;
}

declare type TimelineProps = {
  resume: {
    id: number;
    startDate: string;
    endDate: string;
    title: string;
    company: string;
    reponsibility1: string;
    reponsibility2?: string;
    reponsibility3?: string;
  }[];
}

export type { IMenu, DownloadButtonProps, TimelineProps };
