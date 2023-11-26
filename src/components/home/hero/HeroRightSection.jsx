import useArticles from "../../../hooks/useArticles";
import { sliceDescription } from "../../../utility/utility";
import HighLightHeading from "../../utility/HighLightHeading";

const HeroRightSection = () => {
  const articles = useArticles();
  return (
    <div>
      <HighLightHeading text="Business News" />
      <div className="py-5 px-8">
        <h2 className="text-xl font-bold text-text">{articles[0]?.title}</h2>
        <hr />
        <p className="text-text-light py-4">
          {sliceDescription(articles[0]?.description, 100)}...
        </p>
        <button className="small-btn">Read More</button>
      </div>
    </div>
  );
};

export default HeroRightSection;
