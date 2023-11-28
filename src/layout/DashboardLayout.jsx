import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Sidebar from "../components/dashboard/Sidebar";

const DashboardLayout = () => {
  return (
    <>
      <Navbar />
      <hr />
      <div className="grid grid-cols-12">
        <div className="min-h-screen bg-secondary col-span-2 p-4">
          <Sidebar />
        </div>
        <div className="min-h-screen bg-base-100 col-span-10 p-5">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashboardLayout;
