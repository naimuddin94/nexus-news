import { useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { customStyles, publishers, tags } from "./article";
import axios from "axios";
import { categories } from "../../utility/utility";

const animatedComponents = makeAnimated();

const AddArticle = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    axios
      .get("https://bdapis.com/api/v1.1/districts")
      .then((res) => setDistricts(res.data.data));
  }, []);

  const handleTagSelect = (selectedOptions) => {
    // Limit selection to a maximum of 4 tags
    if (selectedOptions.length <= 4) {
      setSelectedTags(selectedOptions);
    }
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
            <form className="card-body">
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
              <div className="flex gap-4">
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Image</span>
                  </label>
                  <input
                    type="file"
                    className="file-input file-input-info w-full rounded"
                    required
                  />
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
              <div className="flex gap-4">
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Category</span>
                  </label>
                  <select className="select select-info w-full rounded">
                    {categories?.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Area</span>
                  </label>
                  <select className="select select-info w-full rounded">
                    {districts?.map((districtObj) => (
                      <option
                        key={districtObj.district}
                        value={districtObj.district}
                      >
                        {districtObj.district}
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
                  components={animatedComponents}
                  isMulti
                  value={selectedTags}
                  onChange={handleTagSelect}
                  name="tags"
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
                  className="textarea textarea-info rounded"
                  rows={5}
                  placeholder="Write your content here......"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-info rounded">Add Article</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddArticle;
