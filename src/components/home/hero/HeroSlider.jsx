import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { useState } from "react";
import useArticles from "../../../hooks/useArticles";
import HighLightHeading from "../../utility/HighLightHeading";
import { sliceDescription } from "../../../utility/utility";

const HeroSlider = () => {
  const { articles } = useArticles();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideIndex = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };

  return (
    <>
      <div className="col-span-8 p-2">
        <Swiper
          modules={[Autoplay]}
          autoplay={true}
          spaceBetween={30}
          slidesPerView={1}
          onSlideChange={(swiper) => handleSlideIndex(swiper)}
        >
          {articles?.slice(0, 7).map((article) => (
            <SwiperSlide key={article._id} className="relative">
              <div>
                <img
                  src={article.image}
                  alt=""
                  className="w-full h-96 object-cover rounded"
                />
                <h1 className="text-3xl text-text font-bold bg-white w-11/12 mx-auto relative -mt-10 py-1 px-4 rounded shadow-md">
                  {article.title}
                </h1>
                <div>
                  <p className="py-3">
                    {sliceDescription(article.description, 35)}...
                    <button className="small-btn absolute right-2">
                      Read More
                    </button>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="col-span-4 p-2">
        <HighLightHeading text="Trending News" />
        {articles?.slice(0, 7).map((article, index) => (
          <div key={article._id}>
            <h3
              className={`py-2 px-4 rounded ${
                index === currentSlide && "bg-third/30 text-black font-medium"
              }`}
            >
              {article.title}
            </h3>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
};

export default HeroSlider;
