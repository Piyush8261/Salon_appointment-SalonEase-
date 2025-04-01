import React from "react";
import { motion } from "framer-motion";
import { FaClipboardList, FaUserCheck, FaCheckCircle, FaRedo } from "react-icons/fa";

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
    description: "Enter your details and confirm your appointment for a hassle-free experience.",
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
    title: "Complete & Reset",
    description: "Once your turn is completed, the admin resets the queue daily.",
    icon: <FaRedo className="text-yellow-500 text-4xl" />,
  },
];

export const HowItWorks = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-5">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title Animation */}
        <motion.h2
          className="text-4xl font-bold mb-10 text-pink-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          How It Works
        </motion.h2>

        {/* Steps Grid */}
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
                <h3 className="text-xl font-semibold text-pink-200">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
