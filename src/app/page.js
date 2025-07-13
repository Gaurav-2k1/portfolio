'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, ExternalLink, Download, Moon, Sun, Code, Zap, Cpu, Database, Cloud, Star, ArrowRight, ChevronDown, Award, Calendar, Users, Target, Briefcase, GraduationCap, TrendingUp, Shield, Globe, Server, Layers, GitBranch, Terminal } from 'lucide-react';
import FloatingElements from '@/components/FloatingElements';

const ModernResumePortfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.pageYOffset;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };



  const AnimatedBackground = () => (
    <div className="fixed inset-0 z-0">
      <div className={`absolute inset-0 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`} />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      <FloatingElements />
    </div>
  );

  const ScrollProgressBar = () => (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200/20 z-50">
      <div
        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );

  const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      if (!isVisible) return;

      let startTime = null;
      const animate = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
  };

  const TechStack = () => {
    const technologies = [
      { name: "Java", category: "Language", experience: "Expert", color: "bg-orange-500" },
      { name: "Spring Boot", category: "Framework", experience: "Expert", color: "bg-green-500" },
      { name: "Microservices", category: "Architecture", experience: "Advanced", color: "bg-blue-500" },
      { name: "AWS", category: "Cloud", experience: "Advanced", color: "bg-yellow-500" },
      { name: "Docker", category: "DevOps", experience: "Advanced", color: "bg-blue-600" },
      { name: "Kubernetes", category: "Orchestration", experience: "Advanced", color: "bg-blue-700" },
      { name: "Redis", category: "Cache", experience: "Advanced", color: "bg-red-500" },
      { name: "PostgreSQL", category: "Database", experience: "Advanced", color: "bg-blue-800" },
      { name: "MongoDB", category: "Database", experience: "Advanced", color: "bg-green-600" },
      { name: "Kafka", category: "Messaging", experience: "Advanced", color: "bg-gray-700" },
      { name: "Jenkins", category: "CI/CD", experience: "Advanced", color: "bg-blue-900" },
      { name: "Git", category: "Version Control", experience: "Expert", color: "bg-orange-600" },
      { name: "React", category: "Frontend", experience: "Advanced", color: "bg-cyan-500" },
      { name: "Node.js", category: "Backend", experience: "Advanced", color: "bg-green-400" },
      { name: "Python", category: "Language", experience: "Intermediate", color: "bg-yellow-400" },
      { name: "Keycloak", category: "IAM", experience: "Advanced", color: "bg-purple-500" }
    ];

    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className={`group relative p-4 rounded-xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:scale-105 transition-all duration-300 cursor-pointer`}
          >
            <div className={`absolute top-0 left-0 w-full h-1 ${tech.color} rounded-t-xl`} />
            <div className="relative z-10">
              <h4 className="font-bold text-sm mb-1">{tech.name}</h4>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>{tech.category}</p>
              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${tech.experience === 'Expert' ? 'bg-green-500/20 text-green-400' :
                  tech.experience === 'Advanced' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-yellow-500/20 text-yellow-400'
                }`}>
                {tech.experience}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const DetailedExperienceCard = ({ experience }) => (
    <div className={`relative ${darkMode ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm rounded-3xl p-8 border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:shadow-2xl transition-all duration-500 group`}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-8">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <div className={`p-3 rounded-xl ${darkMode ? 'bg-blue-500/10' : 'bg-blue-500/20'}`}>
                <Briefcase className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1 text-blue-500">{experience.position}</h3>
                <p className="text-xl font-semibold mb-1">{experience.company}</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className={`flex items-center gap-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <MapPin className="w-4 h-4" />
                    {experience.location}
                  </span>
                  <span className={`flex items-center gap-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <Calendar className="w-4 h-4" />
                    {experience.duration}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'}`}>
                <Users className="w-5 h-5 text-green-500 mb-2" />
                <p className="text-sm font-medium">Team Size</p>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>5-8 developers</p>
              </div>
              <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'}`}>
                <Target className="w-5 h-5 text-blue-500 mb-2" />
                <p className="text-sm font-medium">Projects</p>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Multiple enterprise</p>
              </div>
              <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'}`}>
                <TrendingUp className="w-5 h-5 text-purple-500 mb-2" />
                <p className="text-sm font-medium">Impact</p>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>High availability</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            Key Achievements
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            {experience.achievements.map((achievement, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 p-4 rounded-xl ${darkMode ? 'bg-gray-700/30' : 'bg-gray-100/50'} hover:scale-105 transition-all duration-300 group`}
              >
                <div className={`p-1 rounded-full ${darkMode ? 'bg-blue-500/20' : 'bg-blue-500/10'} mt-1`}>
                  <ArrowRight className="w-4 h-4 text-blue-500" />
                </div>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-sm leading-relaxed group-hover:text-blue-500 transition-colors duration-200`}>
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Code className="w-5 h-5 text-green-500" />
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, i) => (
              <span
                key={i}
                className={`px-3 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'} hover:scale-105 transition-all duration-200 cursor-pointer`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const EnhancedProjectCard = ({ project, index }) => (
    <div className={`group relative overflow-hidden rounded-3xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-all duration-700 hover:scale-105 hover:shadow-2xl`}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-xl ${darkMode ? 'bg-blue-500/10' : 'bg-blue-500/20'}`}>
              <Code className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <h3 className="text-2xl font-bold group-hover:text-blue-500 transition-colors duration-300">{project.name}</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{project.category}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-all duration-300 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} group-hover:scale-110`}
            >
              <ExternalLink className="w-5 h-5 text-blue-500" />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-all duration-300 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} group-hover:scale-110`}
            >
              <Github className="w-5 h-5 text-purple-500" />
            </a>
          </div>
        </div>

        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed`}>
          {project.description}
        </p>

        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-green-500" />
            Technical Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'} hover:scale-105 transition-transform duration-200`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-500" />
            Key Features
          </h4>
          <div className="space-y-2">
            {project.features.map((feature, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}
              >
                <div className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-blue-500' : 'bg-purple-500'}`} />
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className={`p-3 rounded-xl ${darkMode ? 'bg-gray-700/30' : 'bg-gray-100/50'} text-center`}>
            <p className="text-lg font-bold text-green-500">{project.status}</p>
            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Status</p>
          </div>
          <div className={`p-3 rounded-xl ${darkMode ? 'bg-gray-700/30' : 'bg-gray-100/50'} text-center`}>
            <p className="text-lg font-bold text-blue-500">{project.duration}</p>
            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Duration</p>
          </div>
          <div className={`p-3 rounded-xl ${darkMode ? 'bg-gray-700/30' : 'bg-gray-100/50'} text-center`}>
            <p className="text-lg font-bold text-purple-500">{project.users}</p>
            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Users</p>
          </div>
        </div>
      </div>
    </div>
  );

  const experience = [
    {
      company: "Tata Consultancy Services (TCS)",
      location: "Noida, India",
      position: "Backend Developer",
      duration: "July 2023 – Present",
      achievements: [
        "Engineered and deployed comprehensive suite of secure login functionalities including QR-based authentication and multi-tenant EasyAuth/Auth Code flows",
        "Integrated and customized Keycloak for advanced IAM, developing custom SPIs for group-based password policies and multi-tenant authentication",
        "Architected and implemented dynamic Role-Based Access Control (RBAC) system with runtime enforcement for multi-tenant environments",
        "Developed and optimized scalable microservices using Spring Boot, ensuring high availability and fault tolerance",
        "Managed application configurations and secrets securely using AWS AppConfig and AWS Secrets Manager",
        "Built multi-instance EasyAuth solution leveraging Redis Pub/Sub and Server-Sent Events for real-time authentication",
        "Enhanced data access performance by optimizing JPA/Hibernate queries and implementing Redis caching",
        "Implemented event-driven architecture with Apache Kafka for high-throughput asynchronous operations",
        "Managed deployment of microservices on Kubernetes with pod configuration, scaling, and rollout strategies",
        "Ensured code quality and security by integrating CI/CD pipelines with SonarQube and Fortify"
      ],
      technologies: ["Java", "Spring Boot", "Microservices", "AWS", "Kubernetes", "Redis", "Kafka", "PostgreSQL", "Docker", "Jenkins", "Keycloak", "OAuth2", "JPA/Hibernate", "SonarQube", "Fortify"]
    }
  ];

  const projects = [
    {
      name: "Probuilder",
      category: "Full-Stack Portfolio Builder",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "Cloudinary", "JWT", "Redux"],
      description: "A comprehensive portfolio builder platform that allows users to create and customize portfolios from multiple templates with real-time previews for desktop, tablet, and mobile views. Features secure authentication and cloud-based image management.",
      demo: "https://probuilder.vercel.app/",
      github: "https://github.com/Gaurav-2k1/probuilder",
      features: [
        "Real-time portfolio preview across multiple devices",
        "Multiple customizable templates",
        "Secure user authentication with JWT",
        "Cloud-based image storage with Cloudinary",
        "Real-time Socket.io communication",
        "Responsive design optimization"
      ],
      status: "Live",
      duration: "4 months",
      users: "Active"
    },
    {
      name: "EDUCAST",
      category: "Educational Management System",
      tech: ["React", "React Native", "Firebase", "Node.js", "Express.js", "MongoDB"],
      description: "A real-time classroom data display system with Android application for managing timetables and controlling on-screen content. Features scalable Firebase database schema with data isolation between user accounts.",
      demo: "https://classapplication.netlify.app/",
      github: "https://github.com/Gaurav-2k1/educast",
      features: [
        "Real-time classroom data synchronization",
        "Android mobile application",
        "Timetable management system",
        "Firebase real-time database",
        "Cross-platform compatibility",
        "Scalable data isolation architecture"
      ],
      status: "Live",
      duration: "3 months",
      users: "Active"
    }
  ];

  const navigation = [
    { id: 'hero', label: 'Home', icon: Globe },
    { id: 'about', label: 'About', icon: Users },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'skills', label: 'Skills', icon: Cpu },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} relative overflow-hidden`}>
      <ScrollProgressBar />
      <AnimatedBackground />

      {/* Enhanced Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${darkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-md border-b ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">GB</span>
              </div>
              <span className="font-bold text-xl">Gaurav Bhukte</span>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${activeSection === item.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : `hover:bg-gray-100 ${darkMode ? 'hover:bg-gray-800 text-gray-300' : 'text-gray-600'}`
                    }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={toggleDarkMode}
              className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} shadow-lg`}
            >
              {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-700" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Enhanced Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20" ref={heroRef}>
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="mb-8">
                {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 mb-8">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Available for opportunities
                  </span>
                </div> */}

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Gaurav Bhukte
                </h1>

                <div className="relative mb-8">
                  <h2 className={`text-2xl md:text-3xl lg:text-4xl font-light mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Backend Developer
                  </h2>
                  <p className={`text-lg md:text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                    Microservices Developer • Cloud Engineer • DevOps Enthusiast
                  </p>
                  <div className="flex items-center justify-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-500" />
                      <span>Noida, India</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-green-500" />
                      <span>2+ Years Experience</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className={`text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Passionate about building scalable, secure, and efficient backend systems that power modern applications.
                Specializing in microservices architecture, cloud-native solutions,
                and DevOps practices.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get In Touch
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>

                <button
                  onClick={() => window.open('https://drive.google.com/file/d/1k9mQNNXCFi6NPIqWbYmQPMrge8O-L7oe/view?usp=sharing', '_blank')}
                  className={`group px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 ${darkMode
                      ? 'bg-gray-800 text-white hover:bg-gray-700'
                      : 'bg-white text-gray-900 hover:bg-gray-50'
                    } shadow-lg hover:shadow-xl`}
                >
                  <span className="flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Download Resume
                  </span>
                </button>

              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} text-center hover:scale-105 transition-all duration-300`}>
                  <div className="text-3xl font-bold text-blue-500 mb-2">
                    <AnimatedCounter end={2} suffix="+" />
                  </div>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Years Experience</p>
                </div>

                <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} text-center hover:scale-105 transition-all duration-300`}>
                  <div className="text-3xl font-bold text-green-500 mb-2">
                    <AnimatedCounter end={15} suffix="+" />
                  </div>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Technologies</p>
                </div>

                <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} text-center hover:scale-105 transition-all duration-300`}>
                  <div className="text-3xl font-bold text-purple-500 mb-2">
                    <AnimatedCounter end={5} suffix="+" />
                  </div>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Projects</p>
                </div>

                <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} text-center hover:scale-105 transition-all duration-300`}>
                  <div className="text-3xl font-bold text-pink-500 mb-2">
                    <AnimatedCounter end={99} suffix="%" />
                  </div>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Uptime</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
                Passionate backend developer with a strong foundation in microservices architecture and cloud technologies
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={`p-8 rounded-3xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <h3 className="text-2xl font-bold mb-6 text-blue-500">My Journey</h3>
                <div className="space-y-6">
                  <div className={`flex items-start gap-4 p-4 rounded-xl ${darkMode ? 'bg-gray-700/30' : 'bg-gray-100/50'}`}>
                    <div className="p-2 rounded-lg bg-blue-500/10">
                      <GraduationCap className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Education</h4>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Bachelor of Engineering in Electronics and Telecommunication from Dr. DY Patil Institute with 8.80 CGPA
                      </p>
                    </div>
                  </div>

                  <div className={`flex items-start gap-4 p-4 rounded-xl ${darkMode ? 'bg-gray-700/30' : 'bg-gray-100/50'}`}>
                    <div className="p-2 rounded-lg bg-green-500/10">
                      <Briefcase className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Professional Experience</h4>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Currently working as a Backend Developer at Tata Consultancy Services, focusing on microservices and cloud solutions
                      </p>
                    </div>
                  </div>

                  <div className={`flex items-start gap-4 p-4 rounded-xl ${darkMode ? 'bg-gray-700/30' : 'bg-gray-100/50'}`}>
                    <div className="p-2 rounded-lg bg-purple-500/10">
                      <Target className="w-5 h-5 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Focus Areas</h4>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Specializing in secure authentication systems, microservices architecture, and cloud-native development
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`p-8 rounded-3xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <h3 className="text-2xl font-bold mb-6 text-purple-500">Core Competencies</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/30' : 'bg-gray-100/50'} text-center`}>
                    <Server className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <h4 className="font-semibold text-sm">Microservices</h4>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Architecture</p>
                  </div>
                  <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/30' : 'bg-gray-100/50'} text-center`}>
                    <Cloud className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <h4 className="font-semibold text-sm">Cloud</h4>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>AWS & DevOps</p>
                  </div>
                  <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/30' : 'bg-gray-100/50'} text-center`}>
                    <Shield className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                    <h4 className="font-semibold text-sm">Security</h4>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>IAM & OAuth</p>
                  </div>
                  <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/30' : 'bg-gray-100/50'} text-center`}>
                    <Database className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                    <h4 className="font-semibold text-sm">Database</h4>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Design & Optimization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Professional Experience
              </h2>
              <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
                Building enterprise-grade solutions with cutting-edge technologies
              </p>
            </div>

            <div className="space-y-12">
              {experience.map((exp, index) => (
                <DetailedExperienceCard key={index} experience={exp} />
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
                Innovative solutions that showcase my technical expertise and creativity
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <EnhancedProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Technical Skills
              </h2>
              <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
                Comprehensive technology stack for modern application development
              </p>
            </div>

            <TechStack />
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Education
              </h2>
              <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
                Academic foundation that shaped my technical expertise
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className={`p-8 rounded-3xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:scale-105 transition-all duration-300`}>
                <div className="flex items-center gap-6 mb-8">
                  <div className={`p-4 rounded-xl ${darkMode ? 'bg-blue-500/10' : 'bg-blue-500/20'}`}>
                    <GraduationCap className="w-8 h-8 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-500">Bachelor of Engineering</h3>
                    <p className="text-xl font-semibold">Electronics and Telecommunication</p>
                    <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Dr. DY Patil Institute of Engineering Management and Research
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/30' : 'bg-gray-100/50'} text-center`}>
                    <div className="text-2xl font-bold text-green-500 mb-2">8.80</div>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>CGPA out of 10</p>
                  </div>
                  <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/30' : 'bg-gray-100/50'} text-center`}>
                    <div className="text-2xl font-bold text-blue-500 mb-2">2019-2023</div>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Duration</p>
                  </div>
                  <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/30' : 'bg-gray-100/50'} text-center`}>
                    <div className="text-2xl font-bold text-purple-500 mb-2">Pune</div>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Location</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Code className="w-5 h-5 text-green-500" />
                    Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Data Structures and Algorithms', 'Operating Systems', 'Database Management Systems', 'Object-Oriented Programming', 'Computer Networks', 'Software Engineering'].map((course, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'} hover:scale-105 transition-all duration-200`}
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
                Let's discuss opportunities and collaborate on exciting projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className={`p-8 rounded-3xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <h3 className="text-2xl font-bold mb-8 text-blue-500">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${darkMode ? 'bg-blue-500/10' : 'bg-blue-500/20'}`}>
                      <Mail className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <a
                        href="mailto:gauravbhukte1507@gmail.com"
                        className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-blue-500 transition-colors duration-200`}
                      >
                        gauravbhukte1507@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${darkMode ? 'bg-green-500/10' : 'bg-green-500/20'}`}>
                      <Phone className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <a
                        href="tel:+918975740056"
                        className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-green-500 transition-colors duration-200`}
                      >
                        +91-8975740056
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${darkMode ? 'bg-blue-600/10' : 'bg-blue-600/20'}`}>
                      <Linkedin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">LinkedIn</h4>
                      <a
                        href="https://linkedin.com/in/gaurav-bhukte-17ba3319a"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-blue-600 transition-colors duration-200`}
                      >
                        gaurav-bhukte-17ba3319a
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${darkMode ? 'bg-gray-600/10' : 'bg-gray-600/20'}`}>
                      <Github className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">GitHub</h4>
                      <a
                        href="https://github.com/Gaurav-2k1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-gray-600 transition-colors duration-200`}
                      >
                        Gaurav-2k1
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`p-8 rounded-3xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <h3 className="text-2xl font-bold mb-8 text-purple-500">Let's Collaborate</h3>
                <div className="space-y-6">
                  <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700/30' : 'bg-gray-100/50'} text-center`}>
                    <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">Open to Opportunities</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Looking for challenging backend development roles
                    </p>
                  </div>

                  <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700/30' : 'bg-gray-100/50'} text-center`}>
                    <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">Collaboration</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Interested in working on innovative projects
                    </p>
                  </div>

                  <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700/30' : 'bg-gray-100/50'} text-center`}>
                    <Terminal className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">Technical Discussion</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Always ready to discuss technology and best practices
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`py-8 px-6 border-t ${darkMode ? 'border-gray-700 bg-gray-900/50' : 'border-gray-200 bg-white/50'} backdrop-blur-sm`}>
        <div className="max-w-7xl mx-auto text-center">
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2024 Gaurav Bhukte. Built with React and modern web technologies.
          </p>
        </div>
      </footer>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
        <div className={`p-4 rounded-2xl ${darkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-md border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}>
          <div className="flex items-center justify-between">
            {navigation.slice(0, 5).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`p-3 rounded-xl transition-all duration-300 ${activeSection === item.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : `hover:bg-gray-100 ${darkMode ? 'hover:bg-gray-800 text-gray-400' : 'text-gray-600'}`
                  }`}
              >
                <item.icon className="w-5 h-5" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
};

export default ModernResumePortfolio;