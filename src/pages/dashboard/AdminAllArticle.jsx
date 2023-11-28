import { FaCheck } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAdminAllArticles from "../../hooks/useAdminAllArticles";

const AdminAllArticle = () => {
  const { articles, refetch } = useAdminAllArticles();
  const axiosSecure = useAxiosSecure();

  const handleApproved = (id) => {
    console.log("approved ", id);
    axiosSecure.put(`/articles/${id}`, { approved: true }).then((res) => {
      if (res.status === 200) {
        refetch();
        Swal.fire({
          icon: "success",
          title: "Article approved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
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
                  {article.approved ? (
                    <h2 className="w-fit px-4 font-medium py-1 rounded text-primary">
                      Approved
                    </h2>
                  ) : (
                    <button
                      onClick={() => handleApproved(article._id)}
                      className="small-btn px-5"
                    >
                      Approved
                    </button>
                  )}
                </td>
                <td>
                  {article.approved ? (
                    <h2 className="w-fit px-4 font-medium py-1 rounded text-primary">
                      premium
                    </h2>
                  ) : (
                    <button
                      className="small-btn px-5"
                    >
                      Make Premium
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
