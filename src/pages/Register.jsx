import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useEffect } from "react";

const Register = () => {
  const { register, updateUserProfile, googleLogin } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "REGISTER | Subscription Box";
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    
    if (!/[A-Z]/.test(password)) return toast.error("Password must have an uppercase letter");
    if (!/[a-z]/.test(password)) return toast.error("Password must have a lowercase letter");
    if (password.length < 6) return toast.error("Password must be at least 6 characters");

    try {
      setLoading(true);
      const userCredential = await register(email, password);
      await updateUserProfile({ displayName: name, photoURL });
      toast.success("Registration successful!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    try {
      await googleLogin();
      toast.success("Logged in with Google!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <input name="name" type="text" placeholder="Full Name" className="input input-bordered w-full" required />
        <input name="photoURL" type="text" placeholder="Photo URL" className="input input-bordered w-full" required />
        <input name="email" type="email" placeholder="Email" className="input input-bordered w-full" required />

        
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="input input-bordered w-full pr-10"
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600 text-lg"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button type="submit" disabled={loading} className="btn btn-primary w-full">
          {loading ? "Registering..." : "Register"}
        </button>
      </form>

      <button onClick={handleGoogle} className="btn btn-outline w-full mt-4">
        Register with Google
      </button>

      <p className="text-sm mt-4 text-center">
        Already have an account?{" "}
        <Link className="text-blue-500" to="/login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
