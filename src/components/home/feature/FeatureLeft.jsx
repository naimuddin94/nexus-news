import useArticles from "../../../hooks/useArticles";
import HighLightHeading from "../../utility/HighLightHeading";
import FeatureCard from "./FeatureCard";
import Marquee from "react-fast-marquee";
import FeatureNewsCard from "./FeatureNewsCard";
import HeadingCard from "./HeadingCard";
import styles from "./scrollbar.module.css";

const FeatureLeft = () => {
  const { articles } = useArticles();
  return (
    <div className="">
      <div className="flex items-center gap-5">
        <HighLightHeading text="Featured" />
        <div className="mb-2 text-white bg-primary py-2 px-5 flex-1 rounded hidden md:block">
          <Marquee>{articles[0]?.description}</Marquee>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-3 pb-12">
        {articles?.slice(0, 3).map((article) => (
          <FeatureCard key={article._id} article={article} />
        ))}
      </div>
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-12 pt-3 ">
        <div className="col-span-4">
          <HighLightHeading text="World" />
          {articles?.map((article) => (
            <HeadingCard key={article._id} article={article} />
          ))}
        </div>
        <div
          className={`col-span-8 grid gap-3 grid-cols-1 pl-2 max-h-[1700px] overflow-y-scroll ${styles.customScrollbar}`}
        >
          {articles?.map((article) => (
            <FeatureNewsCard key={article._id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureLeft;
