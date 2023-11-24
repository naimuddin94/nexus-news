import PropTypes from "prop-types";
import { sliceDescription } from "../../../utility/worldSlice";

const SportsCard = ({ article }) => {
  const { title, description, image } = article;
  return (
    <div className="p-6 bg-white rounded shadow mt-2">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-text">
        {title}
      </h5>

      <div className="flex-[2]">
        <p className="mb-3 font-normal text-text-light pb-6">
          {sliceDescription(description, 30)}
        </p>

        <figure className="flex-[1]">
          <img src={image} alt={title} className="object-cover rounded" />
        </figure>
        <button className="small-btn mt-3">Read More</button>
      </div>
    </div>
  );
};

SportsCard.propTypes = {
  article: PropTypes.object.isRequired,
};
export default SportsCard;
