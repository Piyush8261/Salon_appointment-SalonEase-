import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
//import { Contact } from "./home";
import { useEffect, useState } from "react";
import { FaClipboardList, FaUserCheck, FaCheckCircle, FaRedo, FaBars, FaTimes, FaEnvelope, FaPhone, FaMapMarkerAlt,FaClock,FaMobileAlt,FaMoneyBillWave } from "react-icons/fa";
const services = [
  {
    id: 1,
    name: "Haircut & Styling",
    description: "A professional haircut with a personalized style.",
    price: "₹250",
    image: "https://img.freepik.com/free-photo/woman-hairdresser-cutting-hair-client-salon_23-2147848691.jpg",
  },
  {
    id: 2,
    name: "Hair Spa",
    description: "Deep conditioning treatment for silky, smooth hair.",
    price: "₹600",
    image: "https://img.freepik.com/free-photo/client-doing-hair-treatment-salon_23-2149346822.jpg",
  },
  {
    id: 3,
    name: "Facial & Skin Care",
    description: "A rejuvenating facial to cleanse & brighten your skin.",
    price: "₹800",
    image: "https://img.freepik.com/free-photo/woman-getting-beauty-treatment-salon_23-2147829914.jpg",
  },
  {
    id: 4,
    name: "Manicure & Pedicure",
    description: "Nourish & beautify your nails with expert care.",
    price: "₹500",
    image: "https://img.freepik.com/free-photo/manicurist-polishing-client-nails-salon_23-2149309736.jpg",
  },
  {
    id: 5,
    name: "Waxing & Threading",
    description: "Smooth & hair-free skin with precise waxing services.",
    price: "₹400",
    image: "https://img.freepik.com/free-photo/woman-receiving-wax-hair-removal-salon_23-2149351457.jpg",
  },
  {
    id: 6,
    name: "Bridal Makeup",
    description: "Get the perfect bridal look with expert makeup artists.",
    price: "₹5000",
    image: "https://img.freepik.com/free-photo/bride-getting-her-makeup-done-by-professional-artist_23-2149070479.jpg",
  },
];
const Contact = () => {
    return (
      <section id="contact" className="bg-gradient-to-br from-black to-gray-500 text-white py-20 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 text-pink-300">Contact Us</h2>
          <div className="grid sm:grid-cols-2 gap-10 ">
            <motion.div
              className="flex items-center space-x-5 p-5 bg-gray-800 rounded-lg shadow-lg border border-gray-700"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <FaEnvelope className="text-blue-400 text-4xl" />
              <div className="text-center">
                <h3 className="text-xl font-semibold text-pink-200">Email</h3>
                <p className="text-gray-400">Piyushiitrpr1@gmail.com</p>
              </div>
            </motion.div>
  
            <motion.div
              className="flex items-center space-x-5 p-5 bg-gray-800 rounded-lg shadow-lg border border-gray-700"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <FaPhone className="text-green-400 text-4xl" />
              <div>
                <h3 className="text-xl font-semibold text-pink-200">Phone</h3>
                <p className="text-gray-400">+91 8278208261</p>
              </div>
            </motion.div>
  
           { /*<motion.div
              className="flex items-center space-x-5 p-5 bg-gray-800 rounded-lg shadow-lg border border-gray-700 col-span-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <FaMapMarkerAlt className="text-red-400 text-4xl" />
              {/*<div className=" items-center">
                <h3 className="text-xl font-semibold text-pink-200">Location</h3>
                <p className="text-gray-400 items-center">IIT Ropar, Main Campus, Punjab</p>
              </div>}
            </motion.div>*/}
          </div>
        </div>
      </section>
    );
  };
export const GirlsSalon = () => {
  const navigate = useNavigate();
const [queueInfo, setQueueInfo] = useState({ currentQueueNumber: null, pendingQueueNumber: null });

  useEffect(() => {
    fetch("http://localhost:3000/girls/api/queue-info")
      .then((response) => response.json())
      .then((data) => setQueueInfo(data))
      .catch((error) => console.error("Error fetching queue info:", error));
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-br from black to-gray-500 backdrop-blur-md shadow-md z-50">
        <div className="max-w-6xl mx-auto px-5 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white hover:text-pink-300 transition duration-300">SalonEase</h1>
          <button
            className="text-white hover:text-pink-300 transition duration-300 text-lg"
            onClick={() => navigate("/")}
          >
            Home
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="h-60 flex flex-col justify-center items-center bg-gradient-to-br from-black to-gray-500 text-white text-center px-6">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Girls Salon Services
        </motion.h1>
        <p className="text-lg text-pink-300">Luxury beauty treatments for the ultimate glow!</p>
        {queueInfo.currentQueueNumber !== null && queueInfo.nextQueueNumber !== null  ? (
        
        <div className="flex gap-3">
        <div className="mt-4 text-lg font-semibold bg-pink-500 text-white px-6 py-2 rounded-md shadow-lg">
          Running Queue : {queueInfo.currentQueueNumber} {/*<br />*/}
         { /*Next avaliable Queue Number: {queueInfo.pendingQueueNumber}*/}
        </div>
        <div className="mt-4 text-lg font-semibold bg-pink-500 text-white px-6 py-2 rounded-md shadow-lg">
       { /*Current Queue Number: {queueInfo.currentQueueNumber} <br />*/}
        Assigned Queue : {queueInfo.pendingQueueNumber}
      </div>
      <div className="mt-4 text-lg font-semibold bg-pink-500 text-white px-6 py-2 rounded-md shadow-lg">
        Estimated Wait time : {queueInfo.pendingQueueNumber==3||2 ? 0 :Math.max(0, (queueInfo.pendingQueueNumber - queueInfo.currentQueueNumber) * 10)} mins
      </div>
      </div>
      
      ):<p>Loading...</p>}
      </div>

      {/* Services Section */}
      <section className="py-16 px-5 bg-gray-900 text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center text-pink-300">Our Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <img src={service.image} alt={service.name} className="w-full h-48 object-cover" />
                <div className="p-5 text-center">
                  <h3 className="text-xl font-semibold text-pink-300">{service.name}</h3>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                  <p className="text-lg font-bold text-green-600 mt-3">{service.price}</p>
                  <button className="mt-4 bg-pink-500 hover:bg-pink-400 text-white px-4 py-2 rounded-md transition">
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact></Contact>
    </>
  );
};

export default GirlsSalon;
