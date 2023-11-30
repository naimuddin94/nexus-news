import PropTypes from "prop-types";
import moment from "moment";

const PublisherTable = ({ publishers }) => {
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
                <button className="small-btn">Delete</button>
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
};

export default PublisherTable;
