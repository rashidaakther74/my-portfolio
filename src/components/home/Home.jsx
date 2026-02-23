import { FaArrowRight } from "react-icons/fa";
import Container from "../global/Container";
import { NavLink } from "react-router";

const Home = () => {
  return (
   <Container>
     <section className="bg-[#0b0f1a] text-white pt-32 pb-5">
      <div className="md:max-w-4xl gap-0 md:gap-32 mx-auto px-6 grid md:grid-cols-2  items-center">

        {/* Left Content */}
        <div className="w-96 md:w-96 h-auto md:h-96">
          <h2 className="text-orange-500 font-semibold mb-3">
            Hello, I'm
          </h2>

          <h1 className="text-4xl md:text-4xl font-bold leading-tight mb-6">
            Rashida Akther <br />
            Frontend Developer
          </h1>

          <p className="text-gray-400 mb-8">
            I create modern, responsive and user-friendly web interfaces
            using React & Tailwind CSS.
          </p>

         <NavLink
              to="/skills" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full transition mt-2"
            >
             View Skills
            </NavLink>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="w-80 h-80 md:w-80 md:h-80 mb-0 md:mb-44 bg-orange-400/20 rounded-full flex items-center justify-center overflow-hidden">
            <img src="/assets/Rashida.png.jpeg" className="w-64 h-64 rounded-full object-cover"></img>
          </div>
        </div>

      </div>
    </section>
   </Container>
  );
};

export default Home;
