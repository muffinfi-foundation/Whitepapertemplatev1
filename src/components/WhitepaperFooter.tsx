import { Twitter, Github, MessageCircle, Globe } from 'lucide-react';

export function WhitepaperFooter() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800 text-white mt-12 lg:mt-24">
      <div className="w-full max-w-[422px] lg:max-w-[2176px] mx-auto px-4 py-10 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          {/* Brand */}
          <div>
            <h3 className="text-2xl lg:text-4xl mb-4 lg:mb-6 bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">MuffinFI</h3>
            <p className="text-slate-400 leading-relaxed text-base lg:text-lg">
              DeFi protokol nové generace pro poskytování koncentrované likvidity s důrazem na charitu a komunitu.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white mb-4 lg:mb-8 text-xl lg:text-2xl">Zdroje</h4>
            <ul className="space-y-3 lg:space-y-4">
              <li>
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors text-base lg:text-lg inline-flex items-center gap-2 group">
                  <span className="text-emerald-500 group-hover:translate-x-1 transition-transform">→</span> 
                  Dokumentace
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors text-base lg:text-lg inline-flex items-center gap-2 group">
                  <span className="text-emerald-500 group-hover:translate-x-1 transition-transform">→</span> 
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors text-base lg:text-lg inline-flex items-center gap-2 group">
                  <span className="text-emerald-500 group-hover:translate-x-1 transition-transform">→</span> 
                  Bezpečnostní audity
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors text-base lg:text-lg inline-flex items-center gap-2 group">
                  <span className="text-emerald-500 group-hover:translate-x-1 transition-transform">→</span> 
                  Brand materiály
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white mb-4 lg:mb-8 text-xl lg:text-2xl">Komunita</h4>
            <div className="flex gap-3 lg:gap-4">
              <a href="#" className="bg-slate-800 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-green-600 p-3 lg:p-4 rounded-xl lg:rounded-2xl border border-slate-700 hover:border-transparent shadow-lg transition-all duration-300 group">
                <Twitter className="w-5 h-5 lg:w-6 lg:h-6 text-slate-400 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-green-600 p-3 lg:p-4 rounded-xl lg:rounded-2xl border border-slate-700 hover:border-transparent shadow-lg transition-all duration-300 group">
                <Github className="w-5 h-5 lg:w-6 lg:h-6 text-slate-400 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-green-600 p-3 lg:p-4 rounded-xl lg:rounded-2xl border border-slate-700 hover:border-transparent shadow-lg transition-all duration-300 group">
                <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6 text-slate-400 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-green-600 p-3 lg:p-4 rounded-xl lg:rounded-2xl border border-slate-700 hover:border-transparent shadow-lg transition-all duration-300 group">
                <Globe className="w-5 h-5 lg:w-6 lg:h-6 text-slate-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 lg:mt-16 pt-6 lg:pt-10 text-center">
          <p className="text-slate-500 text-sm lg:text-lg">&copy; 2024 MuffinFI. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
}