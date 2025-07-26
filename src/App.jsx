import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Code2, 
  Database, 
  Globe, 
  Award,
  ChevronDown,
  Menu,
  X,
  MapPin,
  Calendar,
  User,
  Briefcase,
  GraduationCap
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ];

  const projects = [
    {
      title: "WanderLust",
      description:
        "A full-stack travel booking app enabling users to register as hosts or travelers, list properties, and manage bookings with real-time chat functionality.",
      liveDemoLink: "https://wander-lust-red.vercel.app/",
      sourceCodeLink: "https://github.com/isha-gohel181/Wander_Lust",
      tech: [
        "MERN Stack",
        "Tailwind CSS",
        "ShadCN UI",
        "Clerk",
        "WebSocket",
        "Leaflet.js",
        "Cashfree",
        "Cloudinary",
      ],
      features: [
        "Role-based access control with Clerk authentication",
        "Interactive map-based property exploration using Leaflet.js",
        "Real-time chat system with Socket.io",
        "Secure payment integration with Cashfree",
        "Cloud image storage via Cloudinary",
      ],
    },
    {
      title: "ReWear",
      description:
        "A full-stack community clothing exchange platform promoting sustainable fashion through item swaps and point-based redemptions.",
      liveDemoLink: "https://re-wear2.vercel.app/",
      sourceCodeLink: "https://github.com/isha-gohel181/ReWear",
      tech: [
        "MERN Stack",
        "Tailwind CSS",
        "ShadCN UI",
        "Clerk",
        "Cloudinary",
        "MongoDB Atlas",
      ],
      features: [
        "User dashboards with profile management",
        "Point-based redemption system",
        "Admin panel for item moderation",
        "Responsive modern UI design",
        "Cloud-based data storage",
      ],
    },
    {
      title: "QuizyFi-AI",
      description:
        "An AI-powered quiz platform that generates questions from PDFs, topics, or manual input with real-time scoring capabilities.",
      tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
      features: [
        "AI-powered question generation from PDFs",
        "Timer-based quizzes with real-time scoring",
        "Secure user authentication",
        "Responsive design for all devices",
        "Enhanced assessment experience for educators",
      ],
    },
  ];

  const skills = {
    "Languages": ["HTML", "CSS", "JavaScript", "PHP", "C/C++", "SQL"],
    "Frontend": ["React.js", "Bootstrap 5", "Tailwind CSS", "ShadCN UI"],
    "Backend": ["Node.js", "Express.js", "MongoDB"],
    "Tools": ["VS Code", "Git", "GitHub", "npm", "Chrome DevTools"]
  };

  const achievements = [
    {
      title: "Google Cloud Skill Badge - Prompt Design in Vertex AI",
      date: "April 2025",
      type: "Certification"
    },
    {
      title: "Google Cloud Skill Badge - Build Real World AI Applications",
      date: "April 2025",
      type: "Certification"
    },
    {
      title: "C Programming Competition - FLASH@SSCCS",
      date: "2022",
      type: "Competition"
    },
    {
      title: "C++ Programming Competition - FLASH@SSCCS",
      date: "2023",
      type: "Competition"
    },
    {
      title: "Computer & IT Exhibition Participant",
      date: "2024",
      type: "Exhibition"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Isha Gohel
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-blue-400 ${
                    activeSection === item.id
                      ? "text-blue-400"
                      : "text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-gray-900 border-b border-gray-800">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Isha Gohel
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
              Full Stack Developer
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Passionate B.C.A. graduate specializing in building responsive and
              user-friendly web applications. Proficient in modern technologies
              like React, Node.js, and Tailwind CSS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 border border-gray-600 rounded-lg font-medium hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-gray-400" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" data-animate>
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible.about
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  I'm a recent B.C.A. graduate with a passion for creating
                  innovative web solutions. My journey in technology has been
                  driven by curiosity and a desire to solve real-world problems
                  through code.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  As a quick learner and effective problem-solver, I'm always
                  excited to take on new challenges and contribute to meaningful
                  projects that make a difference.
                </p>

                <div className="flex items-center gap-4 mb-4">
                  <MapPin className="text-blue-400" size={20} />
                  <span className="text-gray-300">
                    Bhavnagar, Gujarat, India
                  </span>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <Mail className="text-blue-400" size={20} />
                  <span className="text-gray-300">ishagohel181@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-blue-400" size={20} />
                  <span className="text-gray-300">+91 9173340535</span>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="text-blue-400" size={24} />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-blue-400 mb-2">
                    Bachelor of Computer Applications
                  </h4>
                  <p className="text-gray-300 mb-2">
                    Shree Swaminarayan College of Computer Science
                  </p>
                  <p className="text-gray-400 flex items-center gap-2">
                    <Calendar size={16} />
                    2022 - 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50"
        data-animate
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible.projects
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>

            <div className="grid lg:grid-cols-1 gap-12">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-blue-400">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="text-gray-300 text-sm flex items-start gap-2"
                            >
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4">
                        {/* Live Demo */}
                        <a
                          href={project.liveDemoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-sm font-medium text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>

                        {/* Source Code */}
                        <a
                          href={project.sourceCodeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg text-sm font-medium text-white hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
                        >
                          <Github size={16} />
                          Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8" data-animate>
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible.skills
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(skills).map(([category, items], index) => (
                <div
                  key={category}
                  className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-6">
                    {category === "Languages" && (
                      <Code2 className="text-blue-400" size={24} />
                    )}
                    {category === "Frontend" && (
                      <Globe className="text-blue-400" size={24} />
                    )}
                    {category === "Backend" && (
                      <Database className="text-blue-400" size={24} />
                    )}
                    {category === "Tools" && (
                      <Briefcase className="text-blue-400" size={24} />
                    )}
                    <h3 className="text-lg font-semibold">{category}</h3>
                  </div>
                  <div className="space-y-3">
                    {items.map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section
        id="achievements"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50"
        data-animate
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible.achievements
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Certifications & Achievements
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <Award className="text-blue-400" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2 leading-tight">
                        {achievement.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Calendar size={14} />
                        {achievement.date}
                      </div>
                      <span className="inline-block mt-2 px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-xs text-purple-300">
                        {achievement.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8" data-animate>
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible.contact
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>

            <div className="text-center mb-12">
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, collaborations,
                or just having a chat about technology. Feel free to reach out!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <a
                  href="mailto:ishagohel181@gmail.com"
                  className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors duration-300">
                    <Mail className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-gray-300">ishagohel181@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+919173340535"
                  className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors duration-300">
                    <Phone className="text-green-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Phone</h3>
                    <p className="text-gray-300">+91 9173340535</p>
                  </div>
                </a>
              </div>

              <div className="space-y-6">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="p-3 bg-blue-600/10 rounded-lg group-hover:bg-blue-600/20 transition-colors duration-300">
                    <Linkedin className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">LinkedIn</h3>
                    <p className="text-gray-300">Connect with me</p>
                  </div>
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="p-3 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors duration-300">
                    <Github className="text-gray-300" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">GitHub</h3>
                    <p className="text-gray-300">View my repositories</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2025 Isha Gohel. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;