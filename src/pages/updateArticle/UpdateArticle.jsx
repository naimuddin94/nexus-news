import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { customStyles, tags } from "../addArticle/article";
import { categories } from "../../utility/utility";
import imageUpload from "../../utility/imageUpload";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuthInfo from "../../hooks/useAuthInfo";
import Swal from "sweetalert2";
import useAllPublisher from "../../hooks/getAllPublishers";
import { useLoaderData, useNavigate } from "react-router-dom";

const animatedComponents = makeAnimated();

const UpdateArticle = () => {
  const navigate = useNavigate();
  const article = useLoaderData();
  const {
    _id,
    title,
    description,
    tags: loadedTags,
    category,
    publisher,
  } = article;
  const loadedTagsObjArr = loadedTags.map((tag) => ({
    value: tag,
    label: tag,
  }));
  const { user } = useAuthInfo();
  const axiosSecure = useAxiosSecure();
  const { publishers } = useAllPublisher();
  const [selectedTags, setSelectedTags] = useState(loadedTagsObjArr);
  const [loading, setLoading] = useState(false);

  const handleTagSelect = (selectedOptions) => {
    // Limit selection to a maximum of 4 tags
    if (selectedOptions.length <= 4) {
      setSelectedTags(selectedOptions);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const title = form.title.value.trim();
    if (title.length > 80) {
      setLoading(false);
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Title is too much big!",
      });
    }
    const photoFile = form.photo.files[0];
    const category = form.category.value;
    const publisherId = form.publisher.value;
    const tags = selectedTags.map((tag) => tag.value);
    const description = form.description.value.trim();
    if (description.length < 500) {
      setLoading(false);
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "News description must be bigger than 500 characters!",
      });
    }
    const image = await imageUpload(photoFile);
    // find publisher by id
    const findPublisher = publishers?.find(
      (publisher) => publisher._id === publisherId
    );
    const publisher = {
      name: findPublisher.publisher,
      email: user?.email,
      logo: findPublisher.logo,
    };
    const article = { title, image, category, publisher, tags, description };
    console.log(article);
    await axiosSecure.patch(`/articles/update/${_id}`, article).then((res) => {
      console.log(res);
      if (res.status === 200) {
        navigate(-1);
        Swal.fire({
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });

    setLoading(false);
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content items-stretch flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left flex-[4] p-8 rounded bg-third">
            <h1 className="text-3xl font-bold text-primary border-l-4 border-secondary px-4">
              Guidelines for Publishing Articles on Our Newspaper
            </h1>
            <p className="py-3 text-text-light">
              In our commitment to delivering credible, responsible, and
              enriching content, we adhere to a set of editorial guidelines that
              shape every article published on our platform.
            </p>
            <p className="py-3 text-text-light">
              We prioritize accuracy, fact-checking, and verification from
              reputable sources to ensure the information presented is reliable
              and truthful. Articles undergo stringent checks to maintain
              authenticity and avoid plagiarism.
            </p>
            <p className="py-3 text-text-light">
              Our commitment to unbiased reporting is unwavering. We strive to
              represent diverse viewpoints, fostering a comprehensive
              understanding of each topic while steering clear of biased
              narratives.
            </p>
            <p className="py-3 text-text-light">
              Respecting ethical boundaries, we responsibly handle sensitive
              topics, providing necessary warnings and context. Hate speech,
              discrimination, or violence-inducing content have no place in our
              publications.
            </p>
          </div>
          <div className="card shrink-0 w-full shadow-2xl bg-base-100 rounded flex-[6] border border-secondary">
            <form onSubmit={handleUpdate} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  name="title"
                  type="text"
                  defaultValue={title}
                  placeholder="enter your news heading here"
                  className="input input-bordered rounded input-info"
                  required
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  name="photo"
                  type="file"
                  accept=".png, .jpg, .jpeg, .webp"
                  className="file-input file-input-info w-full rounded"
                  required
                />
              </div>

              <div className="flex gap-4">
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Category</span>
                  </label>
                  <select
                    defaultValue={category}
                    name="category"
                    className="select select-info w-full rounded"
                  >
                    {categories?.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Publisher</span>
                  </label>
                  <select
                    defaultValue={publisher?.publisher}
                    name="publisher"
                    className="select select-info w-full rounded"
                  >
                    {publishers?.map((publisher) => (
                      <option key={publisher.publisher} value={publisher._id}>
                        {publisher.publisher}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Tags</span>
                </label>
                <Select
                  name="tags"
                  defaultValue={[tags[0]]}
                  components={animatedComponents}
                  isMulti
                  value={selectedTags}
                  onChange={handleTagSelect}
                  options={tags}
                  placeholder="All possible tags..."
                  className="basic-multi-select"
                  classNamePrefix="select"
                  styles={customStyles}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  name="description"
                  defaultValue={description}
                  required
                  className="textarea textarea-info rounded"
                  rows={5}
                  placeholder="Write your content here......"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-info rounded">
                  {loading ? (
                    <span className="loading loading-spinner text-accent"></span>
                  ) : (
                    "Update Article"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateArticle;
