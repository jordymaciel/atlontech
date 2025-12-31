import React, { useState, useEffect, useRef } from 'react';
import { 
  Monitor, 
  Smartphone, 
  Zap, 
  ArrowRight,
  ShieldCheck,
  LayoutGrid,
  Menu,
  X,
  Code2,
  Cpu,
  Layers
} from 'lucide-react';

// Componente para revelar elementos ao rolar (Scroll Reveal)
const ScrollReveal = ({ children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    }, { threshold: 0.1 });
    
    const { current } = domRef;
    observer.observe(current);
    return () => observer.unobserve(current);
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
    >
      {children}
    </div>
  );
};

// Logo Tesseract em tons de cinza/branco
const TesseractLogo = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 30L70 30L70 70L30 70Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M30 30L15 15H55L70 30" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M70 30L85 15V55L70 70" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M15 55L30 70" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M15 15V55H55L40 40" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" opacity="0.2" />
    <rect x="42" y="42" width="16" height="16" stroke="currentColor" strokeWidth="1.5" />
    <line x1="30" y1="30" x2="42" y2="42" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
    <line x1="70" y1="30" x2="58" y2="42" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
    <line x1="70" y1="70" x2="58" y2="58" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
    <line x1="30" y1="70" x2="42" y2="58" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
  </svg>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className={`mx-auto max-w-5xl px-6 rounded-full transition-all duration-500 ${
        scrolled ? 'bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl' : 'bg-transparent'
      }`}>
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center gap-3 group cursor-pointer">
            <TesseractLogo className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-500" />
            <span className="font-bold text-lg tracking-[0.2em] text-white">ATLON</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {['Processo', 'Soluções', 'Manifesto'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] uppercase tracking-widest font-medium text-white/50 hover:text-white transition-colors">
                {item}
              </a>
            ))}
            <a 
              href="mailto:atlontechnologies@gmail.com"
              className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold hover:bg-neutral-200 transition-all"
            >
              Consultar Especialista
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

const BuildStep = ({ number, title, description }) => (
  <ScrollReveal className="flex gap-8 group">
    <div className="text-4xl font-light text-white/10 group-hover:text-white/40 transition-colors duration-500 italic">
      {number}
    </div>
    <div className="pt-2">
      <h4 className="text-xl font-medium text-white mb-2">{title}</h4>
      <p className="text-white/40 leading-relaxed text-sm max-w-sm">{description}</p>
    </div>
  </ScrollReveal>
);

