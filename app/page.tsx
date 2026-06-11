"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import emailjs from "@emailjs/browser";
import {
  Download,
  ExternalLink,
  Mail,
  Send,
  Code2,
  Sparkles,
  Rocket,
  BadgeCheck,
  LaptopMinimal,
  MapPin,
  Briefcase,
  GraduationCap,
  GitBranch,
} from "lucide-react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  link: string;
  accent: string;
  chip: string;
  stats: string[];
};

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Home() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<{
    type: "idle" | "sending" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  const projects: Project[] = [
    {
      title: "Trinethra Feedback Analyzer",
      description:
        "AI-assisted behavioral assessment platform built using local LLM workflows for transcript analysis, KPI mapping, rubric scoring, and structured JSON generation.",
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Express.js",
        "Ollama",
        "Llama 3.2",
      ],
      link: "#",
      accent: "from-cyan-500/25 via-sky-500/15 to-indigo-500/20",
      chip: "AI + NLP",
      stats: ["Local LLM", "Structured JSON", "Fast Analysis"],
    },
    {
      title: "AI Code Analyzer",
      description:
        "AI-powered code analysis system that automates structured feedback generation, backend workflows, and API-driven response handling.",
      tech: ["Python", "REST APIs", "JSON", "Git", "GitHub"],
      link: "#",
      accent: "from-fuchsia-500/25 via-violet-500/15 to-cyan-500/20",
      chip: "Code Intelligence",
      stats: ["API Driven", "Automation", "Scalable"],
    },
    {
      title: "LifeFlow Blood Bank Management System",
      description:
        "Database-driven management system for donor records, inventory tracking, and blood request workflows with reliable data handling.",
      tech: ["Python", "DBMS", "Git", "GitHub"],
      link: "#",
      accent: "from-emerald-500/25 via-teal-500/15 to-cyan-500/20",
      chip: "Database System",
      stats: ["Inventory", "Records", "Tracking"],
    },
  ];

  const skillGroups = [
    {
      title: "Languages",
      icon: Code2,
      items: ["Python", "Java", "JavaScript", "TypeScript", "C", "C++"],
    },
    {
      title: "Web & Backend",
      icon: Rocket,
      items: [
        "HTML",
        "CSS",
        "Node.js",
        "Express.js",
        "REST APIs",
        "JSON",
        "Git",
        "GitHub",
      ],
    },
    {
      title: "Data & AI",
      icon: Sparkles,
      items: [
        "Machine Learning",
        "NLP",
        "Data Analysis",
        "Prompt Engineering",
        "Ollama",
        "Llama 3.2",
      ],
    },
    {
      title: "Core",
      icon: LaptopMinimal,
      items: ["DSA", "OOP", "DBMS", "Problem Solving", "Kafka", "H2"],
    },
  ];

  const certifications = [
    "IIT Bombay: Python, Java, HTML/CSS, Git & GitHub",
    "Google Cloud Generative AI Leader Track",
    "Deloitte Data Analytics Simulation",
    "JPMorgan Software Engineering Simulation",
  ];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus({
      type: "sending",
      message: "Sending message...",
    });

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message: "EmailJS is not configured.",
      });
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        publicKey
      );

      setStatus({
        type: "success",
        message: "Message sent successfully.",
      });

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setStatus({
        type: "error",
        message: "Failed to send message.",
      });
    }
  };

  return (
    <main className="relative overflow-hidden bg-[#050816] text-white">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_24%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.14),transparent_25%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.12),transparent_22%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />

      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#about" className="text-2xl font-bold tracking-wide">
            K. Vamshi Krishna
          </a>

          <div className="hidden gap-8 md:flex">
            {["About", "Skills", "Projects", "Certifications", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-white/80 transition hover:text-cyan-400"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </nav>

      <section className="flex min-h-screen items-center px-6 pt-24">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 backdrop-blur-xl">
              <Sparkles size={15} />
              B.Tech CSE (AI & ML) Student
            </div>

            <p className="mb-4 text-lg text-cyan-400">Hello, I am</p>

            <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-7xl">
              K. Vamshi
              <br />
              Krishna
            </h1>

            <div className="mb-6 text-2xl font-semibold text-gray-300 md:text-4xl">
              <TypeAnimation
                sequence={[
                  "Python Developer",
                  1800,
                  "Java Developer",
                  1800,
                  "Frontend Developer",
                  1800,
                  "Backend Developer",
                  1800,
                  "AI / ML Enthusiast",
                  1800,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="max-w-xl text-lg leading-8 text-gray-400">
              Computer Science (AI & ML) student focused on Python, Java,
              JavaScript, TypeScript, Node.js, Express.js, REST APIs, DBMS,
              AI-assisted application development, and scalable backend systems.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:scale-105"
              >
                <Download size={18} />
                Resume
              </a>

              <a
                href="https://github.com/VAMSHIKRISHNAKAMARI"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-xl transition hover:border-cyan-400/40"
              >
                <GitBranch size={18} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/vamshi-krishna-943b8b31b/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-xl transition hover:border-cyan-400/40"
              >
                <span className="flex h-[18px] w-[18px] items-center justify-center rounded-[4px] border border-white/70 text-[11px] font-black leading-none text-white">
                  in
                </span>
                LinkedIn
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-xl">
                <Code2 className="mr-2 inline" size={15} />
                Clean Code
              </div>

              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-xl">
                <Rocket className="mr-2 inline" size={15} />
                Fast Performance
              </div>

              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-xl">
                <LaptopMinimal className="mr-2 inline" size={15} />
                Responsive Design
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 animate-pulse rounded-[2rem] bg-cyan-400/20 blur-3xl" />
              <motion.img
                src="/vamshi.jpeg"
                alt="Profile"
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 h-[430px] w-[320px] rounded-[2rem] border-4 border-cyan-400 object-cover object-[50%_16%] shadow-2xl md:h-[520px] md:w-[380px]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <BadgeCheck className="text-cyan-400" size={22} />
            <h2 className="text-4xl font-bold">About Me</h2>
          </div>

          <p className="max-w-4xl text-lg leading-9 text-gray-300">
            B.Tech Computer Science and Engineering (AI & ML) student with
            hands-on experience in Python, Java, JavaScript, TypeScript,
            Node.js, Express.js, REST APIs, DBMS, AI-assisted application
            development, and data-driven workflows.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <Briefcase className="mb-3 text-cyan-400" size={28} />
              <h3 className="mb-2 text-xl font-semibold">Projects</h3>
              <p className="text-gray-400">
                Trinethra, AI Code Analyzer, and LifeFlow.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <GraduationCap className="mb-3 text-cyan-400" size={28} />
              <h3 className="mb-2 text-xl font-semibold">Education</h3>
              <p className="text-gray-400">
                CMR Engineering College, expected 2028.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <MapPin className="mb-3 text-cyan-400" size={28} />
              <h3 className="mb-2 text-xl font-semibold">Focus</h3>
              <p className="text-gray-400">
                AI, backend systems, and modern frontend UI.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="mb-14 text-center text-4xl font-bold">Skills</h2>

        <div className="grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <div className="mb-6 flex items-center gap-3">
                  <Icon className="text-cyan-400" size={22} />
                  <h3 className="text-2xl font-semibold">{group.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/85"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="mb-14 text-center text-4xl font-bold">Projects</h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div
                className={`relative h-72 overflow-hidden bg-gradient-to-br ${project.accent}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_26%)]" />

                <div className="absolute inset-x-0 top-0 flex items-center justify-between border-b border-white/10 bg-black/15 px-4 py-3 backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  </div>

                  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">
                    Featured
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mb-4 inline-flex rounded-full border border-white/15 bg-black/25 px-3 py-1 text-xs font-medium text-cyan-100 backdrop-blur-md">
                    {project.chip}
                  </div>

                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.32em] text-white/55">
                        Project 0{index + 1}
                      </p>
                      <h3 className="mt-2 max-w-[14rem] text-2xl font-bold leading-tight">
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-2xl font-black text-white/90 backdrop-blur-xl">
                      {index + 1}
                    </div>
                  </div>

                  <div className="mt-5 grid gap-2">
                    <div className="h-3 w-full rounded-full bg-white/15" />
                    <div className="h-3 w-5/6 rounded-full bg-white/15" />
                    <div className="h-3 w-2/3 rounded-full bg-white/15" />
                  </div>
                </div>
              </div>

              <div className="p-7">
                <p className="mb-5 text-gray-400">{project.description}</p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-cyan-500/15 px-4 py-1 text-sm text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.stats.map((stat) => (
                    <span
                      key={stat}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                    >
                      {stat}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-cyan-400 transition hover:text-cyan-300"
                >
                  View Project
                  <ExternalLink size={18} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="certifications" className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="mb-14 text-center text-4xl font-bold">
          Certifications
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="flex items-start gap-3">
                <BadgeCheck className="mt-1 text-cyan-400" size={20} />
                <h3 className="text-2xl font-semibold">{cert}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
        >
          <div className="mb-10 flex items-center justify-center gap-3">
            <Mail className="text-cyan-400" size={22} />
            <h2 className="text-center text-4xl font-bold">Contact Me</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Your Name"
                className="rounded-xl border border-white/10 bg-black/30 px-5 py-4 outline-none placeholder:text-gray-500 focus:border-cyan-400"
              />

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="Your Email"
                className="rounded-xl border border-white/10 bg-black/30 px-5 py-4 outline-none placeholder:text-gray-500 focus:border-cyan-400"
              />
            </div>

            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              type="text"
              placeholder="Subject"
              className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 outline-none placeholder:text-gray-500 focus:border-cyan-400"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={6}
              placeholder="Your Message"
              className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 outline-none placeholder:text-gray-500 focus:border-cyan-400"
            />

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={status.type === "sending"}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-8 py-4 font-semibold text-black transition hover:scale-105 disabled:opacity-70"
              >
                <Send size={18} />
                {status.type === "sending" ? "Sending..." : "Send Message"}
              </button>

              <p
                className={`text-sm ${
                  status.type === "success"
                    ? "text-emerald-400"
                    : status.type === "error"
                    ? "text-red-400"
                    : "text-white/60"
                }`}
              >
                {status.message || "Premium contact form with EmailJS support."}
              </p>
            </div>
          </form>
        </motion.div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-gray-400">
        © 2026 K. Vamshi Krishna. All rights reserved.
      </footer>
    </main>
  );
}