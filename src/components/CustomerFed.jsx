import React from 'react';

const feedbacks = [
  {
    name: "Alice Johnson",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
    feedback: "Absolutely love the variety and quality of the items!",
  },
  {
    name: "Michael Smith",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 4,
    feedback: "Very useful products, looking forward to the next box.",
  },
  {
    name: "Sophia Lee",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 5,
    feedback: "Great value for the price. Highly recommended!",
  },
  {
    name: "David Kim",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    rating: 4,
    feedback: "Good quality, fast shipping. Impressed!",
  },
  {
    name: "Emily Rose",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    rating: 5,
    feedback: "Innovative products and beautiful packaging!",
  },
  {
    name: "John Carter",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    rating: 4,
    feedback: "Consistently great every month. Love it!",
  },
];

const CustomerFed = () => {
  return (
    <div className="mt-12 p-6 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Customer Feadback</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {feedbacks.map((customer, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center"
          >
            <img
              src={customer.image}
              alt={customer.name}
              className="w-20 h-20 rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold">{customer.name}</h3>
            <div className="text-yellow-400 text-sm mb-2">
              {"★".repeat(customer.rating)}{"☆".repeat(5 - customer.rating)}
            </div>
            <p className="text-gray-600 italic">"{customer.feedback}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerFed;
