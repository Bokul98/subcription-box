import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout()
      .then(() => toast.success("Logged out"))
      .catch(err => toast.error(err.message));
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md px-6 py-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <Link to="/" className="text-2xl font-bold">
          <span className="text-blue-500">Box</span>Subscription
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-bold text-xl" : "text-gray-600 text-xl font-bold"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-bold text-xl" : "text-gray-600 text-xl font-bold"
            }
          >
            My Profile
          </NavLink>
          <NavLink
            to="/my-subscriptions"
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-bold text-xl" : "text-gray-600 text-xl font-bold"
            }
          >
            My Subscriptions
          </NavLink>
        </div>

        {/* Auth Button */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <div className="relative group flex items-center gap-2">
              <img
                src={user.photoURL || "https://i.ibb.co/ZYW3VTp/brown-brim.png"}
                alt="User"
                className="w-10 h-10 rounded-full border cursor-pointer"
              />
              <div className="absolute bottom-[-30px] left-0 bg-white text-black px-2 py-1 text-lg rounded hidden group-hover:block shadow">
                {user.displayName}
              </div>
              <button
                onClick={handleLogout}
                className="px-3 py-1 text-white bg-red-500 rounded text-lg"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="px-3 py-1 bg-blue-500 text-white rounded text-lg"
            >
              Login
            </Link>
          )}
        </div>


        <button onClick={toggleMenu} className="md:hidden">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center">
          <NavLink
            to="/"
            onClick={toggleMenu}
            className="block text-gray-600 font-semibold"
          >
            Home
          </NavLink>
          <NavLink
            to="/profile"
            onClick={toggleMenu}
            className="block text-gray-600 font-semibold"
          >
            My Profile
          </NavLink>
          <NavLink
            to="/my-subscriptions"
            onClick={toggleMenu}
            className="block text-gray-600 font-semibold"
          >
            My Subscriptions
          </NavLink>

          {user ? (
            <>
              <p className="text-sm text-gray-500">{user.displayName}</p>
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="px-4 py-1 mt-2 text-white bg-red-500 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              onClick={toggleMenu}
              className="px-4 py-1 text-white bg-blue-500 rounded"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
