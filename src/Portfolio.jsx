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
];

const SKILLS = [
  { name: "React", icon: <FaReact /> },
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
            I build scalable systems with a focus on clean architecture,
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

// ── ABOUT SECTION (NEW 🔥) ───────────────────────────────────────────────────
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
          I focus on <strong>collaboration</strong>, <strong>learning</strong>,
          and building clean, scalable, high-performance digital products.
        </p>

        <div className="about__highlights">
          <span><FaUser /> 18 Years</span>
          <span><FaBriefcase /> 3+ Years Exp</span>
          <span><FaUsers /> Collaboration</span>
          <span><FaBookOpen /> Learning</span>
          <span><FaRocket /> Problem Solving</span>
        </div>
      </div>
    </section>
  );
}

// ── WORK (GSAP SCROLL STACK EFFECT) ──────────────────────────────────────────
function Work({ onSelect }) {
  const sectionRef = useRef();
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;

    gsap.set(cards, { opacity: 0, y: 80, scale: 0.95 });
    gsap.set(cards[0], { opacity: 1, y: 0, scale: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        scrub: true,
        pin: true,
      },
    });

    cards.forEach((card, i) => {
      if (i === 0) return;

      tl.to(cards[i - 1], {
        opacity: 0,
        scale: 0.9,
        y: -50,
      }).to(
        card,
        {
          opacity: 1,
          scale: 1,
          y: 0,
        },
        "<",
      );
    });
  }, []);

  return (
    <section className="work" id="work" ref={sectionRef}>
      <p className="section-label">Selected Work</p>

      <div className="work__stack">
        {PROJECTS.map((project, i) => (
          <div
            key={project.id}
            ref={(el) => (cardsRef.current[i] = el)}
            className="project project--stacked"
            onClick={() => onSelect(project)}
          >
            <div className="project__thumbnail">
              <img src={project.image} alt={project.name} />
            </div>

            <h3 className="project__name">{project.name}</h3>
            <p className="project__stack">{project.lang}</p>
            <p className="project__story">{project.story}</p>
          </div>
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
            transition={{ delay: i * 0.1 }}
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
  return (
    <section id="contact">
      <p className="section-label">Connect</p>

      <div className="contact__links">
        {["Email", "LinkedIn", "GitHub"].map((item) => (
          <motion.a key={item} whileHover={{ x: 6 }} href="#">
            {item} ↗
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
