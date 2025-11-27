import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Database, 
  Download 
} from 'lucide-react';

// --- Données du Portfolio ---
const PORTFOLIO_DATA = {
  name: "Alexandre Dupont",
  role: "Développeur Front-End | React & TypeScript",
  description: "Passionné par la création d'expériences web interactives et performantes. Je transforme des problèmes complexes en interfaces simples et élégantes.",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:contact@email.com"
  },
  skills: [
    { name: "React", icon: Code2, color: "text-blue-500" },
    { name: "TypeScript", icon: Terminal, color: "text-cyan-500" },
    { name: "Node.js", icon: Database, color: "text-green-500" },
    { name: "Tailwind CSS", icon: Code2, color: "text-teal-400" },
    { name: "Git & GitHub", icon: Github, color: "text-purple-500" },
  ],
  projects: [
    {
      title: "Mon Portfolio V1",
      description: "Le site sur lequel vous naviguez ! Créé avec Vite, React et Tailwind CSS. Déployé via GitHub Actions.",
      tags: ["React", "Tailwind", "CI/CD"],
      image: "https://placehold.co/600x400/1e293b/FFFFFF?text=Portfolio+Project",
      githubLink: "#",
      demoLink: "#"
    },
    {
      title: "App Gestion de Tâches",
      description: "Une application de Todo-list collaborative avec authentification et base de données temps réel.",
      tags: ["Firebase", "React", "State Management"],
      image: "https://placehold.co/600x400/2563eb/FFFFFF?text=Task+App",
      githubLink: "#",
      demoLink: "#"
    },
    {
      title: "E-commerce Dashboard",
      description: "Interface d'administration pour visualiser les ventes, gérer les stocks et les utilisateurs.",
      tags: ["TypeScript", "Recharts", "API REST"],
      image: "https://placehold.co/600x400/7c3aed/FFFFFF?text=Dashboard",
      githubLink: "#",
      demoLink: "#"
    }
  ]
};

// --- Composants ---

const Navbar = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full z-50 border-b bg-white border-gray-200 text-gray-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <h1 
          className="text-xl font-bold cursor-pointer hover:text-blue-500 transition-colors" 
          onClick={() => scrollTo('hero')}
        >
          {`<${PORTFOLIO_DATA.name.split(' ')[0]} />`}
        </h1>

        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollTo('projects')} className="hover:text-blue-500 transition-colors">Projets</button>
          <button onClick={() => scrollTo('skills')} className="hover:text-blue-500 transition-colors">Compétences</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-blue-500 transition-colors">Contact</button>
        </div>
        
        {/* Placeholder pour équilibrer la layout si besoin, ou bouton d'action */}
        <div className="w-8"></div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="pt-32 pb-20 bg-white text-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <span className="inline-block px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-md">
              Disponible pour un stage / emploi
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Bonjour, je suis <br />
              <span className="text-blue-500">{PORTFOLIO_DATA.name}</span>
            </h1>
            <p className="text-xl text-gray-600">
              {PORTFOLIO_DATA.role}
            </p>
            <p className="text-lg max-w-2xl text-gray-500">
              {PORTFOLIO_DATA.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={() => window.open(PORTFOLIO_DATA.socials.github, '_blank')}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <Github size={20} /> GitHub
              </button>
              <button className="flex items-center justify-center gap-2 px-6 py-3 border rounded-lg transition-colors font-medium border-gray-300 hover:bg-gray-50 text-gray-700">
                <Download size={20} /> Télécharger CV
              </button>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl">
               <span className="text-8xl text-white font-bold">{PORTFOLIO_DATA.name.charAt(0)}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-10">
          <h2 className="text-3xl font-bold text-center">Mes Compétences</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full max-w-6xl">
            {PORTFOLIO_DATA.skills.map((skill, index) => (
              <div 
                key={index} 
                className="p-6 rounded-xl shadow-md flex flex-col items-center gap-4 transition-transform hover:-translate-y-1 hover:shadow-lg bg-white"
              >
                <skill.icon size={40} className={skill.color} />
                <span className="font-bold text-lg">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white text-gray-900">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-center">Mes Projets Récents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PORTFOLIO_DATA.projects.map((project, index) => (
              <div 
                key={index} 
                className="rounded-xl overflow-hidden shadow-lg border transition-all hover:shadow-xl bg-white border-gray-100"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="line-clamp-3 text-gray-600">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-2">
                    <button 
                      onClick={() => window.open(project.demoLink, '_blank')}
                      className="flex-1 flex items-center justify-center gap-2 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={16} /> Demo
                    </button>
                    <button 
                      onClick={() => window.open(project.githubLink, '_blank')}
                      className="flex-1 flex items-center justify-center gap-2 py-2 border rounded hover:bg-opacity-10 transition-colors text-sm font-medium border-gray-300 hover:bg-gray-100 text-gray-700"
                    >
                      <Github size={16} /> Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="py-10 border-t bg-gray-50 border-gray-200 text-gray-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left space-y-1">
            <h3 className="font-bold text-lg text-gray-900">{PORTFOLIO_DATA.name}</h3>
            <p className="text-sm">© {new Date().getFullYear()} Tous droits réservés.</p>
          </div>

          <div className="flex space-x-6">
            <a href={PORTFOLIO_DATA.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
              <Github size={24} />
            </a>
            <a href={PORTFOLIO_DATA.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={PORTFOLIO_DATA.socials.email} className="hover:text-blue-500 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- App Principal ---
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;