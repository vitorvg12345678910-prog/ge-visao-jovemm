
import React from 'react';
import { CALENDAR_EVENTS } from '../constants';
import { MapPin, Clock, Calendar as CalendarIcon, Bell } from 'lucide-react';

const Calendar: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-1">Próximos Passos</h2>
          <p className="text-slate-500 text-sm">Organize seu tempo e participe ativamente.</p>
        </div>
        <button className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
          <Bell size={18} /> Ativar Lembretes
        </button>
      </div>

      <div className="grid gap-4">
        {CALENDAR_EVENTS.map((event) => (
          <div 
            key={event.id}
            className="flex flex-col md:flex-row gap-4 md:gap-8 bg-white p-6 rounded-3xl border border-slate-100 hover:border-pink-200 transition-all group"
          >
            {/* Date Block */}
            <div className="flex md:flex-col items-center justify-center bg-pink-50 text-pink-600 w-full md:w-24 h-16 md:h-auto rounded-2xl md:p-4 flex-shrink-0">
              <span className="text-2xl font-black">{event.date.split('/')[0]}</span>
              <span className="text-xs font-bold uppercase tracking-widest ml-2 md:ml-0">Out</span>
            </div>

            {/* Event Content */}
            <div className="flex-1 space-y-3">
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-pink-600 transition-colors leading-tight">
                {event.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {event.description}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-slate-400">
                  <Clock size={14} className="text-slate-300" />
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-tighter">{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin size={14} className="text-slate-300" />
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-tighter">{event.location}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <button className="w-full md:w-auto px-6 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all">
                Detalhes
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
