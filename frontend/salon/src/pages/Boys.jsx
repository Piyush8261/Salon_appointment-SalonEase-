import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";
const services = [
  {
    id: 1,
    name: "Classic Haircut",
    description: "A stylish and precise haircut tailored to your preference.",
    price: "₹55",
    image: "https://th.bing.com/th/id/R.a2034a227e5971969dc88fbaa6607eb3?rik=Z25hUN7Brdfixw&riu=http%3a%2f%2fhair-oiling.com%2fwp-content%2fuploads%2f2016%2f07%2foil-1-770x430.jpg&ehk=6QIMrAkUD7dvURmlEvgD1jrN1oTfouKeiz%2bHcXI7yfU%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 2,
    name: "Beard Trim",
    description: "Get a clean and sharp beard trim for a well-groomed look.",
    price: "₹25",
    image: "https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/man-getting-beard-trimmed-in-salon-1024x640.jpg",
  },
  {
    id: 3,
    name: "Hair Wash & Styling",
    description: "Relax with a hair wash and get a stylish finish.",
    price: "₹120",
    image: "https://img.freepik.com/free-photo/young-man-hairdresser-washing-hair-client-sink-barbershop_176474-2887.jpg",
  },
  {
    id: 4,
    name: "Facial & Skin Care",
    description: "A refreshing facial to cleanse and rejuvenate your skin.",
    price: "₹250",
    image: "https://img.freepik.com/free-photo/man-having-his-face-massage-beauty-salon_1157-39721.jpg",
  },
  {
    id: 5,
    name: "Head Massage",
    description: "Relax with a soothing head massage to relieve stress.",
    price: "₹200",
    image: "https://img.freepik.com/free-photo/barber-giving-hair-massage-customer_23-2147775653.jpg",
  },
];

export const BoysSalon = () => {
  const navigate = useNavigate();
  //const [queueNumber, setQueueNumber] = useState(null);

  // Fetch the current queue number when the page loads
  const [queueInfo, setQueueInfo] = useState({ currentQueueNumber: null, pendingQueueNumber: null });

  useEffect(() => {
    fetch("http://localhost:3000/boys/api/queue-info")
      .then((response) => response.json())
      .then((data) => setQueueInfo(data))
      .catch((error) => console.error("Error fetching queue info:", error));
  }, []);

  const handleBook=async ()=>{
    //setQueueInfo({currentQueueNumber:queueInfo.currentQueueNumber,pendingQueueNumber:queueInfo.pendingQueueNumber+1})
    const response=axios.post("http://localhost:3000/boys/api/increment-queue",
      {
        status:"pending"
      }
    )
  }
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-br from-black to-gray-500 backdrop-blur-md shadow-md z-50">
        <div className="max-w-6xl mx-auto px-5 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white hover:text-blue-300 transition duration-300">
            SalonEase
          </h1>
          <button
            className="text-white hover:text-blue-300 transition duration-300 text-lg"
            onClick={() => navigate("/")}
          >
            Home
          </button>
        </div>
      </nav>

      {/* Hero Section with Queue Number */}
      <div className="h-60 flex flex-col justify-center items-center bg-gradient-to-br from-black to-gray-500 text-white text-center px-6">
  <motion.h1
    className="text-4xl sm:text-5xl font-bold mb-4"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    Boys Salon Services
  </motion.h1>
  <p className="text-lg text-blue-300">
    Premium grooming services for a sharp & stylish look!
  </p>

  {/* Show Queue Info */}
  {queueInfo.currentQueueNumber !== null && queueInfo.nextQueueNumber !== null ? (
    <div className="flex gap-3 mt-4">
      
      {/* Current Queue Number */}
      <div className="text-lg font-semibold bg-blue-500 text-white px-6 py-2 rounded-md shadow-lg">
    Running Queue : {queueInfo.currentQueueNumber}
      </div>

      {/* Next Available Queue Number */}
      <div className="text-lg font-semibold bg-blue-500 text-white px-6 py-2 rounded-md shadow-lg">
        Assigned Queue : {queueInfo.pendingQueueNumber}
      </div>

      {/* Estimated Wait Time */}
      <div className="text-lg font-semibold bg-blue-500 text-white px-6 py-2 rounded-md shadow-lg">
        Estimated Wait time : {queueInfo.pendingQueueNumber==(3||2) ? 0 :Math.max(0, (queueInfo.pendingQueueNumber - queueInfo.currentQueueNumber) * 10)} mins
      </div>

    </div>
  ) : (
    <p className="mt-4">Loading queue details...</p>
  )}
</div>


      {/* Services Section */}
      <section className="py-16 px-5 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center text-blue-300">Our Services</h2>
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
                  <h3 className="text-xl font-semibold text-blue-300">{service.name}</h3>
                  <p className="text-gray-400 mt-2">{service.description}</p>
                  <p className="text-lg font-bold text-green-400 mt-3">{service.price}</p>
                  <button onClick={handleBook} className="mt-4 bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-md transition">
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
                <h3 className="text-xl font-semibold text-blue-300">Email</h3>
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
                <h3 className="text-xl font-semibold text-blue-300">Phone</h3>
                <p className="text-gray-400">+91 8278208261</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BoysSalon;