const App = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#000] text-white selection:bg-white/20 font-sans overflow-x-hidden">
      {/* Background Parallax Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-zinc-800/20 blur-[150px] rounded-full transition-transform duration-700 ease-out"
          style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
        />
        <div 
          className="absolute bottom-[0%] right-[-5%] w-[40%] h-[40%] bg-zinc-900/40 blur-[120px] rounded-full transition-transform duration-1000 ease-out"
          style={{ transform: `translate(${-mousePos.x * 1.5}px, ${-mousePos.y * 1.5}px)` }}
        />
      </div>

      <Navbar />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center pt-20 px-6 text-center">
          <ScrollReveal>
            <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-10">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Softwares personalizados</span>
            </div>
            
            <h1 className="text-5xl md:text-[7.5rem] font-bold tracking-tight mb-10 leading-[0.95] text-white">
              Criamos sistemas que<br /> não existem. <br />
              <span className="text-neutral-500 italic font-light">Até agora.</span>
            </h1>
            
            <p className="max-w-xl mx-auto text-lg md:text-xl text-neutral-400 font-light leading-relaxed mb-16">
              Construímos ecossistemas exclusivos
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="mailto:jordymacieljm@gmail.com"
                className="px-10 py-4 bg-white text-black rounded-full font-bold text-sm hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] inline-flex items-center"
              >
                Projetar meu App
              </a>
              <button className="px-10 py-4 border border-white/20 rounded-full font-bold text-sm hover:bg-white/5 transition-all flex items-center gap-2">
                Ver Filosofia <ArrowRight size={16} />
              </button>
            </div>
          </ScrollReveal>
          
          <div className="mt-32 w-px h-24 bg-gradient-to-b from-white/20 to-transparent animate-pulse" />
        </section>

        {/* Focus Section: Construction */}
        <section id="processo" className="py-40 px-6 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <ScrollReveal>
                <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">
                  Não adaptamos o seu negócio. <br /> 
                  <span className="text-white/30">Nós moldamos o código a ele.</span>
                </h2>
                <div className="space-y-16 mt-20">
                  <BuildStep 
                    number="01" 
                    title="Análise de Fluxo Nativo" 
                    description="Mapeamos cada engrenagem da sua gestão para identificar onde a automação sob medida terá o maior impacto financeiro."
                  />
                  <BuildStep 
                    number="02" 
                    title="Engenharia de Performance" 
                    description="Desenvolvimento 100% nativo (Swift/Kotlin). Sem camadas extras. Sem lentidão. Apenas potência bruta."
                  />
                  <BuildStep 
                    number="03" 
                    title="Interface Invisível" 
                    description="Interfaces tão intuitivas que sua equipe esquece que está usando um software. Menos cliques, mais resultados."
                  />
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal className="sticky top-40">
              <div className="aspect-[4/5] rounded-[3rem] bg-zinc-900 border border-white/10 p-1 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.05),transparent)] pointer-events-none" />
                <div className="h-full w-full rounded-[2.8rem] bg-black p-8 flex flex-col justify-between relative">
                  <div className="flex justify-between items-center">
                    <Layers className="text-white/20" size={32} />
                    <div className="text-[10px] tracking-widest text-white/20 uppercase">Core Architecture</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="h-2 w-3/4 bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-white w-1/3 animate-pulse" />
                    </div>
                    <div className="h-2 w-1/2 bg-zinc-800 rounded-full" />
                    <div className="h-2 w-2/3 bg-zinc-800 rounded-full" />
                  </div>

                  <div className="p-8 border border-white/5 rounded-3xl bg-white/[0.02] backdrop-blur-xl">
                    <p className="text-xs text-white/30 mb-2 uppercase tracking-tighter">Status do Build</p>
                    <p className="text-3xl font-light tracking-tight">Personalização Total</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Liquid Glass Showcase */}
        <section className="py-40 relative">
          <div className="absolute inset-0 bg-white/[0.02] -skew-y-3" />
          <div className="max-w-6xl mx-auto px-6 relative">
            <ScrollReveal className="text-center mb-24">
              <h3 className="text-xs uppercase tracking-[0.5em] text-white/40 mb-6">Soluções Corporativas</h3>
              <h2 className="text-4xl md:text-6xl font-bold italic">Bespoke is the new standard.</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Cpu, title: "Lógica de Gestão", desc: "Algoritmos desenhados para a regra de negócio exclusiva da sua empresa." },
                { icon: Smartphone, title: "Apps de Campo", desc: "Sistemas nativos offline-first para equipes que não podem parar." },
                { icon: ShieldCheck, title: "Privacidade Hardened", desc: "Segurança de nível bancário com criptografia de ponta a ponta." }
              ].map((item, idx) => (
                <ScrollReveal key={idx} className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:bg-white/[0.06] transition-all duration-500">
                  <item.icon size={28} className="mb-8 text-neutral-500" />
                  <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                  <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Manifesto Section */}
        <section id="manifesto" className="py-60 px-6 text-center bg-black">
          <ScrollReveal>
            <h2 className="text-6xl md:text-[10rem] font-bold tracking-tighter text-white/5 mb-[-2rem] select-none">MANIFESTO</h2>
            <div className="max-w-3xl mx-auto relative">
              <p className="text-2xl md:text-4xl font-light leading-snug">
                Desenvolvemos software sob contexto, não por padrão<br /> 
                <span className="text-white font-bold italic underline decoration-zinc-700 underline-offset-8">exclusivamente para você</span>. 
                Se é genérico, não é Atlon."
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Final CTA */}
        <section className="py-40 px-6">
          <ScrollReveal>
            <div className="max-w-5xl mx-auto rounded-[5rem] bg-zinc-900/50 border border-white/10 p-20 text-center relative overflow-hidden backdrop-blur-3xl">
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/5 blur-[100px] rounded-full" />
              <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight">Visões fortes <br /> pedem arquitetura de base forte</h2>
              <a 
                href="mailto:atlontechnologies@gmail.com"
                className="px-14 py-6 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl inline-block"
              >
                Começar a Construir
              </a>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <footer className="py-20 px-6 border-t border-white/5 bg-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <TesseractLogo className="w-6 h-6 text-white" />
              <span className="font-bold text-sm tracking-[0.3em] text-white">ATLON TECH</span>
            </div>
            <p className="text-white/20 text-xs tracking-widest uppercase">Pure Native. Pure Custom. Pure Power.</p>
          </div>
          
          <div className="flex flex-wrap gap-12">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-4">Contato</p>
              <a href="mailto:atlontechnologies@gmail.com" className="text-sm hover:text-white transition-colors cursor-pointer">
                atlontechnologies@gmail.com
              </a>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-4">Social</p>
              <p className="text-sm hover:text-white transition-colors cursor-pointer">LinkedIn</p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-20 text-[10px] text-white/10 uppercase tracking-[0.5em]">
          © 2025 Atlon Tech Systems. Limited Edition Architecture.
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
          background-color: black;
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #000;
        }
        ::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #444;
        }
        @keyframes float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-20px, 30px); }
}

@keyframes float-delayed {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(30px, -20px); }
}

@keyframes glow {
  0%, 100% { opacity: 0.5; filter: drop-shadow(0 0 10px #CC9900); }
  50% { opacity: 1; filter: drop-shadow(0 0 30px #CC9900); }
}

.animate-float { animation: float 10s ease-in-out infinite; }
.animate-float-delayed { animation: float-delayed 12s ease-in-out infinite; }
.animate-glow { animation: glow 4s ease-in-out infinite; }
      `}} />
    </div>
  );
};

export default App;
