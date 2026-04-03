import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'TaskFlow',
    description:
      'A full-featured project management app with drag-and-drop Kanban boards, real-time collaboration via WebSockets, and role-based access control. Built with React, Node.js, and PostgreSQL.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
    github: 'https://github.com',
    live: '#',
  },
  {
    title: 'WeatherLens',
    description:
      'A sleek weather dashboard that aggregates data from multiple APIs to display current conditions, hourly forecasts, and interactive radar maps. Features geolocation and city search.',
    tags: ['React', 'Tailwind', 'OpenWeather API', 'Mapbox'],
    github: 'https://github.com',
    live: '#',
  },
  {
    title: 'DevBlog Engine',
    description:
      'A Markdown-powered blogging platform with syntax highlighting, tag filtering, dark mode, and an admin CMS. Server-side rendered for fast load times and strong SEO.',
    tags: ['Next.js', 'MDX', 'Prisma', 'Vercel'],
    github: 'https://github.com',
    live: '#',
  },
  {
    title: 'BudgetBuddy',
    description:
      'A personal finance tracker with transaction categorization, recurring expense detection, and interactive charts. Includes CSV import and export for bank statements.',
    tags: ['React', 'Chart.js', 'Express', 'MongoDB'],
    github: 'https://github.com',
    live: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Projects
        </h2>
        <div className="w-16 h-1 bg-cyan-500 mx-auto mb-10 rounded-full" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group bg-gray-900 border border-gray-800 rounded-xl p-6
                         transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 hover:border-cyan-500/30"
            >
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                {p.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
