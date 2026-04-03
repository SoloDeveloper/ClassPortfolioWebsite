const experiences = [
  {
    role: 'Software Engineering Intern',
    company: 'Company Name',
    period: 'Present',
    bullets: [
      'Contributing to front-end development using React and modern web technologies.',
      'Collaborating with cross-functional teams to deliver features on schedule.',
      'Writing clean, maintainable code and participating in code reviews.',
    ],
  },
  {
    role: 'Software Engineering Student',
    company: 'University of Nebraska–Lincoln',
    period: 'In Progress',
    bullets: [
      'Pursuing a degree in Software Engineering with coursework in web development, data structures, and algorithms.',
      'Building projects with React, Tailwind CSS, and JavaScript as part of coursework and personal learning.',
      'Collaborating with peers on team-based software projects using Git and agile practices.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Experience
        </h2>
        <div className="w-16 h-1 bg-cyan-500 mx-auto mb-10 rounded-full" />

        <div className="relative border-l-2 border-gray-800 pl-6 ml-3">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="mb-10 last:mb-0 group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-gray-800 border-2 border-cyan-500 group-hover:bg-cyan-500 transition-colors duration-300" />

              <div
                className="bg-gray-900 border border-gray-800 rounded-xl p-5
                           transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 hover:border-cyan-500/30"
              >
                <h3 className="text-lg font-bold group-hover:text-cyan-400 transition-colors">
                  {exp.role}
                </h3>
                <p className="text-cyan-400 text-sm mb-1">{exp.company}</p>
                <p className="text-gray-500 text-xs mb-3">{exp.period}</p>
                <ul className="space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="text-gray-400 text-sm leading-relaxed flex gap-2"
                    >
                      <span className="text-cyan-500 mt-1">&#9656;</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
