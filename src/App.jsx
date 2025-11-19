import { useState } from "react";
import "./App.css";
import Dither from "./Dither";

import idle1 from "./assets/camidusyRH.png";
import idle2 from "./assets/camidusyRH.png"; //changing later

import camipresenting from "./assets/camipresenting.png";
import creativeagEx from "./assets/creativeagEx.png";
import furrytails from "./assets/FurryTailsCoverArt.png";
import vemosvamos from "./assets/vemosvamos.png";
import group from "./assets/camillegorup.jpeg";
import group2 from "./assets/camille2.jpeg";

import camipxel from "./assets/PixelCamii.png"

function App() {
  const [activeSection, setActiveSection] = useState(null); // 'experience' | 'projects' | 'about' | null

  const openSection = (section) => {
    setActiveSection(section);
  };

  const closeSection = () => {
    setActiveSection(null);
  };

  const renderModalContent = () => {
    switch (activeSection) {
      case "experience":
        return (
          <>
            <h3 className="modal-title">EXPERIENCE</h3>
            <div className="modal-body">
              <div className="exp-row">
                <span className="exp-label">434 Media</span>
                <span className="exp-detail">UI/UX Front-End Developer </span>
                <span className="exp-time">June 2025 → present</span>
              </div>
              <p className="detail-text">
              - Redesigned the Vemos Vamos website with responsive layouts for mobile and desktop, improving
              navigation and increasing user engagement by 50%.
              </p>
              <p className="detail-text">
              - Led the creation of an AI-powered personalization suite (chatbot + asset generator), cutting manual design
              tasks by 70% and helping clients interact more effectively with the platform
              </p>
              <p className="detail-text">
              - Collaborated with designers and backend developers to implement new features using React, Next.js, and Tailwind CSS,
              </p>

              <div className="exp-row">
                <span className="exp-label">Yahoo</span>
                <span className="exp-detail">UI/UX Research & Engineering Lead</span>
                <span className="exp-time">July 2025 (1-week Inovation Sprint)</span>
              </div>
              <p className="detail-text">
              - Engineered a prototype enhancing YouTube’s platform with child-safe features inspired by YouTube Kids, including AI powered content filtering, parental controls, and curated recommendation logic.
              </p>
              <p className="detail-text">
              - Ran lightweight user testing with the SCRUM team (ages 6-12 and parents) to refine navigation, safety settings, and personalized recommendations in under 4 days.
              </p>

              <div className="exp-row">
                <span className="exp-label">Experian</span>
                <span className="exp-detail"> Product Development Consultant </span>
                <span className="exp-time">June 2025 (1-week Inovation Sprint)</span>
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
                <span className="exp-detail">First Year Experince Ambassador</span>
                <span className="exp-time">Dec 2023 → Jan 2025</span>
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
                <h3 className="modal-title">IDLE SCHOLAR (WIP)</h3>
                <div className="modal-body">
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
                  A modern, bilingual web application built with Next.js 15.4.6, featuring an integrated Culture Deck content management system powered by Airtable.

                  </p>
                  <p className="detail-text">
                    - The application showcases dynamic content delivery with robust fallback systems and comprehensive internationalization support.
                  </p>
                  <p className="detail-text">
                    - CloudFare Authentication
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
                    <h3 className="modal-title">YAHOO PRES</h3>
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
                        Yahoo Presentation is a prototype enhancing YouTube’s platform with child-safe features inspired by YouTube Kids, including AI powered content filtering, parental controls, and curated recommendation logic.
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
        
      case "about":
        return (
          <>
            <h3 className="modal-title">ABOUT</h3>
            <div className="modal-body">

            <div className="modal-media-card-bigger">
                <img
                  src={camipxel}
                  alt="cami-pixel"
                  className="modal-media-card-bigger-img"
                />
              <p className="modal-media-caption">Cami and her cats Suhsi and Burger</p>
              
             </div>



              <p className="detail-text">
                I’m a CS student at UTSA interested in deep learning, reasearch and cool UI. I like taking abstract ideas and turning them into
                interfaces you can poke at, break, and learn from.
              </p>
              <p className="detail-text">
                Right now I’m especially interested in model behavior under
                limited data, agent design, and how to make technical work feel
                playful instead of sterile.
              </p>
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
          <div className="name-block">
            <h2 className="name">CAMILLE RIVERA</h2>
            <h3 className="role">CS STUDENT · SOFTWARE ENG & LEARNING ALL ABOUT AI</h3>
          </div>
        </header>

        <main className="left-main">

        <section className="section">
            <button
              className="section-toggle"
              onClick={() => openSection("about")}
            >
              <span>ABOUT</span>
              <span className="section-toggle-icon">+</span>
            </button>

            <p className="about-text">
              CS student at UTSA interested in AI, Data Science, and SWE programs that look beautiful and work well.
              Always learning, always creating, becuase knowledge is the most powerful. 
            </p>
          </section>



          {/* EXPERIENCE button */}
          <section className="section">
            <button
              className="section-toggle"
              onClick={() => openSection("experience")}
            >
              <span>EXPERIENCE (theres more)</span>
              <span className="section-toggle-icon">+</span>
            </button>

            {/* a couple of inline hints so it’s not empty */}
            <div className="exp-row">
              <span className="exp-label">UTSA</span>
              <span className="exp-detail">Computer Science & Mathematics Minor </span>
              <span className="exp-time">Grad Date: May 2027</span>
              <span className="exp-time">GPA: 3.9</span>
              <span className="exp-time">2023 → present</span>
            </div>
          </section>

          {/* PROJECTS button */}
            <section className="section">
              <button className="section-toggle" onClick={() => VOID}>
                <span>PROJECTS</span>
                <span className="section-toggle-icon"> </span>
              </button>

  {/* INDENTED CLICKABLE PROJECTS */}
  <div className="sub-projects">
    <button
      className="sub-toggle"
      onClick={() => openSection("proj-idle-scholar")}
    >
      <span className="sub-label">IDLE SCHOLAR</span>
      <span className="sub-time"> RH 1st Overall, Oct '25 → present</span>
    </button>

    <button
      className="sub-toggle"
      onClick={() => openSection("proj-creative-agent")}
    >
      <span className="sub-label">CREATIVE AGENT</span>
      <span className="sub-time">Aug 2025</span>
    </button>
  
    
    <button
      className="sub-toggle"
      onClick={() => openSection("proj-vemosvamos")}
    >
      <span className="sub-label">VEMOSVAMOS</span>
      <span className="sub-time">Aug 2025</span>
    </button>

    <button
      className="sub-toggle"
      onClick={() => openSection("proj-yahoopress")}
    >
      <span className="sub-label">YAHOO PRESENTATION</span>
      <span className="sub-time">July 2025</span>
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
          <a href="www.linkedin.com/in/camille-louise-rivera/">LinkedIn</a>

          <a
            href="https://github.com/camiicatt"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:camille.rivera@utsa.edu">Email</a>
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
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
