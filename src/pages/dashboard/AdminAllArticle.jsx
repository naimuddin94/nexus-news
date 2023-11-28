import useArticles from "../../hooks/useArticles";
import { FaCheck } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AdminAllArticle = () => {
  const { articles, refetch } = useArticles();
  const axiosSecure = useAxiosSecure();

  const handleApproved = (id) => {
    console.log("approved ", id);
    axiosSecure.put(`/articles/${id}`, { approved: true }).then(() => {
      refetch();
    });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Article Title</th>
              <th>Publisher</th>
              <th>Approved</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {articles?.map((article, index) => (
              <tr key={article._id}>
                <th>{index + 1}</th>
                <td>{article.title}</td>
                <td>{article?.publisher?.name}</td>
                <td>
                  {article.approved ? (
                    <FaCheck className="text-xl text-green-500 ml-3" />
                  ) : (
                    <AiFillCloseCircle className="text-xl text-red-500 ml-3" />
                  )}
                </td>
                <td>
                  {/* <button className="small-btn">Approve</button> */}
                  {article.approved ? (
                    <h2 className="bg-third w-fit px-4 font-medium py-1 rounded text-white">
                      Approved
                    </h2>
                  ) : (
                    <button
                      onClick={() => handleApproved(article._id)}
                      className="small-btn"
                    >
                      Approved
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminAllArticle;
