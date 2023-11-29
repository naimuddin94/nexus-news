import NewsCard from "../../components/allArticles/NewsCard";
import PremiumTag from "../../components/utility/PremiumTag";
import useArticles from "../../hooks/useArticles";

const PremiumArticles = () => {
  const { articles } = useArticles();
  const premiumArticles = articles?.filter((article) => article.isPremium);
  return (
    <div className="px-4">
      <PremiumTag />
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-10">
        {premiumArticles?.map((article) => (
          <NewsCard key={article._id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default PremiumArticles;
