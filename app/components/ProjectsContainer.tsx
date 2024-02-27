import React from "react";
import { projects } from "./projectsData";
import { getImageUrl } from "../utils/utils";

export default function ProjectsContainerThing() {
  const projectsItems = projects.map((item) => (
    <div className="w-56 bg-white/75 rounded-xl overflow-hidden ease-in-out duration-300 hover:scale-105">
      <img className="w-full" src={getImageUrl(item)} alt={item.title} />
      <div>
        <h1 className="text-black text-center text-xl font-bold">
          {item.title}
        </h1>
        <h3 className="text-black text-center">{item.description}</h3>
      </div>
    </div>
  ));

  return (
    <div
      id="projectsContainer"
      className="flex flex-row flex-wrap gap-10 m-10 justify-center"
    >
      {projectsItems}
    </div>
  );
}

/*const ProjectsContainer = () => {
  return (
    <div
      id="projectsContainer"
      className="flex flex-row flex-wrap gap-10 m-10 justify-center"
    >
      <div className="w-56 bg-white/75 rounded-xl overflow-hidden ease-in-out duration-300 hover:scale-105">
        <img
          src="reshot-icon-weather-8CKJB9YN7X.svg"
          alt="icon"
          className="w-full"
        />
        <div id="heroImg" className="">
          <h1
            id="projectTitle"
            className="text-black text-center text-xl font-bold"
          >
            Weather App
          </h1>
          <h3 id="projectDescription" className="text-black text-center">
            This project will use API data and geolocation to visualize weather
            data depending on location.
          </h3>
        </div>
      </div>
    </div>
  );
};

//export default ProjectsContainer;*/
