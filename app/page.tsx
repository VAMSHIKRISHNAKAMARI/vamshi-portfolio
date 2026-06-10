"use client";

import { useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const projects = [
  {
    title: "Trinethra Feedback Analyzer",
    tag: "AI Assisted Platform",
    desc: "AI-assisted behavioral assessment platform using local LLMs with Ollama and a full-stack workflow for transcript analysis, rubric scoring, KPI mapping, and follow-up generation.",
    tech: ["Node.js", "Express", "JavaScript", "Ollama"],
    link: "https://github.com/VAMSHIKRISHNAKAMARI",
    accent: "from-fuchsia-500 to-violet-500",
  },

  {
    title: "AI Code Analyzer",
    tag: "AI Powered Platform",
    desc: "AI-powered code analysis platform with REST API integration and automated structured feedback for developers.",
    tech: ["TypeScript", "REST APIs", "Groq API"],
    link: "https://github.com/VAMSHIKRISHNAKAMARI",
    accent: "from-cyan-400 to-blue-500",
  },

  {
    title: "LifeFlow Blood Bank",
    tag: "Management System",
    desc: "Database-driven blood bank management system for donor tracking, inventory management, and workflow optimization.",
    tech: ["Python", "SQL", "DBMS"],
    link: "https://github.com/VAMSHIKRISHNAKAMARI",
    accent: "from-pink-500 to-rose-500",
  },
];

const heroSkills = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Java",
  "Python",
  "MongoDB",
  "Tailwind CSS",
];

