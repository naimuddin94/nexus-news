
import CustomLi from "./CustomLi";


const NavItems = () => {
    return (
      <>
        <CustomLi to="/" text="Home" />
        <CustomLi to="/all-articles" text="All Articles" />
        <CustomLi to="/add-articles" text="Add Articles" />
        <CustomLi to="/subscription" text="Subscription" />
        <CustomLi to="/dashboard" text="Dashboard" />
        <CustomLi to="/my-articles" text="My Articles" />
        <CustomLi to="/premium-articles" text="Premium Articles" />
      </>
    );
};

export default NavItems;