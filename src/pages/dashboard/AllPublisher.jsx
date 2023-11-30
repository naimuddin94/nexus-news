import { useState } from "react";
import imageUpload from "../../utility/imageUpload";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAllPublisher from "../../hooks/getAllPublishers";
import Loading from "../../components/shared/Loading";
import PublisherTable from "../../components/dashboard/PublisherTable";

const AllPublisher = () => {
  const axiosSecure = useAxiosSecure();
  const { publishers, loading: publisherLoading, refetch } = useAllPublisher();
  const [loading, setLoading] = useState(false);
  const handleAddPublisher = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const publisher = form.publisher.value;
    const logoFile = form.logo.files[0];
    const logo = await imageUpload(logoFile);
    console.log(publisher, logo);
    axiosSecure
      .post("/admin/create-publisher", { publisher, logo })
      .then((res) => {
        form.reset();
        setLoading(false);
        refetch();
        Swal.fire({
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  if (publisherLoading) {
    return <Loading />;
  }
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div>
        <form
          onSubmit={handleAddPublisher}
          className="card-body py-8 rounded max-w-md shadow"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Publisher Name</span>
            </label>
            <input
              name="publisher"
              type="text"
              placeholder="enter publisher name"
              className="input input-bordered rounded"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Publisher Logo</span>
            </label>
            <input
              name="logo"
              type="file"
              accept=".png, .jpg, .jpeg, .webp"
              className="file-input rounded file-input-bordered file-input-info w-full"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary rounded bg-third border-none hover:ring text-black hover:ring-primary">
              {loading ? (
                <span className="loading loading-spinner text-accent"></span>
              ) : (
                "Add Publisher"
              )}
            </button>
          </div>
        </form>
      </div>
      <div className="flex-1">
        <PublisherTable publishers={publishers} />
      </div>
    </div>
  );
};

export default AllPublisher;
