import { React, useState } from "react";

const Footer = () => {
  const [contact, setContact] = useState({
    email: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/subscribers", {
        email: contact.email,
      });

      // Handle success (e.g., update clients list or show a success message)
      console.log("contact added:", response.data);
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };
  return (
    <div className="">
      <div className="relative h-[48vh] bg-black/50 flex justify-center items-center">
        <div className="absolute left-0 top-0 -z-10">
          <img src="imgs/Rectangle.svg" alt="image" />
        </div>
        <div className="w-[50%] text-center">
          <h1 className="text-2xl font-bold text-white">
            Learn more about our listing process, as well as our additional
            staging and design work.
          </h1>
          <button className="m-3 bg-white text-sky-500 font-bold rounded-md px-20 p-2">
            LEARN MORE
          </button>
        </div>
      </div>
      <div className="bg-blue-500 text-white p-5 px-9">
        <div className="flex justify-around items-center">
          <ul className="flex gap-8">
            <li className="hover:bg-white/10 rounded-xl p-2">Home</li>
            <li className="hover:bg-white/10 rounded-xl p-2">Services</li>
            <li className="hover:bg-white/10 rounded-xl p-2">Projects</li>
            <li className="hover:bg-white/10 rounded-xl p-2">Testimonials</li>
            <li className="hover:bg-white/10 rounded-xl p-2">Contact</li>
          </ul>
          <ul className="flex gap-8 items-center">
            <li className="hover:bg-white/10 rounded-xl p-2">SubscribeUs</li>
            <li className="flex">
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  value={contact.email}
                  onChange={(e) =>
                    setNewProject({ ...contact, email: e.target.value })
                  }
                  required
                  className="border-[1.5px] text-white bg-transparent placeholder-white/60 px-2 py-1 rounded-l-md focus:outline-none focus:ring-0"
                />
              </form>
              <div>
                <button
                  type="submit"
                  className="bg-white border-[1.5px] font-bold text-blue-500 flex justify-center items-center rounded-r-md px-2 py-1"
                >
                  Subscribe
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-zinc-800 flex justify-between p-5 px-24 items-center">
        <p className="text-white">+111122223333</p>
        <div className="w-32">
          <img src="imgs/logo.svg" alt="logo" />
        </div>
        <div className="flex gap-2">
          <img
            src="logo/Group-1.svg"
            alt="icn"
            className="bg-white rounded-full p-1"
          />
          <img
            src="logo/Group.svg"
            alt="icn"
            className="bg-white rounded-full p-1"
          />
          <img
            src="logo/Frame.svg"
            alt="icn"
            className="bg-white rounded-full p-1"
          />
          <img
            src="logo/Linkedin.svg"
            alt="icn"
            className="bg-white rounded-full p-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
