import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { customStyles, publishers, tags } from "./article";
import { categories } from "../../utility/utility";
import imageUpload from "../../utility/imageUpload";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuthInfo from "../../hooks/useAuthInfo";
import Swal from "sweetalert2";

const animatedComponents = makeAnimated();

const AddArticle = () => {
  const { user } = useAuthInfo();
  const axiosSecure = useAxiosSecure();
  const [selectedTags, setSelectedTags] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleTagSelect = (selectedOptions) => {
    // Limit selection to a maximum of 4 tags
    if (selectedOptions.length <= 4) {
      setSelectedTags(selectedOptions);
    }
  };

  const handleAddArticles = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const title = form.title.value.trim();
    const photoFile = form.photo.files[0];
    const category = form.category.value;
    const tags = selectedTags.map((tag) => tag.value);
    const description = form.description.value.trim();
    const image = await imageUpload(photoFile);
    const publisher = {
      name: user?.displayName,
      email: user?.email,
      logo: user?.photoURL,
    };
    const article = { title, image, category, publisher, tags, description };
    await axiosSecure.post("/articles", article).then((res) => {
      console.log(res);
      if (res.status === 201) {
        form.reset();
        setSelectedTags([]);
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
            <form onSubmit={handleAddArticles} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  name="title"
                  type="text"
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
                  <select className="select select-info w-full rounded">
                    {publishers?.map((publisher) => (
                      <option key={publisher.name} value={publisher.name}>
                        {publisher.name}
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
                  components={animatedComponents}
                  isMulti
                  value={selectedTags}
                  onChange={handleTagSelect}
                  options={tags}
                  placeholder="All possible tags..."
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
                    "Add Article"
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

export default AddArticle;
