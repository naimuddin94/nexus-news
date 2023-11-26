import FeatureLeft from "./FeatureLeft";
import FeatureRight from "./FeatureRight";

const Feature = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 bg-neutral">
      <div className="col-span-6 lg:col-span-9 p-2">
        <FeatureLeft />
      </div>
      <div className="col-span-6 lg:col-span-3 p-2">
        <FeatureRight />
      </div>
    </div>
  );
};

export default Feature;
