import { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Award,
  Code2,
  Server,
  Database,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
  ChevronRight,
  ArrowUpRight,
  Menu,
  X,
  Cpu,
  Layout,
  Laptop
} from 'lucide-react';

const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.06 1.53 1.53 0 0 0 0 3.06m1.39 9.74v-8.37H5.07v8.37h2.78z" />
  </svg>
);

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const profile = {
    name: "Sreeja Sreenivasan",
    badgeInitials: "SS",
    title: "Full Stack Developer",
    subtitle: "React.js • ASP.NET Core • C# • SQL Server • RESTful APIs",
    location: "Thrissur, Kerala, India",
    email: "sreejaosreenivasan@gmail.com",
    phone: "+91 98469 05704",
    linkedin: "https://linkedin.com/in/sreeja-sreenivasan",
    linkedinDisplay: "linkedin.com/in/sreeja-sreenivasan",
    github: "https://github.com/SreejaJintu",
    githubDisplay: "github.com/SreejaJintu",
    summary:
      "Full Stack Developer with 1+ year of professional experience developing, maintaining, troubleshooting, and deploying web applications using React.js, ASP.NET Core, C#, Entity Framework Core, SQL Server, JavaScript, HTML5, and CSS3. Experienced in developing responsive user interfaces, integrating RESTful APIs, implementing authentication and authorization, and working with database-driven applications. Strong practical experience setting up and maintaining existing projects in Visual Studio 2022, resolving package and dependency issues, managing package versions, troubleshooting compatibility errors, and deploying applications using Plesk. Experienced in client-based development, application maintenance, debugging, and mentoring interns.",

    keyStrengths: [
      {
        title: "Full-Stack Development",
        desc: "Experienced in building scalable web applications using modern frontend and backend technologies, with deep expertise in API integration, authentication, and database-driven solutions.",
        icon: <Code2 className="w-5 h-5 text-cyan-400" />
      },
      {
        title: "Problem Solving & Collaboration",
        desc: "Skilled at analyzing technical challenges, optimizing application performance, and working effectively with teams and clients to deliver business-focused solutions.",
        icon: <Cpu className="w-5 h-5 text-blue-400" />
      },
      {
        title: "Technical Leadership & Continuous Learning",
        desc: "Committed to mentoring team members, sharing best practices, conducting code reviews, and continuously expanding knowledge of emerging technologies, frameworks, and software development methodologies.",
        icon: <Sparkles className="w-5 h-5 text-indigo-400" />
      }
    ],

    skillCategories: [
      {
        title: "Frontend Technologies",
        icon: <Layout className="w-5 h-5 text-cyan-400" />,
        skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "AJAX", "Responsive Design"]
      },
      {
        title: "Backend Technologies",
        icon: <Server className="w-5 h-5 text-blue-400" />,
        skills: ["ASP.NET Core", ".NET Core", "C#", "ASP.NET WebForms", "Node.js", "Express.js", "Entity Framework Core", "RESTful APIs"]
      },
      {
        title: "Databases & Storage",
        icon: <Database className="w-5 h-5 text-emerald-400" />,
        skills: ["Microsoft SQL Server", "MongoDB", "T-SQL", "Stored Procedures", "Indexes & Query Optimization", "Schema Design"]
      },
      {
        title: "Developer Tools & Security",
        icon: <ShieldCheck className="w-5 h-5 text-purple-400" />,
        skills: ["Git", "GitHub", "Visual Studio 2022", "VS Code", "Postman", "JWT Authentication", "Role-Based Authorization", "Plesk Deployment"]
      }
    ],

    experience: [
      {
        role: "Full Stack Developer",
        company: "GSeven Technologies",
        period: "September 2025 – Present",
        type: "Full Time",
        location: "Thrissur, Kerala, India",
        bullets: [
          "Developed and maintained full-stack web applications using React.js, ASP.NET Core, C#, Entity Framework Core, and SQL Server, building responsive UIs and secure JWT-based REST APIs.",
          "Designed and optimized database schemas, stored procedures, and SQL queries while contributing across the full software development lifecycle.",
          "Collaborated with clients to deliver customized solutions and mentored interns through technical training, code reviews, and development best practices."
        ],
        tags: ["React.js", "ASP.NET Core", "C#", "Entity Framework Core", "SQL Server", "REST APIs", "JWT Auth", "Plesk"]
      }
    ],

    projects: [
      {
        title: "AyurCare",
        tagline: "Ayurvedic Hospital Management System",
        category: "Healthcare • Full Stack",
        desc: "Developed a comprehensive healthcare management system featuring patient registration, case analysis, and treatment management modules, with secure REST API integration, SQL Server database connectivity, role-based authentication and authorization, and responsive dashboards for efficient data management.",
        technologies: ["React.js", "ASP.NET Core", "C#", "SQL Server", "REST APIs", "Role-Based Auth"],
        highlights: [
          "Patient registration & treatment case analysis modules",
          "Secure RESTful APIs with SQL Server connectivity",
          "Role-based authentication & authorization (RBAC)",
          "Responsive analytical dashboards for administrative staff"
        ],
        repoLink: "https://github.com/SreejaJintu"
      },
      {
        title: "Viswaas Matrimony",
        tagline: "Matrimonial Web Application",
        category: "Social Platform • Full Stack",
        desc: "Developed a full-stack matrimonial web application featuring user registration, authentication, profile management, and profile discovery modules, with secure REST API integration, SQL Server database connectivity, membership and payment verification workflows, role-based access control, and administrative dashboards for efficient candidate and application management.",
        technologies: ["React.js", "ASP.NET Core", "C#", "SQL Server", "REST APIs", "Payment Workflows"],
        highlights: [
          "User registration, profile management & candidate discovery",
          "Membership lifecycle & payment verification workflows",
          "Granular role-based access control (RBAC)",
          "Executive dashboards for candidate pipeline tracking"
        ],
        repoLink: "https://github.com/SreejaJintu"
      },
      {
        title: "German Academy Application",
        tagline: "Structural Verification & Learning Portal",
        category: "Educational System • Web App",
        desc: "Developed a streamlined structural verification tool designed to safely process and cross-reference structured raw data patterns. Focused deeply on a distraction-free operational framework featuring lightweight states and rapid response rendering.",
        technologies: ["React.js", "ASP.NET Core", "REST APIs", "Lightweight State Management"],
        highlights: [
          "High-throughput raw data processing & pattern cross-referencing",
          "Lightweight state architecture ensuring sub-second screen responses",
          "Distraction-free operational UI framework for intensive workflows",
          "Resilient error handling and schema validation boundaries"
        ],
        repoLink: "https://github.com/SreejaJintu"
      },
      {
        title: "E-Book Store Application",
        tagline: "Digital Reading & Commerce Platform",
        category: "E-Commerce • MERN Architecture",
        desc: "Developed a full-stack e-book platform with secure authentication and authorization, enabling online purchase and PDF book reading through responsive user interfaces and RESTful API integration.",
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "PDF Reader"],
        highlights: [
          "In-browser responsive PDF book viewer with instant access",
          "Full authentication & session authorization mechanisms",
          "Interactive catalog browsing, shopping cart, and purchase flows",
          "RESTful API architecture backed by MongoDB document storage"
        ],
        repoLink: "https://github.com/SreejaJintu"
      }
    ],

    certifications: [
      {
        title: "Full-Stack Web Development",
        issuer: "Entri Elevate",
        period: "February 2024 – October 2024",
        desc: "Hands-on training in MERN stack development, RESTful APIs, authentication, responsive user interfaces, deployment, and full-stack web application development.",
        badges: ["MERN Stack", "React.js", "Node.js", "RESTful APIs", "Authentication", "Deployment"]
      },
      {
        title: "Web Development",
        issuer: "Illinois Institute of Technology",
        period: "2024",
        desc: "Training in modern frontend and backend web development concepts, technologies, and industry best practices.",
        badges: ["Modern Web Architecture", "Full-Stack Concepts", "Industry Standards", "API Design"]
      }
    ],

    education: [
      {
        degree: "Master of Science (M.Sc.) in Computer Science",
        school: "Calicut University, Kerala",
        period: "Postgraduate Degree",
        desc: "Comprehensive curriculum covering advanced computer science theory, algorithms, database systems, software engineering principles, and distributed applications."
      }
    ]
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -60px 0px",
      threshold: 0.08,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-active");
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll(".scroll-reveal");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2200);
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Certifications", id: "certifications" },
    { label: "Education", id: "education" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <div className="bg-[#070a13] text-[#e2e8f0] font-sans selection:bg-cyan-500 selection:text-black antialiased relative w-full overflow-x-hidden min-h-screen">

      {/* ANIMATION ENGINE & STYLES */}
      <style>{`
        @keyframes typingAnimation {
          from { width: 0 }
          to { width: 100% }
        }
        @keyframes typingCursor {
          from, to { border-color: transparent }
          50% { border-color: #22d3ee }
        }
        
        @keyframes radarPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 30px rgba(34, 211, 238, 0.2);
          }
          50% {
            transform: scale(1.025);
            box-shadow: 0 0 55px rgba(34, 211, 238, 0.4);
          }
        }

        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }

        .typing-name {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: 3px solid #22d3ee;
          width: 0;
          animation: 
            typingAnimation 1.5s steps(18, end) 0.15s forwards,
            typingCursor 0.65s step-end 4 forwards;
        }

        .premium-ss-badge {
          animation: radarPulse 4s ease-in-out infinite;
        }

        .floating-element {
          animation: subtleFloat 5s ease-in-out infinite;
        }

        .scroll-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), 
                      transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, opacity;
        }

        .scroll-reveal.reveal-active {
          opacity: 1;
          transform: translateY(0);
        }

        .glass-card {
          background: rgba(14, 19, 38, 0.65);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }
      `}</style>

      {/* FIXED GLASS NAVIGATION BAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#070a13]/80 backdrop-blur-md border-b border-slate-800/80 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => handleSmoothScroll(e, 'hero')}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-black tracking-wider text-sm group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300">
              SS
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-sm sm:text-base tracking-tight group-hover:text-cyan-400 transition-colors">
                Sreeja Sreenivasan
              </span>
              <span className="text-[10px] text-cyan-400/80 font-mono tracking-wider">
                Full Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleSmoothScroll(e, link.id)}
                className="text-xs font-medium text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="px-3.5 py-1.5 text-xs font-semibold bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-black rounded-lg border border-cyan-500/30 hover:border-cyan-400 transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0f1e] border-b border-slate-800 px-4 pt-3 pb-5 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleSmoothScroll(e, link.id)}
                className="block py-2 text-sm text-slate-300 hover:text-cyan-400 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, 'contact')}
                className="block text-center py-2.5 text-xs font-semibold bg-cyan-500 text-black rounded-lg"
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* SECTION 1: HERO */}
      <header id="hero" className="relative w-full min-h-[92vh] max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-12 flex flex-col justify-center">
        {/* Glow ambient backdrops */}
        <div className="absolute top-1/4 right-5 w-80 h-80 bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none"></div>
        <div className="absolute bottom-10 left-5 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-10 md:gap-8">
          <div className="md:col-span-7 space-y-6 text-center md:text-left order-2 md:order-1">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span>Available for Full Stack Opportunities</span>
            </div>

            {/* Name & Title */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                <span className="typing-name pr-1.5">{profile.name}</span>
                <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  {profile.title}
                </span>
              </h1>
            </div>

            {/* Short resume summary */}
            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-xl mx-auto md:mx-0 leading-relaxed font-normal">
              1+ year of professional experience building scalable, secure web applications & REST APIs with <span className="text-cyan-400 font-semibold">React.js</span>, <span className="text-blue-400 font-semibold">ASP.NET Core</span>, <span className="text-indigo-400 font-semibold">C#</span>, and <span className="text-emerald-400 font-semibold">SQL Server</span>.
            </p>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-400" />
                {profile.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Laptop className="w-4 h-4 text-blue-400" />
                Frontend + Backend + DB Architecture
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                onClick={(e) => handleSmoothScroll(e, 'projects')}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold rounded-xl shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-sm flex items-center gap-2"
              >
                <span>View Projects</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, 'contact')}
                className="px-6 py-3 bg-[#0e1326] hover:bg-[#151c38] text-white font-semibold rounded-xl border border-slate-700 hover:border-cyan-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-sm flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#0e1326] hover:bg-[#151c38] text-slate-300 hover:text-cyan-400 rounded-xl border border-slate-800 hover:border-slate-700 hover:-translate-y-0.5 transition-all duration-200"
                title="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#0e1326] hover:bg-[#151c38] text-slate-300 hover:text-cyan-400 rounded-xl border border-slate-800 hover:border-slate-700 hover:-translate-y-0.5 transition-all duration-200"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Hero Visual Badge & Floating Tech Elements */}
          <div className="md:col-span-5 flex justify-center order-1 md:order-2">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full p-2 flex items-center justify-center group">
              {/* Outer Dashed Orbit */}
              <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/20 group-hover:border-cyan-500/40 animate-[spin_60s_linear_infinite] scale-105 transition-colors duration-300"></div>

              {/* Main Glowing Circle */}
              <div className="w-full h-full bg-[#090d1a] rounded-full flex flex-col items-center justify-center border-2 border-cyan-500/30 group-hover:border-cyan-400/60 premium-ss-badge relative z-10 transition-colors duration-300 p-6 text-center">
                <span className="text-5xl sm:text-6xl md:text-7xl font-black tracking-widest bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.35)] group-hover:scale-105 transition-transform duration-300">
                  {profile.badgeInitials}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-300 mt-2 tracking-wide">
                  Sreeja Sreenivasan
                </span>
                <span className="text-[11px] text-cyan-400 font-mono tracking-wider mt-0.5">
                  Full Stack Dev
                </span>
              </div>

              {/* Orbiting Satellite Badges */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#0b1022] border border-cyan-500/40 rounded-full text-[11px] font-mono text-cyan-300 shadow-lg shadow-cyan-500/10 z-20 floating-element">
                ⚛️ React.js
              </div>

              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#0b1022] border border-blue-500/40 rounded-full text-[11px] font-mono text-blue-300 shadow-lg shadow-blue-500/10 z-20 floating-element" style={{ animationDelay: '1s' }}>
                ⚡ ASP.NET Core
              </div>

              <div className="absolute top-1/2 -left-4 -translate-y-1/2 px-2.5 py-1 bg-[#0b1022] border border-indigo-500/40 rounded-full text-[11px] font-mono text-indigo-300 shadow-lg shadow-indigo-500/10 z-20 floating-element" style={{ animationDelay: '2s' }}>
                C#
              </div>

              <div className="absolute top-1/2 -right-4 -translate-y-1/2 px-2.5 py-1 bg-[#0b1022] border border-emerald-500/40 rounded-full text-[11px] font-mono text-emerald-300 shadow-lg shadow-emerald-500/10 z-20 floating-element" style={{ animationDelay: '3s' }}>
                SQL
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto w-full">
          {[
            { value: "1+ Year", label: "Professional Experience", sub: "Web Development" },
            { value: "4+", label: "Key Projects", sub: "Full-Stack & Systems" },
            { value: "M.Sc.", label: "Computer Science", sub: "Calicut University" },
            { value: "2", label: "Certifications", sub: "IIT & Entri Elevate" }
          ].map((stat, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-[#0e1326]/50 border border-slate-800/80 text-center hover:border-cyan-500/30 transition-all duration-200"
            >
              <div className="text-xl sm:text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-white mt-1">{stat.label}</div>
              <div className="text-[10px] text-slate-400 mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>
      </header>

      {/* SECTION 2: ABOUT ME & KEY STRENGTHS */}
      <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-10 scroll-reveal">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-wide">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
            Passionate full-stack engineer dedicated to building resilient web ecosystems and high-efficiency APIs.
          </p>
        </div>

        {/* Professional Summary Card */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 glass-card border border-slate-800/80 rounded-2xl shadow-2xl relative overflow-hidden group hover:border-cyan-500/40 transition-colors duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none"></div>
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Professional Summary</span>
          </div>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {profile.summary}
          </p>
        </div>

        {/* Key Strengths 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {profile.keyStrengths.map((item, idx) => (
            <div
              key={idx}
              className="p-6 glass-card border border-slate-800 rounded-2xl hover:border-cyan-500/40 hover:bg-[#111833]/60 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 bg-slate-900/90 border border-slate-800 rounded-xl flex items-center justify-center mb-4 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: TECHNICAL EXPERTISE MATRIX */}
      <section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-10 scroll-reveal">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-wide">
            Technical <span className="text-cyan-400">Expertise</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
            Comprehensive skill set developed through real-world software engineering and production workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profile.skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-card p-6 border border-slate-800 rounded-2xl hover:border-cyan-500/50 hover:bg-[#111833]/70 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-800/80">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-cyan-500/40 transition-colors">
                    {cat.icon}
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 text-xs font-medium bg-[#0a0f20] text-slate-300 border border-slate-800/90 rounded-lg hover:border-cyan-400/50 hover:text-cyan-300 hover:bg-cyan-950/30 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: PROFESSIONAL EXPERIENCE */}
      <section id="experience" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-10 scroll-reveal">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-wide">
            Professional <span className="text-cyan-400">Experience</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
            Practical development background contributing across the full software lifecycle.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {profile.experience.map((exp, idx) => (
            <div
              key={idx}
              className="glass-card border border-slate-800/90 rounded-2xl p-6 sm:p-8 hover:border-cyan-500/40 transition-all duration-300 shadow-xl relative overflow-hidden group"
            >
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-blue-600/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-5 mb-5 border-b border-slate-800 gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <Briefcase className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                    <span className="font-semibold text-cyan-400">{exp.company}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end gap-2 shrink-0">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-950/60 border border-cyan-500/40 text-cyan-300">
                    {exp.period}
                  </span>
                  <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Current Role
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-3 mb-6">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-3 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies Tag Group */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-400 font-medium mr-1">Stack:</span>
                {exp.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: FEATURED PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-10 scroll-reveal">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-wide">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
            Production-grade systems, healthcare solutions, and dynamic web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {profile.projects.map((proj, idx) => (
            <div
              key={idx}
              className="glass-card border border-slate-800/90 rounded-2xl p-6 sm:p-7 hover:border-cyan-500/50 hover:bg-[#111833]/70 transition-all duration-300 group flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold bg-cyan-950/50 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                    {proj.category}
                  </span>
                  <a
                    href={proj.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-400 transition-colors p-1"
                    title="View Source on GitHub"
                  >
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs text-slate-400 font-medium mb-3">
                  {proj.tagline}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {proj.desc}
                </p>

                {/* Key Highlights */}
                <div className="space-y-1.5 mb-5 bg-[#090e1f]/70 p-3.5 rounded-xl border border-slate-800/80">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    Key Features & Architecture:
                  </div>
                  {proj.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="text-cyan-400 font-bold shrink-0">›</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & Footer Link */}
              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {proj.technologies.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-[11px] font-mono bg-slate-900 text-slate-400 border border-slate-800 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-slate-500">
                    Architecture: Full Stack
                  </span>
                  <a
                    href={proj.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                  >
                    <span>GitHub Repository</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: CERTIFICATIONS */}
      <section id="certifications" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-10 scroll-reveal">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-wide">
            Licenses & <span className="text-cyan-400">Certifications</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
            Formal technical certifications validating modern web development principles and practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {profile.certifications.map((cert, idx) => (
            <div
              key={idx}
              className="glass-card border border-slate-800/90 rounded-2xl p-6 hover:border-cyan-500/40 hover:bg-[#111833]/60 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-colors">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-xs font-semibold text-cyan-400/90">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-full border border-slate-800 shrink-0">
                    {cert.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2 mb-4">
                  {cert.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                {cert.badges.map((b, bIdx) => (
                  <span
                    key={bIdx}
                    className="px-2 py-0.5 text-[10px] font-mono bg-slate-900/80 text-slate-400 border border-slate-800 rounded"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: EDUCATION */}
      <section id="education" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-10 scroll-reveal">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-wide">
            Education
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          {profile.education.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card border border-slate-800/90 rounded-2xl p-6 sm:p-8 hover:border-cyan-500/40 transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4 mb-4 border-b border-slate-800 gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:border-cyan-400 transition-colors">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-xs sm:text-sm text-cyan-400 font-medium">
                      {edu.school}
                    </p>
                  </div>
                </div>

                <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800 w-fit">
                  {edu.period}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {edu.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: GET IN TOUCH */}
      <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-10 scroll-reveal">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-wide">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
            Interested in working together or discussing potential opportunities? Feel free to reach out directly.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {/* Email Card */}
          <div className="glass-card p-5 border border-slate-800/90 hover:border-cyan-500/40 rounded-2xl flex items-center justify-between gap-4 transition-all duration-300 group">
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Email</div>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-xs sm:text-sm md:text-base font-semibold text-white hover:text-cyan-400 truncate block transition-colors"
                >
                  {profile.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => copyToClipboard(profile.email, 'email')}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-400 hover:text-cyan-400 transition-colors text-xs flex items-center gap-1.5"
                title="Copy Email Address"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span className="hidden sm:inline text-[11px]">{copiedField === 'email' ? 'Copied' : 'Copy'}</span>
              </button>
              <a
                href={`mailto:${profile.email}`}
                className="px-3 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs transition-colors flex items-center gap-1"
              >
                <span>Write</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="glass-card p-5 border border-slate-800/90 hover:border-cyan-500/40 rounded-2xl flex items-center justify-between gap-4 transition-all duration-300 group">
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Phone className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Phone</div>
                <a
                  href={`tel:${profile.phone}`}
                  className="text-xs sm:text-sm md:text-base font-semibold text-white hover:text-cyan-400 truncate block transition-colors"
                >
                  {profile.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => copyToClipboard(profile.phone, 'phone')}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-400 hover:text-cyan-400 transition-colors text-xs flex items-center gap-1.5"
                title="Copy Phone Number"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span className="hidden sm:inline text-[11px]">{copiedField === 'phone' ? 'Copied' : 'Copy'}</span>
              </button>
              <a
                href={`tel:${profile.phone}`}
                className="px-3 py-2 rounded-lg bg-[#111833] hover:bg-[#192349] text-white border border-slate-700 font-semibold text-xs transition-colors flex items-center gap-1"
              >
                <span>Call</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Social Cards 2-Col */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* LinkedIn */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 border border-slate-800/90 hover:border-cyan-500/40 rounded-2xl flex items-center gap-3.5 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">LinkedIn</div>
                <div className="text-xs font-semibold text-white group-hover:text-cyan-400 truncate">
                  {profile.linkedinDisplay}
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors shrink-0" />
            </a>

            {/* GitHub */}
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 border border-slate-800/90 hover:border-cyan-500/40 rounded-2xl flex items-center gap-3.5 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-400 flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">GitHub</div>
                <div className="text-xs font-semibold text-white group-hover:text-cyan-400 truncate">
                  {profile.githubDisplay}
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors shrink-0" />
            </a>
          </div>

          {/* Location Badge */}
          <div className="glass-card p-4 border border-slate-800/70 rounded-2xl flex items-center justify-center gap-2 text-xs text-slate-400 text-center">
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span>Based in <strong className="text-white font-medium">{profile.location}</strong></span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-8 border-t border-slate-900/80 mt-8 scroll-reveal">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-bold text-xs">
              SS
            </div>
            <span className="text-xs font-semibold text-slate-300">
              {profile.name} • {profile.title}
            </span>
          </div>

          <div className="text-xs text-slate-500 text-center">
            © {new Date().getFullYear()} {profile.name}. Designed & Built with React & Tailwind CSS.
          </div>

          <a
            href="#hero"
            onClick={(e) => handleSmoothScroll(e, 'hero')}
            className="text-xs text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 transition-colors"
          >
            <span>Back to top</span>
            <span className="text-base">↑</span>
          </a>
        </div>
      </footer>

    </div>
  );
}