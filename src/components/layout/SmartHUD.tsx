"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const sections = [
  { id: "home", name: "Home", href: "/" },
  { id: "project", name: "Master Plan", href: "/godrej-park-world-pune-masterplan" },
  { id: "lifestyle", name: "Aqua Lifestyle", href: "/godrej-park-world-pune-aqua-lifestyle" },
  { id: "residences", name: "Residences", href: "/godrej-park-world-pune-luxury-residences" },
  { id: "amenities", name: "Amenities", href: "/godrej-park-world-pune-premium-amenities" },
  { id: "location", name: "Location", href: "/godrej-park-world-pune-hinjewadi-location" },
  { id: "gallery", name: "Gallery", href: "/godrej-park-world-pune-gallery" },
];

export default function SmartHUD() {
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    // Scroll Spy Logic
    const handleScroll = () => {
      let currentSection = sections[0].id;
      let minDistance = Infinity;
      const scrollPosition = window.scrollY + window.innerHeight / 3; // Trigger earlier

      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const distance = Math.abs(element.offsetTop - scrollPosition);
          if (distance < minDistance) {
            minDistance = distance;
            currentSection = id;
          }
        }
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
        
        // Silently update URL if it doesn't match
        const targetHref = sections.find(s => s.id === currentSection)?.href;
        if (targetHref && window.location.pathname !== targetHref) {
          window.history.replaceState(null, '', targetHref);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1 }}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-6"
    >
      {sections.map((section, index) => (
        <a 
          key={section.id} 
          href={section.href}
          onClick={(e) => handleNavClick(e, section.id)}
          className="group flex items-center gap-4 relative"
        >
          {/* Dot */}
          <div className="relative flex items-center justify-center w-4 h-4">
            <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
              activeSection === section.id ? 'bg-emerald-aqua scale-150' : 'bg-gray-400 group-hover:bg-white'
            }`} />
            {activeSection === section.id && (
              <motion.div 
                layoutId="activeDotRing"
                className="absolute inset-0 rounded-full border border-emerald-aqua"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </div>
          
          {/* Label */}
          <span className={`absolute left-8 whitespace-nowrap text-[10px] tracking-[0.2em] uppercase font-semibold transition-all duration-300 ${
            activeSection === section.id ? 'text-white opacity-100 translate-x-0' : 'text-gray-400 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-white'
          }`}>
            {section.name}
          </span>
        </a>
      ))}
    </motion.div>
  );
}
