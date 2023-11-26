import PropTypes from "prop-types";
import { sliceDescription } from "../../../utility/utility";

const FeatureNewsCard = ({ article }) => {
  const { title, description, image } = article;
  return (
    <div className="p-6 bg-white rounded shadow">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-text">
        {title}
      </h5>

      <div className="flex flex-col gap-5">
        <figure className="flex-[1]">
          <img src={image} alt={title} className="object-cover rounded" />
        </figure>
        <div className="flex-[2]">
          <p className="mb-3 font-normal text-text-light pb-6">
            {sliceDescription(description, 30)}
          </p>
          <button className="small-btn">Read More</button>
        </div>
      </div>
    </div>
  );
};

FeatureNewsCard.propTypes = {
  article: PropTypes.object.isRequired,
};

export default FeatureNewsCard;
