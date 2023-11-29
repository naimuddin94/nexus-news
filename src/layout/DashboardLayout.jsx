import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Sidebar from "../components/dashboard/Sidebar";
import Loading from "../components/shared/Loading";

const DashboardLayout = () => {
  const navigation = useNavigation();
  return (
    <>
      <Navbar />
      <hr />
      <div className="md:grid grid-cols-12">
        <div className="h-full bg-secondary col-span-2 p-4">
          <Sidebar />
        </div>
        <div className="min-h-screen bg-base-100 col-span-10 p-5">
          {navigation.state === "loading" ? <Loading /> : <Outlet />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashboardLayout;
