import React from "react";
import Timeline from "./Timeline";

const Resume = () => {
  const resume = [
    {
      id: 1,
      startDate: "2023",
      endDate: "2024",
      title: "Full Stack Developer",
      company: "Wayagram",
      reponsibility1:
        "Collaborated closely with the other developers to re-design the landing page, and enhanced e-shop, promotions, crowdfunding, and chat to align with business objectives.",
      reponsibility2:
        "Integrated payments for e-shops, crowdfunding, and promotions using Wayaquick and Paystack.",
      reponsibility3:
        "Revamped the e-shop checkout process in collaboration with the designer, and implemented the enhancements on both the backend and frontend to meet business needs.",
    },
    {
      id: 2,
      startDate: "2022",
      endDate: "2023",
      title: "Full Stack Developer (Part-time)",
      company: "System Trackers Technology",
      reponsibility1:
        "Developed and maintained several scalable and secured high-performing apps for clients while collaborating remotely with 6 Engineers.",
      reponsibility2:
        "Contributed over 50% of the code base in building API terminals for a client that enables handling customers’ delivery requests and monitoring order status",
      reponsibility3:
        "Reviewed code and refactored legacy codes in React and Redux applications for code efficiency and maintainability.",
    },
    {
      id: 3,
      startDate: "2021",
      endDate: "2023",
      title: "Supply Chain Manager",
      company: "C-Kompass Recycling Solutions",
      reponsibility1:
        "Designed and implemented robust warehousing and inventory management procedures, ensuring optimal stock levels and efficient flow of goods.",
      reponsibility2:
        "Led cross-functional supply chain teams, driving collaboration and fostering a high-performance culture to meet operational goals.",
      reponsibility3:
        "Negotiated contracts with suppliers and logistics providers, reducing costs and enhancing operational efficiency across the supply chain.",
    },
  ];
  return (
    <div className="mt-5">
      <h3 className="text-3xl font-bold text-left m-3 italic dark:text-slate-200">
        Expereiences
      </h3>
      <Timeline resume={resume} />
    </div>
  );
};

export default Resume;