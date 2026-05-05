import { useState } from "react";
import "./index.css";
import ProjectSheet from "./components/ProjectSheet"; // ✅ import your modal

// ── Data ─────────────────────────────────────────────────────────────────────
// const  = [
//   {

//     name: "Aether OS",
//     year: "2023",
//     stack: "TypeScript • React • Rust",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuBiXcetrE7w_gGw2IFCDoVIWLDNYSzgLIGWb8QmrqFqEUtaqZJn_yUnUyqkmX04RtDB_jMovHHpvY3NeNthIqOiWJyZasQQDhNu16Rw4ROTXLrdn6gHLloPecO8stNupxhMycvgP0pl_34kRY6UQ9uzuWxVdxngXQMe7dU5Y0MFBgzRx9pvruRQZVYfK8YNPmAMN32EPDfGz-mrlxvB7KgKAvVSbkgVfpeGV-LCir-WKKt2uvPKFD9bfsOFC_0P9VpQTguQIaZydMg",
//     alt: "Aether OS project screenshot",
//   },
//   {

//     name: "Monolith CMS",
//     year: "2022",
//     stack: "Node.js • PostgreSQL • GraphQL",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuCkcbCujUcaEM5EzVPWivTHfVjlnsvJQxBFJOxnihQH1P4aJd4_TsRYihFSIVPRcFlVQ3bQo6VC9sCvzqsoB1-KMAUucjOud0aHmLCKg3w1Sto2N68fsu7uwqXLCH_P9srDeXX5pDG2WxKDKOdlMa3XEleWm9Rw1GF4edxCNHCfvFkpqgGmKJAegK159JTsA0I6_olp-v_rClYi_uK6eFYRO7eeZXtC64ivP8zO_BSJPELW39gfv_Vy9_mTHyMkd2Tn3YnQGjw4Wbs",
//     alt: "Monolith CMS project screenshot",
//   },
//   {

//     name: "Prism Engine",
//     year: "2022",
//     stack: "WebAssembly • C++ • Three.js",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuCgt_b8C5grJgVyGyYuOI7KGYAkQTgb_EGuPvv-5_RRoCAlygGZJAyzvtodDV64Rr3AUdRaSKCQrFWYB_K5dnc5EsUy4ws-hQ9PFxK4Oj90BAjl-qMi_2dqELaktvquxjHtN0Mg0bgELbU-NqroNKaOqw1jkahPfkcUZLm1tB9DEOAa_RL6wWFMI8iqFwHQ9hpBSof3w9webMLfybqRb9C2XVxQXYNE0YZFvr1xK5Vm3jiP3sKuNdTgw6bNw3dRcchhehG2lPFHpU0",
//     alt: "Prism Engine project screenshot",
//   },
// ];
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
      "This project started with a need for a fast and clean ecommerce experience. The goal was to build something minimal but conversion-focused, with smooth navigation and a modern feel.",
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
      "The client wanted something warm and expressive for showcasing handmade products. I focused on soft visuals, clean layout, and subtle motion to bring the brand to life.",
  },
  {
    id: 3,
    name: "Saltusco",
    desc: "A Fullstack Online Skincare store",
    lang: "React.js + Supabase + TailwindCSS + Framer",
    link: "https://mizaram.vercel.app/",
    image: "/pro4.png",
    year: 2025,
    story:
      "This was about balancing aesthetics with performance. The challenge was creating a premium feel while keeping the experience fast and accessible.",
  },
];
const SKILLS = [
  "TypeScript",
  "JavaScript",
  "React",
  "Node.js",
  "Postman",
  "TailwindCSS",
  "Framer Motion",
  "Supabase",
  "Web3",
];

