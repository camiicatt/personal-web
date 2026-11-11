import { useEffect, useState } from "react";
import "./App.css";
import Dither from "./Dither";

import camipxel from "./assets/PixelCamii.png";
import idle1 from "./assets/camidusyRH.png";
import camipresenting from "./assets/camipresenting.png";
import creativeagEx from "./assets/creativeagEx.png";
import furrytails from "./assets/FurryTailsCoverArt.png";
import vemosvamos from "./assets/vemosvamos.png";
import group from "./assets/camillegorup.jpeg";
import group2 from "./assets/camille2.jpeg";
import glassStudents from "./assets/TheGlassHeroStudents.jpeg";
import glassResearch from "./assets/TheGlassHeroResearch.png";
import glassPaper from "./assets/TheGlassHeroPaper.pdf";

/* ---------- CONTENT ---------- */

const experience = [
  {
    org: "USAA",
    role: "Software Engineering Intern",
    date: "May – Sep 2026",
    points: [
      "Built a React and Spring Boot dashboard and three REST endpoints for life-insurance quoting.",
      "Improved representative workflow efficiency 20% in week one, supporting ~1,500 applicants.",
    ],
    details: [
      "The dashboard explains life-insurance blockers and quoting eligibility so member service representatives can help applicants faster.",
      "Secured the endpoints with Active Directory group-based access and service-account authentication.",
      "Shipped through GitLab merge requests, code review, CI/CD checks, release tagging, and formal change requests.",
      "Contributed to an Obsidian vault mapping files, APIs, and projects to give Copilot context on the codebase.",
      "Kept Agile stories and implementation docs up to date.",
    ],
  },
  {
    org: "UTSA Small Business Development Center",
    role: "Business Development Intern",
    date: "Jan – May 2026",
    points: ["Advised small-business clients on marketing and web design."],
    details: [
      "Joined client consultations and gave marketing-strategy and web-design recommendations.",
      "Facilitated leadership meetings to keep discussions structured and aligned on business goals.",
      "Worked on outreach that improved clients' digital presence, contributing to a 30% increase in client engagement.",
    ],
  },
  {
    org: "434 Media",
    role: "Software Engineering Intern",
    date: "Jun – Dec 2025",
    points: [
      "Led a React redesign of the Vemos Vamos website.",
      "Built an AI brand-asset generator and automated prospect research, cutting manual work up to 70%.",
    ],
    details: [
      "Rebuilt Vemos Vamos with responsive layouts for desktop and mobile.",
      "The asset generator used OpenAI for text and Hugging Face models for images, matched to 434 Media's brand guidelines.",
      "Automated prospect research and outreach with web scraping, the OpenAI API, and Airtable.",
      "Refined prompts and output quality with the marketing and design teams; worked in React, Next.js, and Tailwind CSS.",
    ],
  },
  {
    org: "UTSA Klesse College of Engineering",
    role: "Research Data Analyst",
    date: "May – Sep 2025",
    points: [
      "Automated research-data processing in Python on Linux, supporting successful DOE and DOD grants.",
    ],
    details: [
      "Built Python and Linux tools to process large research datasets as repeatable pipelines.",
      "Visualized trends with Matplotlib and Seaborn to guide research decisions and grant applications.",
    ],
  },
  {
    org: "Yahoo · UTSA Global Summer Institute",
    role: "Software Engineering Lead, UX Research Capstone",
    date: "Jul 2025",
    points: [
      "Led prototyping for a child-safe YouTube concept with Yahoo user researchers in New York.",
    ],
    details: [
      "Selected for an on-site program in New York focused on product planning, Agile teamwork, and user research.",
      "Set project goals with the SMART framework and built an Agile roadmap with milestones and deliverables.",
      "Assigned program, product, and engineering lead roles to mirror a real technology team.",
      "Practiced Scrum and usability evaluation with Yahoo technical product managers and user researchers.",
    ],
    project: "yahoo",
  },
  {
    org: "Experian",
    role: "Product Development Consultant",
    date: "Jun 2025",
    points: [
      "Led a 4-person team designing a credit education platform; presented to Experian's B.A.L.L. For Life team.",
    ],
    details: [
      "One-week innovation sprint; the platform was projected to reach 30,000+ underserved users.",
      "Used Python for demographic analysis and budget modeling to shape the product recommendation.",
    ],
  },
];

