
import React from 'react';
import { ViewState } from '../types';

interface HeaderProps {
  currentView: ViewState;
}

const getTitle = (view: ViewState) => {
  switch (view) {
    case 'home': return 'G.E. VISÃO JOVEM';
    case 'conduct': return 'Códigos de Conduta';
    case 'news': return 'Comunicados & Avisos';
    case 'calendar': return 'Agenda de Atividades';
    case 'about': return 'Sobre o Grêmio';
    case 'members': return 'Equipe Diretiva';
    default: return 'Visão Jovem';
  }
};

export const Header: React.FC<HeaderProps> = ({ currentView }) => {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 p-4 md:p-6 flex items-center justify-between">
      <div>
        <h1 className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          {getTitle(currentView)}
        </h1>
        {currentView === 'home' && (
          <p className="text-xs text-slate-500 font-medium">CONECTANDO VOCÊ AO FUTURO DA ESCOLA</p>
        )}
      </div>
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
          VJ
        </div>
      </div>
    </header>
  );
};
