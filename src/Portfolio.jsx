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
  },
  {
    id: 2,
    name: "Saltuco",
    desc: "Beautiful website for making handmade products created with",
    lang: "React.js + Node.js + TailwindCSS + Framer-motion",
    link: "https://saltusco.com",
    image: "/pro2.jpg",
    year: 2026,
  },
  {
    id: 3,
    name: "Mizaram",
    desc: "A Fullstack Online Skincare store",
    lang: "React.js + Supabase + TailwindCSS + Framer + Google stitch Ai",
    link: "https://mizaram.vercel.app/",
    image: "/pro3.jpg",
    year: 2025,
  },
  {
    id: 4,
    name: "QFlsecure",
    desc: "Web3 / Crypto WebApp",
    lang: "React.js + Node.js + TailwindCSS + Lucid-react",
    link: "https://qf-isecure.vercel.app/",
    image: "/pro4.png",
    year: 2023,
  },
  // {
  //   id: 5,
  //   name: "Artful Nest",
  //   desc: "Beautiful website for making handmade products created with",
  //   lang: "React.js + Node.js + TailwindCSS",
  //   link: "https://artful-nest.netlify.app/",
  //   image: "/pro5.png",
  //   year: 2026,
  // },
  {
    id: 6,
    name: "koyo",
    desc: "A Online Resturant With great Menu",
    lang: "React.js + Node.js + TailwindCSS",
    link: "https://koyo-foods.netlify.app/",
    image: "/pro6.jpg",
    year: 2025,
  },
  // {
  //   id: 7,
  //   name: "My Portfolio",
  //   desc: "my personal portfolio website created with",
  //   lang: "Next.tsx + Node.js + TailwindCSS + Framer-motion",
  //   link: "https://gideon-port.netlify.app/",
  //   image: "/pro2.png",
  //   year: 2024,
  // },
  // {
  //   id: 8,
  //   name: "Extension Manager",
  //   desc: "Simple Extension Manager UI",
  //   lang: "Next.js + TailwindCSS",
  //   link: "https://extension-manager-liard.vercel.app/",
  //   image: "/pro3.png",
  //   year: 2023,
  // },
  // {
  //   id: 9,
  //   name: "E-Tutor",
  //   desc: "Online Learning Platform | Frontend ",
  //   lang: "React.js + TailwindCSS + Framer-motion ",
  //   link: "https://e-tutor.pxxl.pro/",
  //   image: "/pro4.png",
  //   year: 2025,
  // },
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
        <div className="hero__content">
          <h1 className="hero__name">Gideon Chinonso</h1>
          <p className="hero__title">Fullstack Developer</p>
          <p className="hero__bio">
            Building technical architectures with an editorial focus.
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
          durable and well-considered as physical architecture.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <p className="section-label">Connect</p>
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
      {NAV_ITEMS.map(({ label, href }) => {
        const id = label.toLowerCase();
        return (
          <a key={id} href={href} onClick={() => setActive(id)}>
            {label}
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