const projects = [
  {
    id: "idle",
    name: "Idle Scholar",
    year: "2025 – now",
    stack: "React Native · TypeScript · Supabase",
    blurb: "Study game for iOS and web. 1st Overall of 98 projects at RowdyHacks XI, now live with real users.",
    details: [
      "Built reusable pixel-art components, animated characters, and Alien vs. Cowboy faction themes for the Space Cowboys theme. All art is self-made.",
      "Supabase handles auth, PostgreSQL data, Realtime sync, study tracking, and group leaderboards, secured with row-level security.",
      "Runs natively on iOS and as an installable web app, and I keep shipping updates for friends who use it.",
    ],
    preview: { src: "https://idlescholar.com", phone: true },
    media: [{ src: idle1, caption: "Dustin and me with the RowdyHacks crew" }],
    links: [
      { label: "Try it", href: "https://idlescholar.com" },
      { label: "Devpost", href: "https://devpost.com/software/lockedin-28pzol" },
      {
        label: "Video",
        href: "https://www.canva.com/design/DAG4-AfPxKM/sqmbS1O8jCR3-qRDaesoPg/watch?utm_content=DAG4-AfPxKM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h861448282c",
      },
    ],
  },
  {
    id: "underdog",
    name: "Underdog",
    year: "2026",
    stack: "Raspberry Pi · C++ · TypeScript",
    blurb: "HackUTD search-and-rescue rover and dashboard. I wrote the sensor code, streamed camera data to the dashboard, and designed the UI.",
    details: [
      "A drone flags possible survivors, then a ground rover moves in to confirm signs of life.",
      "Wrote the sensor code that streamed thermal camera, 360° lidar, single-point lidar, and IMU data from a Raspberry Pi Pico to a Raspberry Pi 4B.",
      "Connected the camera data to the live coordination dashboard and designed the project's overall UI.",
      "Team of four; we switched from a walking robot dog to wheels mid-weekend when the leg servos overheated.",
    ],
    links: [{ label: "Devpost", href: "https://devpost.com/software/hackutd-name-pending" }],
  },
  {
    id: "glass",
    name: "TheGlassHero",
    year: "2026",
    stack: "React · Phaser · Research",
    blurb: "Game that teaches middle schoolers how machine learning works. Studied with ~140 eighth graders.",
    preview: { src: "https://camiicatt.github.io/theGlassBox/" },
    media: [
      { src: glassResearch, caption: "Developing AI Tools research group" },
      { src: glassStudents, caption: "Students playing TheGlassHero" },
    ],
    details: [
      "Students teach an AI character by giving it examples, then watch it make decisions and show its confidence.",
      "After playing, students explained AI in terms of training, examples, and data instead of general descriptions.",
    ],
    links: [
      { label: "Play", href: "https://camiicatt.github.io/theGlassBox/" },
      { label: "Paper", href: glassPaper, download: true },
    ],
  },
  {
    id: "swe",
    name: "Client Ordering Website",
    year: "2026",
    stack: "Next.js · Supabase",
    blurb: "Course project for a real client: accounts, ordering, and an admin menu. Scrum Master and API engineer on a team of 5.",
    details: [
      "Customers create accounts, log in, and place orders; admins manage the menu, orders, and users.",
      "Built with Next.js, Tailwind CSS, and Supabase for the database and authentication.",
    ],
    preview: { src: "https://software-eng2026.vercel.app" },
    links: [{ label: "Live site", href: "https://software-eng2026.vercel.app" }],
  },
  {
    id: "vemos",
    name: "VemosVamos",
    year: "2025",
    stack: "Next.js · UI/UX",
    blurb: "Responsive bilingual website for a 434 Media client.",
    details: ["Built with Next.js, with a responsive layout that adapts across desktop and mobile."],
    preview: { src: "https://www.vemosvamos.com/" },
    media: [{ src: vemosvamos, caption: "Landing page" }],
    links: [{ label: "Live site", href: "https://www.vemosvamos.com/" }],
  },
  {
    id: "creative",
    name: "Creative Agent",
    year: "2025",
    stack: "Next.js · OpenAI · Hugging Face",
    blurb: "AI tool that generates on-brand marketing assets, built for 434 Media.",
    details: [
      "Uses GPT-4o, DALL·E 3, and Llama, deployed on Vercel.",
      "Built for 434 Media's branding needs but flexible for other teams; I presented it at Learn2AI.",
    ],
    media: [
      { src: camipresenting, caption: "Presenting the Creative Agent" },
      { src: creativeagEx, caption: "Example output" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/camiicatt/creative-agent" },
      {
        label: "Slides",
        href: "https://www.canva.com/design/DAGuNDTxARw/8VLvfdmsNBQMW0DV1AFyIg/view?utm_content=DAGuNDTxARw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0eb60a70f6",
      },
    ],
  },
  {
    id: "furry",
    name: "FurryTails",
    year: "2025",
    stack: "Java · Android",
    blurb: "Virtual-pet Android game that teaches pet care and promotes adoption. Self-drawn pixel art.",
    details: ["Players name, feed, and play with a rescued pet, earning in-game money while learning about adoption. Built fully in Java in Android Studio."],
    media: [{ src: furrytails, caption: "Start screen" }],
    links: [{ label: "GitHub", href: "https://github.com/UTSACS3443-Spring25/FurryTails" }],
  },
  {
    id: "yahoo",
    name: "Yahoo Capstone",
    hidden: true,
    blurb: "Product planning, Agile teamwork, and UX research on site at Yahoo in New York.",
    media: [
      { src: group2, caption: "Presenting at Yahoo HQ, New York" },
      { src: group, caption: "The team" },
    ],
    links: [{ label: "Presentation", href: "https://youtubexyoutubekids.my.canva.site/" }],
  },
];

const leadership = [
  {
    org: "RowdyHacks XII",
    role: "Design Lead",
    date: "Feb – Oct 2026",
    points: ["Led branding and design for UTSA's hackathon, serving 300 participants."],
    details: ["Owned the event identity, participant materials, and visual direction from planning through event day."],
  },
  {
    org: "ACM at UTSA",
    role: "Media Officer",
    date: "Aug 2026 – now",
    points: ["Create media for chapter events and make sure new members feel welcome."],
  },
  {
    org: "CodeQuantum",
    role: "Tech/Web Lead",
    date: "Dec 2025 – Mar 2026",
    points: ["Ran the website and digital communications for ACM's beginner hackathon for underserved CS students."],
    details: ["Supported event operations so first-time hackers had a smooth, welcoming experience."],
  },
];

const skills = [
  ["Languages", "Java, TypeScript, JavaScript, Python, C, C#, SQL"],
  ["Frameworks", "React, React Native, Spring Boot, Next.js, Supabase"],
  ["Tools", "Git, CI/CD, Linux, AWS EC2, Unity, Raspberry Pi"],
];

/* ---------- UI ---------- */

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <h3>{project.name}</h3>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        <p className="modal-text">{project.blurb}</p>

        {project.preview && (
          <div className={`preview ${project.preview.phone ? "preview-phone" : ""}`}>
            <iframe src={project.preview.src} title={`${project.name} preview`} loading="lazy" />
          </div>
        )}

        {project.media && (
          <div className="media-grid">
            {project.media.map((m) => (
              <figure key={m.caption}>
                <img src={m.src} alt={m.caption} />
                <figcaption>{m.caption}</figcaption>
              </figure>
            ))}
          </div>
        )}

        <Links links={project.links} />
      </div>
    </div>
  );
}

