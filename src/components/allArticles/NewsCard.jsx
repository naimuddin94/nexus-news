import PropTypes from "prop-types";
import { sliceDescription } from "../../utility/utility";
import { SiAffinitypublisher } from "react-icons/si";
import { Link } from "react-router-dom";
import useAuthInfo from "../../hooks/useAuthInfo";
import { useEffect, useState } from "react";
import PremiumTag from "../utility/PremiumTag";

const NewsCard = ({ article }) => {
  const { _id, image, title, description, isPremium, publisher } = article;
  const [btnDisable, setBtnDisable] = useState(false);
  const { role, accessPremium, user } = useAuthInfo();

  useEffect(() => {
    if (isPremium) {
      setBtnDisable(true);
    }
    if (accessPremium || role === "admin" || role === "publisher") {
      setBtnDisable(false);
    }
  }, [isPremium, accessPremium, role, user]);

  return (
    <div
      className={`card card-compact bg-base-100 hover:shadow-md duration-300 rounded overflow-hidden relative ${
        isPremium && "bg-gradient-to-br from-[#C4E538]/20 to-[#ED4C67]/50"
      }`}
    >
      {isPremium && <PremiumTag />}
      <figure className="h-44 w-full">
        <img src={image} alt="Shoes" className="h-full w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg">{title}</h2>
        <hr />
        <p>{sliceDescription(description, 30)}.....</p>
        <div className="flex gap-1 items-center">
          <SiAffinitypublisher />
          <h4 className="text-lg font-semibold">{publisher?.name}</h4>
        </div>
        <div className="card-actions justify-end">
          {btnDisable ? (
            <button disabled={true} className="small-btn">
              Details
            </button>
          ) : (
            <Link to={`/articles/${_id}`}>
              <button className="small-btn">Details</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  article: PropTypes.object.isRequired,
};

export default NewsCard;
