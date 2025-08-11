import { NavLink } from "react-router-dom";

export const Cards = ({ id, url, index, name, clr, description, category,Icon }) => {
  return (
    <NavLink
      to={url}
      className="group featured-tool-container shadow-lg border border-gray-200 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {/* Icon & Title Section */}
      <div className={`px-4 py-10 ${clr} h-40 flex flex-col items-center gap-3`}>
        <Icon
          size={40}
          className="text-white animate-customPulse  transition-all group-hover:scale-110"
        />
        <h1 className="text-xl font-bold text-white text-center">{name}</h1>
      </div>

      {/* Description Section */}
      <div className="bg-white px-4 py-10 h-46  flex items-center overflow-hidden justify-center">
        <p className="text-gray-700 text-center text-sm">{description}</p>
      </div>
        <p className="text-sm font-bold text-gray-400 text-center">Category : {category}</p>
    </NavLink>
  );
};
