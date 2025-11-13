import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Award, Code, ChevronDown, ExternalLink, Menu, X, Download, FileText, Zap, Sparkles } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResumeDropdownOpen, setIsResumeDropdownOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [particles, setParticles] = useState([]);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const achievementsRef = useRef(null);
  const contactRef = useRef(null);
  const resumeDropdownRef = useRef(null);

  useEffect(() => {
    // Generate particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDelay: Math.random() * 8,
      animationDuration: 8 + Math.random() * 10
    }));
    setParticles(newParticles);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = [
        { name: 'home', ref: homeRef },
        { name: 'about', ref: aboutRef },
        { name: 'projects', ref: projectsRef },
        { name: 'achievements', ref: achievementsRef },
        { name: 'contact', ref: contactRef }
      ];

      for (const section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.name);
            break;
          }
        }
      }
    };

    const handleClickOutside = (event) => {
      if (resumeDropdownRef.current && !resumeDropdownRef.current.contains(event.target)) {
        setIsResumeDropdownOpen(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToSection = (sectionName) => {
    const refs = {
      home: homeRef,
      about: aboutRef,
      projects: projectsRef,
      achievements: achievementsRef,
      contact: contactRef
    };
    
    const ref = refs[sectionName];
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setActiveSection(sectionName);
  };

  const techLogos = {
    react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    nextjs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
  };

  const projects = [
    {
      title: "PlasticFreeIndia.org",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      icons: [techLogos.react, techLogos.nodejs, techLogos.express, techLogos.mongodb],
      description: "Full-stack NGO platform with dynamic campaign pages, blogs, and volunteer registration. Integrated MongoDB for managing user signups and content.",
      link: "https://github.com/PVK-Nandan/Plasticfreeindia.org",
      date: "January 2025",
      color: "cyan"
    },
    {
      title: "Realtime Chat App",
      tech: ["React.js", "Node.js", "Express.js", "Socket.IO"],
      icons: [techLogos.react, techLogos.nodejs, techLogos.express],
      description: "Real-time chat application with user authentication, session handling, and live message broadcasting across rooms.",
      link: "https://github.com/PVK-Nandan/Realtime-Chat-App",
      date: "August 2025",
      color: "magenta"
    },
    {
      title: "Self-Healing Data Pipeline",
      tech: ["Python", "Airflow", "ML"],
      icons: [techLogos.python],
      description: "Auto-corrects data anomalies with ML models for intelligent imputation and anomaly detection, reducing manual intervention.",
      link: "https://github.com/PVK-Nandan/Self-Healing-Data-Pipeline-",
      date: "July 2025",
      color: "yellow"
    },
    {
      title: "AI-Based Smart Factory Safety",
      tech: ["YOLOv8", "Python", "OpenCV"],
      icons: [techLogos.python],
      description: "Real-time factory safety monitoring using YOLOv8 for PPE detection with 92% mAP accuracy. Integrated OpenCV for live camera processing.",
      link: "https://github.com/PVK-Nandan/Smart-Factory-Safety-Monitoring-using-Yolov8",
      date: "October 2024",
      color: "green"
    }
  ];

  const achievements = [
    { title: "Global Rank 783rd", description: "Among 21k+ participants in Leetcode Biweekly Contest 96", date: "January 2025" },
    { title: "Dean's Top 10% Students", description: "For academic excellence and extra-curricular activities", date: "January 2025" },
    { title: "3rd Rank in Hack AI Hackathon", description: "Outstanding performance in AI-focused competition", date: "December 2024" },
    { title: "HackerRank 3 Star Coder", description: "Achieved 3 Stars in HackerRank coding challenges", date: "September 2024" }
  ];

  const skills = {
    languages: [
      { name: "Java", icon: techLogos.java },
      { name: "JavaScript", icon: techLogos.javascript },
      { name: "Python", icon: techLogos.python }
    ],
    frameworks: [
      { name: "React.js", icon: techLogos.react },
      { name: "Next.js", icon: techLogos.nextjs },
      { name: "Node.js", icon: techLogos.nodejs },
      { name: "Express.js", icon: techLogos.express }
    ],
    tools: [
      { name: "Git", icon: techLogos.git },
      { name: "GitHub", icon: techLogos.github },
      { name: "MongoDB", icon: techLogos.mongodb }
    ]
  };

  return (
    <>
      <div className="portfolio-container">
        {/* Animated Background */}
        <div className="animated-background" />
        
        {/* Particle System */}
        <div className="particle-container">
          {particles.map(p => (
            <div 
              key={p.id}
              className="particle"
              style={{
                left: `${p.left}%`,
                animationDelay: `${p.animationDelay}s`,
                animationDuration: `${p.animationDuration}s`
              }}
            />
          ))}
        </div>

        {/* Background Effects */}
        <div className="background-effects">
          <div 
            className="cursor-glow"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
            }}
          />
          <div className="mesh-gradient" />
          <div className="floating-shapes">
            <div className="shape" />
            <div className="shape" />
            <div className="shape" />
          </div>
        </div>

        {/* Navigation */}
        <nav className={`navbar ${scrollY > 50 ? 'scrolled' : ''}`}>
          <div className="nav-content">
            <div className="logo">PVK NANDAN</div>
            
            <div className="desktop-menu">
              {['Home', 'About', 'Projects', 'Achievements', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                >
                  <span className="nav-link-text">{item}</span>
                  <span className="nav-link-glow" />
                </button>
              ))}
              <div className="resume-dropdown" ref={resumeDropdownRef}>
                <button
                  onClick={() => setIsResumeDropdownOpen(!isResumeDropdownOpen)}
                  className="nav-link resume-link"
                >
                  <FileText size={18} />
                  <span>Resume</span>
                  <ChevronDown size={16} className={`dropdown-arrow ${isResumeDropdownOpen ? 'open' : ''}`} />
                </button>
                {isResumeDropdownOpen && (
                  <div className="dropdown-menu">
                    <a href="/NandanfullstackCV.pdf" download className="dropdown-item">
                      <Download size={16} />
                      <span>Full Stack Resume</span>
                    </a>
                    <a href="/PVKNandanCVFinal.pdf" download className="dropdown-item">
                      <Download size={16} />
                      <span>ML Resume</span>
                    </a>
                  </div>
                )}
              </div>
            </div>

            <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="mobile-menu">
              {['Home', 'About', 'Projects', 'Achievements', 'Contact'].map((item) => (
                <button key={item} onClick={() => { scrollToSection(item.toLowerCase()); setIsMenuOpen(false); }} className="mobile-nav-link">
                  {item}
                </button>
              ))}
              <div className="mobile-resume-section">
                <div className="mobile-resume-title"><FileText size={18} /><span>Download Resume</span></div>
                <a href="/Nandan fullstack CV.pdf" download className="mobile-resume-link" onClick={() => setIsMenuOpen(false)}>
                  <Download size={16} /><span>Full Stack Resume</span>
                </a>
                <a href="/PVKNandanCVFinal.pdf" download className="mobile-resume-link" onClick={() => setIsMenuOpen(false)}>
                  <Download size={16} /><span>ML Resume</span>
                </a>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section ref={homeRef} className="hero-section">
          <div className="hero-content">
            <div className="profile-wrapper">
              <div className="profile-ring ring-1" />
              <div className="profile-ring ring-2" />
              <div className="profile-ring ring-3" />
              <div className="profile-image-container">
                <img src="/myimage.jpg" alt="Nandan Profile" className="profile-photo" />
                <div className="profile-glow" />
              </div>
            </div>
            
            <h1 className="hero-title">
              <span className="title-line">Hi, I'm</span>
              <span className="title-name">Pakki Venkata Kesari</span>
              <span className="title-name">Nandan</span>
            </h1>
            
            <div className="hero-subtitle-wrapper">
              <Sparkles className="sparkle-icon" size={24} />
              <p className="hero-subtitle">Full Stack Developer & ML Enthusiast</p>
              <Sparkles className="sparkle-icon" size={24} />
            </div>
            
            <div className="social-links">
              <a href="https://github.com/PVK-Nandan" target="_blank" rel="noopener noreferrer" className="social-btn github-btn">
                <Github size={20} />
                <span>GitHub</span>
                <div className="btn-glow" />
              </a>
              <a href="https://www.linkedin.com/in/nandan-pakki-v-k-01639b253/" target="_blank" rel="noopener noreferrer" className="social-btn linkedin-btn">
                <Linkedin size={20} />
                <span>LinkedIn</span>
                <div className="btn-glow" />
              </a>
              <a href="mailto:pakkinandan09@gmail.com" className="social-btn email-btn">
                <Mail size={20} />
                <span>Email</span>
                <div className="btn-glow" />
              </a>
            </div>

            <div className="scroll-indicator">
              <div className="scroll-line" />
              <ChevronDown className="scroll-arrow" size={32} />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} className="section">
          <div className="container">
            <h2 className="section-title">
              <Zap className="title-icon" size={40} />
              About Me
            </h2>
            
            <div className="about-grid">
              <div className="glass-card education-card">
                <div className="card-glow cyan-glow" />
                <div className="card-header">
                  <Code className="icon-cyan" size={28} />
                  <h3>Education</h3>
                </div>
                <div className="education-item">
                  <h4>Lovely Professional University</h4>
                  <p>B.Tech - Computer Science and Engineering</p>
                  <p className="text-muted">CGPA: 7.4 | 2022 - Present</p>
                </div>
              </div>

              <div className="glass-card contact-card">
                <div className="card-glow magenta-glow" />
                <div className="card-header">
                  <MapPin className="icon-magenta" size={28} />
                  <h3>Location & Contact</h3>
                </div>
                <div className="contact-list">
                  <div className="contact-item">
                    <MapPin size={18} className="icon-cyan" />
                    <span>Andhra Pradesh, India</span>
                  </div>
                  <div className="contact-item">
                    <Phone size={18} className="icon-cyan" />
                    <span>+91-8142653786</span>
                  </div>
                  <div className="contact-item">
                    <Mail size={18} className="icon-cyan" />
                    <span>pakkinandan09@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="skills-card glass-card">
              <div className="card-glow yellow-glow" />
              <h3 className="skills-title">Technical Arsenal</h3>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4 className="skill-category-title cyan">Languages</h4>
                  <div className="skill-tags">
                    {skills.languages.map((skill) => (
                      <div key={skill.name} className="skill-tag cyan-tag">
                        <img src={skill.icon} alt={skill.name} className="skill-icon" />
                        <span>{skill.name}</span>
                        <div className="tag-shine" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="skill-category">
                  <h4 className="skill-category-title magenta">Frameworks</h4>
                  <div className="skill-tags">
                    {skills.frameworks.map((skill) => (
                      <div key={skill.name} className="skill-tag magenta-tag">
                        <img src={skill.icon} alt={skill.name} className="skill-icon" />
                        <span>{skill.name}</span>
                        <div className="tag-shine" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="skill-category">
                  <h4 className="skill-category-title yellow">Tools</h4>
                  <div className="skill-tags">
                    {skills.tools.map((skill) => (
                      <div key={skill.name} className="skill-tag yellow-tag">
                        <img src={skill.icon} alt={skill.name} className="skill-icon" />
                        <span>{skill.name}</span>
                        <div className="tag-shine" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={projectsRef} className="section">
          <div className="container">
            <h2 className="section-title">
              <Sparkles className="title-icon" size={40} />
              Featured Projects
            </h2>
            
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={index} className={`project-card glass-card project-${project.color}`}>
                  <div className={`card-glow ${project.color}-glow`} />
                  <div className="project-number">{String(index + 1).padStart(2, '0')}</div>
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                  <div className="project-icons">
                    {project.icons.map((icon, i) => (
                      <div key={i} className="tech-icon-wrapper">
                        <img src={icon} alt="tech" className="tech-icon" />
                      </div>
                    ))}
                  </div>
                  <p className="project-tech">{project.tech.join(' • ')}</p>
                  <p className="project-description">{project.description}</p>
                  <p className="project-date">{project.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section ref={achievementsRef} className="section">
          <div className="container">
            <h2 className="section-title">
              <Award className="title-icon" size={40} />
              Achievements
            </h2>
            
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-card glass-card">
                  <div className="card-glow achievement-glow" />
                  <div className="achievement-icon-wrapper">
                    <Award className="achievement-icon" size={36} />
                    <div className="icon-pulse" />
                  </div>
                  <div className="achievement-content">
                    <h3>{achievement.title}</h3>
                    <p>{achievement.description}</p>
                    <p className="achievement-date">{achievement.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} className="section">
          <div className="container contact-section">
            <h2 className="section-title">
              <Mail className="title-icon" size={40} />
              Let's Connect
            </h2>
            
            <p className="contact-description">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="contact-buttons">
              <a href="mailto:pakkinandan09@gmail.com" className="contact-btn primary-btn">
                <Mail size={24} />
                <span>Send Email</span>
                <div className="btn-glow" />
              </a>
              <a href="https://www.linkedin.com/in/nandan-pakki-v-k-01639b253/" target="_blank" rel="noopener noreferrer" className="contact-btn secondary-btn">
                <Linkedin size={24} />
                <span>Connect on LinkedIn</span>
                <div className="btn-glow" />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>© 2025 Pakki Venkata Kesari Nandan. Crafted with passion and code.</p>
        </footer>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .portfolio-container {
          min-height: 100vh;
          background: #000000;
          color: white;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          overflow-x: hidden;
          position: relative;
        }

        /* Animated Background */
        .animated-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          background: linear-gradient(45deg, #000000, #0a0a0a, #1a0a1f, #0a0a0a, #000000);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        /* Particle System */
        .particle-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: white;
          border-radius: 50%;
          opacity: 0;
          animation: particleFloat 8s infinite;
        }

        @keyframes particleFloat {
          0% {
            transform: translateY(100vh) translateX(0) scale(0);
            opacity: 0;
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% {
            transform: translateY(-100vh) translateX(100px) scale(1);
            opacity: 0;
          }
        }

        /* Background Effects */
        .background-effects {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 2;
          overflow: hidden;
        }

        .cursor-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(0, 255, 255, 0.15) 0%, transparent 70%);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.15s ease-out;
          filter: blur(60px);
          mix-blend-mode: screen;
        }

        .mesh-gradient {
          position: fixed;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(at 20% 30%, rgba(255, 0, 255, 0.1) 0px, transparent 50%),
            radial-gradient(at 80% 70%, rgba(0, 255, 255, 0.1) 0px, transparent 50%),
            radial-gradient(at 50% 50%, rgba(255, 255, 0, 0.05) 0px, transparent 50%);
          animation: meshMove 20s ease infinite;
          opacity: 0.6;
        }

        @keyframes meshMove {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(50px, -50px) scale(1.1); }
          66% { transform: translate(-50px, 50px) scale(0.9); }
        }

        .floating-shapes {
          position: fixed;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .shape {
          position: absolute;
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          filter: blur(40px);
          opacity: 0.15;
          animation: float 20s ease-in-out infinite;
        }

        .shape:nth-child(1) {
          width: 300px;
          height: 300px;
          background: linear-gradient(45deg, #ff00ff, #00ffff);
          top: 10%;
          left: 10%;
        }

        .shape:nth-child(2) {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #ffff00, #ff00ff);
          bottom: 20%;
          right: 15%;
          animation-delay: -5s;
        }

        .shape:nth-child(3) {
          width: 250px;
          height: 250px;
          background: linear-gradient(225deg, #00ffff, #ffff00);
          top: 50%;
          left: 50%;
          animation-delay: -10s;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          }
          25% {
            transform: translate(100px, -100px) rotate(90deg) scale(1.1);
            border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
          }
          50% {
            transform: translate(50px, 100px) rotate(180deg) scale(0.9);
            border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
          }
          75% {
            transform: translate(-100px, 50px) rotate(270deg) scale(1.05);
            border-radius: 30% 70% 30% 70% / 70% 30% 70% 30%;
          }
        }

        /* Navigation */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(30px) saturate(180%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navbar.scrolled {
          background: rgba(0, 0, 0, 0.8);
          box-shadow: 0 8px 32px rgba(0, 255, 255, 0.1), 0 0 80px rgba(255, 0, 255, 0.05);
          border-bottom: 1px solid rgba(0, 255, 255, 0.3);
        }

        .nav-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1.2rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 900;
          background: linear-gradient(90deg, #00ffff, #ff00ff, #ffff00, #00ffff);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
          text-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
          letter-spacing: 2px;
        }

        @keyframes shimmer {
          to { background-position: 200% center; }
        }

        .desktop-menu {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-link {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          padding: 0.5rem 1rem;
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .nav-link-text {
          position: relative;
          z-index: 2;
        }

        .nav-link-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.3), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s;
        }

        .nav-link:hover .nav-link-glow {
          transform: translateX(100%);
        }

        .nav-link:hover,
        .nav-link.active {
          color: #00ffff;
          text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #00ffff, transparent);
          box-shadow: 0 0 10px #00ffff;
          animation: activeGlow 2s ease-in-out infinite;
        }

        @keyframes activeGlow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        .resume-dropdown {
          position: relative;
        }

        .resume-link {
          background: linear-gradient(135deg, #00ffff, #ff00ff);
          color: white !important;
          padding: 0.6rem 1.2rem;
          border-radius: 50px;
          font-weight: 600;
          position: relative;
          overflow: hidden;
        }

        .resume-link::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #ff00ff, #00ffff);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .resume-link:hover::before {
          opacity: 1;
        }

        .resume-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 255, 255, 0.4);
        }

        .dropdown-arrow {
          transition: transform 0.3s ease;
        }

        .dropdown-arrow.open {
          transform: rotate(180deg);
        }

        .dropdown-menu {
          position: absolute;
          top: calc(100% + 0.8rem);
          right: 0;
          background: rgba(10, 10, 10, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 255, 255, 0.3);
          border-radius: 16px;
          padding: 0.5rem;
          min-width: 220px;
          box-shadow: 0 12px 40px rgba(0, 255, 255, 0.2);
          animation: dropdownSlideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes dropdownSlideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 1rem;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          border-radius: 12px;
          transition: all 0.2s ease;
          font-size: 0.95rem;
          position: relative;
          overflow: hidden;
        }

        .dropdown-item::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1));
          opacity: 0;
          transition: opacity 0.2s;
        }

        .dropdown-item:hover::before {
          opacity: 1;
        }

        .dropdown-item:hover {
          color: #00ffff;
          transform: translateX(5px);
        }

        .mobile-menu-btn {
          display: none;
          background: rgba(0, 255, 255, 0.1);
          border: 1px solid rgba(0, 255, 255, 0.3);
          color: white;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 8px;
          transition: all 0.3s;
        }

        .mobile-menu-btn:hover {
          background: rgba(0, 255, 255, 0.2);
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
        }

        .mobile-menu {
          background: rgba(0, 0, 0, 0.98);
          backdrop-filter: blur(20px);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          border-top: 1px solid rgba(0, 255, 255, 0.2);
        }

        .mobile-nav-link {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.2rem;
          cursor: pointer;
          text-align: left;
          padding: 1rem;
          transition: all 0.3s ease;
          border-radius: 8px;
        }

        .mobile-nav-link:hover {
          color: #00ffff;
          background: rgba(0, 255, 255, 0.1);
          transform: translateX(10px);
        }

        .mobile-resume-section {
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(0, 255, 255, 0.2);
        }

        .mobile-resume-title {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          color: #00ffff;
          font-weight: 700;
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }

        .mobile-resume-link {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 1rem;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          background: rgba(0, 255, 255, 0.1);
          border-radius: 12px;
          margin-bottom: 0.8rem;
          transition: all 0.3s ease;
          border: 1px solid rgba(0, 255, 255, 0.2);
        }

        .mobile-resume-link:hover {
          background: rgba(0, 255, 255, 0.2);
          color: #00ffff;
          transform: translateX(10px);
        }

        /* Hero Section */
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8rem 2rem 2rem;
          position: relative;
          z-index: 10;
        }

        .hero-content {
          max-width: 1200px;
          text-align: center;
        }

        .profile-wrapper {
          position: relative;
          width: 250px;
          height: 250px;
          margin: 0 auto 3rem;
        }

        .profile-ring {
          position: absolute;
          border-radius: 50%;
          border: 2px solid transparent;
          animation: ringRotate 8s linear infinite;
        }

        .profile-ring.ring-1 {
          inset: -20px;
          border-color: rgba(0, 255, 255, 0.3);
          animation-duration: 8s;
        }

        .profile-ring.ring-2 {
          inset: -40px;
          border-color: rgba(255, 0, 255, 0.3);
          animation-duration: 12s;
          animation-direction: reverse;
        }

        .profile-ring.ring-3 {
          inset: -60px;
          border-color: rgba(255, 255, 0, 0.3);
          animation-duration: 16s;
        }

        @keyframes ringRotate {
          from {
            transform: rotate(0deg);
            border-width: 2px 0 2px 0;
          }
          50% {
            border-width: 0 2px 0 2px;
          }
          to {
            transform: rotate(360deg);
            border-width: 2px 0 2px 0;
          }
        }

        .profile-image-container {
          width: 250px;
          height: 250px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00ffff, #ff00ff);
          padding: 5px;
          position: relative;
          z-index: 2;
          overflow: hidden;
          animation: profilePulse 3s ease-in-out infinite;
        }

        @keyframes profilePulse {
          0%, 100% {
            box-shadow: 0 0 30px rgba(0, 255, 255, 0.5), 0 0 60px rgba(255, 0, 255, 0.3);
          }
          50% {
            box-shadow: 0 0 50px rgba(0, 255, 255, 0.8), 0 0 100px rgba(255, 0, 255, 0.5);
          }
        }

        .profile-photo {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          position: relative;
          z-index: 1;
        }

        .profile-glow {
          position: absolute;
          inset: -50%;
          background: conic-gradient(from 0deg, #00ffff, #ff00ff, #ffff00, #00ffff);
          animation: glowRotate 4s linear infinite;
          opacity: 0.6;
          filter: blur(40px);
        }

        @keyframes glowRotate {
          to {
            transform: rotate(360deg);
          }
        }

        .hero-title {
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .title-line {
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          font-weight: 600;
          color: rgba(255, 255, 255, 0.6);
          animation: fadeInUp 0.8s ease-out;
        }

        .title-name {
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 900;
          background: linear-gradient(135deg, #00ffff 0%, #ff00ff 50%, #ffff00 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: fadeInUp 0.8s ease-out 0.2s backwards, titleGlow 3s ease-in-out infinite;
          line-height: 1.1;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes titleGlow {
          0%, 100% {
            filter: drop-shadow(0 0 20px rgba(0, 255, 255, 0.5));
          }
          50% {
            filter: drop-shadow(0 0 40px rgba(255, 0, 255, 0.7));
          }
        }

        .hero-subtitle-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          animation: fadeInUp 0.8s ease-out 0.4s backwards;
        }

        .sparkle-icon {
          color: #ffff00;
          animation: sparkle 2s ease-in-out infinite;
        }

        .sparkle-icon:last-child {
          animation-delay: 1s;
        }

        @keyframes sparkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.2) rotate(180deg);
          }
        }

        .hero-subtitle {
          font-size: clamp(1.2rem, 3vw, 1.8rem);
          color: rgba(255, 255, 255, 0.8);
          font-weight: 500;
        }

        .social-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 4rem;
          animation: fadeInUp 0.8s ease-out 0.6s backwards;
        }

        .social-btn {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 1rem 2rem;
          border-radius: 50px;
          text-decoration: none;
          color: white;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          border: 2px solid transparent;
        }

        .btn-glow {
          position: absolute;
          inset: -100%;
          background: conic-gradient(from 0deg, transparent, white, transparent);
          animation: btnRotate 3s linear infinite;
          opacity: 0;
          transition: opacity 0.4s;
        }

        .social-btn:hover .btn-glow {
          opacity: 0.3;
        }

        @keyframes btnRotate {
          to {
            transform: rotate(360deg);
          }
        }

        .social-btn:hover {
          transform: scale(1.1) translateY(-5px);
        }

        .github-btn {
          background: linear-gradient(135deg, #00ffff, #0080ff);
          box-shadow: 0 4px 20px rgba(0, 255, 255, 0.3);
        }

        .github-btn:hover {
          box-shadow: 0 8px 40px rgba(0, 255, 255, 0.5);
        }

        .linkedin-btn {
          background: linear-gradient(135deg, #0080ff, #ff00ff);
          box-shadow: 0 4px 20px rgba(0, 128, 255, 0.3);
        }

        .linkedin-btn:hover {
          box-shadow: 0 8px 40px rgba(0, 128, 255, 0.5);
        }

        .email-btn {
          background: linear-gradient(135deg, #ff00ff, #ffff00);
          box-shadow: 0 4px 20px rgba(255, 0, 255, 0.3);
        }

        .email-btn:hover {
          box-shadow: 0 8px 40px rgba(255, 0, 255, 0.5);
        }

        .scroll-indicator {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          animation: fadeIn 1s ease-out 1s backwards;
        }

        .scroll-line {
          width: 2px;
          height: 60px;
          background: linear-gradient(to bottom, transparent, #00ffff);
          position: relative;
          overflow: hidden;
        }

        .scroll-line::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 30px;
          background: linear-gradient(to bottom, #00ffff, transparent);
          animation: scrollLineMove 2s ease-in-out infinite;
        }

        @keyframes scrollLineMove {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(200%);
          }
        }

        .scroll-arrow {
          color: #00ffff;
          animation: bounce 2s ease-in-out infinite;
          filter: drop-shadow(0 0 10px rgba(0, 255, 255, 0.5));
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(15px);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Sections */
        .section {
          padding: 6rem 2rem;
          position: relative;
          z-index: 10;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          text-align: center;
          margin-bottom: 4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          background: linear-gradient(135deg, #00ffff, #ff00ff, #ffff00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: titleFloat 3s ease-in-out infinite;
        }

        @keyframes titleFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .title-icon {
          animation: iconSpin 4s ease-in-out infinite;
        }

        @keyframes iconSpin {
          0%, 100% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(15deg) scale(1.1);
          }
        }

        /* Glass Card */
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 2.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .glass-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 24px;
          padding: 2px;
          background: linear-gradient(135deg, rgba(0, 255, 255, 0.5), rgba(255, 0, 255, 0.5));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s;
        }

        .glass-card:hover::before {
          opacity: 1;
        }

        .glass-card:hover {
          transform: translateY(-10px) scale(1.02);
        }

        .card-glow {
          position: absolute;
          inset: -50%;
          opacity: 0;
          filter: blur(40px);
          transition: opacity 0.4s;
          pointer-events: none;
        }

        .glass-card:hover .card-glow {
          opacity: 0.6;
        }

        .cyan-glow {
          background: radial-gradient(circle, rgba(0, 255, 255, 0.4), transparent 70%);
        }

        .magenta-glow {
          background: radial-gradient(circle, rgba(255, 0, 255, 0.4), transparent 70%);
        }

        .yellow-glow {
          background: radial-gradient(circle, rgba(255, 255, 0, 0.3), transparent 70%);
        }

        .achievement-glow {
          background: radial-gradient(circle, rgba(255, 215, 0, 0.4), transparent 70%);
        }

        /* About Section */
        .about-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .card-header h3 {
          font-size: 1.8rem;
          font-weight: 700;
          background: linear-gradient(135deg, #00ffff, #ff00ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .icon-cyan {
          color: #00ffff;
          filter: drop-shadow(0 0 10px rgba(0, 255, 255, 0.5));
        }

        .icon-magenta {
          color: #ff00ff;
          filter: drop-shadow(0 0 10px rgba(255, 0, 255, 0.5));
        }

        .education-item h4 {
          font-size: 1.3rem;
          color: #00ffff;
          margin-bottom: 0.8rem;
          font-weight: 700;
        }

        .education-item p {
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 0.5rem;
          font-size: 1.05rem;
        }

        .text-muted {
          color: rgba(255, 255, 255, 0.5) !important;
          font-size: 0.95rem !important;
        }

        .contact-list {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.05rem;
          padding: 0.8rem;
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          background: rgba(0, 255, 255, 0.1);
          transform: translateX(10px);
        }

        /* Skills */
        .skills-card {
          margin-top: 3rem;
        }

        .skills-title {
          text-align: center;
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 3rem;
          background: linear-gradient(135deg, #00ffff, #ff00ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2.5rem;
        }

        .skill-category-title {
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .skill-category-title::before {
          content: '';
          width: 4px;
          height: 24px;
          border-radius: 2px;
        }

        .skill-category-title.cyan {
          color: #00ffff;
        }

        .skill-category-title.cyan::before {
          background: linear-gradient(to bottom, #00ffff, transparent);
        }

        .skill-category-title.magenta {
          color: #ff00ff;
        }

        .skill-category-title.magenta::before {
          background: linear-gradient(to bottom, #ff00ff, transparent);
        }

        .skill-category-title.yellow {
          color: #ffff00;
        }

        .skill-category-title.yellow::before {
          background: linear-gradient(to bottom, #ffff00, transparent);
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .skill-tag {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.8rem 1.2rem;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .tag-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s;
        }

        .skill-tag:hover .tag-shine {
          left: 100%;
        }

        .skill-tag:hover {
          transform: translateY(-5px) scale(1.05);
        }

        .skill-icon {
          width: 24px;
          height: 24px;
          object-fit: contain;
          filter: drop-shadow(0 0 5px currentColor);
        }

        .cyan-tag {
          background: rgba(0, 255, 255, 0.1);
          color: #00ffff;
          border: 1px solid rgba(0, 255, 255, 0.3);
        }

        .cyan-tag:hover {
          background: rgba(0, 255, 255, 0.2);
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
        }

        .magenta-tag {
          background: rgba(255, 0, 255, 0.1);
          color: #ff00ff;
          border: 1px solid rgba(255, 0, 255, 0.3);
        }

        .magenta-tag:hover {
          background: rgba(255, 0, 255, 0.2);
          box-shadow: 0 0 20px rgba(255, 0, 255, 0.4);
        }

        .yellow-tag {
          background: rgba(255, 255, 0, 0.1);
          color: #ffff00;
          border: 1px solid rgba(255, 255, 0, 0.3);
        }

        .yellow-tag:hover {
          background: rgba(255, 255, 0, 0.2);
          box-shadow: 0 0 20px rgba(255, 255, 0, 0.4);
        }

        /* Projects */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .project-card {
          position: relative;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-number {
          position: absolute;
          top: -10px;
          right: 20px;
          font-size: 4rem;
          font-weight: 900;
          opacity: 0.1;
          background: linear-gradient(135deg, #00ffff, #ff00ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          transition: all 0.3s;
        }

        .project-card:hover .project-number {
          opacity: 0.3;
          transform: scale(1.2);
        }

        .project-card:hover {
          transform: translateY(-15px) scale(1.03);
        }

        .project-cyan:hover {
          box-shadow: 0 20px 60px rgba(0, 255, 255, 0.3);
        }

        .project-magenta:hover {
          box-shadow: 0 20px 60px rgba(255, 0, 255, 0.3);
        }

        .project-yellow:hover {
          box-shadow: 0 20px 60px rgba(255, 255, 0, 0.3);
        }

        .project-green:hover {
          box-shadow: 0 20px 60px rgba(0, 255, 0, 0.3);
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .project-header h3 {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #00ffff, #ff00ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .project-link {
          color: rgba(255, 255, 255, 0.6);
          transition: all 0.3s ease;
          padding: 0.5rem;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
        }

        .project-link:hover {
          color: #00ffff;
          background: rgba(0, 255, 255, 0.1);
          transform: rotate(45deg) scale(1.1);
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
        }

        .project-icons {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .tech-icon-wrapper {
          width: 40px;
          height: 40px;
          padding: 8px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .tech-icon-wrapper:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-5px) rotate(10deg);
          box-shadow: 0 5px 20px rgba(0, 255, 255, 0.3);
        }

        .tech-icon {
          width: 24px;
          height: 24px;
          object-fit: contain;
        }

        .project-tech {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .project-description {
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 1.5rem;
          line-height: 1.7;
          font-size: 1.05rem;
        }

        .project-date {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.4);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Achievements */
        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .achievement-card {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
        }

        .achievement-icon-wrapper {
          position: relative;
          flex-shrink: 0;
        }

        .achievement-icon {
          color: #ffd700;
          position: relative;
          z-index: 2;
          filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.5));
        }

        .icon-pulse {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 215, 0, 0.3), transparent);
          animation: iconPulse 2s ease-in-out infinite;
        }

        @keyframes iconPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        .achievement-content h3 {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 0.8rem;
          background: linear-gradient(135deg, #00ffff, #ffff00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .achievement-content p {
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 0.8rem;
          line-height: 1.6;
        }

        .achievement-date {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.4) !important;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Contact Section */
        .contact-section {
          text-align: center;
          max-width: 900px;
        }

        .contact-description {
          font-size: 1.3rem;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 3rem;
          line-height: 1.8;
        }

        .contact-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
        }

        .contact-btn {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.2rem 2.5rem;
          border-radius: 50px;
          text-decoration: none;
          font-size: 1.2rem;
          font-weight: 700;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          border: 2px solid transparent;
        }

        .contact-btn:hover {
          transform: scale(1.15) translateY(-5px);
        }

        .primary-btn {
          background: linear-gradient(135deg, #00ffff, #ff00ff);
          color: white;
          box-shadow: 0 8px 30px rgba(0, 255, 255, 0.4);
        }

        .primary-btn:hover {
          box-shadow: 0 12px 50px rgba(0, 255, 255, 0.6);
        }

        .secondary-btn {
          background: linear-gradient(135deg, #ff00ff, #ffff00);
          color: white;
          box-shadow: 0 8px 30px rgba(255, 0, 255, 0.4);
        }

        .secondary-btn:hover {
          box-shadow: 0 12px 50px rgba(255, 0, 255, 0.6);
        }

        /* Footer */
        .footer {
          padding: 3rem 2rem;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.5);
          position: relative;
          z-index: 10;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
        }

        .footer p {
          font-size: 1rem;
          background: linear-gradient(90deg, #00ffff, #ff00ff, #ffff00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .hero-section {
            padding: 6rem 1rem 2rem;
          }

          .profile-wrapper {
            width: 200px;
            height: 200px;
          }

          .profile-image-container {
            width: 200px;
            height: 200px;
          }

          .profile-ring.ring-1 {
            inset: -15px;
          }

          .profile-ring.ring-2 {
            inset: -30px;
          }

          .profile-ring.ring-3 {
            inset: -45px;
          }

          .title-name {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .social-links {
            flex-direction: column;
            align-items: stretch;
          }

          .social-btn {
            justify-content: center;
          }

          .section {
            padding: 4rem 1rem;
          }

          .about-grid {
            grid-template-columns: 1fr;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .achievements-grid {
            grid-template-columns: 1fr;
          }

          .contact-buttons {
            flex-direction: column;
          }

          .contact-btn {
            justify-content: center;
          }

          .glass-card {
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .nav-content {
            padding: 1rem;
          }

          .logo {
            font-size: 1.2rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .title-icon {
            width: 30px;
            height: 30px;
          }

          .profile-wrapper {
            width: 150px;
            height: 150px;
          }

          .profile-image-container {
            width: 150px;
            height: 150px;
          }

          .tech-icon-wrapper {
            width: 35px;
            height: 35px;
          }

          .tech-icon {
            width: 20px;
            height: 20px;
          }

          .project-number {
            font-size: 3rem;
          }
        }

        /* Smooth Scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Selection */
        ::selection {
          background: rgba(0, 255, 255, 0.3);
          color: white;
        }

        /* Scrollbar */
        ::-webkit-scrollbar {
          width: 12px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.5);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #00ffff, #ff00ff);
          border-radius: 6px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #ff00ff, #ffff00);
        }
      `}</style>
    </>
  );
};

export default Portfolio;