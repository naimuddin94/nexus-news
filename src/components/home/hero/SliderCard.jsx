import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { sliceDescription } from "../../../utility/utility";
import { useEffect, useState } from "react";
import useAuthInfo from "../../../hooks/useAuthInfo";
import PremiumTag from "../../utility/PremiumTag";

const SliderCard = ({ article }) => {
  const { _id, image, description, title, isPremium } = article;
  const [btnDisable, setBtnDisable] = useState(false);
  const { role, premiumUser } = useAuthInfo();

  useEffect(() => {
    if (isPremium) {
      setBtnDisable(true);
    }
    if (premiumUser || role === "admin" || role === "publisher") {
      setBtnDisable(false);
    }
  }, [isPremium, premiumUser, role]);
  return (
    <div className="relative">
      {isPremium && <PremiumTag />}
      <img src={image} alt="" className="w-full h-96 object-cover rounded" />
      <h1 className="text-3xl text-text font-bold bg-white w-11/12 mx-auto relative -mt-10 py-1 px-4 rounded shadow-md">
        {title}
      </h1>
      <div>
        <p className="py-3">
          {sliceDescription(description, 35)}...
          <Link to={`/articles/${_id}`}>
            <button
              disabled={btnDisable}
              className="small-btn absolute right-2"
            >
              Read More
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

SliderCard.propTypes = {
  article: PropTypes.object.isRequired,
};

export default SliderCard;
