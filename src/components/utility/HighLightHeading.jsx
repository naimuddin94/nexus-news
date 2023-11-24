import PropTypes from "prop-types";

const HighLightHeading = ({ text }) => {
  return (
    <h3 className="bg-secondary/50 px-4 py-2 rounded-sm w-fit mb-2">{text}</h3>
  );
};

HighLightHeading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HighLightHeading;
