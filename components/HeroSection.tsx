import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="w-fit text-lg font-bold text-center bg-transparent text-black p-2 m-4 border rounded-lg dark:text-white dark:bg-black">
        Welcome to my portfolio website!
      </div>

      <div className="text-2xl font-medium flex flex-col flex-wrap justify-center items-center">
        <div>Hey folks! I am a{" "}</div>
        <div>
          
          <span className="text-yellow-600 font-extrabold italic">
            FullStack Developer.
          </span>
        </div>
      </div>
      <div className="mt-3 text-justify text-xl font-medium text-slate-500 dark:text-slate-400 p-5">
        I have passion for technology and excited about the impact of emerging
        disruptive technologies. I am result-driven, self-motivated, and can
        communicate effectively in a cross-functional team.
      </div>
    </section>
  );
};

export default HeroSection;
