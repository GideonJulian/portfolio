import { useState, useEffect, useRef } from "react";
import "./index.css";
import ProjectSheet from "./components/ProjectSheet";

import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaUser,
  FaBriefcase,
  FaUsers,
  FaBookOpen,
  FaRocket,
} from "react-icons/fa";

import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";

import {
  SiTailwindcss,
  SiSupabase,
  SiMongodb,
  SiPostman,
  SiGreensock,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

// ── Data ─────────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    name: "Anon",
    desc: "An online Ecommerce store created with",
    lang: "React.js + Node.js + TailwindCSS",
    link: "https://anon-ecommerce1.netlify.app/",
    image: "/pro1.jpg",
    year: 2024,
    story:
      "Built for a fast, clean ecommerce experience focused on smooth UX and conversions.",
  },
  {
    id: 2,
    name: "Artful Nest",
    desc: "Beautiful website for handmade products",
    lang: "React.js + Node.js + TailwindCSS",
    link: "https://artful-nest.netlify.app/",
    image: "/pro2.jpg",
    year: 2026,
    story:
      "Designed to feel warm and expressive, helping handmade products feel more personal and premium.",
  },
  {
    id: 3,
    name: "koyo foods",
    desc: "Online food restaurant with a modern feel",
    lang: "React.js + Node.js + TailwindCSS + Framer Motion",
    link: "https://koyo-foods.netlify.app/",
    image: "/pro3.jpg",
    year: 2025,
    story:
      "A modern handcrafted platform with smooth animations and premium UI feel.",
  },
];

const SKILLS = [
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "GSAP", icon: <SiGreensock /> },
  { name: "Figma", icon: <FaFigma /> },
  { name: "React Native", icon: <FaReact /> },
  { name: "Supabase", icon: <SiSupabase /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Postman", icon: <SiPostman /> },
];

// ── Header ───────────────────────────────────────────────────────────────────
function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <img src="/favicon.png" alt="Logo" className="w-8 rounded-full" />
        <span className="header__logo">Portfolio</span>
      </div>
    </header>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero__layout">
        <div className="hero__content">
          <h1 className="hero__name">Gideon Chinonso</h1>

          <p className="hero__title">
            Fullstack Developer — Web & App Experiences
          </p>

          <p className="hero__bio">
            I build scalable Web & App systems with a focus on clean architecture,
            performance, and thoughtful design.
          </p>
        </div>

        <motion.div
          className="hero__image-wrap"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <img src="/heroimg.png" alt="Gideon" className="hero__image" />
        </motion.div>
      </div>
    </motion.section>
  );
}

// ── ABOUT SECTION ───────────────────────────────────────────────────────────
function About() {
  return (
    <section className="about" id="about">
      <p className="section-label">About Me</p>

      <div className="about__card">
        <p className="about__text">
          I’m an <strong>18-year-old Fullstack Developer</strong> with{" "}
          <strong>3+ years</strong> of experience building modern web & app systems.
        </p>

        <p className="about__text">
          I started coding at the <strong>age of 15</strong> and I’m proudly{" "}
          <strong>self-taught</strong>, learning web and app development through
          online resources like YouTube and FreeCodeCamp.
        </p>

        <p className="about__text">
          I’ve gained hands-on experience through the{" "}
          <strong>HNG Internship</strong> and other remote roles, collaborating with other developers to
          build real-world web and mobile products, alongside developing my own
          solo projects.
        </p>

        <p className="about__text">
          I also enjoy <strong>posting tech content</strong> and sharing my journey
          on platforms like TikTok —{" "}
          <a
            href="https://www.tiktok.com/@webcoder7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>@webcoder7</strong>
          </a>.
        </p>

        <div className="about__highlights">
          <span>
            <FaUser /> 18 Years
          </span>
          <span>
            <FaBriefcase /> 3+ Years Exp
          </span>
          <span>
            <FaUsers /> Collaboration
          </span>
          <span>
            <FaBookOpen /> Self-Taught
          </span>
          <span>
            <FaRocket /> Building & Sharing
          </span>
        </div>
      </div>
    </section>
  );
}

// ── ⭐ UPDATED WORK (SCROLL POP OUT ANIMATION) ───────────────────────────────
const cardVariant = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.9,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

function Work({ onSelect }) {
  return (
    <section className="work" id="work">
      <p className="section-label">Selected Work</p>

      <div className="work__stack">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            className="project project--stacked"
            custom={i}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              scale: 1.04,
              y: -10,
              transition: { duration: 0.2 },
            }}
            onClick={() => onSelect(project)}
          >
            <div className="project__thumbnail">
              <img src={project.image} alt={project.name} />
            </div>

            <div className="project__meta">
              <h3 className="project__name">{project.name}</h3>
              <span className="project__year">{project.year}</span>
            </div>

            <p className="project__stack">{project.lang}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ── SKILLS ───────────────────────────────────────────────────────────────────
function Skills() {
  return (
    <section className="skills" id="skills">
      <p className="section-label">Technical Stack</p>

      <div className="skills__list">
        {SKILLS.map((skill, i) => (
          <motion.div
            key={skill.name}
            className="skills__item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <span className="skills__icon">{skill.icon}</span>
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ── CONTACT ──────────────────────────────────────────────────────────────────
function Contact() {
  const links = [
    {
      name: "Email",
      href: "mailto:gideonchinonso77@gmail.com",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/gideon-chinonso",
    },
    {
      name: "GitHub",
      href: "https://github.com/GideonJulian/",
    },
  ];

  return (
    <section id="contact">
      <p className="section-label">Connect</p>

      <div className="contact__links">
        {links.map((item) => (
          <motion.a
            key={item.name}
            whileHover={{ x: 6 }}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.name} ↗
          </motion.a>
        ))}
      </div>
    </section>
  );
}
// ── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Gideon Chinonso</p>
    </footer>
  );
}

// ── BOTTOM NAV ───────────────────────────────────────────────────────────────
function BottomNav() {
  const [active, setActive] = useState("work");

  const items = [
    { label: "Work", href: "#work", icon: "work" },
    { label: "Skills", href: "#skills", icon: "code" },
    { label: "About", href: "#about", icon: "person" },
    { label: "Contact", href: "#contact", icon: "mail" },
  ];

  return (
    <nav className="bottom-nav">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          onClick={() => setActive(item.label.toLowerCase())}
          className={`bottom-nav__item ${
            active === item.label.toLowerCase()
              ? "bottom-nav__item--active"
              : ""
          }`}
        >
          <span className="material-symbols-outlined">{item.icon}</span>
          <span>{item.label}</span>
        </a>
      ))}
    </nav>
  );
}

// ── ROOT ─────────────────────────────────────────────────────────────────────
export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <Header />

      <main className="main container">
        <Hero />
        <Work onSelect={setSelectedProject} />
        <About />
        <Skills />
        <Contact />
      </main>

      <Footer />
      <BottomNav />

      <motion.div
        initial={false}
        animate={{ opacity: selectedProject ? 1 : 0 }}
      >
        <ProjectSheet
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </motion.div>
    </>
  );
}
