import { FaTrophy, FaUsers, FaGlobeAfrica, FaFutbol, FaLightbulb } from 'react-icons/fa';

const Awards = () => {
  const awards = [
    {
      id: "national-summit",
      title: "National Summit Awards",
      icon: <FaTrophy className="text-5xl text-blue-600" />,
      description: "Celebrating excellence in national leadership and innovation",
      details: [
        "Recognizes outstanding contributions to national development",
        "Honors innovative solutions to national challenges",
        "Celebrates leadership excellence in public service",
        "Awards for various sectors including education, healthcare, and infrastructure"
      ]
    },
    {
      id: "womens-achievement",
      title: "Women's Achievement Awards Africa",
      icon: <FaUsers className="text-5xl text-blue-600" />,
      description: "Recognizing outstanding women leaders across Africa",
      details: [
        "Celebrates women's contributions to African development",
        "Honors female entrepreneurs and business leaders",
        "Recognizes women in STEM and innovation",
        "Awards for women in politics and public service"
      ]
    },
    {
      id: "african-excellence",
      title: "African Excellence Awards",
      icon: <FaGlobeAfrica className="text-5xl text-blue-600" />,
      description: "Honoring exceptional achievements across the continent",
      details: [
        "Recognizes pan-African initiatives and collaborations",
        "Celebrates cross-border innovation and development",
        "Honors outstanding African organizations",
        "Awards for continental impact and leadership"
      ]
    },
    {
      id: "football-achievement",
      title: "African Football Achievement Awards",
      icon: <FaFutbol className="text-5xl text-blue-600" />,
      description: "Celebrating excellence in African football",
      details: [
        "Recognizes outstanding players and teams",
        "Honors football administrators and coaches",
        "Celebrates youth development in football",
        "Awards for football infrastructure and innovation"
      ]
    },
    {
      id: "global-innovation",
      title: "Global Innovation Awards",
      icon: <FaLightbulb className="text-5xl text-blue-600" />,
      description: "Recognizing innovative solutions with global impact",
      details: [
        "Celebrates breakthrough innovations from Africa",
        "Honors sustainable development solutions",
        "Recognizes technological advancement",
        "Awards for global collaboration and impact"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Awards</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Celebrating excellence and innovation across Africa through our prestigious award programs
          </p>
        </div>
      </section>

      {/* Awards Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {awards.map((award, index) => (
          <section
            key={award.id}
            id={award.id}
            className={`mb-24 scroll-mt-20 ${
              index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
            } rounded-xl p-8 shadow-sm`}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                {award.icon}
              </div>
              <div className="flex-grow text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{award.title}</h2>
                <p className="text-xl text-gray-600 mb-6">{award.description}</p>
                <ul className="space-y-3">
                  {award.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Awards;
