import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuthInfo from "../../../hooks/useAuthInfo";

const HeadingCard = ({ article }) => {
  const { _id, title, isPremium } = article;
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
    <div key={article._id}>
      <div className="py-3 px-4 hover:bg-primary/10">
        <h3 className="text-lg font-semibold">{title}</h3>
        {btnDisable ? (
          <button disabled className="small-btn bg-third">
            Read More
          </button>
        ) : (
          <Link to={`/articles/${_id}`}>
            <button className="small-btn bg-third">Read More</button>
          </Link>
        )}
      </div>
      <hr />
    </div>
  );
};

HeadingCard.propTypes = {
  article: PropTypes.object.isRequired,
};

export default HeadingCard;
