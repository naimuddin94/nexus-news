import UserTR from "../../components/dashboard/UserTR";
import Loading from "../../components/shared/Loading";
import useAllUsers from "../../hooks/useAllUsers";

const AllUsers = () => {
  const { users, isLoading, refetch } = useAllUsers();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Premium</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <UserTR key={user._id} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
