import useAuthInfo from "../../hooks/useAuthInfo";
import CustomLi from "./CustomLi";

const NavItems = () => {
  const { role, premiumUser } = useAuthInfo();
  return (
    <>
      <CustomLi to="/" text="Home" />
      <CustomLi to="/all-articles" text="All Articles" />
      {(role === "publisher" || role === "admin") && (
        <CustomLi to="/add-article" text="Add Articles" />
      )}
      {role === "publisher" && (
        <CustomLi to="/manage-articles" text="Manage Article" />
      )}
      <CustomLi to="/subscription" text="Subscription" />
      {role === "admin" && <CustomLi to="/dashboard" text="Dashboard" />}
      <CustomLi to="/my-articles" text="My Articles" />
      {(role === "admin" || premiumUser) && (
        <CustomLi to="/premium-articles" text="Premium Articles" />
      )}
    </>
  );
};

export default NavItems;
