import NewsCard from "../../components/allArticles/NewsCard";
import useArticles from "../../hooks/useArticles";

const PremiumArticles = () => {
  const { articles } = useArticles();
  return (
    <div>
      <h2 className="text-xl text-white font-bold text-center py-2 px-4 rounded w-fit mx-auto my-4 bg-primary">
        Premium Articles
      </h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-10">
        {articles?.map((article) => (
          <NewsCard key={article._id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default PremiumArticles;
