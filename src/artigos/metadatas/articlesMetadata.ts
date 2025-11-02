export interface ArticleMetadata {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
}

export const articlesMetadata: Record<string, ArticleMetadata> = {
  "chamado-da-teologia": {
    id: "chamado-da-teologia",
    title: "O Chamado da Teologia: Fundamentos e Propedêutica",
    category: "Propedêutica",
    date: "22 de Outubro, 2025",
    readTime: "12 min",
    excerpt: "Antes de mergulhar na teologia cristã, é necessário compreender o fundamento da vocação teológica."
  },
  "crise-liberalismo": {
    id: "crise-liberalismo",
    title: "Fé e Razão: A Crise do Liberalismo e o Retorno à Palavra",
    category: "Propedêutica",
    date: "01 de Novembro, 2025",
    readTime: "10 min",
    excerpt: "O liberalismo teológico surgiu com a intenção de tornar a fé cristã relevante para o homem moderno."
  },
  "palavra-que-fere": {
    id: "palavra-que-fere",
    title: "A Palavra que Fere: Oração, Conhecimento e Vocação",
    category: "Propedêutica",
    date: "06 de Novembro, 2025",
    readTime: "15 min",
    excerpt: "A oração é uma luta com Deus, e nessa luta você vencerá todas as vezes que for vencido."
  }
};

export default articlesMetadata;