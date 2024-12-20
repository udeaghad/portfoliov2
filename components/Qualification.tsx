import Timeline from "./Timeline";
import { Separator } from "./ui/separator"

const Qualification = () => {
  const resume = [
    {
      id: 1,
      startDate: "2022",
      endDate: "2022",
      title: "Remote Full Stack Web Development Program (Full-Time)",
      company: "Microverse Inc, USA",
      reponsibility1:
        "Spent 1300+ hours mastering algorithms, data structures, and full-stack development while simultaneously developing projects with Ruby, Rails, JavaScript, React, Redux, Node.js, and Express.js.",
      reponsibility2:
        "Developed skills in remote pair programming using GitHub, industry-standard git-flow, code reviews, and daily standups to communicate and collaborate with international remote developers.",
    },
    {
      id: 2,
      startDate: "2011",
      endDate: "2014",
      title: "MBA in Banking and Finance",
      company: "Enugu State University of Technology, Nigeria.",
      reponsibility1:
        "Thesis: Consumer’s Attitudes Towards Automated Teller Machines Services in Enugu Metropolis",
    },
    {
      id: 3,
      startDate: "2001",
      endDate: "2005",
      title: "BTech, Project Management Technology",
      company: "Federal University of Technology, Owerri, Nigeria",
      reponsibility1:
        "Thesis: Factors Mitigating Against Raising Venture Capital for Capital Projects in Nigeria: A Case Study of Owerri Metropolis.",
      },
  ];
  return (
    <div className="mt-5">
      <Separator className="bg-slate-400" />
    <h3 className="text-3xl font-bold text-left m-3 italic dark:text-slate-200">
      Education
    </h3>
    <Separator className=" bg-slate-400" />
    <Timeline resume={resume} />
  </div>
  )
}

export default Qualification