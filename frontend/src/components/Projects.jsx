import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/projects`)
      .then((response) => setProjects(response.data))
      .catch((error) => console.error(error));
    axios
      .get(`${import.meta.env.VITE_API_URL}/clients`)
      .then((response) => setClients(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="h-[86vh] bg-sky-500/5 p-12 flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-sky-500 font-bold text-3xl text-center">
            Our Projects
          </h1>
          <p className="text-zinc-700 p-4 w-[50%] text-center text-base">
            We know what buyers are looking for and suggest projects that will
            bring clients top dollar for the sale of their home
          </p>
        </div>
        <div className="flex overflow-y-auto gap-4">
          {projects.map((project) => (
            <div
              key={project._id}
              className="max-w-56 flex flex-col bg-white border rounded-lg shadow overflow-hidden"
            >
              <div className="h-1/2 w-full">
                <img
                  className="rounded-t-lg h-max w-full"
                  src={project.image}
                  alt={project.name}
                />
              </div>
              <div className="p-3 h-1/2">
                <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {project.name}
                </h5>
                <p className="font-normal text-gray-600 overflow-hidden">
                  {project.description}
                </p>
                <div className="inline-flex items-center px-2 py-1 text-sm font-medium text-center text-white bg-orange-700 rounded-sm hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                  READ MORE
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[70vh] bg-gray-100 flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-sky-500 font-bold text-3xl text-center p-8">
            Happy Clients
          </h1>
        </div>
        <div className="flex overflow-y-auto gap-4">
          {clients.map((client) => (
            <div
              key={client._id}
              className="max-w-52 h-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-white p-2 overflow-hidden"
            >
              <div className="flex flex-col items-center pb-10 p-2">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src={client.image}
                  alt={client.name}
                />
                <p className="p-1 text-zinc-800">{client.description}</p>
                <h5 className="mb-1 text-2xl font-medium text-sky-500">
                  {client.name}
                </h5>
                <span className="text-gray-500">{client.designation}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
