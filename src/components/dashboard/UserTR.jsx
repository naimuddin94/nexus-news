import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UserTR = ({ user, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const { _id, name, email, image, role, isPremium } = user;

  const handleUserRole = (id, role) => {
    axiosSecure.put(`/users/${id}`, { newRole: role }).then((res) => {
      if (res.status === 200) {
        refetch();
        Swal.fire({
          icon: "success",
          title: "User role updated successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="rounded-full w-12 h-12">
              <img src={image} alt={`${name}'s avatar`} />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>
        <h2 className="font-medium">{role}</h2>
      </td>
      <td>
        {isPremium ? (
          <FaCheck className="text-xl text-green-500 ml-3" />
        ) : (
          <AiFillCloseCircle className="text-xl text-red-500 ml-3" />
        )}
      </td>
      <td>
        {role === "publisher" ? (
          <h2 className="border border-primary w-fit px-8 py-1 rounded font-medium text-primary">
            Publisher
          </h2>
        ) : (
          <button
            onClick={() => handleUserRole(_id, "publisher")}
            className="small-btn bg-primary"
          >
            Make Publisher
          </button>
        )}
      </td>
      <th>
        {role === "admin" ? (
          <h2 className="w-fit px-8 py-1 rounded text-primary border border-third">
            Admin
          </h2>
        ) : (
          <button
            onClick={() => handleUserRole(_id, "admin")}
            className="small-btn"
          >
            Make Admin
          </button>
        )}
      </th>
    </tr>
  );
};

UserTR.propTypes = {
  user: PropTypes.object.isRequired,
  refetch: PropTypes.func.isRequired,
};

export default UserTR;
