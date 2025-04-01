import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaClipboardList, FaUserCheck, FaCheckCircle, FaRedo, FaBars, FaTimes, FaEnvelope, FaPhone, FaMapMarkerAlt,FaClock,FaMobileAlt,FaMoneyBillWave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    id: 1,
    title: "Check Queue Status",
    description: "View the current queue number and estimated wait time before booking.",
    icon: <FaClipboardList className="text-blue-500 text-4xl" />,
  },
  {
    id: 2,
    title: "Book Your Slot",
    description: "Enter your details and confirm your appointment. You will assign a queue number.",
    icon: <FaUserCheck className="text-pink-500 text-4xl" />,
  },
  {
    id: 3,
    title: "Get Notified",
    description: "Receive live updates about your queue position and expected time.",
    icon: <FaCheckCircle className="text-green-500 text-4xl" />,
  },
  {
    id: 4,
    title: "Complete and Call",
    description: "Once your turn is completed, the admin call the next queue number.",
    icon: <FaRedo className="text-yellow-500 text-4xl" />,
  },
];
const benefits = [
    {
      id: 1,
      title: "No Long Waiting",
      description: "Book your slot and arrive just in time—no more standing in queues!",
      icon: <FaClock className="text-yellow-400 text-4xl" />,
    },
    {
      id: 2,
      title: "Easy Online Booking",
      description: "Book appointments anytime from your phone.",
      icon: <FaMobileAlt className="text-blue-400 text-4xl" />,
    },
    {
      id: 3,
      title: "Real-Time Updates",
      description: "Get live notifications on queue status and estimated wait time.",
      icon: <FaCheckCircle className="text-green-400 text-4xl" />,
    },
    {
      id: 4,
      title: "Affordable Pricing",
      description: "No hidden costs—get salon services at student-friendly rates!",
      icon: <FaMoneyBillWave className="text-pink-400 text-4xl" />,
    },
  ];
  
  const Benefits = () => {
    return (
      <section id="benefits" className="bg-gradient-to-br from-gray-900 to-black text-white py-20 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 text-pink-300">Why Choose Us?</h2>
          <div className="grid sm:grid-cols-2 gap-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className="flex items-center space-x-5 p-5 bg-gray-800 rounded-lg shadow-lg border border-gray-700"
              >
                <div>{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-300">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
const navigate = useNavigate();
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-br from-black to-gray-500  backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto px-5 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">SalonEase</h1>
        <ul className="hidden md:flex space-x-8 text-white">
          <li className="hover:text-pink-300 transition"><a href="#how-it-works">How It Works</a></li>
          <li className="hover:text-pink-300 transition"><a href="#benefits">Benefits</a></li>
          <li className="hover:text-pink-300 transition"><a href="#Home">Services</a></li>
          <li className="hover:text-pink-300 transition"><a href="#contact">Contact</a></li>
          <li onClick={()=> navigate("/login")} className="hover:text-pink-300 transition"><a href="">Style In</a></li>
        </ul>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        {isOpen && (
          <ul className="absolute top-12 right-0 w-full bg-gray-900 text-white flex flex-col items-center py-5 space-y-4 md:hidden">
            <li className="hover:text-pink-300 transition"><a href="#how-it-works">How It Works</a></li>
            <li className="hover:text-pink-300 transition"><a href="#benefits">Benefits</a></li>
            <li className="hover:text-pink-300 transition"><a href="#Home">Services</a></li>
            <li className="hover:text-pink-300 transition"><a href="#contact">Contact</a></li>
            <li className="hover:text-pink-300 transition"><a href="">Style In</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-gradient-to-br from-black to-gray-500 text-white py-20 px-5 ">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-blue-300">How It Works</h2>
        <div className="grid sm:grid-cols-2 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="flex items-center space-x-5 p-5 bg-gray-800 rounded-lg shadow-lg border border-gray-700 min-h-[100px]"
            >
              <div>{step.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-pink-300">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export const Contact = () => {
    return (
      <section id="contact" className="bg-gradient-to-br from-black to-gray-500 text-white py-20 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 text-blue-300">Contact Us</h2>
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
  
            <motion.div
              className="flex items-center space-x-5 p-5 bg-gray-800 rounded-lg shadow-lg border border-gray-700 col-span-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <FaMapMarkerAlt className="text-red-400 text-4xl" />
              <div className=" items-center">
                <h3 className="text-xl font-semibold text-pink-200">Location</h3>
                <p className="text-gray-400 items-center">IIT Ropar, Main Campus, Punjab</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };
const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div id="Home" className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black to-gray-500 px-6 text-center relative">
        <motion.h1 
          className="text-4xl sm:text-5xl font-bold mb-6 text-white drop-shadow-lg "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
            <div>
        No More Waiting – Just Walk In & Glow Up!
        </div>
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
          <motion.div
            className="w-64 h-80 bg-blue-300 rounded-2xl shadow-2xl flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition transform hover:shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            onClick={() => navigate("/boys")}
          >
            <img src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png" alt="Boys Salon" className="w-32 h-32 mb-4 rounded-lg" />
            <h2 className="text-xl font-semibold">Boys Salon</h2>
            <p className="text-gray-700 text-sm mt-2">Book your appointment now</p>
          </motion.div>

          <motion.div
            className="w-64 h-80 bg-pink-300 rounded-2xl shadow-2xl flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition transform hover:shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            onClick={() => navigate("/girls")}
          >
            <img src="https://cdn-icons-png.flaticon.com/512/2922/2922561.png" alt="Girls Salon" className="w-32 h-32 mb-4 rounded-lg" />
            <h2 className="text-xl font-semibold">Girls Salon</h2>
            <p className="text-gray-700 text-sm mt-2">Book your appointment now</p>
          </motion.div>
        </div>
      </div>
      <HowItWorks />
      <Benefits />
        <Contact />
    </>
  );
};

export default HomePage;
