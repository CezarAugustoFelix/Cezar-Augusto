import { motion, useScroll, useTransform, AnimatePresence, useInView } from "motion/react";
import { ArrowUpRight, Github, Instagram, Linkedin, Mail, Menu, X, Play, Camera, Cpu, Video, Layers, MousePointer2, Plane, Gamepad2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const PROJECTS = [
  { id: 1, title: "Cinematic Reel", category: "Video", video: "https://assets.mixkit.co/videos/preview/mixkit-abstract-motion-design-of-a-blue-sphere-44144-large.mp4", thumbnail: "https://picsum.photos/seed/reel/800/1000" },
  { id: 2, title: "Aerial View", category: "Drone", video: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-city-at-night-11-large.mp4", thumbnail: "https://picsum.photos/seed/aerial/800/1000" },
  { id: 3, title: "Brand Identity", category: "Design", video: "https://assets.mixkit.co/videos/preview/mixkit-ink-swirling-in-water-446-large.mp4", thumbnail: "https://picsum.photos/seed/brand/800/1000" },
  { id: 4, title: "Motion Graphics", category: "After Effects", video: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-blue-cube-44145-large.mp4", thumbnail: "https://picsum.photos/seed/motion/800/1000" },
  { id: 5, title: "Urban Capture", category: "Photography", video: "https://assets.mixkit.co/videos/preview/mixkit-city-traffic-at-night-44146-large.mp4", thumbnail: "https://picsum.photos/seed/urban/800/1000" },
  { id: 6, title: "Nature Drone", category: "Drone", video: "https://assets.mixkit.co/videos/preview/mixkit-mountain-landscape-with-clouds-44147-large.mp4", thumbnail: "https://picsum.photos/seed/nature/800/1000" },
  { id: 7, title: "Studio Session", category: "Photography", video: "https://assets.mixkit.co/videos/preview/mixkit-studio-lighting-setup-44148-large.mp4", thumbnail: "https://picsum.photos/seed/studio/800/1000" },
  { id: 8, title: "Commercial Edit", category: "Video", video: "https://assets.mixkit.co/videos/preview/mixkit-commercial-product-shoot-44149-large.mp4", thumbnail: "https://picsum.photos/seed/commercial/800/1000" },
  { id: 9, title: "Vector Art", category: "Design", video: "https://assets.mixkit.co/videos/preview/mixkit-vector-animation-process-44150-large.mp4", thumbnail: "https://picsum.photos/seed/vector/800/1000" },
  { id: 10, title: "Final Cut", category: "Video", video: "https://assets.mixkit.co/videos/preview/mixkit-video-editing-software-interface-44151-large.mp4", thumbnail: "https://picsum.photos/seed/final/800/1000" },
];

const SKILLS = [
  { name: "Adobe Premiere", level: 95, icon: <Video size={14} /> },
  { name: "After Effects", level: 85, icon: <Layers size={14} /> },
  { name: "Photoshop", level: 90, icon: <Camera size={14} /> },
  { name: "Illustrator", level: 80, icon: <Cpu size={14} /> },
  { name: "Captação / Foto", level: 90, icon: <Camera size={14} /> },
  { name: "Drone", level: 85, icon: <Plane size={14} /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 px-6 py-6 transition-all duration-500",
      scrolled ? "bg-brand-bg/80 backdrop-blur-md py-4" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold tracking-tighter"
        >
          CEZAR AUGUSTO<span className="text-white/30">.</span>
        </motion.div>
        
        <div className="hidden md:flex gap-10 items-center">
          {["Works", "Arsenal", "Vision", "Touch"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-[10px] uppercase tracking-[0.2em] font-medium hover:text-white/50 transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-3 glass rounded-full"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-brand-bg z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {["Works", "Arsenal", "Vision", "Touch"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-5xl font-display font-bold tracking-tighter"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      <div className="text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 block mb-6">
            Design, Vídeo & Cinematografia Aérea
          </span>
          <h1 className="text-[15vw] md:text-[12vw] font-display font-extrabold leading-[0.8] tracking-tighter uppercase">
            CEZAR <br />
            AUGUSTO
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="max-w-xl mx-auto text-sm md:text-lg text-white/60 font-light tracking-wide leading-relaxed"
        >
          Transformando briefings em resultados estéticos de excelência <br />
          através de técnica e visão autoral.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/40 to-transparent" />
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/20">Scroll Down</span>
      </motion.div>
    </section>
  );
};

const HorizontalGallery = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section id="works" ref={targetRef} className="horizontal-scroll-section relative">
      <div className="sticky-wrapper">
        <motion.div style={{ x }} className="horizontal-track">
          <div className="flex flex-col justify-center min-w-[30vw]">
            <span className="text-[10px] uppercase tracking-[0.5em] text-white/30 block mb-8">Portfolio</span>
            <h2 className="text-7xl md:text-9xl font-display font-bold tracking-tighter uppercase leading-none">
              The <br /> <span className="text-white/30 italic">Gallery</span>
            </h2>
          </div>
          
          {PROJECTS.map((project, i) => (
            <GalleryItem key={project.id} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const GalleryItem = ({ project, index }: { project: typeof PROJECTS[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const itemRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"]
  });

  // Blur to Clear and Scale effect
  const blur = useTransform(scrollYProgress, [0, 0.5, 1], ["20px", "0px", "20px"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) videoRef.current.play().catch(() => {});
      else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered]);

  return (
    <motion.div
      ref={itemRef}
      style={{ filter: `blur(${blur.get()})`, scale }}
      className="relative min-w-[300px] md:min-w-[600px] aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-none bg-brand-surface group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 z-0">
        <img
          src={project.thumbnail}
          alt={project.title}
          className={cn(
            "w-full h-full object-cover transition-all duration-1000",
            isHovered ? "opacity-0 scale-110" : "opacity-100 scale-100"
          )}
          referrerPolicy="no-referrer"
        />
        <video
          ref={videoRef}
          src={project.video}
          muted
          loop
          playsInline
          className={cn(
            "w-full h-full object-cover transition-opacity duration-700",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
      
      <div className="absolute bottom-0 left-0 w-full p-10 z-20 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex justify-between items-end">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-white/40 mb-3 block">
              {project.category}
            </span>
            <h3 className="text-4xl font-display font-bold tracking-tighter">{project.title}</h3>
          </div>
          <div className="w-14 h-14 rounded-full glass flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
            <ArrowUpRight size={24} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SkillItem = ({ skill, index }: { skill: typeof SKILLS[0], index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-4">
      <div className="flex justify-between items-end">
        <div className="flex items-center gap-3">
          <span className="text-white/30">{skill.icon}</span>
          <h4 className="text-sm uppercase tracking-widest font-bold">{skill.name}</h4>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[9px] text-white/20 uppercase tracking-tighter">LVL</span>
          <span className="text-xs font-mono font-bold">{skill.level}</span>
        </div>
      </div>
      <div className="level-bar-container">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="level-bar-fill"
        />
      </div>
    </div>
  );
};

const Arsenal = () => {
  return (
    <section id="arsenal" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          <div>
            <span className="level-tag">System Stats</span>
            <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter uppercase mb-10 leading-none">
              Skills & <br /> <span className="text-white/30 italic">Arsenal</span>
            </h2>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              Interface técnica de competências. Domínio de softwares e hardware para entrega de excelência visual.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10">
            {SKILLS.map((skill, i) => (
              <SkillItem key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Vision = () => {
  return (
    <section id="vision" className="py-32 px-6 bg-brand-surface/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="aspect-[4/5] rounded-none overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 border border-white/10"
          >
            <img 
              src="https://picsum.photos/seed/cezar-augusto/1000/1250" 
              alt="Cezar Augusto" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 glass rounded-none flex items-center justify-center animate-float">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-center leading-relaxed">
              Visual <br /> Creator
            </span>
          </div>
        </div>
        <div>
          <span className="level-tag">The Vision</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-12 leading-[0.9] uppercase">
            Visão <br /> <span className="text-white/30 italic">Autoral</span>
          </h2>
          <div className="space-y-8 text-white/60 font-light leading-relaxed text-lg">
            <p>
              Criativo Visual focado em Design, Edição de Vídeo e Cinematografia Aérea. Transformando briefings em resultados estéticos de excelência através de técnica e visão autoral.
            </p>
            <p>
              Com sólida experiência em edição de vídeo e motion graphics, construo projetos que dominam o cenário digital, unindo a estratégia publicitária à arte visual pura.
            </p>
          </div>
          
          <div className="mt-20 grid grid-cols-2 gap-12">
            <div>
              <span className="text-[9px] text-white/30 block mb-3 uppercase tracking-[0.3em]">Specialty</span>
              <span className="text-xl font-display font-bold">Design & Motion</span>
            </div>
            <div>
              <span className="text-[9px] text-white/30 block mb-3 uppercase tracking-[0.3em]">Vision</span>
              <span className="text-xl font-display font-bold">Autoral</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Touch = () => {
  return (
    <section id="touch" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="glass p-16 md:p-32 rounded-none text-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="level-tag">Contact</span>
          <h2 className="text-7xl md:text-[10rem] font-display font-bold tracking-tighter uppercase mb-20 leading-[0.8]">
            Let's build <br /> <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>Impact</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {[
              { label: "WhatsApp", href: "https://wa.me/5543999859044" },
              { label: "Behance", href: "https://behance.net/cezaraugustofelix" },
              { label: "LinkedIn", href: "https://linkedin.com/in/cezaraugustofelix/" },
            ].map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                target="_blank"
                className="px-12 py-7 glass rounded-none text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all flex items-center gap-4"
              >
                {link.label}
                <ArrowUpRight size={18} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-[9px] uppercase tracking-[0.4em] text-white/20">
          © 2024 CEZAR AUGUSTO DESIGN. VISUAL EXCELLENCE.
        </div>
        <div className="flex gap-12">
          <a href="#" className="text-[9px] uppercase tracking-[0.4em] text-white/20 hover:text-white transition-colors">Privacy</a>
          <a href="#" className="text-[9px] uppercase tracking-[0.4em] text-white/20 hover:text-white transition-colors">Terms</a>
        </div>
        <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.4em] text-white/20">
          <MousePointer2 size={12} />
          SCROLL TO TOP
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <HorizontalGallery />
        <Arsenal />
        <Vision />
        <Touch />
      </main>
      <Footer />
    </div>
  );
}
