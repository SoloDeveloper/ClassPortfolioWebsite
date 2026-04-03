import { FaCode, FaPaintBrush, FaRocket } from 'react-icons/fa';

const highlights = [
  {
    icon: <FaCode className="text-3xl text-cyan-400" />,
    title: 'Clean Code',
    text: 'I write well-structured, readable code following industry best practices and SOLID principles.',
  },
  {
    icon: <FaPaintBrush className="text-3xl text-cyan-400" />,
    title: 'UI / UX Focused',
    text: 'Every interface I build is mobile-first, accessible, and designed with the end user in mind.',
  },
  {
    icon: <FaRocket className="text-3xl text-cyan-400" />,
    title: 'Performance',
    text: 'I optimize for speed — lazy loading, code splitting, and efficient rendering are second nature.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          About Me
        </h2>
        <div className="w-16 h-1 bg-cyan-500 mx-auto mb-10 rounded-full" />

        <div className="md:flex md:gap-12 items-start">
          {/* Text block */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <p className="text-gray-400 leading-relaxed mb-4">
              I'm a Software Engineering student at the University of
              Nebraska–Lincoln with a passion for front-end development and
              creating intuitive user experiences. I enjoy working with modern
              web technologies and am always looking to learn something new.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I'm not coding, you can find me exploring new tech,
              collaborating on group projects, or cheering on the Huskers.
              Currently gaining real-world experience through an internship
              where I'm sharpening my skills every day.
            </p>
          </div>

          {/* Highlight cards */}
          <div className="md:w-1/2 grid gap-5">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex gap-4 items-start
                           transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 hover:border-cyan-500/30"
              >
                <div className="mt-1">{h.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{h.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {h.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
