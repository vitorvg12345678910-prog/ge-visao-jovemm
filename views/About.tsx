
import React from 'react';
import { ABOUT_CONTENT } from '../constants';
import { Target, Eye, Gem } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="space-y-12 animate-in slide-in-from-right-4 duration-500 pb-10">
      {/* Header Info */}
      <section className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">G.E. VISÃO JOVEM</h2>
        <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
        <p className="text-slate-600 text-sm md:text-lg leading-relaxed pt-2">
          Fundado com o propósito de transformar a vivência escolar através da inovação, empatia e protagonismo estudantil.
        </p>
      </section>

      {/* Cards: Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Target size={120} />
          </div>
          <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
            <Target size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-4">Nossa Missão</h3>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            {ABOUT_CONTENT.mission}
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Eye size={120} />
          </div>
          <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6">
            <Eye size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-4">Nossa Visão</h3>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            {ABOUT_CONTENT.vision}
          </p>
        </div>
      </div>

      {/* Values Section */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="h-px bg-slate-200 flex-1"></div>
          <h3 className="text-lg font-bold text-slate-400 uppercase tracking-widest">Nossos Valores</h3>
          <div className="h-px bg-slate-200 flex-1"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {ABOUT_CONTENT.values.map((val, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm text-center flex flex-col items-center hover:scale-105 transition-transform">
              <div className="mb-4 bg-slate-50 p-3 rounded-2xl">
                {val.icon}
              </div>
              <span className="font-bold text-slate-700 text-sm">{val.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Social and Contact placeholder */}
      <section className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white overflow-hidden relative">
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-4">Faça Parte da Mudança</h3>
          <p className="text-slate-400 mb-8 max-w-md text-sm md:text-base">
            Acompanhe nossas redes sociais para conteúdos diários e bastidores das nossas ações.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-colors">
              Instagram
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-colors">
              YouTube
            </button>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-20 transform translate-x-1/4">
          <Gem size={300} className="text-blue-500" />
        </div>
      </section>
    </div>
  );
};

export default About;
