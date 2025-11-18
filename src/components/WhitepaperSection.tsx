interface WhitepaperSectionProps {
  id: string;
  title: string;
  content: React.ReactNode;
}

export function WhitepaperSection({ id, title, content }: WhitepaperSectionProps) {
  return (
    <section id={id} className="scroll-mt-20 lg:scroll-mt-32">
      <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-2xl border border-slate-200 p-5 lg:p-12 hover:shadow-emerald-500/10 transition-shadow duration-300">
        <h2 className="text-2xl lg:text-4xl text-slate-900 mb-5 lg:mb-10 pb-4 lg:pb-6 border-b-2 border-emerald-500/30">
          {title}
        </h2>
        <div className="whitepaper-content">
          {content}
        </div>
      </div>
    </section>
  );
}