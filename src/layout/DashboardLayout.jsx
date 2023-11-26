import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const DashboardLayout = () => {
  return (
    <>
      <Navbar />
      <hr />
      <Outlet />
      <Footer />
    </>
  );
};

export default DashboardLayout;
