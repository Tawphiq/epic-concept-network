import { Link } from 'react-router-dom';
import { FaTrophy, FaUsers, FaGlobeAfrica, FaFutbol, FaLightbulb } from 'react-icons/fa';

const Home = () => {
  const featuredAwards = [
    {
      title: "National Summit Awards",
      icon: <FaTrophy className="text-4xl text-blue-600" />,
      description: "Celebrating excellence in national leadership and innovation",
      link: "#national-summit"
    },
    {
      title: "Women's Achievement Awards",
      icon: <FaUsers className="text-4xl text-blue-600" />,
      description: "Recognizing outstanding women leaders across Africa",
      link: "#womens-achievement"
    },
    {
      title: "African Excellence Awards",
      icon: <FaGlobeAfrica className="text-4xl text-blue-600" />,
      description: "Honoring exceptional achievements across the continent",
      link: "#african-excellence"
    }
  ];

  const services = [
    "Award Ceremonies",
    "Leadership Development",
    "Networking Events",
    "Recognition Programs",
    "Media Coverage",
    "International Partnerships"
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Epic Concept Network
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Celebrating Excellence, Inspiring Innovation, and Building Future Leaders Across Africa
            </p>
            <button
              onClick={() => scrollToSection('nominate')}
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
            >
              Nominate Now
            </button>
          </div>
        </div>
      </section>

      {/* Featured Awards Section */}
      <section id="featured-awards" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Awards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredAwards.map((award, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="text-center mb-4">{award.icon}</div>
                <h3 className="text-xl font-semibold text-center mb-3">{award.title}</h3>
                <p className="text-gray-600 text-center mb-4">{award.description}</p>
                <button
                  onClick={() => scrollToSection(award.link.substring(1))}
                  className="block text-center text-blue-600 hover:text-blue-700 font-medium mx-auto"
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300 text-center"
              >
                <p className="text-gray-800 font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="nominate" className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in celebrating excellence and innovation across Africa. Nominate deserving individuals or organizations today.
          </p>
          <button
            onClick={() => scrollToSection('nominate')}
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
          >
            Start Your Nomination
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
