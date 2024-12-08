import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [images, setImages] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
  });
  const [newClient, setNewClient] = useState({
    name: "",
    description: "",
    designation: "",
  });
  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", images);
    formData.append("upload_preset", "preset1");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dnnnfrto3/image/upload",
        formData
      );
      return res.data.secure_url;
    } catch (error) {
      console.error("Image upload failed:", error);
      throw new Error("Image upload failed");
    }
  };

  // Add Project
  const handleSubmitProject = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", images);
    formData.append("upload_preset", "preset1");

    try {
      const imageUrl = await uploadImage();
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/projects`,
        {
          name: newProject.name,
          description: newProject.description,
          image: imageUrl,
        }
      );
      setNewProject({
        name: "",
        description: "",
      });
      // Handle success (e.g., update clients list or show a success message)
      console.log("Client added:", response.data);
    } catch (error) {
      setError("Image upload failed. Please try again.");
      console.error("Error adding client:", error);
    }
  };

  // Add Client
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", images);
    formData.append("upload_preset", "preset1");

    try {
      const imageUrl = await uploadImage();
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/clients`,
        {
          name: newClient.name,
          description: newClient.description,
          designation: newClient.designation,
          image: imageUrl,
        }
      );
      setNewClient({
        name: "",
        description: "",
        designation: "",
      });
      // console.log("Client added:", response.data);
    } catch (error) {
      setError("Image upload failed. Please try again.");
      console.error("Error adding client:", error);
    }
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/contacts`)
      .then((res) => setContacts(res.data));
    axios
      .get(`${import.meta.env.VITE_API_URL}/subscriptions`)
      .then((res) => setSubscriptions(res.data));
  }, []);

  return (
    <div className="text-center p-3">
      <h1 className="text-4xl text-sky-500 font-bold">Admin Panel</h1>
      <div className="flex">
        <div className="w-1/2 p-5">
          <h2 className="text-2xl font-bold">Project Management</h2>
          <form
            onSubmit={handleSubmitProject}
            className="bg-sky-400 flex flex-col gap-3 rounded-md p-6"
          >
            <input
              type="text"
              placeholder="name"
              value={newProject.name}
              onChange={(e) =>
                setNewProject({ ...newProject, name: e.target.value })
              }
              required
              className="p-1 border bg-transparent rounded-md text-black placeholder-zinc-600"
            />
            <input
              type="text"
              placeholder="Description"
              value={newProject.description}
              onChange={(e) =>
                setNewProject({ ...newProject, description: e.target.value })
              }
              required
              className="p-1 border bg-transparent rounded-md text-black placeholder-zinc-600"
            />
            <input
              type="file"
              onChange={(e) => setImages(e.target.files[0])}
              className="p-1 border bg-transparent rounded-md text-black placeholder-zinc-600"
            />
            <h1>File size should be less than 1MB</h1>
            <button
              type="submit"
              className="p-1 border bg-orange-500 rounded-md text-black "
            >
              Add Project
            </button>
          </form>
        </div>
        <div className="w-1/2 p-5">
          <h1 className="font-bold text-2xl">Client management</h1>
          <form
            onSubmit={handleSubmit}
            className="bg-sky-400 flex flex-col gap-3 rounded-md p-6"
          >
            <input
              type="text"
              placeholder="Name"
              value={newClient.name}
              onChange={(e) =>
                setNewClient({ ...newClient, name: e.target.value })
              }
              required
              className="p-1 border bg-transparent rounded-md text-black placeholder-zinc-600"
            />
            <input
              type="text"
              placeholder="Description"
              value={newClient.description}
              onChange={(e) =>
                setNewClient({ ...newClient, description: e.target.value })
              }
              required
              className="p-1 border bg-transparent rounded-md text-black placeholder-zinc-600"
            />
            <input
              type="text"
              placeholder="Designation"
              value={newClient.designation}
              onChange={(e) =>
                setNewClient({ ...newClient, designation: e.target.value })
              }
              required
              className="p-1 border bg-transparent rounded-md text-black placeholder-zinc-600"
            />
            <input
              type="file"
              onChange={(e) => setImages(e.target.files[0])}
              className="p-1 border bg-transparent rounded-md text-black placeholder-zinc-600"
            />
            <h1>File size should be less than 1MB</h1>

            <button
              type="submit"
              className="p-1 border bg-orange-500 rounded-md text-black"
            >
              Add Client
            </button>
          </form>
        </div>
      </div>
      <section>
        <h1 className="font-bold text-2xl">Contact Form Details</h1>
        <div className="bg-sky-400 flex flex-col gap-3 rounded-md p-2">
          {contacts.map((contact) => (
            <div key={contact._id} className="bg-white/20 rounded-lg w-fit p-2">
              <div>
                <p>{contact.name}</p>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
                <p>{contact.city}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-bold text-2xl">Subscribed Emails</h2>
        <div className="grid grid-cols-3  bg-sky-400 gap-3 rounded-md p-6 overflow-hidden">
          {subscriptions.map((subscription) => (
            <div
              key={subscription._id}
              className="bg-white/20 rounded-lg w-fit p-2"
            >
              {subscription.email}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AdminPanel;
