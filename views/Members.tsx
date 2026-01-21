
import React from 'react';
import { MEMBERS } from '../constants';
// Added Users to the imports to resolve the error on line 60
import { Mail, Linkedin, ExternalLink, Users } from 'lucide-react';

const Members: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-12">
      <div className="text-center max-w-xl mx-auto mb-8">
        <h2 className="text-2xl font-black text-slate-800 mb-2">Conheça Seus Representantes</h2>
        <p className="text-slate-500 text-sm">A equipe que trabalha diariamente para fazer a diferença na escola.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {MEMBERS.map((member) => (
          <div 
            key={member.id} 
            className="group bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col sm:flex-row hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="w-full sm:w-40 h-48 sm:h-auto overflow-hidden">
              <img 
                src={member.imageUrl} 
                alt={member.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-green-50 text-green-600 text-[10px] font-bold uppercase tracking-wider mb-2">
                  {member.role}
                </span>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{member.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed italic">
                  "{member.description}"
                </p>
              </div>
              
              <div className="pt-6 flex items-center gap-3">
                <button className="p-2 rounded-xl bg-slate-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                  <Mail size={18} />
                </button>
                <button className="p-2 rounded-xl bg-slate-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                  <Linkedin size={18} />
                </button>
                <div className="ml-auto">
                   <button className="flex items-center gap-1 text-[10px] font-bold text-slate-400 hover:text-slate-800 transition-colors uppercase">
                     Perfil Completo <ExternalLink size={12} />
                   </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Advisory section placeholder */}
      <section className="mt-12">
        <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
            <Users size={18} />
          </span>
          Conselho Fiscal & Colaboradores
        </h3>
        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
          <div className="flex flex-wrap gap-3">
            {['Prof. Ricardo (Orientador)', 'Marta Heloísa', 'José Pedro', 'Bianca F.', 'Rodrigo M.'].map((name, i) => (
              <span key={i} className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-2xl text-xs font-medium text-slate-600">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Members;