function Links({ links }) {
  if (!links?.length) return null;
  return (
    <span className="links">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          {...(l.download ? { download: true } : { target: "_blank", rel: "noreferrer" })}
        >
          {l.label} ↗
        </a>
      ))}
    </span>
  );
}

function Entry({ title, date, sub, points, blurb, details, children }) {
  const [open, setOpen] = useState(false);
  const canExpand = details?.length > 0;

  return (
    <div className={`entry ${open ? "is-open" : ""}`}>
      <button
        className="entry-head"
        onClick={() => canExpand && setOpen(!open)}
        aria-expanded={canExpand ? open : undefined}
        disabled={!canExpand}
      >
        <span className="entry-top">
          <span className="entry-title">
            {title}
            {canExpand && <span className="toggle" aria-hidden="true">{open ? "−" : "+"}</span>}
          </span>
          <span className="date">{date}</span>
        </span>
        {sub && <span className="entry-sub">{sub}</span>}
      </button>

      {blurb && <p className="blurb">{blurb}</p>}
      {points && (
        <ul>
          {points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      )}

      {canExpand && open && (
        <ul className="details">
          {details.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      )}

      {children}
    </div>
  );
}

function App() {
  const [openId, setOpenId] = useState(null);
  const open = projects.find((p) => p.id === openId);

  return (
    <div className="page">
      <div className="left-panel">
        <header className="header">
          <img className="portrait" src={camipxel} alt="Pixel portrait of Camille with her cats" />
          <div>
            <h1>Camille Rivera</h1>
            <p className="subtitle">Software engineer · CS at UTSA, May 2027</p>
            <nav className="contact">
              <a href="https://www.linkedin.com/in/camille-louise-rivera/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/camiicatt" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="mailto:camille.rivera@my.utsa.edu">Email</a>
            </nav>
          </div>
        </header>

        <p className="about">
          I build software people enjoy using, from the interface down to the APIs behind it.
          <span className="hint"> Click any + to see more.</span>
        </p>

        <section>
          <h2>Experience</h2>
          {experience.map((job) => (
            <Entry key={job.org} title={job.org} date={job.date} sub={job.role} points={job.points} details={job.details}>
              {job.project && (
                <span className="links">
                  <button className="inline-link" onClick={() => setOpenId(job.project)}>
                    Photos →
                  </button>
                </span>
              )}
            </Entry>
          ))}
        </section>

        <section>
          <h2>Leadership</h2>
          {leadership.map((l) => (
            <Entry key={l.org} title={l.org} date={l.date} sub={l.role} points={l.points} details={l.details} />
          ))}
        </section>

        <section>
          <h2>Projects</h2>
          {projects
            .filter((p) => !p.hidden)
            .map((p) => (
              <Entry key={p.id} title={p.name} date={p.year} sub={p.stack} blurb={p.blurb} details={p.details}>
                <span className="links">
                  {(p.preview || p.media) && (
                    <button className="inline-link" onClick={() => setOpenId(p.id)}>
                      {p.preview ? "Preview" : "Photos"} →
                    </button>
                  )}
                  <Links links={p.links} />
                </span>
              </Entry>
            ))}
        </section>

        <section>
          <h2>Education</h2>
          <div className="entry-top compact">
            <span className="entry-title">The University of Texas at San Antonio</span>
            <span className="date">May 2027</span>
          </div>
          <div className="entry-sub">
            B.S. Computer Science, Software Engineering · Math minor · 3.9 GPA
          </div>
        </section>

        <section>
          <h2>Skills</h2>
          {skills.map(([k, v]) => (
            <p className="skill" key={k}>
              <span className="muted">{k}</span> {v}
            </p>
          ))}
        </section>
      </div>

      <div className="right-panel">
        <Dither
          waveColor={[0.4, 0.2, 0.4]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>

      {open && <ProjectModal project={open} onClose={() => setOpenId(null)} />}
    </div>
  );
}

export default App;
