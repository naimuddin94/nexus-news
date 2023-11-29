import { FaCheck } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAdminAllArticles from "../../hooks/useAdminAllArticles";
import { SiAffinitypublisher } from "react-icons/si";

const AdminAllArticle = () => {
  const { articles, refetch } = useAdminAllArticles();
  const axiosSecure = useAxiosSecure();

  const handleApproved = (id, value) => {
    axiosSecure.put(`/articles/${id}`, { approved: value }).then((res) => {
      if (res.status === 200) {
        refetch();
        Swal.fire({
          icon: "success",
          title: "Article status updated",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handlePremium = (id, value) => {
    axiosSecure
      .put(`/articles/make-premium/${id}`, { isPremium: value })
      .then((res) => {
        if (res.status === 200) {
          refetch();
          Swal.fire({
            icon: "success",
            title: "Article premium status updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDeleteArticle = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Write some reason why delete it!",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      icon: "warning",
      preConfirm: async (value) => {
        console.log(value);
      },
      allowOutsideClick: () => !Swal.isLoading(),
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/articles/${id}`).then((res) => {
          if (res.status === 200) {
            refetch();
            Swal.fire({
              icon: "success",
              title: "Deleted!",
              showConfirmButton: false,
              timer: 1500,
            });
          }
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
                <td>
                  {article.title}
                  <br />
                  <span className="flex gap-1 items-center">
                    <SiAffinitypublisher />
                    {article?.publisher?.name}
                  </span>
                </td>
                <td>
                  {article.approved ? (
                    <FaCheck className="text-xl text-green-500 ml-3" />
                  ) : (
                    <AiFillCloseCircle className="text-xl text-red-500 ml-3" />
                  )}
                </td>
                <td>
                  {article.approved ? (
                    <button
                      onClick={() => handleApproved(article._id, false)}
                      className="small-btn bg-primary"
                    >
                      Cancel Approval
                    </button>
                  ) : (
                    <button
                      onClick={() => handleApproved(article._id, true)}
                      className="small-btn"
                    >
                      Approved
                    </button>
                  )}
                </td>
                <td>
                  {article.isPremium ? (
                    <button
                      onClick={() => handlePremium(article._id, false)}
                      className="small-btn bg-primary"
                    >
                      Cancel Premium
                    </button>
                  ) : (
                    <button
                      onClick={() => handlePremium(article._id, true)}
                      className="small-btn px-4"
                    >
                      Make Premium
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteArticle(article._id)}
                    className="small-btn bg-white"
                  >
                    ❌
                  </button>
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
