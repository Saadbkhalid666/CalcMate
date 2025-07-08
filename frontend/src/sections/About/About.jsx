import daimLogo from "../../assets/daimLogo.png";
export const About = () => {
  return (
    <section id="aboutus" className="mt-[10%]">
          <h1 className="text-5xl text-[#3190ce] text-center font-extrabold font-sans mb-[5%] " data-aos="fade" data-delay-aos={100}>About Us</h1>
      <div className="container flex flex-row px-4 ">
        <div className="content-container   " data-aos="fade-right" data-delay-aos={120}>
          <p className="md:w-2xl text-xl text-center">
            <strong className="text-[#3190ce]">CalcMate</strong>is a powerful
            and intuitive
            <strong className="text-[#3190ce]">calculator app</strong>developed
            to
            <strong className="text-[#3190ce]">
              automate and simplify the daily tasks of users
            </strong>
            , making life easier with just a few taps. Built to offer speed,
            accuracy, and reliability, CalcMate brings together a suite of
            essential tools including a
            <strong className="text-[#3190ce]">
              GST calculator, percentage calculator, loan/EMI calculator, BMI
              calculator, age calculator, scientific calculator, currency
              converter, time duration calculator, tax calculator
            </strong>
            , and
            <strong className="text-[#3190ce]">unit converter</strong>. Whether
            it's for personal finance, academic use, health tracking, or
            professional calculations, CalcMate ensures that every user has
            access to a seamless and efficient experience. This app is proudly a
            product of
            <strong className="text-[#3190ce]">Daim Soft Hub</strong>, a trusted
            name in the digital world and a
            <strong className="text-[#3190ce]">
              dynamic information technology company
            </strong>{" "}
            committed to delivering
            <strong className="text-[#3190ce]">innovative solutions</strong>for
            modern needs. Daim Soft Hub is the
            <strong className="text-[#3190ce]">
              digital partner of businesses and individuals
            </strong>
            , specializing in
            <strong className="text-[#3190ce]">
              web development and design, eCommerce platforms like Shopify, app
              development
            </strong>
            , and
            <strong className="text-[#3190ce]">
              result-driven SEO and digital marketing strategies
            </strong>
            . With a vision to empower users through smart technology, CalcMate
            reflects Daim Soft Hub’s mission to build tools that not only solve
            problems but also
            <strong className="text-[#3190ce]">
              {" "}
              enhance productivity, support digital growth
            </strong>
            , and
            <strong className="text-[#3190ce]"> drive long-term success</strong>
            Backed by a team of experts and a commitment to excellence, CalcMate
            stands as a shining example of how technology and innovation can
            come together to serve people better every day.
          </p>
        </div>
        <div className="image-container hidden md:block relative" data-aos="fade-left" data-delay-aos={130}>
          <img src={daimLogo} alt="Daim Soft Hub" />
        </div>
      </div>
    </section>
  );
};
