import { React, useState, useEffect } from "react";
import axios from "axios";

const Consultation = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/contacts`,
        {
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
          city: contact.city,
        }
      );
      setContact({
        name: "",
        email: "",
        phone: "",
        city: "",
      });
      // Handle success (e.g., update clients list or show a success message)
      // console.log("contact added:", response.data);
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };
  return (
    <div className="w-full h-[85vh] relative flex justify-around">
      <div className="w-full absolute -z-50">
        <img
          src="imgs/young-couple-examining-blueprints-with-real-estate-agent-while-buying-new-home 1.svg"
          alt=""
          className="w-full"
        />
      </div>
      <div className="w-1/4 text-center flex items-center justify-center text-white font-bold">
        <h1 className="text-5xl">Consultation, Design, & Marketing</h1>
      </div>
      <div className="w-1/4 flex justify-center">
        <form
          onSubmit={handleContactSubmit}
          className="w-full mt-24 mb-12 rounded-md bg-blue-950/70 flex flex-col gap-5 border-4 text-white text-center p-3 px-5"
        >
          <div>
            <h2 className="font-bold text-3xl">Get a Free Consultation</h2>
          </div>
          <div>
            <input
              type="text"
              name="name"
              value={contact.name}
              placeholder="Name"
              onChange={(e) => setContact({ ...contact, name: e.target.value })}
              className="w-full border-[1.2px] text-white bg-transparent placeholder-white/60 p-1 rounded-md focus:outline-none focus:ring-0"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={contact.email}
              placeholder="Email"
              onChange={(e) =>
                setContact({ ...contact, email: e.target.value })
              }
              className="w-full border-[1.2px] text-white bg-transparent placeholder-white/60 p-1 rounded-md focus:outline-none focus:ring-0"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="phone"
              value={contact.phone}
              placeholder="Phone"
              onChange={(e) =>
                setContact({ ...contact, phone: e.target.value })
              }
              className="w-full border-[1.2px] text-white bg-transparent placeholder-white/60 p-1 rounded-md focus:outline-none focus:ring-0"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="city"
              value={contact.city}
              placeholder="City"
              onChange={(e) => setContact({ ...contact, city: e.target.value })}
              className="w-full border-[1.2px] text-white bg-transparent placeholder-white/60 p-1 rounded-md focus:outline-none focus:ring-0"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-50 hover:text-orange-500 w-full font-bold rounded-md p-1 border-[1.5px] border-orange-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Consultation;
