
import React, { useState } from 'react';
import { ViewState } from './types';
import Navigation from './components/Navigation';
import Home from './views/Home';
import Conduct from './views/Conduct';
import News from './views/News';
import Calendar from './views/Calendar';
import About from './views/About';
import Members from './views/Members';
import { Header } from './components/Layout';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home onNavigate={setCurrentView} />;
      case 'conduct':
        return <Conduct />;
      case 'news':
        return <News />;
      case 'calendar':
        return <Calendar />;
      case 'about':
        return <About />;
      case 'members':
        return <Members />;
      default:
        return <Home onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20 md:pb-0 md:pl-64 flex flex-col">
      <Header currentView={currentView} />
      
      <main className="flex-1 p-4 md:p-8 max-w-5xl mx-auto w-full">
        {renderView()}
      </main>

      <Navigation currentView={currentView} onNavigate={setCurrentView} />
    </div>
  );
};

export default App;
