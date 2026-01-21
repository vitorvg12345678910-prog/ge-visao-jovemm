
import React from 'react';
import { ViewState } from '../types';
import { Home, ShieldCheck, Megaphone, Calendar, Info, Users } from 'lucide-react';

interface NavigationProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, onNavigate }) => {
  const navItems = [
    { id: 'home', icon: <Home size={20} />, label: 'Início' },
    { id: 'conduct', icon: <ShieldCheck size={20} />, label: 'Conduta' },
    { id: 'news', icon: <Megaphone size={20} />, label: 'Avisos' },
    { id: 'calendar', icon: <Calendar size={20} />, label: 'Agenda' },
    { id: 'members', icon: <Users size={20} />, label: 'Equipe' },
    { id: 'about', icon: <Info size={20} />, label: 'Sobre' },
  ];

  return (
    <>
      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 flex justify-around p-3 z-50">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id as ViewState)}
            className={`flex flex-col items-center gap-1 transition-colors ${
              currentView === item.id ? 'text-blue-600' : 'text-slate-400'
            }`}
          >
            {item.icon}
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Desktop Sidebar */}
      <nav className="hidden md:flex fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-slate-200 flex-col p-6 z-50">
        <div className="mb-10 px-2">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xl font-black">
              VJ
            </div>
            <div className="leading-tight">
              <div className="font-bold text-slate-800">VISÃO JOVEM</div>
              <div className="text-xs text-slate-400">Grêmio Estudantil</div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id as ViewState)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                currentView === item.id 
                  ? 'bg-blue-50 text-blue-600 font-semibold' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
              }`}
            >
              <span className={`${currentView === item.id ? 'text-blue-600' : 'text-slate-400'}`}>
                {item.icon}
              </span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <div className="mt-auto p-4 bg-slate-50 rounded-2xl border border-slate-100">
          <p className="text-xs text-slate-500 mb-2">Suporte Estudantil</p>
          <button className="w-full text-xs bg-white py-2 px-3 rounded-lg border border-slate-200 text-slate-700 font-medium hover:border-blue-400 transition-colors">
            Falar com o Grêmio
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
