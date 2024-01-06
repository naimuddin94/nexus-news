import moment from "moment/moment";
import NavbarStart from "../utility/NavbarStart";
import NavbarEnd from "./NavbarEnd";
import CountUp from "react-countup";
import { useEffect } from "react";
import { axiosBase } from "../../hooks/useAxiosSecure";
import { useState } from "react";
import { FaUser, FaRegUser } from "react-icons/fa";
import { MdOutlineWorkspacePremium } from "react-icons/md";

const Navbar = () => {
  const [totalUser, setTotalUser] = useState(0);
  const [normalUser, setNormalUser] = useState(0);
  const [premiumUser, setPremiumUser] = useState(0);
  useEffect(() => {
    axiosBase("users/user-length").then((res) => {
      setTotalUser(res.data.totalUsers);
      setNormalUser(res.data.normalUsers);
      setPremiumUser(res.data.premiumUsers);
    });
  }, []);
  return (
    <div className="navbar justify-between sticky top-0 bg-white z-50">
      <NavbarStart />
      {/* Navbar date and day */}
      <div className="text-text-light hidden flex-1 text-center md:block">
        {moment().format("dddd, Do MMMM YYYY")}
      </div>
      <div className="md:flex gap-3 text-xl font-black md:mr-6 hidden text-text-light">
        <div className="flex items-center">
          <FaUser size={14} />
          <CountUp end={totalUser} duration={2} />
        </div>
        <div className="flex items-center">
          <FaRegUser size={14} />
          <CountUp end={normalUser} duration={2} />
        </div>
        <div className="flex items-center">
          <MdOutlineWorkspacePremium size={17} />
          <CountUp end={premiumUser} duration={2} />
        </div>
      </div>
      <NavbarEnd />
    </div>
  );
};

export default Navbar;
