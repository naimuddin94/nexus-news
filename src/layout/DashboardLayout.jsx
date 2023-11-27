import { FaUsers, FaChartPie } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { SiAffinitypublisher } from "react-icons/si";
import { MdAdminPanelSettings } from "react-icons/md";

import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import DashboardLi from "../components/utility/DashboardLi";
import Footer from "../components/shared/Footer";

const DashboardLayout = () => {
  return (
    <>
      <Navbar />
      <hr />
      <div className="grid grid-cols-12">
        <div className="min-h-screen bg-secondary col-span-2 p-4">
          <div className="space-y-2">
            <DashboardLi
              to="/dashboard/chart"
              text="Chart"
              icon={FaChartPie}
            />
            <DashboardLi
              to="/dashboard/all-user"
              text="All Users"
              icon={FaUsers}
            />
            <DashboardLi
              to="/dashboard/admin-all-articles"
              text="All Articles"
              icon={IoNewspaperOutline}
            />
            <DashboardLi
              to="/dashboard/add-publisher"
              text="Add Publisher"
              icon={SiAffinitypublisher}
            />
          </div>
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
