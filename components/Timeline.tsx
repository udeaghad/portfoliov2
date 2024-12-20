interface TimelineProps {
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
// const TimeLineItem = Tline.Item;

const Timeline = ({ resume }: TimelineProps) => {
  return (
    <div className=" m-4">
      {resume.map((item, index: number) => (
        <div
          key={index}
          className="w-full flex gap-2 justify-start items-start dark:text-slate-200 mb-3"
        >
          <div className="">
            <div className="bg-slate-600 text-white p-3 text-lg font-bold rounded-full w-fit">
              <span>{item.startDate}</span>
              <span>-</span>
              <span>{item.endDate}</span>
            </div>
          </div>

          <div className="">
            <div className="flex flex-col gap-1">
              <div className="text-2xl font-bold">{item.title}</div>
              <div className="text-2xl font-bold text-yellow-600">
                {item.company}
              </div>
            </div>
            <ul className="list-disc list-inside text-xl flex flex-col gap-3">
              <li>{item.reponsibility1}</li>
              <li>{item.reponsibility2}</li>
              <li>{item.reponsibility3}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
