import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  const location = useLocation();
  const is404 = location.pathname === "/404" || location.pathname === "*";

  return (
    <div className="flex flex-col min-h-screen">
      {!is404 && <Navbar />}
      <main className="flex-grow">
        <Outlet />
      </main>
      {!is404 && <Footer />}
    </div>
  );
};

export default MainLayout;
