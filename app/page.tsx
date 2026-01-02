'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Mail, MessageSquare, Github, Linkedin, ExternalLink, Code2, Video, Sparkles, Award, ArrowLeft, Youtube, Instagram } from 'lucide-react';

interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  problemSolved: string;
  features: string[];
  techStack: string[];
  category: 'dev' | 'video';
  demoUrl?: string;
  githubUrl?: string;
  whatILearned: string[];
}

const projects: Project[] = [
  {
    slug: 'ppfn-lms',
    title: 'PPFN Learning Management System',
    shortDescription: 'Enterprise LMS for healthcare education and training',
    fullDescription: 'A comprehensive Learning Management System built for Planned Parenthood Federation of Nigeria (PPFN) during my internship at Caldoc Systems. This platform enables healthcare professionals to access training materials, track progress, and obtain certifications.',
    problemSolved: 'PPFN needed a centralized platform to train healthcare workers across Nigeria on reproductive health services. The system needed to handle multiple user roles, track certifications, and work reliably in low-bandwidth environments.',
    features: [
      'Course management and enrollment',
      'Video lessons with progress tracking',
      'Interactive quizzes and assessments',
      'Certificate generation and verification',
      'Multi-role user management (Admin, Instructor, Student)',
      'Offline content download capability',
      'Performance analytics dashboard',
      'Mobile-responsive interface',
    ],
    techStack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'AWS S3', 'Redux'],
    category: 'dev',
    githubUrl: 'https://github.com/MosesOnerhime/Caldoc-Systems-Internship.git',
    whatILearned: [
      'Building scalable enterprise applications',
      'Implementing role-based access control',
      'Optimizing for low-bandwidth environments',
      'Working with healthcare compliance requirements',
      'Managing large media files efficiently',
    ],
  },
  {
    slug: 'convexity-trading-app',
    title: 'Stock Trading Application',
    shortDescription: 'Real-time stock trading platform with live market data',
    fullDescription: 'A professional stock trading application developed during my internship at Convexity Technologies. The platform provides real-time market data, portfolio management, and seamless trade execution for Nigerian investors.',
    problemSolved: 'Nigerian investors needed a reliable, fast, and user-friendly platform to trade stocks on the Nigerian Stock Exchange. The application had to handle real-time data streams while maintaining security and compliance with financial regulations.',
    features: [
      'Real-time stock price updates',
      'Buy and sell order execution',
      'Portfolio tracking and analytics',
      'Market news and insights',
      'Watchlist management',
      'Transaction history and reporting',
      'Two-factor authentication',
      'Push notifications for price alerts',
    ],
    techStack: ['React Native', 'TypeScript', 'Node.js', 'WebSocket', 'MongoDB', 'Redis'],
    category: 'dev',
    githubUrl: 'https://github.com/MosesOnerhime/Convexity-Technologies-Internship.git',
    whatILearned: [
      'Implementing real-time data with WebSockets',
      'Building secure financial applications',
      'Handling high-frequency data updates',
      'Financial data visualization',
      'Compliance with financial regulations',
    ],
  },
  {
    slug: 'dental-clinic-app',
    title: 'Dental Clinic Mobile App',
    shortDescription: 'Patient management app for dental appointments and records',
    fullDescription: 'A mobile application designed for a dental clinic to streamline patient appointments, medical records, and communication between patients and dental practitioners.',
    problemSolved: 'The dental clinic was managing appointments through phone calls and paper records, leading to scheduling conflicts and inefficient patient data management. This app digitized their entire workflow.',
    features: [
      'Online appointment booking',
      'Patient medical history storage',
      'Treatment plan tracking',
      'Appointment reminders via SMS',
      'Digital prescription management',
      'Before/after photo documentation',
      'Payment and billing integration',
      'Dentist schedule management',
    ],
    techStack: ['React Native', 'Firebase', 'Expo', 'TypeScript', 'Stripe API'],
    category: 'dev',
    githubUrl: 'https://github.com/MosesOnerhime/Dental-Clinic-Mobile-App/tree/master',
    whatILearned: [
      'Building HIPAA-compliant healthcare apps',
      'Mobile app development with React Native',
      'Implementing secure patient data storage',
      'Payment gateway integration',
      'Push notification systems',
    ],
  },
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'dev' | 'video'>('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-black text-white">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
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
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
        
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }
        
        .stagger-animation > * {
          opacity: 0;
          animation: slideUp 0.5s ease-out forwards;
        }
        
        .stagger-animation > *:nth-child(1) { animation-delay: 0.1s; }
        .stagger-animation > *:nth-child(2) { animation-delay: 0.2s; }
        .stagger-animation > *:nth-child(3) { animation-delay: 0.3s; }
        .stagger-animation > *:nth-child(4) { animation-delay: 0.4s; }
        .stagger-animation > *:nth-child(5) { animation-delay: 0.5s; }
        .stagger-animation > *:nth-child(6) { animation-delay: 0.6s; }
      `}</style>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-500 focus:text-white focus:rounded">
        Skip to main content
      </a>

      {/* Floating Header */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4">
        <nav className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl">
          <a href="#home" className="text-lg font-bold">
            <span className="text-white">Moses</span>
            <span className="text-blue-400">.dev</span>
          </a>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-zinc-400 hover:text-white transition-colors text-sm">About</a>
            <a href="#work" className="text-zinc-400 hover:text-white transition-colors text-sm">Work</a>
            <a href="#contact" className="text-sm px-4 py-1.5 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors">
              Contact
            </a>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-zinc-400"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mt-2 bg-zinc-900/95 backdrop-blur-xl border border-zinc-800 rounded-2xl p-4 shadow-2xl animate-slideDown">
            <a href="#about" className="block px-4 py-2 text-zinc-400 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#work" className="block px-4 py-2 text-zinc-400 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>Work</a>
            <a href="#contact" className="block px-4 py-2 text-zinc-400 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        )}
      </header>

      <main id="main">
        {/* Hero with Floating Cards */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-sm mb-6">
                <Sparkles size={16} className="text-blue-400" />
                <span className="text-zinc-400">Available for freelance</span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="block text-white">Moses Onerhime</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Developer & Creator
              </span>
            </h1>

            <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12">
              Building elegant web solutions by day, crafting visual stories as 
              <span className="text-purple-400 font-semibold"> Furreal</span> by night
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <a href="#work" className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-zinc-100 transition-all shadow-lg">
                View My Work
              </a>
              <a href="#contact" className="px-8 py-4 border border-zinc-700 rounded-full font-semibold hover:bg-zinc-900 transition-all">
                Get In Touch
              </a>
            </div>

            {/* Floating Skill Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto stagger-animation">
              <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all hover-lift">
                <Code2 className="text-blue-400 mb-3" size={32} />
                <h3 className="font-bold text-white mb-2">Development</h3>
                <p className="text-sm text-zinc-400">Full-stack web applications</p>
              </div>
              
              <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all hover-lift">
                <Video className="text-purple-400 mb-3" size={32} />
                <h3 className="font-bold text-white mb-2">Video Editing</h3>
                <p className="text-sm text-zinc-400">Creative storytelling as Furreal</p>
              </div>
              
              <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-pink-500/50 transition-all hover-lift">
                <Award className="text-pink-400 mb-3" size={32} />
                <h3 className="font-bold text-white mb-2">Design</h3>
                <p className="text-sm text-zinc-400">Modern UI/UX solutions</p>
              </div>
            </div>
          </div>
        </section>

        {/* About with Side Image */}
        <section id="about" className="py-32 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div>
                  <p className="text-blue-400 font-semibold mb-2 text-sm uppercase tracking-wider">About Me</p>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Two Passions,
                    <br />
                    <span className="text-zinc-500">One Creative Mind</span>
                  </h2>
                </div>

                <div className="space-y-4 text-zinc-400">
                  <p className="leading-relaxed">
                    I'm Moses Onerhime, a full-stack developer passionate about building modern web applications 
                    that make a difference. I specialize in React, Next.js, and TypeScript, creating experiences 
                    that are both beautiful and functional.
                  </p>
                  <p className="leading-relaxed">
                    When I'm not coding, you'll find me behind the editing timeline as <span className="text-purple-400 font-semibold">Furreal</span> – 
                    transforming raw footage into compelling visual narratives. This creative outlet keeps my design 
                    sense sharp and my problem-solving skills fresh.
                  </p>
                  <p className="leading-relaxed">
                    Whether it's architecting scalable applications or crafting the perfect cut, I bring the same 
                    dedication to quality and attention to detail in everything I create.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  <span className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-sm">React</span>
                  <span className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-sm">Next.js</span>
                  <span className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-sm">TypeScript</span>
                  <span className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-sm">Node.js</span>
                  <span className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-sm">Python</span>
                  <span className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-sm">C#/C++</span>
                  <span className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-sm">Rust</span>
                  <span className="px-4 py-2 bg-purple-900/30 border border-purple-700 rounded-full text-sm text-purple-300">
                    Premiere Pro
                  </span>
                  <span className="px-4 py-2 bg-purple-900/30 border border-purple-700 rounded-full text-sm text-purple-300">
                    After Effects
                  </span>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl border border-zinc-800 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-9xl font-bold text-zinc-800">MO</div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl">
                  <div className="text-sm text-zinc-500 mb-1">Also known as</div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Furreal
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects with Tabs */}
        <section id="work" className="py-32 px-4 bg-zinc-950">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-blue-400 font-semibold mb-2 text-sm uppercase tracking-wider">Portfolio</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Recent Work</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                A selection of projects showcasing my development and creative capabilities
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex justify-center gap-3 mb-12 flex-wrap">
              {[
                { id: 'all' as const, label: 'All Projects' },
                { id: 'dev' as const, label: 'Development' },
                { id: 'video' as const, label: 'Video Editing' }
              ].map(filter => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === filter.id
                      ? 'bg-white text-black'
                      : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, idx) => (
                <div
                  key={project.slug}
                  onClick={() => setSelectedProject(project)}
                  className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all cursor-pointer hover-lift"
                >
                  <div className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative text-6xl font-bold text-zinc-700 group-hover:scale-110 transition-transform">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-sm mb-4">{project.shortDescription}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map(tech => (
                        <span key={tech} className="px-3 py-1 bg-zinc-800 text-zinc-400 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Video Editing Showcase Card */}
              {(activeFilter === 'all' || activeFilter === 'video') && (
                <div 
                  onClick={() => setSelectedProject({
                    slug: 'furreal-edits',
                    title: 'Furreal Edits',
                    shortDescription: 'Creative video editing portfolio featuring cinematic storytelling',
                    fullDescription: 'As Furreal, I create engaging video content across multiple platforms, specializing in dynamic editing, color grading, and visual storytelling that captivates audiences.',
                    problemSolved: 'In a world of endless content, standing out requires exceptional storytelling and technical excellence. My editing transforms raw footage into compelling narratives that resonate with viewers.',
                    features: [
                      'Cinematic color grading',
                      'Dynamic transitions and effects',
                      'Motion graphics integration',
                      'Sound design and mixing',
                      'Multi-platform optimization',
                      'Storytelling through editing',
                    ],
                    techStack: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Photoshop'],
                    category: 'video',
                    whatILearned: [
                      'Advanced color grading techniques',
                      'Motion graphics and animation',
                      'Audio mixing and sound design',
                      'Platform-specific content optimization',
                      'Visual storytelling principles',
                    ],
                  } as Project)}
                  className="group bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-800/50 rounded-2xl overflow-hidden hover:border-purple-700 transition-all cursor-pointer hover-lift"
                >
                  <div className="aspect-video bg-gradient-to-br from-purple-800 to-pink-900 flex items-center justify-center relative overflow-hidden">
                    <Video className="text-white/50 group-hover:scale-110 transition-transform" size={64} />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold">Furreal Edits</h3>
                      <Sparkles className="text-purple-400" size={16} />
                    </div>
                    <p className="text-zinc-400 text-sm mb-4">
                      Creative video editing portfolio featuring cinematic storytelling and dynamic visuals
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-full border border-purple-700">
                        Premiere Pro
                      </span>
                      <span className="px-3 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-full border border-purple-700">
                        After Effects
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-32 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-blue-400 font-semibold mb-2 text-sm uppercase tracking-wider">Get In Touch</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Create
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Something Great
              </span>
            </h2>
            <p className="text-zinc-400 text-lg mb-12 max-w-2xl mx-auto">
              Whether you need a web application or video content, I'm here to bring your vision to life
            </p>

            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
              <a 
                href="mailto:mosesonerhime11@gmail.com?subject=Project Inquiry&body=Hi Moses, I'd like to discuss a project with you."
                className="group p-6 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-blue-500 transition-all text-left hover-lift"
              >
                <Mail className="text-blue-400 mb-3" size={24} />
                <div className="font-semibold mb-1">Email</div>
                <div className="text-sm text-zinc-400 group-hover:text-zinc-300">mosesonerhime11@gmail.com</div>
              </a>

              <a 
                href="https://wa.me/2348142962222?text=Hi%20Moses%2C%20I%27d%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-green-500 transition-all text-left hover-lift"
              >
                <MessageSquare className="text-green-400 mb-3" size={24} />
                <div className="font-semibold mb-1">WhatsApp</div>
                <div className="text-sm text-zinc-400 group-hover:text-zinc-300">Quick chat</div>
              </a>
            </div>

            <div className="flex justify-center gap-4">
              <a href="https://github.com/MosesOnerhime" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center hover:border-zinc-700 hover:scale-110 transition-all" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/moses-onerhime-1438ba301/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center hover:border-zinc-700 hover:scale-110 transition-all" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://www.tiktok.com/@furreal.aex" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center hover:border-purple-700 hover:scale-110 transition-all" aria-label="TikTok">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="https://instagram.com/furreal.aep" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center hover:border-pink-700 hover:scale-110 transition-all" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com/@furrealproductions" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center hover:border-red-700 hover:scale-110 transition-all" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-zinc-500">
            © 2025 Moses Onerhime. All rights reserved.
          </div>
          <div className="text-sm text-zinc-600">
            This was fun ❤️
          </div>
        </div>
      </footer>


      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div className="min-h-full flex items-start justify-center p-4 py-8">
            <div 
              className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-4xl w-full relative animate-scaleIn"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close X Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-all"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="bg-gradient-to-r from-blue-600 to-purple-700 p-8 rounded-t-3xl">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex items-center text-white/90 hover:text-white mb-4"
                >
                  <ArrowLeft className="mr-2" size={20} /> Back
                </button>
                <h2 className="text-4xl font-bold mb-4 text-white">{selectedProject.title}</h2>
                <p className="text-xl text-blue-100">{selectedProject.shortDescription}</p>
              </div>

              <div className="p-8 space-y-8">
                <section>
                  <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                    <Code2 className="text-blue-400" size={24} />
                    Problem Statement
                  </h3>
                  <p className="text-zinc-400 leading-relaxed border-l-2 border-blue-500 pl-4">
                    {selectedProject.problemSolved}
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold mb-4 text-white">About This Project</h3>
                  <p className="text-zinc-400 leading-relaxed">{selectedProject.fullDescription}</p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold mb-4 text-white">Key Features</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 bg-zinc-800/50 p-4 rounded-lg">
                        <span className="text-blue-400 flex-shrink-0">✓</span>
                        <span className="text-zinc-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="text-2xl font-bold mb-4 text-white">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map(tech => (
                      <span key={tech} className="px-4 py-2 bg-zinc-800 text-zinc-300 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold mb-4 text-white">What I Learned</h3>
                  <div className="bg-zinc-800/30 border border-zinc-800 p-6 rounded-lg">
                    <ul className="space-y-3">
                      {selectedProject.whatILearned.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-zinc-400">
                          <span className="text-blue-400 flex-shrink-0">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                {(selectedProject.demoUrl || selectedProject.githubUrl) && (
                  <div className="flex flex-wrap gap-4">
                    {selectedProject.demoUrl && (
                      <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-zinc-100 transition-all font-semibold">
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-zinc-700 text-zinc-300 px-6 py-3 rounded-full hover:bg-zinc-800 transition-all font-semibold">
                        <Github size={18} /> View Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
