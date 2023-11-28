import useArticles from "../../../hooks/useArticles";
import HighLightHeading from "../../utility/HighLightHeading";
import SportsCard from "./SportsCard";

const FeatureRight = () => {
  const { articles } = useArticles();
  return (
    <div className="">
      <HighLightHeading text="Sports" />
      <div className="">
        {articles?.slice(0, 5).map((article) => (
          <SportsCard key={article._id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default FeatureRight;
