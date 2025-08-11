import { useState } from "react";
import { Cards } from "../../components/CalcCards/Cards";
import { ToolsList } from "../../data/tools";

export const Calc = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(ToolsList.map(tool => tool.category))];

  const filteredList = selectedCategory === "All" 
    ? ToolsList 
    : ToolsList.filter(tool => tool.category === selectedCategory);

  return (
    <section id="calculators" className="py-10 px-4 mt-20">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-8"
        data-aos="fade-in"
      >
        Explore Our Calculator Suite
      </h2>

      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full hover:scale-110 cursor-pointer     text-sm font-medium border transition-all duration-200 ${
              selectedCategory === cat
                ? "bg-[#3190ce] text-white border-[#3190ce] font-extrabold"
                : "text-[#3190ce] border-[#3190ce]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="tool-container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
        {filteredList.map(
          ({ id, name, description, url, icon, clr, category }, index) => {
            const Icon = icon;
            return (
              <Cards
                key={id}
                id={id}
                description={description}
                clr={clr}
                index={index}
                url={url}
                name={name}
                Icon={Icon}
                category={category}
              />
            );
          }
        )}
      </div>
    </section>
  );
};
