import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight,
  ShieldCheck,
  Menu,
  X,
  Cpu,
  Smartphone,
  Layers,
  Sparkles,
  Instagram,
  Mail,
  Layout
} from 'lucide-react';

// Ícone customizado do WhatsApp para fidelidade visual
const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// Componente para revelar elementos ao rolar (Scroll Reveal)
const ScrollReveal = ({ children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    }, { threshold: 0.1 });
    
    const { current } = domRef;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
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

// Logo Tesseract
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

const App = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40
      });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const email = "atlontechnologies@gmail.com";
  const whatsappUrl = "https://wa.me/5587981739862";
  const instagramUrl = "https://www.instagram.com/atlon_tech/";

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

      {/* Navbar */}
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
              {['Processo', 'IA', 'Soluções', 'Manifesto'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] uppercase tracking-widest font-medium text-white/50 hover:text-white transition-colors">
                  {item}
                </a>
              ))}
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold hover:bg-neutral-200 transition-all flex items-center gap-2 group"
              >
                Consultar Especialista <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>

            <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

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
                href={`mailto:${email}`}
                className="px-10 py-4 bg-white text-black rounded-full font-bold text-sm hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] inline-flex items-center"
              >
                Projetar meu App
              </a>
              <a 
                href="#manifesto"
                className="px-10 py-4 border border-white/20 rounded-full font-bold text-sm hover:bg-white/5 transition-all flex items-center gap-2"
              >
                Ver Filosofia <ArrowRight size={16} />
              </a>
            </div>
          </ScrollReveal>
          
          <div className="mt-32 w-px h-24 bg-gradient-to-b from-white/20 to-transparent animate-pulse" />
        </section>

        {/* Focus Section: Processo */}
        <section id="processo" className="py-40 px-6 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <ScrollReveal>
                <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">
                  Não adaptamos o seu negócio. <br /> 
                  <span className="text-white/30">Nós moldamos o código a ele.</span>
                </h2>
                <div className="space-y-16 mt-20">
                  {[
                    { n: "01", t: "Análise de Fluxo Nativo", d: "Mapeamos cada engrenagem da sua gestão para identificar onde a automação sob medida terá o maior impacto financeiro." },
                    { n: "02", t: "Engenharia de Performance", d: "Desenvolvimento 100% nativo (Swift/Kotlin). Sem camadas extras. Sem lentidão. Apenas potência bruta." },
                    { n: "03", t: "Interface Invisível", d: "Interfaces tão intuitivas que sua equipe esquece que está usando um software. Menos cliques, mais resultados." }
                  ].map((step, idx) => (
                    <div key={idx} className="flex gap-8 group">
                      <div className="text-4xl font-light text-white/10 group-hover:text-white/40 transition-colors duration-500 italic">{step.n}</div>
                      <div className="pt-2">
                        <h4 className="text-xl font-medium text-white mb-2">{step.t}</h4>
                        <p className="text-white/40 leading-relaxed text-sm max-w-sm">{step.d}</p>
                      </div>
                    </div>
                  ))}
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

        {/* IA Section */}
        <section id="ia" className="py-40 px-6 relative overflow-hidden">
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(204,153,0,0.15)_0%,transparent_60%)] animate-pulse" />
            <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#CC9900]/10 blur-[120px] rounded-full animate-float opacity-40" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#8B6508]/20 blur-[100px] rounded-full animate-float-delayed opacity-30" />
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CC9900]/10 border border-[#CC9900]/30 mb-6 backdrop-blur-md">
                <Sparkles size={14} className="text-[#CC9900]" />
                <span className="text-[10px] uppercase tracking-widest text-[#CC9900]">Inteligência Avançada</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">IA que não apenas responde, <span className="italic text-neutral-500">mas opera.</span></h2>
              <p className="text-lg text-white/40 leading-relaxed mb-8">
                Desenvolvemos software sob contexto, não por padrão. Integramos inteligência preditiva que antecipa gargalos operacionais antes mesmo de acontecerem.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                  <p className="text-[#CC9900] font-bold mb-1 text-xs tracking-widest uppercase">Eficácia</p>
                  <p className="text-white/40 text-sm italic">Redução de ruído analítico.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                  <p className="text-[#CC9900] font-bold mb-1 text-xs tracking-widest uppercase">Precisão</p>
                  <p className="text-white/40 text-sm italic">Foco total em ROI.</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal className="relative flex items-center justify-center">
              <div className="w-80 h-80 relative">
                <div className="absolute inset-0 bg-[#CC9900] opacity-10 blur-[100px] rounded-full animate-pulse" />
                <div className="relative z-10 aspect-square rounded-[3rem] bg-zinc-900/50 border border-[#CC9900]/20 backdrop-blur-3xl p-12 flex items-center justify-center shadow-[0_0_50px_rgba(204,153,0,0.1)]">
                   <Cpu size={100} className="text-[#CC9900]/60 animate-glow" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Customização Section */}
        <section id="customização" className="py-40 px-6">
          <div className="max-w-6xl mx-auto text-center mb-24">
            <ScrollReveal>
              <h2 className="text-4xl md:text-7xl font-bold mb-10 tracking-tighter italic text-white">Customização sem Limites.</h2>
              <p className="text-xl text-neutral-500 max-w-2xl mx-auto font-light">Visões fortes pedem bases sólidas. Não criamos apenas sites; criamos ecossistemas de alta conversão.</p>
            </ScrollReveal>
          </div>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <ScrollReveal className="p-12 rounded-[4rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl hover:bg-white/[0.05] transition-all group overflow-hidden relative">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform duration-1000">
                  <Layout size={120} />
               </div>
               <h3 className="text-3xl font-bold mb-6">Landing Pages <br/> de Alta Performance</h3>
               <p className="text-white/40 leading-relaxed mb-8 max-w-md">
                 Sites institucionais e páginas de vendas focadas em experiência do utilizador e carregamento instantâneo. Design minimalista com foco total em conversão.
               </p>
               <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-white hover:gap-4 transition-all">
                 Projetar Landing Page <ArrowRight size={16} />
               </a>
            </ScrollReveal>

            <ScrollReveal className="p-12 rounded-[4rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl hover:bg-white/[0.05] transition-all group overflow-hidden relative">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform duration-1000">
                  <Smartphone size={120} />
               </div>
               <h3 className="text-3xl font-bold mb-6">Apps Nativo <br/> Customizados</h3>
               <p className="text-white/40 leading-relaxed mb-8 max-w-md">
                 Sistemas de gestão nativos ajustados à sua operação. Não adaptamos o seu negócio ao software; o software nasce da sua rotina.
               </p>
               <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-white hover:gap-4 transition-all">
                 Construir App <ArrowRight size={16} />
               </a>
            </ScrollReveal>
          </div>
        </section>

        {/* Solutions Grid */}
        <section id="soluções" className="py-40 relative">
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
                Desenvolvemos software sob contexto, e não por padrão. <br /> 
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
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <a 
                  href={`mailto:${email}`}
                  className="px-14 py-6 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl inline-flex items-center"
                >
                  Começar a Construir
                </a>
              </div>
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
          
          <div className="flex flex-wrap gap-8 items-center">
            <div className="flex gap-4 items-center">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors group">
                <WhatsAppIcon className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
              </a>
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors group">
                <Instagram className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
              </a>
              <a href={`mailto:${email}`} className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors group">
                <Mail className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
              </a>
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
