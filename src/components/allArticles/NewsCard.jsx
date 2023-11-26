import PropTypes from "prop-types";
import { sliceDescription } from "../../utility/utility";
import { SiAffinitypublisher } from "react-icons/si";


const NewsCard = ({ article }) => {
  const { image, title, description, isPremium, publisher } = article;
  return (
    <div
      className={`card card-compact bg-base-100 shadow-xl rounded relative ${
        isPremium && "bg-third"
      }`}
    >
      {isPremium && (
        <h4 className="absolute border border-third bg-primary text-neutral px-2 py-1 rounded right-1 top-1">
          premium
        </h4>
      )}
      <figure className="h-44 w-full">
        <img src={image} alt="Shoes" className="h-full w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg">{title}</h2>
        <hr />
        <p>{sliceDescription(description, 30)}.....</p>
        <div className="flex gap-1 items-center">
          <SiAffinitypublisher />
          <h4 className="text-lg font-semibold">{publisher?.name}</h4>
        </div>
        <div className="card-actions justify-end">
          <button className="small-btn">Details</button>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  article: PropTypes.object.isRequired,
};

export default NewsCard;
