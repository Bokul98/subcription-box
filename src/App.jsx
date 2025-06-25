import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./routes/PrivateRoute";
import ServiceDetails from "./pages/ServiceDetails";
import SubscriptionDetails from "./pages/SubscriptionDetails";
import ForgotPassword from "./pages/ForgotPassword";
import MySubscriptions from "./pages/MySubscriptions";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500); // Simulates loading delay

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader />}

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="services/:id"
            element={
              <PrivateRoute>
                <ServiceDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="subscription/:id"
            element={
              <PrivateRoute>
                <SubscriptionDetails />
              </PrivateRoute>
            }
          /> <Route path="/my-subscriptions" element={<MySubscriptions />} />
        </Route>
        <Route path="*" element={<NotFound />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default App;
