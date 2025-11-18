import { Button } from "./ui/button";
import { FileText, Download, Share2 } from 'lucide-react';

export function WhitepaperHero() {
  return (
    <div className="relative overflow-hidden border-b border-emerald-200/50 bg-gradient-to-br from-emerald-50 via-white to-green-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_70%)]"></div>
      
      <div className="w-full max-w-[422px] lg:max-w-[2176px] mx-auto px-4 py-12 lg:px-8 lg:py-24 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6 lg:mb-10">
            <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl lg:rounded-3xl p-4 lg:p-8 shadow-2xl shadow-emerald-500/30">
              <FileText className="w-12 h-12 lg:w-20 lg:h-20 text-white" />
            </div>
          </div>
          
          <h1 className="text-3xl lg:text-7xl mb-4 lg:mb-6 text-slate-900 tracking-tight">
            MuffinFI Whitepaper
          </h1>
          
          <div className="flex items-center justify-center gap-2 lg:gap-4 mb-4 lg:mb-6">
            <div className="h-1 w-12 lg:w-24 bg-gradient-to-r from-transparent via-emerald-500 to-transparent rounded-full"></div>
            <p className="text-lg lg:text-3xl text-emerald-600">Verze 1.0</p>
            <div className="h-1 w-12 lg:w-24 bg-gradient-to-r from-transparent via-emerald-500 to-transparent rounded-full"></div>
          </div>
          
          <p className="text-sm lg:text-xl text-slate-600 mb-8 lg:mb-14">Zveřejněno: Listopad 2024</p>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-5">
            <Button 
              size="lg" 
              className="w-full lg:w-auto bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:from-emerald-600 hover:to-green-700 shadow-xl shadow-emerald-500/30 transition-all duration-300 px-6 py-5 lg:px-10 lg:py-7"
            >
              <Download className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
              Stáhnout PDF
            </Button>
            <Button 
              size="lg" 
              className="w-full lg:w-auto bg-white text-slate-700 hover:bg-slate-50 border-2 border-slate-200 hover:border-emerald-500 shadow-lg transition-all duration-300 px-6 py-5 lg:px-10 lg:py-7"
            >
              <Share2 className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
              Sdílet
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}