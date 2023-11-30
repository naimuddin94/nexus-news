import { useLocation } from "react-router-dom";
import NewsCard from "../../components/allArticles/NewsCard";
import { useEffect } from "react";
import { axiosBase } from "../../hooks/useAxiosSecure";
import { useState } from "react";

const SearchResult = () => {
  const [articles, setArticles] = useState([]);
  const location = useLocation();
  console.log(location.state);
  useEffect(() => {
    axiosBase.get(`/articles/query?search=${location.state}`).then((res) => {
      setArticles(res.data);
    });
  }, [location.state]);
  return (
    <div>
      <h2 className="text-xl text-white font-bold text-center py-2 px-4 rounded w-fit mx-auto my-4 bg-primary">
        Search Result
      </h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-10 px-4 pt-8">
        {articles?.map((article) => (
          <NewsCard key={article._id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
