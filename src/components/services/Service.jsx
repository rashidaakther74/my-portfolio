import { FiCode, FiLayout, FiSmartphone } from "react-icons/fi";
import Container from "../global/Container";

const Service = () => {
  return (
   <Container>
     <section className="bg-[#0b0f1a] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          My Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-[#111827] p-8 rounded-xl hover:border hover:border-orange-500 transition">
            <FiCode className="text-orange-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-3">Web Development</h3>
            <p className="text-gray-400">
              Modern and responsive website development using React.
            </p>
          </div>

          <div className="bg-[#111827] p-8 rounded-xl hover:border hover:border-orange-500 transition">
            <FiLayout className="text-orange-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
            <p className="text-gray-400">
              Clean and modern interface design for better user experience.
            </p>
          </div>

          <div className="bg-[#111827] p-8 rounded-xl hover:border hover:border-orange-500 transition">
            <FiSmartphone className="text-orange-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-3">Responsive Design</h3>
            <p className="text-gray-400">
              Fully responsive websites for mobile and desktop devices.
            </p>
          </div>

        </div>

      </div>
    </section>
   </Container>
  );
};

export default Service;
