import { NavLink } from "react-router";
import Container from "../global/Container";

const About = () => {
  return (
   
      <section className="bg-[#111827] text-white py-20">
      <div className="max-w-5xl mx-auto px-6 mt-20 mb-25 grid md:grid-cols-2 gap-10 items-center">

        <img src="/assets/Rashida2.png.jpeg" className="w-80 h-80 object-cover bg-gray-800 rounded-xl"></img>

        <div>
          <h2 className="text-3xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-gray-400 mb-6">
            I am a passionate frontend developer who loves building
            interactive and visually appealing websites.
          </p>

          <NavLink to="/AboutRead" className="bg-orange-500 px-6 py-2 rounded-full hover:bg-orange-600 transition">
            Read More
          </NavLink>
        </div>

      </div>
    </section>
  );
};

export default About;
