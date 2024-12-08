import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios
      .get("URL/projects")
      .then((response) => setProjects(response.data))
      .catch((error) => console.error(error));
    console.log(projects);
    axios
      .get("URL/clients")
      .then((response) => setClients(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="h-[90vh] bg-sky-500/5 p-12 flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-sky-500 font-bold text-3xl text-center">
            Our Projects
          </h1>
          <p className="text-zinc-700 p-4 w-[50%] text-center text-base">
            We know what buyers are looking for and suggest projects that will
            bring clients top dollar for the sale of their home
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project._id}
              className="max-w-xs bg-white borde rounded-lg shadow"
            >
              <img
                className="rounded-t-lg"
                src={project.image}
                alt={project.title}
              />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {project.title}
                </h5>
                <p className="mb-3 font-normal text-gray-600">
                  {project.description}
                </p>
                <div className="inline-flex items-center px-6 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-sm hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                  READ MORE
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[90vh] bg-gray-100 flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-sky-500 font-bold text-3xl text-center p-8">
            Happy Clients
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {clients.map((client) => (
            <div
              key={client._id}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="flex flex-col items-center pb-10">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src={client.image}
                  alt={client.name}
                />
                <p className="p-1 text-zinc-800">{client.message}</p>
                <h5 className="mb-1 text-2xl font-medium text-sky-500 dark:text-white">
                  {client.name}
                </h5>
                <span className="text-xl text-gray-500 dark:text-gray-400">
                  {client.designation}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
