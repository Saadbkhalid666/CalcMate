import { NavLink } from "react-router-dom";
import { FeaturedToolsList } from "../../data/featuredTools";
import { SlickSlider } from "../../Slick/SlickSlider";

export const Hero = () => {
  return (
    <div className="bg-[#3190ce] min-h-[100vh] w-full">
      <div
        className="intro-container flex justify-center flex-col pb-20  pt-35"
        id="home"
        data-aos="fade-up"
      >
        <h1 className="text-3xl text-white text-center font-extrabold font-sans">
          CalcMate - Calculator Suite
        </h1>
        <p className="text-xl text-gray-100 text-center mt-3">
          All-in-One Online Calculators for Finance, Health, and Everyday Needs
          — Fast, Accurate, and Free.
        </p>
      </div>

      <div className="featured-calculators ">
        <SlickSlider   />
      </div>
    </div>
  );
};