const NAV_ITEMS = [
  { label: "Work", href: "#work", icon: "folder_special" },
  { label: "Skills", href: "#skills", icon: "terminal" },
  { label: "About", href: "#about", icon: "fingerprint" },
  { label: "Contact", href: "#contact", icon: "chat_bubble" },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <span className="header__logo">Portfolio</span>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero__layout">
        <div className="hero__content">
          <h1 className="hero__name">Gideon Chinonso</h1>
          <p className="hero__title">Fullstack Developer</p>
          <p className="hero__bio">
            I build and collaborate on technical architectures with an editorial
            focus—crafting systems that are both functional and considered
          </p>
        </div>

        <div className="hero__image-wrap">
          <img
            className="hero__image"
            src="/heroimg.png"
            alt="Gideon Chinonso"
          />
        </div>
      </div>
    </section>
  );
}

/* ✅ ONLY CHANGE HERE: added onSelect */
function Work({ onSelect }) {
  return (
    <section className="work" id="work">
      <p className="section-label">Selected Work</p>
      <div className="work__list">
        {PROJECTS.map((project) => (
          <article
            className="project"
            key={project.id}
            onClick={() => onSelect(project)} // ✅ trigger modal
          >
            <div className="project__thumbnail">
              <img src={project.image} alt={project.alt} />
            </div>
            <div className="project__meta">
              <h3 className="project__name">{project.name}</h3>
              <span className="project__year">{project.year}</span>
            </div>
            <p className="project__stack">{project.lang}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="skills" id="skills">
      <p className="section-label">Technical Stack</p>
      <div className="skills__list">
        {SKILLS.map((skill) => (
          <span className="skills__item" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="about">
      <p className="section-label">Inquiry</p>
      <div className="about__body">
        <p>
          I’m driven by collaboration, building meaningful things, and constant
          learning approaching software with the same care and intention as
          well-crafted architecture
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="mb-stack-xl" id="contact">
      <h2 className="font-label-sm text-label-sm uppercase tracking-widest mb-stack-md opacity-50">
        Connect
      </h2>

      {/* Intro line */}
      <p className="font-serif text-lg mb-6 max-w-md text-text-secondary">
        Open to thoughtful collaboration, interesting ideas, and meaningful
        conversations. If something resonates, feel free to reach out.
      </p>

      {/* Links */}
      <div className="flex flex-col gap-5">
        <a
          className="group flex items-center justify-between font-headline-md text-headline-md"
          href="mailto:hello@julianrivers.com"
        >
          <span className="reveal-underline">Email</span>
          <span className="opacity-40 group-hover:opacity-100 transition">
            ↗
          </span>
        </a>

        <a
          className="group flex items-center justify-between font-headline-md text-headline-md"
          href="#"
        >
          <span className="reveal-underline">LinkedIn</span>
          <span className="opacity-40 group-hover:opacity-100 transition">
            ↗
          </span>
        </a>

        <a
          className="group flex items-center justify-between font-headline-md text-headline-md"
          href="#"
        >
          <span className="reveal-underline">GitHub</span>
          <span className="opacity-40 group-hover:opacity-100 transition">
            ↗
          </span>
        </a>

        <a
          className="group flex items-center justify-between font-headline-md text-headline-md"
          href="#"
        >
          <span className="reveal-underline">Read CV</span>
          <span className="opacity-40 group-hover:opacity-100 transition">
            ↗
          </span>
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Gideon Chinonso</p>
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
            className={`bottom-nav__item${
              active === id ? " bottom-nav__item--active" : ""
            }`}
            onClick={() => setActive(id)}
          >
            {/* ✅ ICON */}
            <span className="bottom-nav__icon material-symbols-outlined">
              {icon}
            </span>

            {/* ✅ LABEL */}
            <span className="bottom-nav__label">{label}</span>
          </a>
        );
      })}
    </nav>
  );
}

// ── Root ──────────────────────────────────────────────────────────────────────

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null); // ✅ state added

  return (
    <>
      <Header />

      <main className="main container">
        <Hero />
        <Work onSelect={setSelectedProject} />
        <Skills />
        <About />
        <Contact />
      </main>

      <Footer />
      <BottomNav />

      {/* ✅ mount your ProjectSheet */}
      <div className="">
        {" "}
        <ProjectSheet
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </>
  );
}
