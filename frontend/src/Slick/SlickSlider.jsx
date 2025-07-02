import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FeaturedToolsList } from "../data/featuredTools";
import { NavLink } from "react-router-dom";

export const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
       
      <Slider {...settings}>
        {FeaturedToolsList.map(({ id, name, description, clr, url, icon }, index) => {
          const Icon = icon;
          return (
            <div key={id} className="px-3"> {/* Adds horizontal spacing */}
              <NavLink
                to={url}
                className="block transform hover:scale-105 transition-transform duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="shadow-lg border border-gray-200 rounded-md overflow-hidden">
                  
                  {/* Title Section with Background Color */}
                  <div className={`px-4 py-10 ${clr} flex flex-col items-center gap-3`}>
                    <Icon size={36} className="text-white" />
                    <h1 className="text-xl font-bold text-white text-center">{name}</h1>
                  </div>

                  {/* Description Section */}
                  <div className="bg-white px-4 py-4 h-28 flex items-center justify-center">
                    <p className="text-gray-700 text-center text-sm">{description}</p>
                  </div>

                </div>
              </NavLink>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
