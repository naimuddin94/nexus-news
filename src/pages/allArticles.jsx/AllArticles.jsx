import NewsCard from "../../components/allArticles/NewsCard";
import useArticles from "../../hooks/useArticles";

const AllArticles = () => {
  const articles = useArticles();
  return (
    <div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {articles?.map((article) => (
          <NewsCard key={article._id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default AllArticles;
