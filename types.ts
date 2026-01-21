
export type ViewState = 'home' | 'conduct' | 'news' | 'calendar' | 'about' | 'members';

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  category: 'Importante' | 'Evento' | 'Geral';
}

export interface EventActivity {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

export interface Member {
  id: string;
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

export interface ConductCode {
  role: string;
  responsibilities: string[];
}
