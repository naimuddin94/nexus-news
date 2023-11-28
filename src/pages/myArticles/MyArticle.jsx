import NewsCard from "../../components/allArticles/NewsCard";
import useOwnerArticles from "../../hooks/useOwnerArticles";

const MyArticle = () => {
  const { articles } = useOwnerArticles();
  return (
    <div>
      <h2 className="text-xl text-white font-bold text-center py-2 px-4 rounded w-fit mx-auto my-4 bg-primary">
        My Articles
      </h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-10">
        {articles?.map((article) => (
          <NewsCard key={article._id} article={article} />
        ))}
      </div>
      {articles?.length <= 0 && (
        <div className="flex justify-center  min-h-[20vh]">
          <h3 className="text-xl font-semibold">You have no article</h3>
        </div>
      )}
    </div>
  );
};

export default MyArticle;
