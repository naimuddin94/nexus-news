import HeroRightSection from "./HeroRightSection";
import HeroSlider from "./HeroSlider";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 mt-5">
      <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-12">
        <HeroSlider />
      </div>
      <div className="bg-neutral md:col-span-4 p-2">
        <HeroRightSection />
      </div>
    </div>
  );
};

export default Hero;
