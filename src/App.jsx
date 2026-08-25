import { useState } from "react";
import "./App.css";
import Dither from "./Dither";

import idle1 from "./assets/camidusyRH.png";

import camipresenting from "./assets/camipresenting.png";
import creativeagEx from "./assets/creativeagEx.png";
import furrytails from "./assets/FurryTailsCoverArt.png";
import vemosvamos from "./assets/vemosvamos.png";
import group from "./assets/camillegorup.jpeg";
import group2 from "./assets/camille2.jpeg";
import TheGlassHeroStudents from "./assets/TheGlassHeroStudents.jpeg";
import TheGlassHeroResearch from "./assets/TheGlassHeroResearch.png";
import TheGlassHeroPaper from "./assets/TheGlassHeroPaper.pdf";
import TheGlassHeroPaperPreview from "./assets/TheGlassHeroPaper.pdf";

import camipxel from "./assets/PixelCamii.png"

const projectSections = [
  { id: "proj-idle-scholar", label: "Idle Scholar" },
  { id: "swe-ui-project-2026", label: "SWE & UI/UX" },
  { id: "proj-ai-learning-agent", label: "TheGlassHero" },
  { id: "proj-creative-agent", label: "Creative Agent" },
  { id: "proj-vemosvamos", label: "VemosVamos" },
  { id: "proj-yahoopress", label: "Yahoo Capstone" },
  { id: "proj-furrytails", label: "FurryTails" },
  { id: "proj-personal-web", label: "Personal Web" },
];

