import { NavLink } from "react-router-dom";
import { FeaturedToolsList } from "../../data/featuredTools";

export const Hero = () => {
  return (
    <div className="bg-[#3190ce] min-h-[100vh] w-full">
      <div className="intro-container flex justify-center pt-[10%]" id="home">
        <h1 className="text-3xl text-white font-extrabold font-sans">
          DaimTools - Calculator Suite
        </h1>
      </div>

      <div className="featured-calculators grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {FeaturedToolsList.map(({ id, name, description, clr, url }) => (
          <NavLink
            key={id}
            to={url}
            className="featured-tool-container shadow-lg border border-gray-200 rounded-md overflow-hidden hover:scale-105 transition-transform duration-300"
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
