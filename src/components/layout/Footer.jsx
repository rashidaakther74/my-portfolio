import { FaCode, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    
    <footer className="bg-gradient-to-br from-[#0b0f1a] to-[#111827] text-gray-300 md:mt-0 mt-28 border-t border-gray-700">
      
        <div className="max-w-6xl mx-auto md:ml-28 px-6 py-8 md:py-14 grid grid-cols-1 md:grid-cols-3 gap-24 md:gap-28">

          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white text-lg">
                <FaCode />
              </div>
              <h1 className="text-white text-xl font-semibold">
                Rashida
              </h1>
            </div>
            <p className="text-gray-400 text-sm leading-6">
              Passionate Frontend Developer creating modern and
              responsive web experiences with clean design and
              smooth performance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-white font-semibold mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="hover:text-orange-500 transition">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/service" className="hover:text-orange-500 transition">
                  Service
                </NavLink>
              </li>
              <li>
                <NavLink to="/experience" className="hover:text-orange-500 transition">
                  Experience
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-orange-500 transition">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h2 className="text-white font-semibold mb-4">
              Connect With Me
            </h2>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/rashida.akther.704509"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-orange-500 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="www.linkedin.com/in/rashida-akther-2014503a2"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-orange-500 transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/rashidaakther74"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-orange-500 transition"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 py-5 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Rashida. All Rights Reserved.
        </div>
     
    </footer>
  );
};

export default Footer;