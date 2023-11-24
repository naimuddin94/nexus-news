import PropTypes from "prop-types";
import { sliceDescription } from "../../../utility/worldSlice";

const FeatureCard = ({ article }) => {
  const { image, title } = article;
  return (
    <div className="card card-compact bg-base-100 shadow rounded relative">
      <figure className="w-full h-full">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </figure>
      <h2 className="px-4 py-2 text-lg font-semibold absolute bg-white w-11/12 mx-auto -bottom-9 shadow-md rounded right-0 left-0">
        {sliceDescription(title, 7)}
      </h2>
    </div>
  );
};

FeatureCard.propTypes = {
  article: PropTypes.object.isRequired,
};

export default FeatureCard;
