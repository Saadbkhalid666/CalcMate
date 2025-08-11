import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#3190ce] text-white py-6 border-t shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-semibold">CalcMate</h2>
          <p className="text-sm">
            Simplifying your calculations, one click at a time.
          </p>
        </div>

        <div className="flex gap-4 mb-4 md:mb-0">
           
           
          <NavLink to="/privacy-policy" className="text-sm hover:underline">
            Privacy Policy
          </NavLink>
          <NavLink to="/terms" className="text-sm hover:underline">
            Terms & Conditions
          </NavLink>
           
        </div>

        <div className="text-center md:text-right text-md">
          <p>
            Powered by{" "}
            <a
              href="https://saadbinkhalid.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="underline  hover:text-gray-200"
            >
              Saad.Dev
            </a>
          </p>
        </div>
      </div>

      <div className="mt-4 text-center text-md font-extrabold text-white/80">
        &copy; {new Date().getFullYear()} CalcMate. All rights reserved.
      </div>
    </footer>
  );
};
