import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [images, setImages] = useState("");
  const [url, setUrl] = useState("");

  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    image: "",
  });
  const [newClient, setNewClient] = useState({
    name: "",
    description: "",
    designation: "",
    image: "",
  });

  // Fetch Data
  // useEffect(() => {
  //   axios
  //     .get("URL/projects")
  //     .then((res) => setProjects(res.data))
  //     .catch((error) => console.log(error));
  //   axios
  //     .get("URL/clients")
  //     .then((res) => setClients(res.data));
  //   axios
  //     .get("URL/contacts")
  //     .then((res) => setContacts(res.data));
  //   axios
  //     .get("URL/subscribers")
  //     .then((res) => setSubscriptions(res.data));
  // }, []);

  // Handle File Input
  const handleFileChange = (e, setFunc) => {
    const file = e.target.files[0]; // Get the file from the input
    console.log("Selected File:", file);
    setFunc((prev) => ({ ...prev, image: e.target.files[0] }));
  };
  // Add Project
  const handleSubmitProject = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", images);
    formData.append("upload_preset", "preset1");
    await axios
      .post("https://api.cloudinary.com/v1_1/dnnnfrto3/image/upload", formData)
      .then((res) => setUrl(res.data.secure_url))
      .catch((error) => console.log(error));

    console.log(url);

    try {
      const response = await axios.post("URL/projects", {
        name: newProject.name,
        description: newProject.description,
        image: url,
      });

      // Handle success (e.g., update clients list or show a success message)
      console.log("Client added:", response.data);
    } catch (error) {
      console.error("Error adding client:", error);
    }
  };

  // Add Client
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", images);
    formData.append("upload_preset", "preset1");
    await axios
      .post("https://api.cloudinary.com/v1_1/dnnnfrto3/image/upload", formData)
      .then((res) => setUrl(res.data.secure_url))
      .catch((error) => console.log(error));

    console.log(url);

    try {
      const response = await axios.post("URL/clients", {
        name: newClient.name,
        description: newClient.description,
        designation: newClient.designation,
        image: url,
      });

      console.log("Client added:", response.data);
    } catch (error) {
      console.error("Error adding client:", error);
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font bold">Admin Panel</h1>

      <h2 className="text-2xl font-bold">Project Management</h2>
      <form
        onSubmit={handleSubmitProject}
        className="bg-sky-400 flex flex-col gap-3 rounded-md p-6"
      >
        <input
          type="text"
          placeholder="Pname"
          value={newProject.name}
          onChange={(e) =>
            setNewProject({ ...newProject, name: e.target.value })
          }
          required
          className="p-1 border bg-transparent rounded-md text-black placeholder-black"
        />
        <input
          type="text"
          placeholder="Description"
          value={newProject.description}
          onChange={(e) =>
            setNewProject({ ...newClient, description: e.target.value })
          }
          required
          className="p-1 border bg-transparent rounded-md text-black placeholder-black"
        />
        <input
          type="file"
          onChange={(e) => setImages(e.target.files[0])}
          className="p-1 border bg-transparent rounded-md text-black placeholder-black"
        />
        <button
          type="submit"
          className="p-1 border bg-orange-500 rounded-md text-black "
        >
          Add Project
        </button>
      </form>
      <h1 className="font-bold text-2xl">Client management</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-sky-400 flex flex-col gap-3 rounded-md p-6"
      >
        <input
          type="text"
          placeholder="Name"
          value={newClient.name}
          onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
          required
          className="p-1 border bg-transparent rounded-md text-black placeholder-black"
        />
        <input
          type="text"
          placeholder="Description"
          value={newClient.description}
          onChange={(e) =>
            setNewClient({ ...newClient, description: e.target.value })
          }
          required
          className="p-1 border bg-transparent rounded-md text-black placeholder-black"
        />
        <input
          type="text"
          placeholder="Designation"
          value={newClient.designation}
          onChange={(e) =>
            setNewClient({ ...newClient, designation: e.target.value })
          }
          required
          className="p-1 border bg-transparent rounded-md text-black placeholder-black"
        />
        <input
          type="file"
          onChange={(e) => setImages(e.target.files[0])}
          className="p-1 border bg-transparent rounded-md text-black placeholder-black"
        />
        <button
          type="submit"
          className="p-1 border bg-orange-500 rounded-md text-black "
        >
          Add Client
        </button>
      </form>

      <section>
        <h1 className="font-bold text-2xl">Contact Form Details</h1>
        <div className="bg-sky-400 flex flex-col gap-3 rounded-md p-6">
          {contacts.map((contact) => (
            <div key={contact._id}>
              <p>{contact.name}</p>
              <p>{contact.email}</p>
              <p>{contact.phone}</p>
              <p>{contact.city}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-bold text-2xl">Subscribed Emails</h2>
        <div className="bg-sky-400 flex flex-col gap-3 rounded-md p-6">
          {subscriptions.map((subscription) => (
            <div key={subscription._id}>{subscription.email}</div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AdminPanel;
