import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Header from "../components/shared/Header";

const MainLayout = () => {
  return (
    <div className="font-inconsolata">
      <Navbar />
      <hr />
      <Header/>
      <Outlet />
    </div>
  );
};

export default MainLayout;
