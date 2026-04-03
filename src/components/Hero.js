import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 pt-16"
    >
      <div className="text-center max-w-2xl">
        <p className="text-cyan-400 text-sm md:text-base uppercase tracking-widest mb-3">
          Hello, I'm
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Jonathan Stafford
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed">
          Software Engineering student at the University of
          Nebraska–Lincoln. Passionate about building modern, user-friendly
          web experiences.
        </p>

        <div className="flex justify-center gap-5 mb-10">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-cyan-400 text-2xl transition-transform duration-200 hover:-translate-y-1"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-cyan-400 text-2xl transition-transform duration-200 hover:-translate-y-1"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:jstafford@example.com"
            className="text-gray-400 hover:text-cyan-400 text-2xl transition-transform duration-200 hover:-translate-y-1"
          >
            <FaEnvelope />
          </a>
        </div>

        <a
          href="#contact"
          className="inline-block px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}
