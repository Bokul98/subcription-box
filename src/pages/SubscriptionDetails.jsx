import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const SubscriptionDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    document.title = "Subscription | Subscription Box";
  }, []);

  useEffect(() => {
    fetch("/subscriptionBoxes.json")
      .then(res => res.json())
      .then(data => {
        const matched = data.find(item => item.id === parseInt(id));
        setService(matched);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load subscription data.");
        setLoading(false);
      });
  }, [id]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    if (!review || !rating) {
      toast.error("Please provide both review and rating.");
      return;
    }

    if (rating < 1 || rating > 5) {
      toast.error("Rating must be between 1 and 5.");
      return;
    }

    const newReview = {
      id: Date.now(),
      text: review,
      rating: parseFloat(rating),
    };

    setReviews([...reviews, newReview]);
    setReview("");
    setRating("");
    toast.success("Review submitted!");
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (!service) return <div className="text-center py-10">Service not found.</div>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <img src={service.banner} alt={service.name} className="w-full rounded-lg mb-6" />
      <h2 className="text-3xl font-bold mb-2">{service.name}</h2>
      <p className="text-gray-600 mb-2">{service.description}</p>
      <p><strong>Category:</strong> {service.tech_category}</p>
      <p><strong>Price:</strong> ${service.price}</p>
      <p><strong>Frequency:</strong> {service.frequency}</p>
      <p><strong>Ratings:</strong> {service.ratings} ⭐ ({service.number_of_reviews} reviews)</p>

      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2">Features:</h3>
        <ul className="list-disc ml-5">
          {service.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2">Subscription Benefits:</h3>
        <ul className="list-disc ml-5">
          {service.subscription_benefits.map((benefit, idx) => (
            <li key={idx}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* Review Section */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Leave a Review</h3>
        <form onSubmit={handleReviewSubmit} className="space-y-4">
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="textarea textarea-bordered w-full"
            placeholder="Write your review"
            required
          />
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="5"
            className="input input-bordered w-full"
            placeholder="Rating (1-5)"
            required
          />
          <button type="submit" className="btn btn-primary">Submit Review</button>
        </form>
      </div>

      {/* Display Reviews */}
      {reviews.length > 0 && (
        <div className="mt-8">
          <h4 className="text-xl font-semibold mb-3">User Reviews:</h4>
          {reviews.map(r => (
            <div key={r.id} className="bg-gray-100 p-3 rounded mb-2">
              <p className="text-gray-700">{r.text}</p>
              <p className="text-sm text-yellow-600">Rating: {r.rating}⭐</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SubscriptionDetails;
