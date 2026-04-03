import { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const contactInfo = [
  {
    icon: <FaMapMarkerAlt className="text-cyan-400 text-xl" />,
    label: 'Location',
    value: 'Lincoln, NE',
  },
  {
    icon: <FaEnvelope className="text-cyan-400 text-xl" />,
    label: 'Email',
    value: 'your.email@example.com',
  },
  {
    icon: <FaPhoneAlt className="text-cyan-400 text-xl" />,
    label: 'Phone',
    value: '(555) 000-0000',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In Touch
        </h2>
        <div className="w-16 h-1 bg-cyan-500 mx-auto mb-10 rounded-full" />

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info */}
          <div>
            <p className="text-gray-400 leading-relaxed mb-8">
              I'm always open to new opportunities and connections. Feel free to
              reach out if you'd like to chat about web development, internships,
              or anything tech-related!
            </p>

            <div className="space-y-5">
              {contactInfo.map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">
                      {c.label}
                    </p>
                    <p className="text-gray-300 text-sm">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-gray-200 placeholder-gray-600
                         focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-gray-200 placeholder-gray-600
                         focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-gray-200 placeholder-gray-600
                         focus:outline-none focus:border-cyan-500 transition-colors resize-none"
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-semibold
                         transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Send Message
            </button>
            {submitted && (
              <p className="text-cyan-400 text-sm mt-2">
                Thanks for reaching out! I'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
