const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Schemas & Models
const projectSchema = new mongoose.Schema({
  image: String,
  name: String,
  description: String,
});

const clientSchema = new mongoose.Schema({
  image: String,
  name: String,
  description: String,
  designation: String,
});

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  city: String,
});

const subscriptionSchema = new mongoose.Schema({
  email: String,
});

const Project = mongoose.model("Projects", projectSchema);
const Client = mongoose.model("Clients", clientSchema);
const Contact = mongoose.model("Contacts", contactSchema);
const Subscription = mongoose.model("Subscriptions", subscriptionSchema);

// API Routes
app.get("/projects", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

app.get("/clients", async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
});

app.get("/contacts", async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

app.get("/subscriptions", async (req, res) => {
  const subscriptions = await Subscription.find();
  res.json(subscriptions);
});

app.post("/clients", async (req, res) => {
  try {
    const { name, description, designation, image } = req.body;

    if (!name || !description || !designation) {
      return res
        .status(400)
        .json({ error: "Name, description, and designation are required." });
    }

    const newClient = new Client({
      name,
      description,
      designation,
      image,
    });

    const savedClient = await newClient.save();
    res.status(201).json(savedClient);
  } catch (error) {
    console.error("Error adding client:", error.message);
    res
      .status(500)
      .json({ error: "An error occurred while adding the client." });
  }
});

app.post("/projects", async (req, res) => {
  try {
    const { name, description, image } = req.body;

    if (!name || !description) {
      return res
        .status(400)
        .json({ error: "Name, description, and designation are required." });
    }

    const newProject = new Project({
      name,
      description,
      image,
    });

    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    console.error("Error adding client:", error.message);
    res
      .status(500)
      .json({ error: "An error occurred while adding the client." });
  }
});

app.post("/contacts", async (req, res) => {
  try {
    const { name, email, phone, city } = req.body;

    if (!name || !email || !phone || !city) {
      return res
        .status(400)
        .json({ error: "Name, description, and designation are required." });
    }

    const newContact = new Contact({
      name,
      email,
      phone,
      city,
    });

    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    console.error("Error adding client:", error.message);
    res
      .status(500)
      .json({ error: "An error occurred while adding the client." });
  }
});

app.post("/subscriptions", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res
        .status(400)
        .json({ error: "Name, description, and designation are required." });
    }

    const newSubscription = new Subscription({
      email,
    });

    const savedSubscriber = await newSubscription.save();
    res.status(201).json(savedSubscriber);
  } catch (error) {
    console.error("Error adding client:", error.message);
    res
      .status(500)
      .json({ error: "An error occurred while adding the client." });
  }
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
