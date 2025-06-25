import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");

  useEffect(() => {
    document.title = "FORGOTPASSWORD | Subscription Box";
  }, []);

  useEffect(() => {
    const passedEmail = location.state?.email || "";
    setEmail(passedEmail);
  }, [location.state]);

  const handleReset = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent!");
      window.location.href = "https://mail.google.com";
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Forgot Password
      </h2>
      <form onSubmit={handleReset} className="space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary w-full">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
