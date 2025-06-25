import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [inputReview, setInputReview] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    document.title = "SERVIC-EDETAILS | Subscription Box";
  }, []);

  useEffect(() => {
    fetch("/subscriptionBoxes.json")
      .then(res => res.json())
      .then(data => {
        const selected = data.find(item => item.id === parseInt(id));
        setService(selected);
      });
  }, [id]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!inputReview || !rating || rating < 1 || rating > 5) return;
    const newReview = { text: inputReview, rating: parseInt(rating) };
    setReviews([newReview, ...reviews]);
    setInputReview("");
    setRating("");
  };

  if (!service) return <div className="p-6">Loading...</div>;

  return (
  <div className="main-container flex  items-center justify-center p-6">
    <div className="service">
    <div className="p-6 max-w-4xl mx-auto">
      <img src={service.banner} alt={service.name} className="w-full rounded-lg mb-6" />
      <h2 className="text-3xl font-bold mb-2">{service.name}</h2>
      <p className="text-gray-600">{service.description}</p>

      <div className="my-4">
        <p><strong>Tech Category:</strong> {service.tech_category}</p>
        <p><strong>Price:</strong> ${service.price} / {service.frequency}</p>
        <p><strong>Rating:</strong> {service.ratings} ⭐ ({service.number_of_reviews} reviews)</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mt-6 mb-2">Features:</h3>
        <ul className="list-disc list-inside">
          {service.features.map((feature, i) => <li key={i}>{feature}</li>)}
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Subscription Benefits:</h3>
        <ul className="list-disc list-inside">
          {service.subscription_benefits.map((benefit, i) => <li key={i}>{benefit}</li>)}
        </ul>
      </div>

      {/* Review Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-bold mb-4">Leave a Review</h3>
        <form onSubmit={handleReviewSubmit} className="space-y-4">
          <textarea
            placeholder="Your review"
            className="w-full border rounded p-2"
            value={inputReview}
            onChange={(e) => setInputReview(e.target.value)}
          />
          <input
            type="number"
            placeholder="Rating (1-5)"
            min={1}
            max={5}
            className="w-full border rounded p-2"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">Submit Review</button>
        </form>

        {/* Display Reviews */}
        <div className="mt-6">
          {reviews.length > 0 ? (
            reviews.map((r, idx) => (
              <div key={idx} className="border p-3 rounded mb-3 bg-gray-50">
                <p><strong>Rating:</strong> {r.rating} ⭐</p>
                <p>{r.text}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No reviews yet.</p>
          )}
        </div>
      </div>
    </div>
    </div>
    <div className="subscription">
              {/* Subscription Section */}
    <div className="mt-16 border-t pt-8">
      <h3 className="text-2xl font-bold mb-4">Subscribe to {service.name}</h3>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="mb-2"><strong>Price:</strong> ${service.price}</p>
        <p className="mb-2"><strong>Frequency:</strong> {service.frequency}</p>
        <p className="mb-4"><strong>Tech Category:</strong> {service.tech_category}</p>

        <ul className="list-disc list-inside mb-4">
          {service.subscription_benefits.map((benefit, idx) => (
            <li key={idx}>{benefit}</li>
          ))}
        </ul>

        <button className="btn btn-success">Subscribe Now</button>
      </div>
    </div>

    </div>
  </div>
  );
};

export default ServiceDetails;
