import PropTypes from "prop-types";
import { sliceDescription } from "../../../utility/utility";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuthInfo from "../../../hooks/useAuthInfo";

const SportsCard = ({ article }) => {
  const { _id, title, description, image, isPremium } = article;
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
    <div className="p-6 bg-white rounded shadow mt-2">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-text">
        {title}
      </h5>

      <div className="flex-[2]">
        <p className="mb-3 font-normal text-text-light pb-6">
          {sliceDescription(description, 30)}
        </p>

        <figure className="flex-[1]">
          <img src={image} alt={title} className="object-cover rounded w-full h-full" />
        </figure>
        <Link to={`/articles/${_id}`}>
          <button disabled={btnDisable} className="small-btn mt-3">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

SportsCard.propTypes = {
  article: PropTypes.object.isRequired,
};
export default SportsCard;
