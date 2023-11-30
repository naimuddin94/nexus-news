import PropTypes from "prop-types";
import moment from "moment";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const PublisherTable = ({ publishers, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Publisher will be deleted forever",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/admin/publishers/${id}`).then((res) => {
          if (res.status === 200) {
            refetch();
            Swal.fire({
              icon: "success",
              title: res.data.message,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Details</th>
            <th>Since</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {publishers?.map((publisher) => (
            <tr key={publisher._id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="rounded-full w-12 h-12">
                      <img
                        src={publisher.logo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{publisher.publisher}</div>
                    <div className="text-sm opacity-50">Publisher</div>
                  </div>
                </div>
              </td>
              <td>{moment(publisher.createAt).format("Do MMMM YYYY")}</td>
              <th>
                <button
                  onClick={() => handleDelete(publisher._id)}
                  className="small-btn"
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

PublisherTable.propTypes = {
  publishers: PropTypes.array.isRequired,
  refetch: PropTypes.func.isRequired,
};

export default PublisherTable;