function IconMenu({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconClose({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconGithub({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.2a9.8 9.8 0 0 0-3.1 19.1c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.1-3.4-1.1-.5-1.2-1.1-1.5-1.1-1.5-.9-.7.1-.7.1-.7 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .8.1-.6.4-1.1.7-1.3-2.2-.2-4.5-1.1-4.5-4.9 0-1.1.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 .1a10.3 10.3 0 0 1 5.4 0c2.1-.4 3-.1 3-.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.8 1.1 2.9 0 3.8-2.3 4.7-4.6 4.9.4.3.8 1 .8 2.1v3.1c0 .3.2.6.7.5A9.8 9.8 0 0 0 12 2.2Z" />
    </svg>
  );
}

function IconLinkedin({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6.94 6.5A1.94 1.94 0 1 1 3.06 6.5a1.94 1.94 0 0 1 3.88 0ZM3.4 8.9h3.1V21H3.4V8.9Zm5.5 0h3v1.65h.04c.42-.8 1.47-1.65 3.03-1.65 3.24 0 3.84 2.13 3.84 4.9V21h-3.1v-5.5c0-1.31-.02-3-1.82-3-1.82 0-2.1 1.42-2.1 2.9V21h-3V8.9Z" />
    </svg>
  );
}

function IconMail({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 6h16v12H4V6Zm0 0 8 7 8-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main
      className={`${poppins.className} min-h-screen overflow-x-hidden bg-[#050816] text-white`}
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-120px] top-[-120px] h-[360px] w-[360px] rounded-full bg-blue-500/20 blur-[120px]" />

        <div className="absolute bottom-[-120px] right-[-120px] h-[360px] w-[360px] rounded-full bg-violet-500/20 blur-[120px]" />
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <h1 className="text-2xl font-bold text-blue-400">
            Vamshi.
          </h1>

          <div className="hidden items-center gap-8 md:flex">

            <a href="#about" className="text-gray-300 hover:text-blue-400">
              About
            </a>

            <a href="#skills" className="text-gray-300 hover:text-blue-400">
              Skills
            </a>

            <a href="#projects" className="text-gray-300 hover:text-blue-400">
              Projects
            </a>

            <a href="#contact" className="text-gray-300 hover:text-blue-400">
              Contact
            </a>

          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
          >
            {menuOpen ? (
              <IconClose className="h-6 w-6" />
            ) : (
              <IconMenu className="h-6 w-6" />
            )}
          </button>

        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-black/90 px-6 py-5 md:hidden">

            <div className="flex flex-col gap-5">

              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>

            </div>

          </div>
        )}

      </nav>

      {/* HERO */}
      <section
        id="home"
        className="flex min-h-screen items-center px-6 pt-28"
      >

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <div>

            <p className="mb-5 text-sm uppercase tracking-[0.4em] text-blue-400">
              Welcome To My Portfolio
            </p>

            <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">

              Kamari{" "}

              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Vamshi Krishna
              </span>

            </h1>

            <h2 className="mt-6 text-2xl font-medium text-gray-300">
              AI & ML Student | Full Stack Developer
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-gray-400">
              I build modern, responsive, scalable web applications
              and AI-powered solutions with strong focus on UI,
              backend systems, APIs, and real-world problem solving.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-5">

              <a
                href="#projects"
                className="rounded-2xl bg-blue-500 px-8 py-4 text-lg font-semibold transition hover:-translate-y-1 hover:bg-blue-600"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                download
                className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-lg font-semibold transition hover:border-blue-500"
              >
                Download Resume
              </a>

            </div>

            {/* SMALL SKILLS */}
            <div className="mt-12 flex flex-wrap gap-3">

              {heroSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

          {/* IMAGE */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 opacity-40 blur-3xl" />

              <div className="rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 p-[5px]">

                <div className="rounded-full bg-[#050816] p-4">

                  <img
                    src="/vamshi.jpeg"
                    alt="Vamshi Krishna"
                    className="
                      h-[330px]
                      w-[330px]
                      rounded-full
                      object-cover
                      object-[50%_18%]
                      sm:h-[390px]
                      sm:w-[390px]
                      md:h-[450px]
                      md:w-[450px]
                    "
                  />

                </div>

              </div>

              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-2xl border border-white/10 bg-[#0b1220]/90 px-6 py-3 backdrop-blur-xl">

                <div className="flex items-center gap-3">

                  <span className="h-3 w-3 rounded-full bg-green-400" />

                  <p className="text-sm text-gray-200">
                    Open To Internships
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-16 text-center">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
              About Me
            </p>

            <h2 className="text-5xl font-bold">
              A Quick Introduction
            </h2>

          </div>

          <div className="grid gap-8 lg:grid-cols-3">

            {[
              {
                title: "Profile",
                text: "B.Tech CSE (AI & ML) student at CMR Engineering College focused on software development and AI systems.",
              },

              {
                title: "What I Do",
                text: "I build frontend interfaces, backend services, APIs, and practical full stack projects.",
              },

              {
                title: "Goal",
                text: "To become a strong software engineer and work on impactful products and AI systems.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-500/40"
              >

                <h3 className="text-3xl font-bold text-blue-400">
                  {card.title}
                </h3>

                <p className="mt-5 text-lg leading-9 text-gray-400">
                  {card.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="px-6 py-24"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-16 text-center">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
              Skills
            </p>

            <h2 className="text-5xl font-bold">
              Technologies I Work With
            </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-3">

            {[
              {
                title: "Frontend",
                items: [
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Tailwind CSS",
                ],
              },

              {
                title: "Backend & AI",
                items: [
                  "Java",
                  "Python",
                  "REST APIs",
                  "Node.js",
                  "AI/ML",
                  "Express.js",
                ],
              },

              {
                title: "Tools & Core",
                items: [
                  "Git",
                  "GitHub",
                  "MongoDB",
                  "SQL",
                  "DBMS",
                  "DSA",
                ],
              },
            ].map((group) => (
              <div
                key={group.title}
                className="
                  rounded-[30px]
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  backdrop-blur-xl
                  transition
                  hover:-translate-y-1
                  hover:border-blue-500/40
                "
              >

                <h3 className="text-3xl font-bold text-blue-400">
                  {group.title}
                </h3>

                <div className="mt-6 flex flex-wrap gap-3">

                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="
                        rounded-xl
                        border
                        border-blue-500/20
                        bg-blue-500/10
                        px-4
                        py-2
                        text-sm
                        text-gray-200
                      "
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="px-6 py-24"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-16 text-center">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
              Featured Projects
            </p>

            <h2 className="text-5xl font-bold">
              My Recent Work
            </h2>

          </div>

          <div className="grid gap-8 lg:grid-cols-3">

            {projects.map((project) => (
              <div
                key={project.title}
                className="flex min-h-[470px] flex-col rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-500/40"
              >

                <div
                  className={`mb-6 h-16 w-16 rounded-2xl bg-gradient-to-r ${project.accent}`}
                />

                <p className="text-sm uppercase tracking-[0.2em] text-blue-400">
                  {project.tag}
                </p>

                <h3 className="mt-4 text-3xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-5 flex-1 text-lg leading-9 text-gray-400">
                  {project.desc}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">

                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-xl border border-white/10 bg-[#0b1220] px-4 py-2 text-sm"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                <a
                  href={project.link}
                  target="_blank"
                  className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 py-4 text-lg font-semibold transition hover:bg-blue-600"
                >
                  <IconGithub className="h-5 w-5" />
                  GitHub
                </a>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="px-6 py-24"
      >

        <div className="mx-auto max-w-7xl rounded-[35px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
                Contact
              </p>

              <h2 className="text-5xl font-bold">
                Let’s Build Something Great
              </h2>

              <p className="mt-5 text-lg text-gray-400">
                Open to internships, freelance work, and collaborations.
              </p>

            </div>

            <div className="flex flex-wrap gap-4">

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=vamshi187krishna@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Vamshi%2C%20I%20visited%20your%20portfolio%20and%20wanted%20to%20connect%20with%20you."
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-blue-500 px-7 py-4 text-lg font-semibold transition hover:bg-blue-600"
              >
                <span className="flex items-center gap-3">
                  <IconMail className="h-5 w-5" />
                  Email Me
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/vamshi-krishna-943b8b31b/"
                target="_blank"
                className="rounded-2xl border border-white/10 px-7 py-4 text-lg font-semibold transition hover:border-blue-500"
              >
                <span className="flex items-center gap-3">
                  <IconLinkedin className="h-5 w-5" />
                  LinkedIn
                </span>
              </a>

              <a
                href="https://github.com/VAMSHIKRISHNAKAMARI"
                target="_blank"
                className="rounded-2xl border border-white/10 px-7 py-4 text-lg font-semibold transition hover:border-blue-500"
              >
                <span className="flex items-center gap-3">
                  <IconGithub className="h-5 w-5" />
                  GitHub
                </span>
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}