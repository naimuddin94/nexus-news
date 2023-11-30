import ManageTR from "../../components/manageArticles/ManageTR";
import Loading from "../../components/shared/Loading";
import useOwnerArticles from "../../hooks/useOwnerArticles";

const ManageArticles = () => {
  const { articles, isLoading, refetch } = useOwnerArticles();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="w-fit mx-auto bg-neutral min-h-screen">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Create AT</th>
              <th>Views</th>
              <th>Approved</th>
              <th>Premium</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {articles?.map((article) => (
              <ManageTR key={article._id} article={article} refetch={refetch} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageArticles;
