
import React from 'react';
import { Announcement, EventActivity, Member, ConductCode } from './types';
import { 
  Users, 
  ShieldCheck, 
  Megaphone, 
  Calendar, 
  Info, 
  Star,
  BookOpen,
  Briefcase,
  Target,
  Heart
} from 'lucide-react';

export const CONDUCT_CODES: ConductCode[] = [
  {
    role: "Presidente",
    responsibilities: [
      "Representar o Grêmio perante a direção da escola e comunidade.",
      "Convocar e presidir reuniões gerais e da diretoria.",
      "Coordenar as atividades de todos os membros.",
      "Garantir o cumprimento do estatuto do Grêmio.",
      "Assinar documentos oficiais junto ao secretário."
    ]
  },
  {
    role: "Vice-Presidente",
    responsibilities: [
      "Substituir o presidente em casos de ausência ou impedimento.",
      "Auxiliar o presidente em todas as suas funções executivas.",
      "Coordenar comissões especiais de trabalho.",
      "Acompanhar o progresso dos projetos em andamento."
    ]
  },
  {
    role: "Secretário",
    responsibilities: [
      "Redigir e ler as atas das reuniões.",
      "Manter o arquivo do Grêmio organizado e atualizado.",
      "Gerenciar a correspondência oficial recebida e enviada.",
      "Publicar comunicados internos para a diretoria."
    ]
  },
  {
    role: "Tesoureiro",
    responsibilities: [
      "Gerenciar os recursos financeiros do Grêmio.",
      "Manter a contabilidade clara e transparente para consulta.",
      "Apresentar balancetes mensais nas reuniões.",
      "Coordenar campanhas de arrecadação de fundos."
    ]
  },
  {
    role: "Membros e Conselheiros",
    responsibilities: [
      "Participar ativamente das reuniões e discussões.",
      "Trazer demandas e sugestões das turmas que representam.",
      "Auxiliar na organização de eventos e campanhas.",
      "Promover a integração entre os alunos e o Grêmio.",
      "Zelar pelo patrimônio escolar e bom convívio."
    ]
  }
];

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: "1",
    title: "Reforma da Quadra Poliesportiva",
    content: "Conseguimos a aprovação para a nova pintura e reparos na quadra! Obras começam na próxima segunda-feira.",
    date: "15 Out 2023",
    category: "Importante"
  },
  {
    id: "2",
    title: "Campanha do Agasalho 2023",
    content: "Arrecadação de agasalhos e cobertores no hall de entrada. Vamos ajudar quem precisa neste inverno!",
    date: "10 Out 2023",
    category: "Evento"
  },
  {
    id: "3",
    title: "Novo Horário da Biblioteca",
    content: "A pedido dos alunos, a biblioteca agora ficará aberta até as 18:30 para estudos.",
    date: "05 Out 2023",
    category: "Geral"
  }
];

export const CALENDAR_EVENTS: EventActivity[] = [
  {
    id: "1",
    title: "Reunião Geral Mensal",
    date: "25/10",
    time: "12:30",
    location: "Auditório Principal",
    description: "Discussão sobre as metas do próximo bimestre."
  },
  {
    id: "2",
    title: "Gincana Visão Jovem",
    date: "10/11",
    time: "08:00",
    location: "Pátio Central",
    description: "Dia de competições esportivas e culturais."
  },
  {
    id: "3",
    title: "Fórum de Lideranças",
    date: "15/11",
    time: "14:00",
    location: "Sala Multimeios",
    description: "Treinamento para representantes de classe."
  }
];

export const MEMBERS: Member[] = [
  {
    id: "1",
    name: "Ana Beatriz",
    role: "Presidente",
    description: "Liderança nata e apaixonada por mudanças sociais na escola.",
    imageUrl: "https://picsum.photos/seed/ana/200"
  },
  {
    id: "2",
    name: "Lucas Silva",
    role: "Vice-Presidente",
    description: "Focado em organização e engajamento esportivo.",
    imageUrl: "https://picsum.photos/seed/lucas/200"
  },
  {
    id: "3",
    name: "Carla Souza",
    role: "Secretária",
    description: "Mestre em organização e comunicação eficiente.",
    imageUrl: "https://picsum.photos/seed/carla/200"
  },
  {
    id: "4",
    name: "Gabriel Santos",
    role: "Tesoureiro",
    description: "Responsável e atento a cada centavo investido nos alunos.",
    imageUrl: "https://picsum.photos/seed/gabriel/200"
  }
];

export const QUICK_LINKS = [
  { id: 'conduct' as const, label: 'Conduta', icon: <ShieldCheck size={24} />, color: 'bg-blue-500' },
  { id: 'news' as const, label: 'Avisos', icon: <Megaphone size={24} />, color: 'bg-purple-500' },
  { id: 'calendar' as const, label: 'Agenda', icon: <Calendar size={24} />, color: 'bg-pink-500' },
  { id: 'members' as const, label: 'Membros', icon: <Users size={24} />, color: 'bg-green-500' },
  { id: 'about' as const, label: 'Sobre', icon: <Info size={24} />, color: 'bg-orange-500' },
];

export const ABOUT_CONTENT = {
  mission: "Promover a voz ativa do estudante, integrando a comunidade escolar e lutando por melhorias constantes no ambiente de ensino.",
  vision: "Ser referência em gestão estudantil democrática e inovadora, inspirando jovens a serem protagonistas de suas próprias histórias.",
  values: [
    { title: "Protagonismo", icon: <Star className="text-yellow-500" /> },
    { title: "Transparência", icon: <ShieldCheck className="text-blue-500" /> },
    { title: "Empatia", icon: <Heart className="text-red-500" /> },
    { title: "Democracia", icon: <Users className="text-purple-500" /> }
  ]
};