function App() {
  const [activeSection, setActiveSection] = useState(null); // 'experience' | 'projects' | 'about' | null

  const openSection = (section) => {
    setActiveSection(section);
  };

  const closeSection = () => {
    setActiveSection(null);
  };

  const activeProjectIndex = projectSections.findIndex(
    (project) => project.id === activeSection,
  );

  const browseProject = (direction) => {
    const nextIndex =
      (activeProjectIndex + direction + projectSections.length) %
      projectSections.length;
    setActiveSection(projectSections[nextIndex].id);
  };

  const renderModalContent = () => {
    switch (activeSection) {
      case "experience":
        return (
          <>
            <h3 className="modal-title">EXPERIENCE</h3>

            <div className="exp-featured">
              <div className="exp-row">
                <span className="exp-label">USAA</span>

                <span className="exp-detail">
                  Software Engineering Intern
                </span>

                <span className="exp-time">
                  May 2026 → Aug 2026
                </span>
              </div>

              <p className="detail-text">
                Developed three REST API endpoints and a Java/Spring Boot experience
                layer powering the MSR Assistant UI for life insurance application and
                quoting workflows.
              </p>

              <p className="detail-text exp-impact">
                Launched functionality that improved MSR workflow efficiency by
                <strong> 20% within its first week</strong>, supporting approximately
                <strong> 1,500 life insurance applicants</strong>.
              </p>

              <p className="detail-text">
                Delivered production changes through GitLab merge requests, code
                reviews, tagging, CI/CD checks, and enterprise change-request
                procedures.
              </p>
            </div>

            <div className="exp-row">
              <span className="exp-label">UTSA SBDC</span>
              <span className="exp-detail">
                Business Development Intern, Marketing &amp; Web Design for UTSA SBDC
              </span>
              <span className="exp-time">Jan 2026 → Present</span>
            </div>
            <p className="detail-text">
              - Facilitate leadership meetings to encourage structured discussion and alignment on business goals.
            </p>
            <p className="detail-text">
              - Participate in client consultations, providing input on marketing strategy and web design recommendations.
            </p>
            <p className="detail-text">
              - Collaborate on business development initiatives to improve client outreach and digital presence.
            </p>

            <div className="modal-body">
              <div className="exp-row">
                <span className="exp-label">434 Media</span>
                <span className="exp-detail">UI/UX Front-End Developer </span>
                <span className="exp-time">May 2025 → Aug 2025</span>
              </div>
              <p className="detail-text">
              - Redesigned the Vemos Vamos website with responsive layouts for desktop
              </p>
              <p className="detail-text">
              - Built and led the creation of an AI-driven brand asset generator leveraging OpenAI for text and Hugging Face models for image adaptation, automating repetitive design tasks aligned with 434 Media’s brand guidelines and reducing creative team turnaround time on client visuals.
              </p>
              <p className="detail-text">
              - Collaborated with Marketing team to implement new features using React, Next.js, and Tailwind CSS
              </p>

              <div className="exp-row">
                <span className="exp-label">Yahoo</span>
                <span className="exp-detail">Capstone Project Participant</span>
                <span className="exp-time">Jul 2025 · New York, NY</span>
              </div>
              <p className="detail-text">
              - Defined project goals using the SMART framework and created a high-level Agile roadmap with milestones and deliverables.
              </p>
              <p className="detail-text">
              - Assigned cross-functional team roles and responsibilities to simulate a real-world technology team structure.
              </p>
              <p className="detail-text">
              - Practiced Scrum, UX research, and usability evaluation with guidance from Yahoo technical product managers and user research professionals.
              </p>

              <div className="exp-row">
                <span className="exp-label">Experian</span>
                <span className="exp-detail"> Product Development Consultant </span>
                <span className="exp-time">June 2025 (1-week Innovation Sprint)</span>
              </div>
              <p className="detail-text">
              - Directed a 4 member team to design a credit education platform projected to reach 30,000+ underserved users.
              </p>
              <p className="detail-text">
              - Applied python driven demographic analysis and budget modeling to shape product recommendations, presenting the final solution directly to Experian’s B.A.L.L. For Life team.
              </p>

              <div className="exp-row">
                <span className="exp-label">Klesse College of Engineering</span>
                <span className="exp-detail">Data Analyst</span>
                <span className="exp-time">Jan 2025 → June 2025</span>
              </div>
              <p className="detail-text">
              - Built Python/Linux analytics tools to handle large research datasets.
              </p>
              <p className="detail-text">
              - Delivered visualized insights driving successful research grant applications for the DOE & DOD.
              </p>
              <p className="detail-text">
              - Visualized complex data using Matplotlib and Seaborn to help identify trends and inform research decisions.
              </p>


              <div className="exp-row">
                <span className="exp-label">UTSA</span>
                <span className="exp-detail">First Year Experience Ambassador</span>
                <span className="exp-time">Dec 2023 → Dec 2025</span>
              </div>
              <p className="detail-text">
              - Knowledgeable hub for new students navigating university life.
              </p>
              <p className="detail-text">
              - Analyzed student engagement data with Excel and Python to identify trends and improve orientation programs.
              </p>
              <p className="detail-text">
              - Organized campus events, boosting student participation by 30% through targeted outreach and engaging activities.
              </p>


              <div className="exp-row">
                <span className="exp-label">MISC</span>
                <span className="exp-time">
                      Freelance Web Developer · Tutor
                </span>
              </div>
            </div>
          </>
        );

        case "swe-ui-project-2026":
          return (
            <>
              <h3 className="modal-title">SWE & UI/UX LIVE WEBSITE</h3>
              <div className="modal-body">
                <div className="website-preview">
                  <iframe
                    src="https://software-eng2026.vercel.app"
                    title="SWE and UI/UX client website preview"
                    loading="lazy"
                  />
                  <span className="website-preview-label">LIVE WEBSITE PREVIEW</span>
                </div>
                <p className="detail-text">
                  Developed a live website for a client as part of a Software Engineering course project. 
                </p>
                <p className="detail-text">
                  – Scrum Master and API Engineer mananging a team of 5 developers
                </p>
                <p className="detail-text">
                  – Built with React, Next.js, Tailwind CSS, and Supabase for database management and authentication
                </p>
                <p className="detail-text">
                  - Users can create accounts, login, order (no payment)
                  <p > - Admins can add to the menu, view orders, and manage users </p>
                  - Implemented responsive design and user-friendly interfaces 
                </p>

                    {/* LINK */}
                    <div className="modal-links-row">
                    <a
                    href="https://software-eng2026.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                      className="modal-link-btn"
                    >
                      Website Link
                    </a>
                  </div>
              </div>
            </>
          );

        case "proj-ai-learning-agent":
          return (
            <>
              <h3 className="modal-title"> TheGlassHero - Teaching and Visualizing Machine Learning  </h3>
              <div className="modal-body">
                <div className="website-preview">
                  <iframe
                    src="https://camiicatt.github.io/theGlassBox/"
                    title="TheGlassHero live learning game preview"
                    loading="lazy"
                  />
                  <span className="website-preview-label">LIVE GAME PREVIEW</span>
                </div>
                <div className="modal-links-row">
                  <a
                    href="https://camiicatt.github.io/theGlassBox/"
                    target="_blank"
                    rel="noreferrer"
                    className="modal-link-btn modal-link-primary"
                  >
                    Try live game ↗
                  </a>
                </div>
                {/* MEDIA GRID */}
                <div className="modal-media-grid">
                  <div className="modal-media-card">
                    <img
                      src={TheGlassHeroResearch}
                      alt="Developing AI Tools Research Group"
                      className="modal-media-img"
                    />
                    <p className="modal-media-caption">Developing AI Tools Research Group</p>
                  </div>

                  <div className="modal-media-card">
                    <img
                      src={TheGlassHeroStudents}
                      alt="Students learning Machine Learning"
                      className="modal-media-img"
                    />
                    <p className="modal-media-caption">Students playing TheGlassHero, having a fun time</p>
                  </div>

                  {/* THE GLASS HERO PNG VIEW */}
                  <div className="research-paper-section">
                    <div className="research-paper-header">
                      <div>
                        <span className="research-paper-tag">RESEARCH_PAPER.PDF</span>
                        <h4 className="research-paper-title">
                          TheGlassHero
                        </h4>
                      </div>

                      <a
                        href={TheGlassHeroPaper}
                        download
                        className="research-download-btn"
                      >
                        DOWNLOAD ↓
                      </a>
                    </div>

                    <div className="research-abstract">
                      <span className="research-abstract-label">ABSTRACT</span>
                      <div className="research-abstract">
  <span className="research-abstract-label">ABSTRACT</span>

  <p>
    Teaching machine learning (ML) to K–12 students is challenging
    because supervised learning systems often hide the processes students
    need to understand: how examples shape decisions, why models fail,
    and how confidence relates to predictions. To make these ideas more
    visible, we developed TheGlassHero, a short, game-based learning tool
    for introducing supervised ML concepts to middle school students.
  </p>

  <p>
    In TheGlassHero, students act as teachers guiding an AI character
    through a dungeon environment. Through gameplay, students provide
    training examples, observe the AI make decisions, view confidence
    feedback, and encounter cases where the AI succeeds or fails. We
    deployed TheGlassHero as part of a larger two-session AI learning
    study with approximately 140 eighth-grade students.
  </p>

  <p>
    We report formative evidence from matched pre/post responses,
    TheGlassHero-specific post-survey items, feature feedback, classroom
    observations, voice recordings, and gameplay recordings. Matched
    responses suggest that students’ explanations shifted from general
    descriptions of AI toward language involving learning, training,
    examples, and data.
  </p>

  <p>
    These findings suggest that visible AI decision-making can support
    short AI literacy activities, but visibility alone is not enough. We
    identify design lessons for future ML education tools, including the
    need to pair decision visualization with structured scaffolding around
    confidence, data quality, bias, and model failure.
  </p>
</div>
                    </div>
                  </div>
              </div>
              </div>
              </>
        );
        
        case "proj-creative-agent":
          return (
            <>
              <h3 className="modal-title">AI Driven Creative Agent</h3>
              <div className="modal-body">
                {/* MEDIA GRID */}
                <div className="modal-media-grid">
                  <div className="modal-media-card">
                    <img
                      src={camipresenting}
                      alt="Cami Presenting at Learn2AI"
                      className="modal-media-img"
                    />
                    <p className="modal-media-caption">Presenting The Creative Agent</p>
                  </div>

                  <div className="modal-media-card">
                    <img
                      src={creativeagEx}
                      alt="Example of Creative Output"
                      className="modal-media-img"
                    />
                    <p className="modal-media-caption">Presenting The Creative Agent</p>
                  </div>
                </div>
        
                {/* LINKS ROW */}
                <div className="modal-links-row">
                  <a
                    href="https://www.canva.com/design/DAGuNDTxARw/8VLvfdmsNBQMW0DV1AFyIg/view?utm_content=DAGuNDTxARw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0eb60a70f6"
                    target="_blank"
                    rel="noreferrer"
                    className="modal-link-btn"
                  >
                    Presentation
                  </a>
                  <a
                    href="https://www.linkedin.com/feed/update/urn:li:ugcPost:7370894408491323392/"
                    target="_blank"
                    rel="noreferrer"
                    className="modal-link-btn"
                  >
                    Linkdin Post
                  </a>
                  <a
                    href="https://github.com/camiicatt/creative-agent"
                    target="_blank"
                    rel="noreferrer"
                    className="modal-link-btn"
                  >
                    GitHub
                  </a>

                </div>
        
                {/* DESCRIPTION */}
                <p className="detail-text">
                AI-driven assistant for creative workflows. Built using Next.js, OpenAI APIs,
                  and responsive UI components.                
                </p>
                <p className="detail-text">
                  – Curated Specifcally for 434 Medias branding needs, but is flexible for other use cases
                </p>
                <p className="detail-text">– DALL-E 3 · OpenAI GPT-4o · LLAMA · VARCEL</p>
                <p className="detail-text">– UX designed for playful experimentation</p>

              </div>
            </>
          );
        
          case "proj-idle-scholar":
            return (
              <>
                <h3 className="modal-title">IDLE SCHOLAR · ACTIVE LIVE APP</h3>
                <div className="modal-body">
                  <div className="active-project-status">
                    <span>● CURRENTLY BUILDING</span>
                    <span>LIVE USERS · REGULAR UPDATES</span>
                  </div>
                  <div className="website-preview website-preview-phone">
                    <iframe
                      src="https://idlescholar.com"
                      title="Idle Scholar phone web app preview"
                      loading="lazy"
                    />
                    <span className="website-preview-label">LIVE PHONE APP PREVIEW</span>
                  </div>
                  {/* MEDIA GRID */}
                  <div className="modal-media-grid">
                    <div className="modal-media-card">
                      <img
                        src={idle1}
                        alt="Idle Scholar screenshot 1"
                        className="modal-media-img"
                      />
                      <p className="modal-media-caption">Dustin and I with RH crew</p>
                    </div>
                  </div>
          
                  {/* LINKS ROW */}
                  <div className="modal-links-row">
                    <a
                      href="https://idlescholar.com"
                      target="_blank"
                      rel="noreferrer"
                      className="modal-link-btn modal-link-primary"
                    >
                      Try live app ↗
                    </a>
                    <a
                      href="https://devpost.com/software/lockedin-28pzol"
                      target="_blank"
                      rel="noreferrer"
                      className="modal-link-btn"
                    >
                      Devpost
                    </a>
                    <a
                      href="https://www.canva.com/design/DAG4-AfPxKM/sqmbS1O8jCR3-qRDaesoPg/watch?utm_content=DAG4-AfPxKM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h861448282c"
                      target="_blank"
                      rel="noreferrer"
                      className="modal-link-btn"
                    >
                      Video Playthrough (Please Watch)
                    </a>
                  </div>
          
                  {/* DESCRIPTION */}
                  <p className="detail-text">
                    Cross-platform focus app to keep students off their phone and studying (through competition), with two seperate UIs depending on Alien or Cowboy. 
                    RowdyHacks theme was Space Cowboys so we really ran with that theme, all assets were self made. 
                  </p>
                  <p className="detail-text">
                    – JavaScript/React based mobile app shipped in 24 hours
                  </p>
                  <p className="detail-text">– Created with Supabase auth, realtime stats, and React Native UI.</p>
                  <p className="detail-text">– RowdyHacks XI (1st Overall)</p>

                </div>
              </>
            );
          

          case "proj-vemosvamos":
            return (
              <>
                <h3 className="modal-title">VEMOSVAMOS WEB</h3>
                <div className="modal-body">
                  <div className="website-preview">
                    <iframe
                      src="https://www.vemosvamos.com/"
                      title="VemosVamos website preview"
                      loading="lazy"
                    />
                    <span className="website-preview-label">LIVE WEBSITE PREVIEW</span>
                  </div>
                  {/* MEDIA GRID */}
                  <div className="modal-media-grid">
                    <div className="modal-media-card-bigger">
                      <img
                        src={vemosvamos}
                        alt="vemos vamos start"
                        className="modal-media-img"
                      />
                      <p className="modal-media-caption">UI</p>
                    </div>
                  </div>
          
                  {/* LINKS ROW */}
                  <div className="modal-links-row">
                    <a
                    href="https://www.vemosvamos.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="modal-link-btn"
                    >
                      Website Link
                    </a>
                  </div>
          
                  {/* DESCRIPTION */}
                  <p className="detail-text">
                  A modern, bilingual web application built with Next.js 15.4.6
                  </p>
                  <p className="detail-text">
                    - Developed with a focus on responsive design and user experience, the site features a sleek UI/UX that adapts seamlessly across devices.
                  </p>

                </div>
              </>
            );

            case "proj-furrytails":
              return (
                <>
                  <h3 className="modal-title">FURRYTAILS</h3>
                  <div className="modal-body">
                    {/* MEDIA GRID */}
                    <div className="modal-media-grid">
                      <div className="modal-media-card-bigger">
                        <img
                          src={furrytails}
                          alt="furrytails start screen"
                          className="modal-media-img"
                        />
                        <p className="modal-media-caption">Start Screen!</p>
                      </div>
                    </div>
            
                    {/* LINKS ROW */}
                    <div className="modal-links-row">
                      <a
                        href="https://www.canva.com/design/DAGmUyJKPbA/8GkHAmNRDFozB1uIJTqHzw/view?utm_content=DAGmUyJKPbA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hef39c5510d"
                        target="_blank"
                        rel="noreferrer"
                        className="modal-link-btn"
                      >
                        Funny Video Playthrough
                      </a>
                      <a
                      href="https://github.com/UTSACS3443-Spring25/FurryTails"
                        target="_blank"
                        rel="noreferrer"
                        className="modal-link-btn"
                      >
                        GitHub
                      </a>
                    </div>
            
                    {/* DESCRIPTION */}
                    <p className="detail-text">
                      FurryTails is an Tomogachi inspired mobile app where users care for and nurture their own virtual pet they saved to premote adoption.
                      Players can name, play and feed their animal friends while learning about pet care and adoption with in game money.
                    </p>
                    <p className="detail-text">
                      – Build in Android Studio, fully in Java
                    </p>
                    <p className="detail-text">– Self drawn pixel art</p>
  
                  </div>
                </>
              );   
              case "proj-yahoopress":
                return (
                  <>
                    <h3 className="modal-title">YAHOO CAPSTONE PROJECT</h3>
                    <div className="modal-body">
                      {/* MEDIA GRID */}
                      <div className="modal-media-grid">
                        <div className="modal-media-card-bigger">
                          <img
                            src={group2}
                            alt="yahoo 1"
                            className="modal-media-img"
                          />
                          <p className="modal-media-caption">Presentation in Yahoo HeadQuarters NY,NY</p>
                        </div>
                        <div className="modal-media-card-bigger">
                          <img
                            src={group}
                            alt="yahoo 2"
                            className="modal-media-img"
                          />
                          <p className="modal-media-caption">Group Picture</p>
                        </div>
                      </div>
              
                      {/* LINKS ROW */}
                      <div className="modal-links-row">
                        <a
                          href="https://youtubexyoutubekids.my.canva.site/"
                          target="_blank"
                          rel="noreferrer"
                          className="modal-link-btn"
                        >
                          Presentation
                        </a>
                      </div>
              
                      {/* DESCRIPTION */}
                      <p className="detail-text">
                        Selected for the Yahoo Capstone through UTSA’s Global Summer Institute, an on-site program in New York focused on product planning, Agile teamwork, and user research.
                      </p>
                      <p className="detail-text">
                        – Defined project goals with the SMART framework and created a high-level Agile roadmap with deliverables and milestones.
                      </p>
                      <p className="detail-text">
                        – Assigned Program Manager, Product Lead, and Engineering Lead responsibilities to model a cross-functional technology team.
                      </p>
                      <p className="detail-text">
                        – Learned Scrum best practices from Yahoo technical product managers and practiced UX research and usability evaluation with Yahoo research professionals.
                      </p>
                      <p className="detail-text">
                        – Participated in a live panel with Yahoo’s Rising Team about career paths, leadership, and innovation in a large technology company.
                      </p>
            
    
                    </div>
                  </>
                );  
        
          
        
        case "proj-personal-web":
          return (
            <>
              <h3 className="modal-title">PERSONAL WEBSITE</h3>
              <div className="modal-body">
                <p className="detail-text">
                  Game inspired resume site using pixel modals, dithering shaders, and playful UI.
                </p>
                <p className="detail-text">– Retro modal system</p>
                <p className="detail-text">– Designed as interactive resume</p>
              </div>
            </>
          );
        
      default:
        return null;
    }
  };

  return (
    <div className="page">
      {/* LEFT HALF */}
      <div className="left-panel">
        <header className="left-header">
          <h1 className="file-label">camille.cv</h1>
          <div
            className="pixel-profile pixel-profile-header"
          >
            <span className="pixel-profile-bar">
              <span>PLAYER_INFO.DAT</span>
              <span aria-hidden="true">+</span>
            </span>
            <span className="pixel-profile-content">
              <span className="pixel-profile-portrait">
                <img src={camipxel} alt="Pixel portrait of Camille with her cats" />
              </span>
              <span className="pixel-profile-copy">
                <strong>CAMILLE RIVERA</strong>
                <span>CS · SWE · UI/UX</span>
                <span className="pixel-profile-prompt">BUILDING GOOD LOOKING SOFTWARE</span>
              </span>
            </span>
          </div>
        </header>

        <main className="left-main">

        <section className="section">
            <div className="section-toggle section-heading about-heading">
              <span>ABOUT</span>
            </div>

            <div className="about-snapshot">
              <p className="about-lead">
                I care about the UI people touch and the software that makes it work. I do my best work with passionate teams fixing real problems together.
              </p>
              <div className="about-signals" aria-label="What Camille cares about">
                <span><b>01</b> UI WITH PURPOSE</span>
                <span><b>02</b> SOFTWARE THAT WORKS</span>
                <span><b>03</b> TEAMS THAT CARE</span>
              </div>
            </div>
          </section>



          {/* EXPERIENCE button */}
          <section className="section selected-experience">
            <div className="section-toggle section-heading experience-heading">
              <span>SELECTED EXPERIENCE</span>
              <button
                className="view-all-btn"
                onClick={() => openSection("experience")}
              >
                VIEW ALL <span aria-hidden="true">→</span>
              </button>
            </div>

            <button
              className="experience-card experience-card-featured"
              onClick={() => openSection("experience")}
            >
              <span className="experience-card-topline">
                <span className="experience-type">SOFTWARE ENGINEERING</span>
                <span className="experience-date">MAY–AUG 2026</span>
              </span>
              <span className="experience-card-main">
                <strong>USAA</strong>
                <span>Software Engineering Intern</span>
                <span className="experience-arrow" aria-hidden="true">→</span>
              </span>
              <span className="experience-tech">REACT · SPRING BOOT · REST APIs</span>
              <span className="experience-impact">Improved MSR workflow efficiency by 20%</span>
            </button>

            <button className="experience-card" onClick={() => openSection("experience")}>
              <span className="experience-card-topline">
                <span className="experience-type">MARKETING · WEB DESIGN</span>
                <span className="experience-date">JAN–MAY 2026</span>
              </span>
              <span className="experience-card-main">
                <strong>UTSA SBDC</strong>
                <span>Business Development Intern</span>
                <span className="experience-arrow" aria-hidden="true">→</span>
              </span>
            </button>

            <button className="experience-card" onClick={() => openSection("experience")}>
              <span className="experience-card-topline">
                <span className="experience-type">UI/UX · FRONT-END</span>
                <span className="experience-date">MAY–AUG 2025</span>
              </span>
              <span className="experience-card-main">
                <strong>434 MEDIA</strong>
                <span>UI/UX Front-End Developer</span>
                <span className="experience-arrow" aria-hidden="true">→</span>
              </span>
              <span className="experience-tech">REACT · NEXT.JS · TAILWIND CSS</span>
            </button>

            <div className="education-summary">
              <span>UTSA · COMPUTER SCIENCE</span>
              <span>Math minor · 3.9 GPA · May 2027</span>
            </div>
          </section>

          {/* PROJECTS button */}
            <section className="section">
              <div className="section-toggle section-heading">
                <span>PROJECTS</span>
                <span className="projects-key">SELECTED WORK</span>
              </div>

  {/* INDENTED CLICKABLE PROJECTS */}
  <div className="sub-projects">

    <div className="project-entry project-entry-active">
      <button className="sub-toggle" onClick={() => openSection("proj-idle-scholar")}>
        <span className="sub-copy">
          <span className="project-badge">● ACTIVE · LIVE USERS · REACT</span>
          <span className="sub-label">IDLE SCHOLAR</span>
          <span className="sub-time">Actively building · RowdyHacks 1st Overall</span>
        </span>
        <span className="project-arrow" aria-hidden="true">→</span>
      </button>
      <a className="project-live-link" href="https://idlescholar.com" target="_blank" rel="noreferrer">
        TRY IT ↗
      </a>
    </div>

    <div className="project-entry project-entry-featured">
      <button className="sub-toggle" onClick={() => openSection("swe-ui-project-2026")}>
        <span className="sub-copy">
          <span className="project-badge">LIVE · REACT</span>
          <span className="sub-label">SWE & UI/UX CLIENT WEBSITE</span>
          <span className="sub-time">Scrum Master · API Engineer</span>
        </span>
        <span className="project-arrow" aria-hidden="true">→</span>
      </button>
      <a className="project-live-link" href="https://software-eng2026.vercel.app" target="_blank" rel="noreferrer">
        OPEN LIVE ↗
      </a>
    </div>
    <div className="project-entry project-entry-featured">
      <button className="sub-toggle" onClick={() => openSection("proj-ai-learning-agent")}>
        <span className="sub-copy">
          <span className="project-badge">LIVE · ML EDUCATION</span>
          <span className="sub-label">TheGlassHero: TEACHING MACHINE LEARNING</span>
          <span className="sub-time">Research paper · interactive learning game</span>
        </span>
        <span className="project-arrow" aria-hidden="true">→</span>
      </button>
      <a
        className="project-live-link"
        href="https://camiicatt.github.io/theGlassBox/"
        target="_blank"
        rel="noreferrer"
      >
        TRY LIVE ↗
      </a>
    </div>

    <button
      className="sub-toggle"
      onClick={() => openSection("proj-creative-agent")}
    >
      <span className="sub-label">CREATIVE AGENT</span>
      <span className="sub-time">Aug 2025</span>
    </button>
  
    
    <div className="project-entry project-entry-featured">
      <button className="sub-toggle" onClick={() => openSection("proj-vemosvamos")}>
        <span className="sub-copy">
          <span className="project-badge">LIVE · NEXT.JS · UI/UX</span>
          <span className="sub-label">VEMOSVAMOS</span>
          <span className="sub-time">Responsive bilingual client website</span>
        </span>
        <span className="project-arrow" aria-hidden="true">→</span>
      </button>
      <a className="project-live-link" href="https://www.vemosvamos.com/" target="_blank" rel="noreferrer">
        OPEN LIVE ↗
      </a>
    </div>

    <button
      className="sub-toggle"
      onClick={() => openSection("proj-yahoopress")}
    >
      <span className="sub-label">YAHOO CAPSTONE</span>
      <span className="sub-time">Agile · UX Research · Jul 2025</span>
    </button>

    <button
      className="sub-toggle"
      onClick={() => openSection("proj-furrytails")}
    >
      <span className="sub-label">FURRYTAILS</span>
      <span className="sub-time">May 2025</span>
    </button>

    <button
      className="sub-toggle"
      onClick={() => openSection("proj-personal-web")}
    >
      <span className="sub-label">PERSONAL WEB</span>
      <span className="sub-time">2025</span>
    </button>
  </div>
            </section>

        </main>

        <footer className="left-footer">
          <span>Links: </span>
          <a href="https://www.linkedin.com/in/camille-louise-rivera/">LinkedIn</a>

          <a
            href="https://github.com/camiicatt"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:camille.rivera@my.utsa.edu">Email</a>
        </footer>
      </div>

      {/* RIGHT HALF */}
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

      {/* GAMEY MODAL OVERLAY */}
      {activeSection && (
        <div className="modal-backdrop" onClick={closeSection}>
          <div
            className="modal-window"
            onClick={(e) => e.stopPropagation()} // stop click from closing when clicking inside
          >
            <div className="modal-top-bar">
              <span className="modal-top-label">INFO_WINDOW.EXE</span>
              <button className="modal-close" onClick={closeSection}>
                ✕
              </button>
            </div>

            {renderModalContent()}

            {activeProjectIndex >= 0 && (
              <nav className="modal-project-nav" aria-label="Browse projects">
                <button
                  className="modal-project-nav-btn"
                  onClick={() => browseProject(-1)}
                  aria-label={`Previous project: ${projectSections[(activeProjectIndex - 1 + projectSections.length) % projectSections.length].label}`}
                >
                  <span aria-hidden="true">←</span>
                  <span>
                    <small>PREVIOUS</small>
                    {projectSections[(activeProjectIndex - 1 + projectSections.length) % projectSections.length].label}
                  </span>
                </button>
                <button
                  className="modal-project-nav-btn modal-project-nav-next"
                  onClick={() => browseProject(1)}
                  aria-label={`Next project: ${projectSections[(activeProjectIndex + 1) % projectSections.length].label}`}
                >
                  <span>
                    <small>NEXT PROJECT</small>
                    {projectSections[(activeProjectIndex + 1) % projectSections.length].label}
                  </span>
                  <span aria-hidden="true">→</span>
                </button>
              </nav>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
