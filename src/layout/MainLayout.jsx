import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
  return (
    <div className="font-inconsolata">
      <Navbar />
      <hr />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default MainLayout;
