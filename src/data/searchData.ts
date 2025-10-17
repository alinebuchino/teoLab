// Dados centralizados para busca
export interface SearchableItem {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'article' | 'theme' | 'resource';
  keywords?: string[];
  date?: string;
  readTime?: string;
}

export const searchableContent: SearchableItem[] = [
  // Artigos
  {
    id: 'article-1',
    title: 'A Natureza Divina de Cristo: Uma Análise Bíblica',
    description: 'Explorando as Escrituras que revelam a divindade de Jesus Cristo e sua importância para a fé cristã.',
    category: 'Cristologia',
    type: 'article',
    date: '15 de Setembro, 2024',
    readTime: '8 min',
    keywords: ['cristo', 'divindade', 'jesus', 'análise bíblica', 'escrituras']
  },
  {
    id: 'article-2',
    title: 'Graça e Obras: O Equilíbrio Bíblico da Salvação',
    description: 'Como compreender o papel da graça divina e das boas obras na vida do cristão segundo as Escrituras.',
    category: 'Soteriologia',
    type: 'article',
    date: '10 de Setembro, 2024',
    readTime: '12 min',
    keywords: ['graça', 'obras', 'salvação', 'fé', 'cristão']
  },
  {
    id: 'article-3',
    title: 'Os Pais da Igreja e a Formação Doutrinária',
    description: 'O papel fundamental dos primeiros teólogos cristãos na preservação e desenvolvimento da doutrina.',
    category: 'História',
    type: 'article',
    date: '5 de Setembro, 2024',
    readTime: '15 min',
    keywords: ['pais da igreja', 'história', 'doutrina', 'teologia', 'formação']
  },
  {
    id: 'article-4',
    title: 'Hermenêutica Bíblica: Princípios de Interpretação',
    description: 'Métodos essenciais para uma interpretação correta e contextual das Sagradas Escrituras.',
    category: 'Hermenêutica',
    type: 'article',
    date: '1 de Setembro, 2024',
    readTime: '10 min',
    keywords: ['hermenêutica', 'interpretação', 'bíblia', 'métodos', 'exegese']
  },
  
  // Temas
  {
    id: 'theme-1',
    title: 'Doutrina da Salvação',
    description: 'Explore os fundamentos bíblicos da salvação, graça e justificação pela fé.',
    category: 'Doutrina',
    type: 'theme',
    keywords: ['salvação', 'graça', 'justificação', 'fé', 'soteriologia']
  },
  {
    id: 'theme-2',
    title: 'Cristologia',
    description: 'Estudo profundo sobre a pessoa e obra de Jesus Cristo na teologia cristã.',
    category: 'Doutrina',
    type: 'theme',
    keywords: ['cristo', 'jesus', 'messias', 'redentor', 'filho de deus']
  },
  {
    id: 'theme-3',
    title: 'Escatologia',
    description: 'Compreenda as profecias bíblicas e o plano divino para os últimos tempos.',
    category: 'Profecia',
    type: 'theme',
    keywords: ['escatologia', 'profecia', 'apocalipse', 'últimos tempos', 'fim dos tempos']
  },
  {
    id: 'theme-4',
    title: 'História da Igreja',
    description: 'Jornada através dos marcos históricos do cristianismo através dos séculos.',
    category: 'História',
    type: 'theme',
    keywords: ['história', 'cristianismo', 'igreja', 'reforma', 'concílios']
  },
  {
    id: 'theme-5',
    title: 'Estudos Bíblicos',
    description: 'Métodos de interpretação bíblica e análise exegética das Escrituras.',
    category: 'Hermenêutica',
    type: 'theme',
    keywords: ['estudos bíblicos', 'exegese', 'interpretação', 'escrituras', 'análise']
  },
  
  // Recursos
  {
    id: 'resource-1',
    title: 'Teologia Sistemática - Wayne Grudem',
    description: 'Uma obra completa e acessível sobre os fundamentos da fé cristã.',
    category: 'Livro',
    type: 'resource',
    keywords: ['teologia sistemática', 'wayne grudem', 'livro', 'fundamentos', 'doutrina']
  },
  {
    id: 'resource-2',
    title: 'Podcast Reforma Hoje',
    description: 'Discussões teológicas profundas com líderes e estudiosos cristãos.',
    category: 'Podcast',
    type: 'resource',
    keywords: ['podcast', 'reforma', 'teologia', 'discussões', 'líderes']
  },
  {
    id: 'resource-3',
    title: 'Série: Hermenêutica Bíblica',
    description: 'Aprenda métodos corretos de interpretação das Sagradas Escrituras.',
    category: 'Vídeo',
    type: 'resource',
    keywords: ['vídeo', 'hermenêutica', 'interpretação', 'série', 'métodos']
  }
];
