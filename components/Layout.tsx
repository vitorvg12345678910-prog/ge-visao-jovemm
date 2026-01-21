
import React, { useState, useEffect } from 'react';
import { ViewState } from '../types';
import { Download } from 'lucide-react';

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
  const [installPrompt, setInstallPrompt] = useState<any>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setInstallPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = () => {
    if (installPrompt) {
      installPrompt.prompt();
      installPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
          setInstallPrompt(null);
        } else {
          console.log('User dismissed the A2HS prompt');
        }
      });
    }
  };

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
        {installPrompt && (
          <button 
            onClick={handleInstall}
            className="flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-xl text-xs font-bold hover:bg-blue-100 transition-colors mr-2 animate-pulse"
          >
            <Download size={16} />
            <span className="hidden sm:inline">Instalar App</span>
          </button>
        )}
        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold shadow-inner">
          VJ
        </div>
      </div>
    </header>
  );
};
