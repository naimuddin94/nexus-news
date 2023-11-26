import DashboardLi from "../../components/utility/DashboardLi";
import { FaUsers } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { SiAffinitypublisher } from "react-icons/si";



const Dashboard = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="min-h-screen bg-secondary col-span-2 p-4">
        <div className="space-y-2">
          <DashboardLi to="/all-user" text="All Users" icon={FaUsers} />
          <DashboardLi
            to="/admin-all-articles"
            text="All Articles"
            icon={IoNewspaperOutline}
          />
          <DashboardLi
            to="/add-publisher"
            text="Add Publisher"
            icon={SiAffinitypublisher}
          />
        </div>
      </div>
      <div className="min-h-screen bg-base-100 col-span-10 p-5">content</div>
    </div>
  );
};

export default Dashboard;
