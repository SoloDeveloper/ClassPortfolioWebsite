const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript / ES6+', level: 85 },
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 88 },
      { name: 'TypeScript', level: 70 },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React', level: 82 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Bootstrap', level: 80 },
      { name: 'Node.js', level: 68 },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git / GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'npm', level: 80 },
      { name: 'Figma', level: 65 },
    ],
  },
];

function SkillBar({ name, level }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-300">{name}</span>
        <span className="text-cyan-400">{level}%</span>
      </div>
      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-700"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Skills &amp; Technologies
        </h2>
        <div className="w-16 h-1 bg-cyan-500 mx-auto mb-10 rounded-full" />

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6
                         transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/10 hover:border-cyan-500/30"
            >
              <h3 className="text-lg font-semibold text-cyan-400 mb-5">
                {cat.title}
              </h3>
              {cat.skills.map((s) => (
                <SkillBar key={s.name} {...s} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
