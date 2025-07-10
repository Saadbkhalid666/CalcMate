import { Cards } from "../../components/CalcCards/Cards";
import { ToolsList } from "../../data/tools";

export const Calc = () => {
  return (
    <section id="calculators" className="py-10 px-4   mt-20 ">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8" data-aos="fade-in" >
        Explore Our Calculator Suite
      </h2>

      <div className="tool-container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-8">
        {ToolsList.map(({ id, name, description, url, icon, clr }, index) => {
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
            />
          );
        })}
      </div>
    </section>
  );
};
