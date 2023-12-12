import { useEffect, useState } from "react";
import { Header, Category, Hero, Feature } from "../../components/home";
import Advertizement from "./Advertizement";
import useAuthInfo from "../../hooks/useAuthInfo";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const { premiumUser, role } = useAuthInfo();

  useEffect(() => {
    setTimeout(() => {
      if (!premiumUser && role === "normal") {
        setShowModal(true);
      }
    }, 5000);
  }, [premiumUser, role]);
  return (
    <div>
      <Header />
      <Category />
      <Hero />
      <Feature />
      <Advertizement showModel={showModal} />
    </div>
  );
};

export default Home;
