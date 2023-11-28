import DashboardLi from "../utility/DashboardLi";
import { FaChartPie, FaUsers } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { SiAffinitypublisher } from "react-icons/si";
import LandingLi from "../utility/LandingLi";

const Sidebar = () => {
  return (
    <div className="space-y-2">
      <LandingLi to="/dashboard" text="Chart" icon={FaChartPie} />
      <DashboardLi to="all-user" text="All Users" icon={FaUsers} />
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
  );
};

export default Sidebar;
