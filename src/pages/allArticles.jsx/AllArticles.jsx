import { useNavigate } from "react-router-dom";
import NewsCard from "../../components/allArticles/NewsCard";
import useArticles from "../../hooks/useArticles";
import { IoSearchOutline } from "react-icons/io5";

const AllArticles = () => {
  const { articles } = useArticles();
  const navigate = useNavigate();
  const searchHandle = (e) => {
    e.preventDefault();
    const searchValue = e.target.query.value.trim();
    if (searchValue) {
      navigate("/search", { state: searchValue });
    }
  };
  return (
    <div className="bg-base-200 px-4">
      <div className="text-center p-10 flex justify-center">
        <div>
          <h2 className="text-xl font-black text-text py-2">All Articles</h2>
          <form
            onSubmit={searchHandle}
            className="flex items-center w-72 rounded overflow-hidden group shadow-md border"
          >
            <input
              type="text"
              name="query"
              className="h-10 w-60 px-4 focus:outline-0 focus:border focus:border-secondary  rounded-l"
              placeholder="Search..."
            />
            <button className="bg-secondary h-10 px-4 text-white hover:brightness-95">
              <IoSearchOutline size={25} />
            </button>
          </form>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-10">
        {articles?.map((article) => (
          <NewsCard key={article._id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default AllArticles;
