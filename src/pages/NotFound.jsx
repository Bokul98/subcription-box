import { Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 - Page Not Found | Subscription Box";
  }, []);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
        <p className="text-gray-500 mb-6">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
