import { NavLink } from "react-router-dom";
import { FeaturedToolsList } from "../../data/featuredTools";

export const Hero = () => {
  return (
    <div className="bg-[#3190ce] min-h-[100vh] w-full">
      <div className="intro-container flex justify-center flex-col pb-20  pt-35" id="home" data-aos="fade-up"  >
        <h1 className="text-3xl text-white text-center font-extrabold font-sans">
          DaimTools - Calculator Suite
        </h1>
        <p className="text-xl text-gray-100 text-center mt-3" >All-in-One Online Calculators for Finance, Health, and Everyday Needs — Fast, Accurate, and Free.</p>
      </div>

      <div className="featured-calculators grid grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {FeaturedToolsList.map(({ id, name, description, clr, url },index) => (
          <NavLink
            key={id}
            to={url}
            className="featured-tool-container shadow-lg border border-gray-200 rounded-md overflow-hidden hover:scale-105 transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay={index*100}
          >
            {/* Title Section with Light Colored Background */}
            <div className={`px-4 py-10 ${clr}`}>
              <h1 className="text-xl font-bold text-white">{name}</h1>
            </div>

            {/* Description Section with White Background */}
            <div className="bg-white px-4 py-4">
              <p className="text-gray-700">{description}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
