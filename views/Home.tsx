
import React from 'react';
import { ViewState } from '../types';
import { QUICK_LINKS, ANNOUNCEMENTS } from '../constants';
// Added Megaphone to the imports to resolve the error on line 76
import { ChevronRight, ArrowUpRight, Megaphone } from 'lucide-react';

interface HomeProps {
  onNavigate: (view: ViewState) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 p-8 md:p-12 text-white shadow-xl">
        <div className="relative z-10 max-w-lg">
          <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-bold tracking-wider mb-4">
            NOVA GESTÃO 2023-2024
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
            Sua Voz, <br /> Nosso Compromisso!
          </h2>
          <p className="text-blue-100 text-sm md:text-base mb-8">
            Bem-vindo ao portal oficial do G.E. Visão Jovem. Aqui você acompanha tudo o que acontece na nossa escola e participa das decisões.
          </p>
          <button 
            onClick={() => onNavigate('about')}
            className="flex items-center gap-2 bg-white text-indigo-700 px-6 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors"
          >
            Conheça Nossa Missão <ChevronRight size={18} />
          </button>
        </div>
        
        {/* Abstract Shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl"></div>
      </section>

      {/* Quick Access Grid */}
      <section>
        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          Acesso Rápido
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {QUICK_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id as ViewState)}
              className="group flex flex-col items-center justify-center p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all active:scale-95"
            >
              <div className={`${link.color} text-white p-3 rounded-2xl mb-3 shadow-lg group-hover:scale-110 transition-transform`}>
                {link.icon}
              </div>
              <span className="text-sm font-bold text-slate-700">{link.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Recent News Preview */}
      <section className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-slate-800">Destaques</h3>
          <button 
            onClick={() => onNavigate('news')}
            className="text-blue-600 text-sm font-bold flex items-center gap-1 hover:underline"
          >
            Ver tudo <ArrowUpRight size={14} />
          </button>
        </div>
        
        <div className="space-y-4">
          {ANNOUNCEMENTS.slice(0, 2).map((news) => (
            <div key={news.id} className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 cursor-pointer" onClick={() => onNavigate('news')}>
              <div className="hidden sm:flex w-12 h-12 rounded-xl bg-blue-100 items-center justify-center text-blue-600 flex-shrink-0">
                <Megaphone size={20} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                    news.category === 'Importante' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
                  }`}>
                    {news.category}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">{news.date}</span>
                </div>
                <h4 className="font-bold text-slate-800 text-sm md:text-base group-hover:text-blue-600 transition-colors">
                  {news.title}
                </h4>
                <p className="text-slate-500 text-xs line-clamp-1">{news.content}</p>
              </div>
              <ChevronRight size={16} className="text-slate-300 group-hover:text-blue-600" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
