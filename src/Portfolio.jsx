import { useState } from "react";
import "./index.css";

// ── Data ─────────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    name: "Aether OS",
    year: "2023",
    stack: "TypeScript • React • Rust",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBiXcetrE7w_gGw2IFCDoVIWLDNYSzgLIGWb8QmrqFqEUtaqZJn_yUnUyqkmX04RtDB_jMovHHpvY3NeNthIqOiWJyZasQQDhNu16Rw4ROTXLrdn6gHLloPecO8stNupxhMycvgP0pl_34kRY6UQ9uzuWxVdxngXQMe7dU5Y0MFBgzRx9pvruRQZVYfK8YNPmAMN32EPDfGz-mrlxvB7KgKAvVSbkgVfpeGV-LCir-WKKt2uvPKFD9bfsOFC_0P9VpQTguQIaZydMg",
    alt: "Aether OS project screenshot",
  },
  {
    id: 2,
    name: "Monolith CMS",
    year: "2022",
    stack: "Node.js • PostgreSQL • GraphQL",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCkcbCujUcaEM5EzVPWivTHfVjlnsvJQxBFJOxnihQH1P4aJd4_TsRYihFSIVPRcFlVQ3bQo6VC9sCvzqsoB1-KMAUucjOud0aHmLCKg3w1Sto2N68fsu7uwqXLCH_P9srDeXX5pDG2WxKDKOdlMa3XEleWm9Rw1GF4edxCNHCfvFkpqgGmKJAegK159JTsA0I6_olp-v_rClYi_uK6eFYRO7eeZXtC64ivP8zO_BSJPELW39gfv_Vy9_mTHyMkd2Tn3YnQGjw4Wbs",
    alt: "Monolith CMS project screenshot",
  },
  {
    id: 3,
    name: "Prism Engine",
    year: "2022",
    stack: "WebAssembly • C++ • Three.js",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCgt_b8C5grJgVyGyYuOI7KGYAkQTgb_EGuPvv-5_RRoCAlygGZJAyzvtodDV64Rr3AUdRaSKCQrFWYB_K5dnc5EsUy4ws-hQ9PFxK4Oj90BAjl-qMi_2dqELaktvquxjHtN0Mg0bgELbU-NqroNKaOqw1jkahPfkcUZLm1tB9DEOAa_RL6wWFMI8iqFwHQ9hpBSof3w9webMLfybqRb9C2XVxQXYNE0YZFvr1xK5Vm3jiP3sKuNdTgw6bNw3dRcchhehG2lPFHpU0",
    alt: "Prism Engine project screenshot",
  },
];

const SKILLS = [
  "TypeScript",
  "React / Next.js",
  "Node.js",
  "Rust",
  "PostgreSQL",
  "Docker",
  "AWS",
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
        {/* Text side */}
        <div className="hero__content">
          <h1 className="hero__name">Gideon Chinonso</h1>
          <p className="hero__title">Fullstack Developer</p>
          <p className="hero__bio">
            Building technical architectures with an editorial focus. I
            specialise in crafting lean, high-performance systems that treat
            digital space as a curated gallery of functional artifacts.
          </p>
        </div>

        {/* Portrait */}
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

function Work() {
  return (
    <section className="work" id="work">
      <p className="section-label">Selected Work</p>
      <div className="work__list">
        {PROJECTS.map((project) => (
          <article className="project" key={project.id}>
            <div className="project__thumbnail">
              <img src={project.image} alt={project.alt} />
            </div>
            <div className="project__meta">
              <h3 className="project__name">{project.name}</h3>
              <span className="project__year">{project.year}</span>
            </div>
            <p className="project__stack">{project.stack}</p>
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
          My approach is rooted in the philosophy that software should be as
          durable and well-considered as physical architecture. I avoid the
          noise of fleeting trends to focus on fundamental performance and
          elegant maintainability.
        </p>
        <p>
          Based in a quiet studio, I collaborate with thinkers and makers to
          translate complex requirements into quiet, effective digital tools.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  const links = [
    { label: "Email", href: "mailto:hello@gideon.dev" },
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Read CV", href: "#" },
  ];

  return (
    <section className="contact" id="contact">
      <p className="section-label">Connect</p>
      <nav className="contact__links">
        {links.map(({ label, href }) => (
          <a className="contact__link" href={href} key={label}>
            {label}
          </a>
        ))}
      </nav>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__tagline">Curated Artifacts</p>
        <nav className="footer__nav">
          <a className="footer__nav-link" href="#">
            GitHub
          </a>
          <a className="footer__nav-link" href="#">
            LinkedIn
          </a>
          <a className="footer__nav-link" href="#">
            Source
          </a>
        </nav>
        <p className="footer__copy">
          © {new Date().getFullYear()} Gideon Chinonso
        </p>
      </div>
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
            className={`bottom-nav__item${active === id ? " bottom-nav__item--active" : ""}`}
            onClick={() => setActive(id)}
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

// ── Root component ────────────────────────────────────────────────────────────

export default function Portfolio() {
  return (
    <>
      <Header />

      <main className="main container">
        <Hero />
        <Work />
        <Skills />
        <About />
        <Contact />
      </main>

      <Footer />
      <BottomNav />
    </>
  );
}
