
import React from 'react';
import { ANNOUNCEMENTS } from '../constants';
import { Megaphone, Calendar as CalendarIcon, Tag } from 'lucide-react';

const News: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        <p className="text-slate-500 text-sm font-medium">
          Acompanhe as últimas atualizações da diretoria.
        </p>
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          <button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-blue-600 text-white text-xs font-bold shadow-md">Todos</button>
          <button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50">Eventos</button>
          <button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50">Comunicados</button>
        </div>
      </div>

      <div className="space-y-6">
        {ANNOUNCEMENTS.map((news) => (
          <article 
            key={news.id} 
            className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all overflow-hidden"
          >
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                  news.category === 'Importante' 
                    ? 'bg-red-100 text-red-600 border border-red-200' 
                    : 'bg-indigo-100 text-indigo-600 border border-indigo-200'
                }`}>
                  <Tag size={12} />
                  {news.category}
                </span>
                <span className="flex items-center gap-1.5 text-slate-400 text-[10px] font-semibold uppercase">
                  <CalendarIcon size={12} />
                  {news.date}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                {news.title}
              </h3>
              
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                {news.content}
              </p>
              
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                    <Megaphone size={14} />
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">
                    Publicado pela Liderança
                  </span>
                </div>
                <button className="text-blue-600 text-xs font-bold hover:underline uppercase">
                  Saiba mais
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      {ANNOUNCEMENTS.length === 0 && (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
          <Megaphone className="mx-auto text-slate-300 mb-4" size={48} />
          <p className="text-slate-500 font-medium">Nenhum comunicado no momento.</p>
        </div>
      )}
    </div>
  );
};

export default News;
