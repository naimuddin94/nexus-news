import { useEffect, useState } from "react";
import { Header, Category, Hero, Feature } from "../../components/home";
import Advertizement from "./Advertizement";
import useAuthInfo from "../../hooks/useAuthInfo";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const { premiumUser, role, user } = useAuthInfo();

  useEffect(() => {
    if (!premiumUser && role === "normal" && user) {
      setTimeout(() => {
        setShowModal(true);
      }, 5000);
    } else {
      setShowModal(false);
    }
  }, [premiumUser, role, user]);

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
