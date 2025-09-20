"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaReact, FaNodeJs, FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiFramer, SiDocker } from "react-icons/si";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.1 * i, duration: 0.5, ease: "easeOut" } }),
};

const card = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  hover: { y: -6, transition: { type: "spring", stiffness: 260, damping: 18 } },
};

export default function Page() {
  const [loading, setLoading] = useState(false);

  const skills = [
    { name: "React", icon: <FaReact className="text-sky-400" /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Docker", icon: <SiDocker className="text-sky-500" /> },
    { name: "GitHub", icon: <FaGithub /> },
  ];

  const projects = [
    {
      title: "Portfolio Revamp",
      desc: "Next.js 14 app dir, motion-first animations, and blazing-fast UI.",
      href: "https://github.com/Clementvsc/clement-portfolio",
      tags: ["Next.js", "Tailwind", "Framer Motion"],
    },
    {
      title: "Design System",
      desc: "Composable UI primitives with tokens and theming.",
      href: "#",
      tags: ["TypeScript", "Storybook"],
    },
    {
      title: "API Toolkit",
      desc: "Robust API layer with caching and DX-first utilities.",
      href: "#",
      tags: ["Node.js", "tRPC"],
    },
  ];

  const testimonials = [
    {
      quote:
        "Clement delivers thoughtful architecture and flawless UI polish. A pleasure to collaborate with.",
      author: "Jane Doe",
      role: "Product Lead, Acme Co.",
    },
    {
      quote: "Relentless focus on UX and performance. Our app feels brand new.",
      author: "John Smith",
      role: "CTO, Startify",
    },
  ];

  const submitContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 1000));
      alert("Thanks! I'll get back to you soon.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <section className="relative mx-auto max-w-6xl px-4 pt-16 pb-8 md:pt-24">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">Crafting interactive, performant web experiences</h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">I build modern apps with Next.js, TypeScript, Tailwind, and Framer Motion.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-md transition hover:bg-white/10" href="mailto:hello@yourdomain.dev"><FaEnvelope /> Contact Me</a>
            <a className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-md transition hover:bg-white/10" href="https://www.linkedin.com/in/" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
            <a className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-md transition hover:bg-white/10" href="https://github.com/Clementvsc" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
          </div>
        </motion.div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <motion.h2 className="text-2xl font-semibold md:text-3xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>Skills</motion.h2>
        <motion.p className="mt-2 max-w-2xl text-slate-300" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} custom={1} variants={fadeUp}>A modern stack focused on developer velocity, accessibility, and motion.</motion.p>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((s, i) => (
            <motion.div key={s.name} className="group rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition hover:bg-white/10" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} custom={i} variants={fadeUp}>
              <div className="flex items-center gap-3">
                <span className="text-2xl drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">{s.icon}</span>
                <span className="text-sm font-medium">{s.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <motion.h2 className="text-2xl font-semibold md:text-3xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>Projects</motion.h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.a key={p.title} href={p.href} target={p.href.startsWith("http") ? "_blank" : undefined} rel={p.href.startsWith("http") ? "noreferrer" : undefined} className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-md" variants={card} initial="hidden" whileInView="visible" whileHover="hover" viewport={{ once: true, margin: "-60px" }}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
                </div>
                <FaExternalLinkAlt className="mt-1 opacity-60 transition group-hover:opacity-100" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-slate-300">{t}</span>
                ))}
              </div>
              <motion.div aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition group-hover:opacity-100" initial={{ background: "radial-gradient(600px circle at 0 0, rgba(255,255,255,0.12), transparent 40%)" }} />
            </motion.a>
          ))}
        </div>
      </section>

      <section id="testimonials" className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <motion.h2 className="text-2xl font-semibold md:text-3xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>Testimonials</motion.h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.figure key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} custom={i} variants={fadeUp}>
              <blockquote className="text-slate-200">“{t.quote}”</blockquote>
              <figcaption className="mt-3 text-sm text-slate-400">— {t.author}, {t.role}</figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      <section id="blog" className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <motion.h2 className="text-2xl font-semibold md:text-3xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>Blog</motion.h2>
        <motion.p className="mt-2 max-w-2xl text-slate-300" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} custom={1} variants={fadeUp}>Coming soon: long-form notes on architecture, motion, and DX.</motion.p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-400">Draft post #{i}</div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-8 md:py-16">
        <motion.h2 className="text-2xl font-semibold md:text-3xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>Contact</motion.h2>
        <div className="mt-6 grid items-start gap-6 md:grid-cols-2">
          <motion.form onSubmit={submitContact} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm">Name</label>
                <input id="name" name="name" required className="rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 outline-none ring-0 focus:border-white/20" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm">Email</label>
                <input id="email" name="email" type="email" required className="rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 outline-none ring-0 focus:border-white/20" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm">Message</label>
                <textarea id="message" name="message" rows={4} required className="resize-y rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 outline-none ring-0 focus:border-white/20" />
              </div>
              <button type="submit" disabled={loading} className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-70">{loading ? "Sending..." : "Send message"}</button>
            </div>
          </motion.form>

          <motion.div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} custom={1} variants={fadeUp}>
            <h3 className="text-lg font-semibold">Get in touch</h3>
            <p className="mt-2 text-sm text-slate-300">Prefer async? Reach me via the social links below.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-md transition hover:bg-white/10" href="mailto:hello@yourdomain.dev"><FaEnvelope /> Email</a>
              <a className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-md transition hover:bg-white/10" href="https://www.linkedin.com/in/" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
              <a className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-md transition hover:bg-white/10" href="https://github.com/Clementvsc" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
