import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Loading from "../components/shared/Loading";

const MainLayout = () => {
  const navigation = useNavigation();
  return (
    <div className="font-inconsolata">
      <Navbar />
      <hr />
      {navigation.state === "loading" ? <Loading /> : <Outlet />}
      <Footer />
    </div>
  );
};

export default MainLayout;
