import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

const UserTR = ({ user }) => {
  const { name, email, image, role, isPremium, isPublisher } = user;
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
        {isPublisher ? (
          <h2 className="bg-third w-fit px-8 py-1 rounded font-medium text-white">
            Publisher
          </h2>
        ) : (
          <button className="small-btn bg-primary">Make Publisher</button>
        )}
      </td>
      <th>
        {role === "admin" ? (
          <h2 className="bg-third w-fit px-8 py-1 rounded text-white">Admin</h2>
        ) : (
          <button className="small-btn">Make Admin</button>
        )}
      </th>
    </tr>
  );
};

UserTR.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserTR;
