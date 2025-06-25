import React from "react";
import { FaGift, FaStar, FaCogs } from "react-icons/fa";
import { MdSecurity, MdThumbUp, MdSpeed } from "react-icons/md";

const features = [
  {
    icon: <FaGift className="text-3xl text-purple-600" />,
    title: "Curated Boxes",
    description: "Expert-picked tech goodies delivered to your doorstep.",
  },
  {
    icon: <FaStar className="text-3xl text-yellow-400" />,
    title: "Premium Quality",
    description: "We partner with top tech brands for unbeatable quality.",
  },
  {
    icon: <MdSecurity className="text-3xl text-green-500" />,
    title: "Secure & Reliable",
    description: "Your data and subscriptions are safe with us.",
  },
  {
    icon: <MdThumbUp className="text-3xl text-blue-500" />,
    title: "Customer Satisfaction",
    description: "Loved by 10,000+ subscribers worldwide.",
  },
  {
    icon: <FaCogs className="text-3xl text-red-500" />,
    title: "Fully Customizable",
    description: "Tailor your subscription to your needs and interests.",
  },
  {
    icon: <MdSpeed className="text-3xl text-indigo-500" />,
    title: "Fast Delivery",
    description: "Lightning-fast shipping to keep you updated monthly.",
  },
];

const WhyChoose = () => {
  return (
    <div className="mt-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">Why Choose SubscriptionBox?</h2>
      <p className="text-xl font-bold text-center mb-8 text-gray-500">Discover what makes our subscription boxes stand out from the rest</p>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition"
          >
            <div className="mb-3 flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
