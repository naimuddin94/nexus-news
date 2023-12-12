import useArticles from "../../../hooks/useArticles";
import HighLightHeading from "../../utility/HighLightHeading";
import SportsCard from "./SportsCard";
import styles from  "./scrollbar.module.css";

const FeatureRight = () => {
  const { articles } = useArticles();
  return (
    <div className="">
      <HighLightHeading text="Sports" />
      <div
        className={`max-h-[1960px] overflow-y-scroll ${styles.customScrollbar}`}
      >
        {articles?.slice(0, 5).map((article) => (
          <SportsCard key={article._id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default FeatureRight;
