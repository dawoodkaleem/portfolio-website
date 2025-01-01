// import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Online Food Ordering"
          main="this is an Online Food Ordering created in react js and used some component library used some component library"
        />
        <ProjectCard
          title="Admin Dash Board Frequency"
          main="this is a Admin dash Board created in react js and used some component library used some component library and menu "
        />
        <ProjectCard
          title="Shoping Online Cloths"
          main="this is a Shoping Online Cloths site created this in react js and used some component library used some component library"
        />
      </div>
    </div>
  );
};

export default Projects;
