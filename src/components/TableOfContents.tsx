import { useState, useEffect } from 'react';

interface Section {
  id: string;
  title: string;
}

const sections: Section[] = [
  { id: 'uvod', title: 'Úvod' },
  { id: 'prehled', title: 'Přehled projektu' },
  { id: 'token', title: 'Základní informace o tokenu' },
  { id: 'tokenomika', title: 'Tokenomika' },
  { id: 'bezpecnost', title: 'Bezpečnost a technologie' },
  { id: 'charita', title: 'Charitativní cíle' },
  { id: 'staking', title: 'Staking (v plánu 2026)' },
  { id: 'nft', title: 'NFT ekosystém (v plánu 2027)' },
  { id: 'transparentnost', title: 'Transparentnost a komunita' },
  { id: 'dao', title: 'DAO a správa komunity' },
  { id: 'roadmap', title: 'Roadmap 2025 → 2028' },
  { id: 'zaver', title: 'Závěr a vize' }
];

export function TableOfContents() {
  const [activeSection, setActiveSection] = useState('uvod');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -35% 0px' }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="sticky top-10">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header with logo */}
        <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-6 text-center border-b border-emerald-400/30">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="text-4xl">🧁</div>
            <h3 className="text-white text-2xl">MuffinFi</h3>
          </div>
          <p className="text-emerald-100 text-sm">Whitepaper v1.0</p>
        </div>
        
        {/* Content section label */}
        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
          <h4 className="text-slate-700 font-semibold">Obsah</h4>
        </div>
        
        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-1">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`text-left w-full px-4 py-3 rounded-xl transition-all duration-200 text-sm ${
                    activeSection === section.id
                      ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg shadow-emerald-500/30'
                      : 'text-slate-600 hover:bg-emerald-50 hover:text-emerald-700'
                  }`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 text-center">
          <p className="text-slate-500 text-xs">© 2025 MuffinFi Protocol</p>
        </div>
      </div>
    </div>
  );
}