import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    document.title = "LOGIN | Subscription Box";
  }, []);

  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await login(email, password);
      toast.success("Login successful!");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      toast.success("Logged in with Google!");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input input-bordered w-full"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input input-bordered w-full"
          required
        />
        <p className="text-sm text-center">
          <Link
            to="/forgot-password"
            state={{ email }}
            className="text-blue-500 text-lg"
          >
            Forgot Password?
          </Link>
        </p>
        <button type="submit" disabled={loading} className="btn btn-primary text-lg w-full">
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      <button onClick={handleGoogleLogin} className="btn btn-outline w-full text-lg mt-4">Login with Google</button>
      <p className="text-lg mt-4 text-center">
        Don’t have an account? <Link className="text-blue-500 text-xl" to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
