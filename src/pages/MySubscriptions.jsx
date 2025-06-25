import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const MySubscriptions = () => {
    useEffect(() => {
        document.title = "My-Subscriptions | Subscription Box";
    }, []);
  const subscriptions = [
    {
      id: 1,
      name: "AI Tools Monthly Box",
      price: 19.99,
      frequency: "Monthly",
    },
    {
      id: 2,
      name: "Frontend Dev Pack",
      price: 24.99,
      frequency: "Monthly",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">My Subscriptions</h1>

      {subscriptions.length > 0 ? (
        <div className="space-y-4">
          {subscriptions.map((sub) => (
            <div
              key={sub.id}
              className="bg-white rounded-lg shadow p-4 border hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold">{sub.name}</h2>
              <p>Price: ${sub.price}</p>
              <p>Frequency: {sub.frequency}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">You have no active subscriptions.</p>
      )}

      <div className="mt-10 text-center">
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default MySubscriptions;
