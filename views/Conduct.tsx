
import React from 'react';
import { CONDUCT_CODES } from '../constants';
import { Shield, CheckCircle2 } from 'lucide-react';

const Conduct: React.FC = () => {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-8 flex items-start gap-4">
        <div className="bg-blue-600 p-3 rounded-xl text-white shadow-lg">
          <Shield size={24} />
        </div>
        <div>
          <h2 className="text-xl font-bold text-blue-900 mb-1">Responsabilidade e Ética</h2>
          <p className="text-blue-700 text-sm leading-relaxed">
            O Grêmio Estudantil é fundamentado no respeito, transparência e compromisso com o bem-estar da comunidade escolar. Abaixo estão as diretrizes que guiam cada membro.
          </p>
        </div>
      </div>

      <div className="grid gap-6">
        {CONDUCT_CODES.map((code, index) => (
          <div 
            key={index} 
            className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
          >
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-100">
              <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
                {code.role}
              </h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {code.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-slate-600 text-sm md:text-base leading-relaxed">
                      {resp}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center py-8 text-slate-400 text-xs italic">
        * Todos os membros devem agir em conformidade com o Estatuto Geral da Escola.
      </div>
    </div>
  );
};

export default Conduct;
