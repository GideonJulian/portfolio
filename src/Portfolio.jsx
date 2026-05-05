import { useState, useEffect, useRef } from "react";
import "./index.css";
import ProjectSheet from "./components/ProjectSheet";
import { FaReact, FaNodeJs, FaFigma, FaTools, FaGitAlt } from "react-icons/fa";

import {
  SiTailwindcss,
  SiSupabase,
  SiMongodb,
  SiPostman,
  SiGreensock,
} from "react-icons/si";
import { motion } from "framer-motion";
import gsap from "gsap";

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
      "This project started with a need for a fast and clean ecommerce experience.",
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
      "The client wanted something warm and expressive for showcasing handmade products.",
  },
];
const NAV_ITEMS = [
  { label: "Work", href: "#work", icon: "folder_special" },
  { label: "Skills", href: "#skills", icon: "terminal" },
  { label: "About", href: "#about", icon: "fingerprint" },
  { label: "Contact", href: "#contact", icon: "chat_bubble" },
];
const SKILLS = [
  { name: "React", icon: <FaReact /> },
  { name: "React Native", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "GSAP", icon: <SiGreensock /> },
  { name: "Figma", icon: <FaFigma /> },
  { name: "Supabase", icon: <SiSupabase /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Postman", icon: <SiPostman /> },
];
// ── Header ───────────────────────────────────────────────────────────────────
function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <span className="header__logo">Portfolio</span>
      </div>
    </header>
  );
}

// ── Hero (fade + slide) ──────────────────────────────────────────────────────
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
  Fullstack Developer building web & app experiences
</p>
          <p className="hero__bio">
            I build and collaborate on technical architectures with an editorial
            focus—crafting systems that are both functional and considered
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

// ── Work (GSAP scroll + hover animation) ─────────────────────────────────────
function Work({ onSelect }) {
  const ref = useRef();

  useEffect(() => {
    gsap.fromTo(
      ref.current.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.6,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      },
    );
  }, []);

  return (
    <section className="work" id="work">
      <p className="section-label">Selected Work</p>

      <div className="work__list" ref={ref}>
        {PROJECTS.map((project) => (
          <motion.article
            key={project.id}
            className="project"
            onClick={() => onSelect(project)}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="project__thumbnail">
              <motion.img
                src={project.image}
                alt={project.name}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            <div className="project__meta">
              <h3 className="project__name">{project.name}</h3>
              <span className="project__year">{project.year}</span>
            </div>

            <p className="project__stack">{project.lang}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

// ── Skills (fade in stagger) ─────────────────────────────────────────────────
function Skills() {
  return (
    <section className="skills" id="skills">
      <p className="section-label">Technical Stack</p>

      <div className="skills__list">
        {SKILLS.map((skill, i) => (
          <motion.span
            key={skill.name}
            className="skills__item flex items-center gap-2 text-lg cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <span className="text-xl">{skill.icon}</span>
            <span>{skill.name}</span>
          </motion.span>
        ))}
      </div>
    </section>
  );
}
// ── Contact (subtle hover polish) ────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact">
      <p className="section-label">Connect</p>

      <div className="flex flex-col gap-4">
        {["Email", "LinkedIn", "GitHub"].map((item) => (
          <motion.a
            key={item}
            href="#"
            whileHover={{ x: 6 }}
            className="text-xl"
          >
            {item} ↗
          </motion.a>
        ))}
      </div>
    </section>
  );
}
function Footer() {
  return (
    <footer className="footer">
      {" "}
      <p>© {new Date().getFullYear()} Gideon Chinonso</p>{" "}
    </footer>
  );
}
function BottomNav() {
  const [active, setActive] = useState("work");

  return (
    <nav className="bottom-nav">
      {NAV_ITEMS.map(({ label, href, icon }) => {
        const id = label.toLowerCase();

        return (
          <a
            key={id}
            href={href}
            onClick={() => setActive(id)}
            className={`bottom-nav__item${
              active === id ? " bottom-nav__item--active" : ""
            }`}
          >
            <span className="bottom-nav__icon material-symbols-outlined">
              {icon}
            </span>

            <span className="bottom-nav__label">{label}</span>
          </a>
        );
      })}
    </nav>
  );
}

// ── Root ─────────────────────────────────────────────────────────────────────
export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <Header />
      <main className="main container">
        <Hero />
        <Work onSelect={setSelectedProject} />
        <Skills />
        <Contact />
      </main>
      <Footer /> <BottomNav />
      {/* Modal with animation */}
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
