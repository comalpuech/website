import { useState } from 'react';
import { Brain, Code, Database, Github, Linkedin, Mail, Menu, X } from 'lucide-react';

// AJOUT DE L'IMPORT ICI
// Assurez-vous que le chemin est correct par rapport à ce fichier (App.js)
import profilePhoto from './assets/photo.png'; 

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-lg font-bold text-slate-900">
              C.A. Puech
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">À propos</a>
              <a href="#projects" className="text-slate-600 hover:text-slate-900 transition-colors">Projets</a>
              <a href="#skills" className="text-slate-600 hover:text-slate-900 transition-colors">Compétences</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</a>
            </nav>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-slate-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 flex flex-col space-y-3 border-t border-slate-200 pt-4">
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>À propos</a>
              <a href="#projects" className="text-slate-600 hover:text-slate-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>Projets</a>
              <a href="#skills" className="text-slate-600 hover:text-slate-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>Compétences</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </nav>
          )}
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center px-6 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              
              {/* Colonne Texte (Gauche) */}
              <div className="flex-1 max-w-3xl">
                <p className="text-blue-600 font-medium mb-4 text-sm uppercase tracking-wide">
                  Portfolio · Élève Ingénieur
                </p>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                  Côme-Alexis <span className="text-blue-600">Puech</span>
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
                  Étudiant en 2ᵉ année de cycle ingénieur à l'ESIEA, majeure IA-Data. 
                  Je conçois des solutions mêlant intelligence artificielle et développement logiciel pour résoudre des problèmes concrets.
                </p>
                <div className="flex flex-wrap gap-4 mb-12">
                  <a 
                    href="#projects" 
                    className="px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
                  >
                    Voir mes projets
                  </a>
                  <a 
                    href="#contact" 
                    className="px-8 py-4 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-900 hover:text-white transition-colors font-medium"
                  >
                    Me contacter
                  </a>
                </div>

                <div className="inline-block bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <p className="font-semibold text-slate-900 mb-3">En ce moment</p>
                  <ul className="space-y-2 text-slate-600">
                    <li>🎓 2ᵉ année cycle ingénieur – ESIEA</li>
                    <li>🧠 Majeure : IA-Data</li>
                    <li>🛠️ Projet : AI-powered Study Planner</li>
                    <li>🔍 À la recherche d'un stage en IA / Data / Dev</li>
                  </ul>
                </div>
              </div>

              {/* Colonne Image (Droite) */}
              <div className="flex-1 max-w-sm lg:max-w-md w-full">
                <img 
                  // UTILISATION DE LA VARIABLE IMPORTÉE ICI
                  src={profilePhoto} 
                  alt="Portrait de Côme-Alexis Puech" 
                  className="w-full h-auto rounded-2xl shadow-xl ring-1 ring-slate-900/10 object-cover rotate-2 hover:rotate-0 transition-transform duration-300"
                />
              </div>

            </div>
          </div>
        </section>

        {/* À propos */}
        <section id="about" className="py-24 px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-8">À propos</h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Je suis actuellement en <strong className="text-slate-900">2ᵉ année de cycle ingénieur</strong> à 
                l'ESIEA, en majeure <strong className="text-slate-900">IA-Data</strong>. Je me forme aux fondamentaux 
                du machine learning, du deep learning, de la science des données et du développement logiciel.
              </p>
              <p>
                Mon objectif est de devenir <strong className="text-slate-900">Machine Learning Engineer</strong> ou{" "}
                <strong className="text-slate-900">Data / AI Engineer</strong>, en construisant des solutions qui 
                combinent modèles d'IA, infrastructure et expérience utilisateur.
              </p>
            </div>
          </div>
        </section>

        {/* Projets */}
        <section id="projects" className="py-24 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-12">Projets</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* AI-powered Study Planner */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <Brain className="text-blue-600" size={28} />
                  </div>
                  <a 
                    href="https://github.com/comalpuech/AI-powered-planner" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-slate-400 hover:text-slate-900 transition-colors"
                  >
                    <Github size={24} />
                  </a>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">AI-powered Study Planner</h3>
                <p className="text-sm text-slate-500 mb-4">Java • JavaFX • Ollama • SQLite</p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Calendrier intelligent intégrant la méthode Pomodoro et un LLM local. 
                  L'IA analyse l'urgence et la difficulté des tâches pour les placer 
                  automatiquement dans l'emploi du temps de manière optimale.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Java</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Ollama (IA)</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">CalendarFX</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Compétences */}
        <section id="skills" className="py-24 px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-12">Compétences</h2>
            <div className="grid md:grid-cols-3 gap-8">
              
              <div>
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg mr-3">
                    <Code className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Programmation</h3>
                </div>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Python (ML, scripts, data)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Java (JavaFX, projets académiques)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>JavaScript / TypeScript (React / Vite)</span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg mr-3">
                    <Brain className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">IA & Data</h3>
                </div>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Machine learning (classification, régression)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Manipulation de données (Pandas, NumPy)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Intégration de modèles IA (LLM local)</span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg mr-3">
                    <Database className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Outils</h3>
                </div>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Git / GitHub</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Linux (environnement de dev)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>React / Vite pour interfaces web</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Contact</h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Pour un stage, un projet ou simplement échanger sur l'IA et la data, n'hésite pas à me contacter.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6">
              <a 
                href="mailto:cpuech@et.esiea.fr"
                className="flex flex-col items-center p-8 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-slate-900 transition-all group"
              >
                <div className="p-3 bg-slate-50 rounded-lg mb-4 group-hover:bg-slate-900 transition-colors">
                  <Mail className="text-slate-900 group-hover:text-white transition-colors" size={24} />
                </div>
                <span className="font-semibold text-slate-900 mb-1">Email</span>
                <span className="text-sm text-slate-500">cpuech@et.esiea.fr</span>
              </a>

              <a 
                href="https://www.linkedin.com/in/come-alexis-puech"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center p-8 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-slate-900 transition-all group"
              >
                <div className="p-3 bg-slate-50 rounded-lg mb-4 group-hover:bg-slate-900 transition-colors">
                  <Linkedin className="text-slate-900 group-hover:text-white transition-colors" size={24} />
                </div>
                <span className="font-semibold text-slate-900 mb-1">LinkedIn</span>
                <span className="text-sm text-slate-500">come-alexis-puech</span>
              </a>

              <a 
                href="https://github.com/comalpuech"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center p-8 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-slate-900 transition-all group"
              >
                <div className="p-3 bg-slate-50 rounded-lg mb-4 group-hover:bg-slate-900 transition-colors">
                  <Github className="text-slate-900 group-hover:text-white transition-colors" size={24} />
                </div>
                <span className="font-semibold text-slate-900 mb-1">GitHub</span>
                <span className="text-sm text-slate-500">@comalpuech</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-slate-600">
          <p>© {new Date().getFullYear()} Côme-Alexis Puech</p>
        </div>
      </footer>
    </div>
  );
}

export default App;