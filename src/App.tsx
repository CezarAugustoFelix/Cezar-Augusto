import { motion, useScroll, useTransform, AnimatePresence, useInView } from "motion/react";
import { ArrowUpRight, Camera, Cpu, Video, Layers, MousePointer2, Plane, Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const PROJECTS = [
  { id: 1, title: "Arte 01", category: "Design Visual", thumbnail: "/img/img.png" },
  { id: 2, title: "Arte 02", category: "Design Visual", thumbnail: "/img/img1.png" },
  { id: 3, title: "Arte 03", category: "Design Visual", thumbnail: "/img/img2.png" },
  { id: 4, title: "Arte 04", category: "Design Visual", thumbnail: "/img/img3.png" },
  { id: 5, title: "Arte 05", category: "Design Visual", thumbnail: "/img/img4.png" },
  { id: 6, title: "Arte 06", category: "Design Visual", thumbnail: "/img/img5.png" },
  { id: 7, title: "Arte 07", category: "Design Visual", thumbnail: "/img/img6.png" },
  { id: 8, title: "Arte 08", category: "Design Visual", thumbnail: "/img/img7.png" },
  { id: 9, title: "Arte 09", category: "Design Visual", thumbnail: "/img/img8.png" },
  { id: 10, title: "Arte 10", category: "Design Visual", thumbnail: "/img/img9.png" }
];

const SKILLS = [
  { name: "Adobe Premiere", level: 95, icon: <Video size={14} /> },
  { name: "After Effects", level: 70, icon: <Layers size={14} /> },
  { name: "Photoshop", level: 80, icon: <Camera size={14} /> },
  { name: "Illustrator", level: 50, icon: <Cpu size={14} /> },
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
      scrolled ? "bg-[#0D0D0D]/80 backdrop-blur-md py-4" : "bg-transparent"
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
          {["Works", "Arsenal", "Touch"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[10px] uppercase tracking-[0.2em] font-medium hover:text-white/50 transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-3 glass rounded-full">
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
    </nav>
  );
};

const Hero = () => (
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
          CEZAR <br /> AUGUSTO
        </h1>
      </motion.div>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="max-w-xl mx-auto text-sm md:text-lg text-white/60 font-light tracking-wide leading-relaxed"
      >
        Design. Código. Inteligência Artificial.
        Transformando briefings em resultados estéticos de excelência através de técnica e visão autoral.
      </motion.p>
    </div>
  </section>
);

const ProjectItem = ({ project }: { project: typeof PROJECTS[0] }) => {
  const itemRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const { scrollYProgress: itemProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"] 
  });

  // Otimização: No mobile o blur é menor para não pesar na performance
  const blurValue = useTransform(
    itemProgress, 
    [0.2, 0.5, 0.8], 
    [isMobile ? "4px" : "15px", "0px", isMobile ? "4px" : "15px"]
  );

  const scaleValue = useTransform(itemProgress, [0.2, 0.5, 0.8], [0.85, 1, 0.85]);
  const opacityValue = useTransform(itemProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={itemRef}
      style={{ 
        filter: useTransform(blurValue, (v) => `blur(${v})`), 
        scale: scaleValue,
        opacity: opacityValue 
      }}
      className="project-card group flex-shrink-0"
    >
      <img 
        src={project.thumbnail} 
        alt={project.title} 
        className="project-image"
        loading="lazy" 
      />
      <div className="project-info">
        <span className="level-tag">{project.category}</span>
        <h3 className="text-2xl font-display font-bold uppercase">{project.title}</h3>
      </div>
    </motion.div>
  );
};

const HorizontalGallery = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section id="works" ref={targetRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12 px-[10vw]">
          <div className="flex flex-col justify-center min-w-[30vw]">
            <span className="text-[10px] uppercase tracking-[0.5em] text-white/30 block mb-8">Portfolio</span>
            <h2 className="text-7xl md:text-9xl font-display font-bold tracking-tighter uppercase leading-none">
              The <br /> <span className="text-white/30 italic">Gallery</span>
            </h2>
          </div>
          {PROJECTS.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const SkillItem = ({ skill, index }: { skill: typeof SKILLS[0], index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-4">
      <div className="flex justify-between items-end">
        <div className="flex items-center gap-3">
          <span className="text-white/30">{skill.icon}</span>
          <h4 className="text-sm uppercase tracking-widest font-bold">{skill.name}</h4>
        </div>
        <span className="text-xs font-mono font-bold">{skill.level}%</span>
      </div>
      <div className="w-full h-[2px] bg-white/10 relative overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: index * 0.1 }}
          className="h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"
        />
      </div>
    </div>
  );
};

const Arsenal = () => (
  <section id="arsenal" className="py-32 px-6 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
      <div>
        <span className="level-tag">System Stats</span>
        <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter uppercase mb-10 leading-none">
          Skills & <br /> <span className="text-white/30 italic">Arsenal</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-10">
        {SKILLS.map((skill, i) => <SkillItem key={skill.name} skill={skill} index={i} />)}
      </div>
    </div>
  </section>
);

const Touch = () => (
  <section id="touch" className="py-32 px-6 max-w-7xl mx-auto">
    <div className="glass p-16 md:p-32 rounded-none text-center relative overflow-hidden">
      <h2 className="text-7xl md:text-[10rem] font-display font-bold tracking-tighter uppercase mb-20 leading-[0.8]">
        Let's build <br /> 
        <span className="text-outline">Impact</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {[
          { label: "WhatsApp", href: "https://wa.me/5543999859044" },
          { label: "Behance", href: "https://behance.net/cezaraugustofelix" },
          { label: "LinkedIn", href: "https://linkedin.com/in/cezaraugustofelix/" },
        ].map((link) => (
          <a key={link.label} href={link.href} target="_blank" className="px-12 py-6 glass text-[10px] uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-all flex items-center gap-4">
            {link.label} <ArrowUpRight size={18} />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default function App() {
  return (
    <div className="bg-[#0D0D0D] text-white selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <HorizontalGallery />
        <Arsenal />
        <Touch />
      </main>
      <footer className="py-16 px-6 text-center text-[9px] uppercase tracking-[0.4em] text-white/20">
        © 2026 CEZAR AUGUSTO FELIX. VISUAL EXCELLENCE.
      </footer>
    </div>
  );
}