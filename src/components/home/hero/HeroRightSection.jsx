import { Link } from "react-router-dom";
import useArticles from "../../../hooks/useArticles";
import { sliceDescription } from "../../../utility/utility";
import HighLightHeading from "../../utility/HighLightHeading";
import { useEffect, useState } from "react";
import useAuthInfo from "../../../hooks/useAuthInfo";

const HeroRightSection = () => {
  const { articles } = useArticles();
  const [btnDisable, setBtnDisable] = useState(false);
  const { role, premiumUser } = useAuthInfo();

  useEffect(() => {
    if (articles[0]?.isPremium) {
      setBtnDisable(true);
    }
    if (premiumUser || role === "admin") {
      setBtnDisable(false);
    }
  }, [premiumUser, role, articles]);

  return (
    <div>
      <HighLightHeading text="Business News" />
      <div className="py-5 px-8">
        <h2 className="text-xl font-bold text-text">{articles[0]?.title}</h2>
        <hr />
        <p className="text-text-light py-4">
          {sliceDescription(articles[0]?.description, 75)}...
        </p>
        <Link to={`/articles/${articles[0]?._id}`}>
          <button disabled={btnDisable} className="small-btn">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroRightSection;
