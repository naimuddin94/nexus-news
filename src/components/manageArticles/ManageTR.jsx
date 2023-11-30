import moment from "moment/moment";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageTR = ({ article, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const { _id, title, image, tags, views, isPremium, approved, createAt } =
    article;

  const handleDeleteArticle = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Article will be deleted forever!",
      icon: "warning",
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
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-80 flex gap-2">
              {tags?.map((tag) => (
                <p key={tag} className="text-secondary">
                  #{tag}
                </p>
              ))}
            </div>
          </div>
        </div>
      </td>
      <td>{moment(createAt).format("Do MMM YY")}</td>
      <th>{views}</th>
      <td>{approved ? "✅" : "❌"}</td>
      <td>{isPremium ? "✅" : "❌"}</td>
      <td>
        <button className="small-btn bg-primary">Update</button>
      </td>
      <th>
        <button onClick={() => handleDeleteArticle(_id)} className="small-btn">
          Delete
        </button>
      </th>
    </tr>
  );
};

ManageTR.propTypes = {
  article: PropTypes.object.isRequired,
  refetch: PropTypes.func.isRequired,
};

export default ManageTR;
