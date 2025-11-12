import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Award, Code, ChevronDown, ExternalLink, Menu, X, Download, FileText } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResumeDropdownOpen, setIsResumeDropdownOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const achievementsRef = useRef(null);
  const contactRef = useRef(null);
  const resumeDropdownRef = useRef(null);

  useEffect(() => {
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
      date: "January 2025"
    },
    {
      title: "Realtime Chat App",
      tech: ["React.js", "Node.js", "Express.js", "Socket.IO"],
      icons: [techLogos.react, techLogos.nodejs, techLogos.express],
      description: "Real-time chat application with user authentication, session handling, and live message broadcasting across rooms.",
      link: "https://github.com/PVK-Nandan/Realtime-Chat-App",
      date: "August 2025"
    },
    {
      title: "Self-Healing Data Pipeline",
      tech: ["Python", "Airflow", "ML"],
      icons: [techLogos.python],
      description: "Auto-corrects data anomalies with ML models for intelligent imputation and anomaly detection, reducing manual intervention.",
      link: "https://github.com/PVK-Nandan/Self-Healing-Data-Pipeline-",
      date: "July 2025"
    },
    {
      title: "AI-Based Smart Factory Safety Monitoring",
      tech: ["YOLOv8", "Python", "OpenCV", "Deep Learning"],
      icons: [techLogos.python],
      description: "Real-time factory safety monitoring using YOLOv8 for PPE detection (helmet, vest) with 92% mAP accuracy. Integrated OpenCV for live camera processing and instant safety violation identification.",
      link: "https://github.com/PVK-Nandan/Smart-Factory-Safety-Monitoring-using-Yolov8",
      date: "October 2024"
    }
  ];

  const achievements = [
    {
      title: "Global Rank 783rd",
      description: "Among 21k+ participants in Leetcode Biweekly Contest 96",
      date: "January 2025"
    },
    {
      title: "Dean's Top 10% Students",
      description: "For academic excellence and extra-curricular activities",
      date: "January 2025"
    },
    {
      title: "3rd Rank in Hack AI Hackathon",
      description: "Outstanding performance in AI-focused competition",
      date: "December 2024"
    },
    {
      title: "HackerRank 3 Star Coder",
      description: "Achieved 3 Stars in HackerRank coding challenges",
      date: "September 2024"
    }
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
        <div className="background-effects">
          <div 
            className="cursor-glow"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
            }}
          />
          <div className="gradient-orb orb-1" />
          <div className="gradient-orb orb-2" />
          <div className="gradient-orb orb-3" />
        </div>

        <nav className={`navbar ${scrollY > 50 ? 'scrolled' : ''}`}>
          <div className="nav-content">
            <div className="logo">PVK Nandan</div>
            
            <div className="desktop-menu">
              {['Home', 'About', 'Projects', 'Achievements', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                >
                  {item}
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
                    <a 
                      href="/Nandan fullstack CV.pdf"
                      download="Nandan_Fullstack_Resume.pdf"
                      className="dropdown-item"
                      onClick={() => setIsResumeDropdownOpen(false)}
                    >
                      <Download size={16} />
                      <span>Full Stack Resume</span>
                    </a>
                    <a 
                      href="/PVKNandanCVFinal.pdf"
                      download="Nandan_ML_Resume.pdf"
                      className="dropdown-item"
                      onClick={() => setIsResumeDropdownOpen(false)}
                    >
                      <Download size={16} />
                      <span>ML Resume</span>
                    </a>
                  </div>
                )}
              </div>
            </div>

            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="mobile-menu">
              {['Home', 'About', 'Projects', 'Achievements', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(item.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                  className="mobile-nav-link"
                >
                  {item}
                </button>
              ))}
              <div className="mobile-resume-section">
                <div className="mobile-resume-title">
                  <FileText size={18} />
                  <span>Download Resume</span>
                </div>
                <a 
                  href="/Nandan fullstack CV.pdf"
                  download="Nandan_Fullstack_Resume.pdf"
                  className="mobile-resume-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Download size={16} />
                  <span>Full Stack Resume</span>
                </a>
                <a 
                  href="/PVKNandanCVFinal.pdf"
                  download="Nandan_ML_Resume.pdf"
                  className="mobile-resume-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Download size={16} />
                  <span>ML Resume</span>
                </a>
              </div>
            </div>
          )}
        </nav>

        <section ref={homeRef} className="hero-section">
          <div className="hero-content">
            <div className="profile-image-container fade-in">
              <div className="profile-image">
                <img 
                  src="/myimage.jpg"
                  alt="Nandan Profile"
                  className="profile-photo"
                />
              </div>
            </div>
            
            <h1 className="hero-title slide-up">
              Hi, I'm <span className="gradient-text">Pakki Venkata Kesari Nandan</span>
            </h1>
            
            <p className="hero-subtitle slide-up-delay-1">
              Full Stack Developer & Machine Learning Enthusiast
            </p>
            
            <div className="social-links slide-up-delay-2">
              <a 
                href="https://github.com/PVK-Nandan" 
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn github-btn"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/nandan-pakki-v-k-01639b253/" 
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn linkedin-btn"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a 
                href="mailto:pakkinandan09@gmail.com"
                className="social-btn email-btn"
              >
                <Mail size={20} />
                <span>Email</span>
              </a>
            </div>

            <div className="scroll-indicator">
              <ChevronDown size={32} />
            </div>
          </div>
        </section>

        <section ref={aboutRef} className="section">
          <div className="container">
            <h2 className="section-title">About Me</h2>
            
            <div className="about-grid">
              <div className="card">
                <div className="card-header">
                  <Code className="icon-purple" size={28} />
                  <h3>Education</h3>
                </div>
                <div className="education-item">
                  <h4>Lovely Professional University</h4>
                  <p>B.Tech - Computer Science and Engineering</p>
                  <p className="text-muted">CGPA: 7.4 | 2022 - Present</p>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <MapPin className="icon-pink" size={28} />
                  <h3>Location & Contact</h3>
                </div>
                <div className="contact-list">
                  <div className="contact-item">
                    <MapPin size={18} className="icon-purple" />
                    <span>Andhra Pradesh, India</span>
                  </div>
                  <div className="contact-item">
                    <Phone size={18} className="icon-purple" />
                    <span>+91-8142653786</span>
                  </div>
                  <div className="contact-item">
                    <Mail size={18} className="icon-purple" />
                    <span>pakkinandan09@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="skills-card card">
              <h3 className="skills-title">Technical Skills</h3>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4 className="skill-category-title purple">Languages</h4>
                  <div className="skill-tags">
                    {skills.languages.map((skill) => (
                      <div key={skill.name} className="skill-tag purple-tag">
                        <img src={skill.icon} alt={skill.name} className="skill-icon" />
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="skill-category">
                  <h4 className="skill-category-title pink">Frameworks</h4>
                  <div className="skill-tags">
                    {skills.frameworks.map((skill) => (
                      <div key={skill.name} className="skill-tag pink-tag">
                        <img src={skill.icon} alt={skill.name} className="skill-icon" />
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="skill-category">
                  <h4 className="skill-category-title blue">Tools</h4>
                  <div className="skill-tags">
                    {skills.tools.map((skill) => (
                      <div key={skill.name} className="skill-tag blue-tag">
                        <img src={skill.icon} alt={skill.name} className="skill-icon" />
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={projectsRef} className="section alt-bg">
          <div className="container">
            <h2 className="section-title">Featured Projects</h2>
            
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={index} className="project-card card">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    {project.link && (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                  <div className="project-icons">
                    {project.icons.map((icon, i) => (
                      <img key={i} src={icon} alt="tech" className="tech-icon" />
                    ))}
                  </div>
                  <p className="project-tech">{project.tech.join(', ')}</p>
                  <p className="project-description">{project.description}</p>
                  <p className="project-date">{project.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section ref={achievementsRef} className="section">
          <div className="container">
            <h2 className="section-title">Achievements</h2>
            
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-card card">
                  <Award className="achievement-icon" size={36} />
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

        <section ref={contactRef} className="section alt-bg">
          <div className="container contact-section">
            <h2 className="section-title">Let's Connect</h2>
            
            <p className="contact-description">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="contact-buttons">
              <a 
                href="mailto:pakkinandan09@gmail.com"
                className="contact-btn primary-btn"
              >
                <Mail size={24} />
                <span>Send Email</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/nandan-pakki-v-k-01639b253/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn secondary-btn"
              >
                <Linkedin size={24} />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>© 2025 Pakki Venkata Kesari Nandan. Built with React & Next.js.</p>
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
          background: linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%);
          color: white;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          overflow-x: hidden;
        }

        .background-effects {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }

        .cursor-glow {
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.3s ease-out;
          filter: blur(40px);
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          animation: pulse 4s ease-in-out infinite;
        }

        .orb-1 {
          top: 10%;
          left: 10%;
          width: 300px;
          height: 300px;
          background: rgba(59, 130, 246, 0.1);
        }

        .orb-2 {
          bottom: 10%;
          right: 10%;
          width: 400px;
          height: 400px;
          background: rgba(236, 72, 153, 0.1);
          animation-delay: 2s;
        }

        .orb-3 {
          top: 50%;
          left: 50%;
          width: 350px;
          height: 350px;
          background: rgba(168, 85, 247, 0.1);
          animation-delay: 1s;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(168, 85, 247, 0.2);
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          background: rgba(15, 23, 42, 0.95);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
        }

        .nav-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.2rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          background: linear-gradient(135deg, #a78bfa 0%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .desktop-menu {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-link {
          background: none;
          border: none;
          color: #e5e7eb;
          font-size: 1rem;
          cursor: pointer;
          transition: color 0.3s ease;
          padding: 0.5rem 0;
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #a78bfa;
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #a78bfa, #ec4899);
          animation: slideIn 0.3s ease;
        }

        @keyframes slideIn {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        .resume-dropdown {
          position: relative;
        }

        .resume-link {
          background: linear-gradient(135deg, #a78bfa 0%, #ec4899 100%);
          color: white !important;
          padding: 0.6rem 1.2rem;
          border-radius: 50px;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .resume-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(168, 85, 247, 0.3);
        }

        .dropdown-arrow {
          transition: transform 0.3s ease;
        }

        .dropdown-arrow.open {
          transform: rotate(180deg);
        }

        .dropdown-menu {
          position: absolute;
          top: calc(100% + 0.5rem);
          right: 0;
          background: rgba(30, 41, 59, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(168, 85, 247, 0.3);
          border-radius: 12px;
          padding: 0.5rem;
          min-width: 200px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
          animation: dropdownSlideIn 0.2s ease;
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
          gap: 0.6rem;
          padding: 0.8rem 1rem;
          color: #e5e7eb;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.2s ease;
          font-size: 0.95rem;
        }

        .dropdown-item:hover {
          background: rgba(168, 85, 247, 0.2);
          color: #a78bfa;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }

        .mobile-menu {
          background: rgba(15, 23, 42, 0.98);
          padding: 1.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-nav-link {
          background: none;
          border: none;
          color: #e5e7eb;
          font-size: 1.1rem;
          cursor: pointer;
          text-align: left;
          padding: 0.8rem 0;
          transition: color 0.3s ease;
        }

        .mobile-nav-link:hover {
          color: #a78bfa;
        }

        .mobile-resume-section {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(168, 85, 247, 0.2);
        }

        .mobile-resume-title {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          color: #a78bfa;
          font-weight: 600;
          margin-bottom: 0.8rem;
          font-size: 1rem;
        }

        .mobile-resume-link {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.8rem 1rem;
          color: #e5e7eb;
          text-decoration: none;
          background: rgba(168, 85, 247, 0.1);
          border-radius: 8px;
          margin-bottom: 0.5rem;
          transition: all 0.2s ease;
        }

        .mobile-resume-link:hover {
          background: rgba(168, 85, 247, 0.2);
          color: #a78bfa;
        }

        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6rem 2rem 2rem;
          position: relative;
          z-index: 1;
        }

        .hero-content {
          max-width: 1000px;
          text-align: center;
        }

        .profile-image-container {
          margin-bottom: 2rem;
        }

        .profile-image {
          width: 200px;
          height: 200px;
          margin: 0 auto;
          border-radius: 50%;
          background: linear-gradient(135deg, #a78bfa 0%, #ec4899 100%);
          padding: 4px;
          animation: pulse 2s ease-in-out infinite;
          overflow: hidden;
        }

        .profile-photo {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }

        .hero-title {
          font-size: clamp(2rem, 5vw, 4rem);
          font-weight: bold;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .gradient-text {
          background: linear-gradient(135deg, #a78bfa 0%, #ec4899 50%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: clamp(1.2rem, 3vw, 1.8rem);
          color: #d1d5db;
          margin-bottom: 2.5rem;
        }

        .social-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .social-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.8rem;
          border-radius: 50px;
          text-decoration: none;
          color: white;
          font-weight: 600;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .social-btn:hover {
          transform: scale(1.1) translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        .github-btn {
          background: linear-gradient(135deg, #a78bfa 0%, #ec4899 100%);
        }

        .linkedin-btn {
          background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
        }

        .email-btn {
          background: linear-gradient(135deg, #10b981 0%, #14b8a6 100%);
        }

        .scroll-indicator {
          animation: bounce 2s ease-in-out infinite;
          color: #a78bfa;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }

        .fade-in {
          animation: fadeIn 1s ease-out;
        }

        .slide-up {
          animation: slideUp 0.8s ease-out;
        }

        .slide-up-delay-1 {
          animation: slideUp 0.8s ease-out 0.2s backwards;
        }

        .slide-up-delay-2 {
          animation: slideUp 0.8s ease-out 0.4s backwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .section {
          padding: 5rem 2rem;
          position: relative;
          z-index: 1;
        }

        .alt-bg {
          background: rgba(15, 23, 42, 0.5);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: bold;
          text-align: center;
          margin-bottom: 3rem;
          background: linear-gradient(135deg, #a78bfa 0%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .card {
          background: rgba(30, 41, 59, 0.5);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 2rem;
          border: 1px solid rgba(168, 85, 247, 0.2);
          transition: all 0.3s ease;
        }

        .card:hover {
          border-color: rgba(168, 85, 247, 0.4);
          transform: translateY(-5px);
          box-shadow: 0 10px 40px rgba(168, 85, 247, 0.2);
        }

        .about-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1.5rem;
        }

        .card-header h3 {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .icon-purple {
          color: #a78bfa;
        }

        .icon-pink {
          color: #ec4899;
        }

        .education-item h4 {
          font-size: 1.2rem;
          color: #a78bfa;
          margin-bottom: 0.5rem;
        }

        .education-item p {
          color: #d1d5db;
          margin-bottom: 0.3rem;
        }

        .text-muted {
          color: #9ca3af !important;
        }

        .contact-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          color: #d1d5db;
        }

        .skills-card {
          margin-top: 2rem;
        }

        .skills-title {
          text-align: center;
          font-size: 1.8rem;
          margin-bottom: 2rem;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .skill-category-title {
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }

        .skill-category-title.purple {
          color: #a78bfa;
        }

        .skill-category-title.pink {
          color: #ec4899;
        }

        .skill-category-title.blue {
          color: #3b82f6;
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }

        .skill-tag {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .skill-icon {
          width: 20px;
          height: 20px;
          object-fit: contain;
        }

        .purple-tag {
          background: rgba(167, 139, 250, 0.2);
          color: #c4b5fd;
        }

        .pink-tag {
          background: rgba(236, 72, 153, 0.2);
          color: #f9a8d4;
        }

        .blue-tag {
          background: rgba(59, 130, 246, 0.2);
          color: #93c5fd;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .project-card {
          transition: all 0.3s ease;
        }

        .project-card:hover {
          transform: scale(1.05);
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .project-header h3 {
          font-size: 1.3rem;
          color: #a78bfa;
          font-weight: bold;
        }

        .project-link {
          color: #9ca3af;
          transition: color 0.3s ease;
        }

        .project-link:hover {
          color: #a78bfa;
        }

        .project-icons {
          display: flex;
          gap: 0.8rem;
          margin-bottom: 1rem;
        }

        .tech-icon {
          width: 28px;
          height: 28px;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .tech-icon:hover {
          transform: scale(1.2);
        }

        .project-tech {
          font-size: 0.85rem;
          color: #9ca3af;
          margin-bottom: 1rem;
        }

        .project-description {
          color: #d1d5db;
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .project-date {
          font-size: 0.8rem;
          color: #6b7280;
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .achievement-card {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
        }

        .achievement-icon {
          color: #fbbf24;
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .achievement-content h3 {
          font-size: 1.2rem;
          color: #a78bfa;
          margin-bottom: 0.5rem;
        }

        .achievement-content p {
          color: #d1d5db;
          margin-bottom: 0.5rem;
        }

        .achievement-date {
          font-size: 0.85rem;
          color: #6b7280 !important;
        }

        .contact-section {
          text-align: center;
          max-width: 800px;
        }

        .contact-description {
          font-size: 1.2rem;
          color: #d1d5db;
          margin-bottom: 3rem;
        }

        .contact-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
        }

        .contact-btn {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 1rem 2rem;
          border-radius: 50px;
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .contact-btn:hover {
          transform: scale(1.1) translateY(-3px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
        }

        .primary-btn {
          background: linear-gradient(135deg, #a78bfa 0%, #ec4899 100%);
          color: white;
        }

        .secondary-btn {
          background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
          color: white;
        }

        .footer {
          padding: 2rem;
          text-align: center;
          border-top: 1px solid rgba(168, 85, 247, 0.2);
          color: #9ca3af;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .hero-title {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 1.2rem;
          }

          .profile-image {
            width: 150px;
            height: 150px;
          }

          .social-links {
            flex-direction: column;
            align-items: stretch;
          }

          .social-btn {
            justify-content: center;
          }

          .section {
            padding: 3rem 1rem;
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
        }

        @media (max-width: 480px) {
          .nav-content {
            padding: 1rem;
          }

          .logo {
            font-size: 1.2rem;
          }

          .hero-section {
            padding: 5rem 1rem 2rem;
          }

          .card {
            padding: 1.5rem;
          }

          .section-title {
            font-size: 1.8rem;
          }

          .tech-icon {
            width: 24px;
            height: 24px;
          }
        }
      `}</style>
    </>
  );
};

export default Portfolio;