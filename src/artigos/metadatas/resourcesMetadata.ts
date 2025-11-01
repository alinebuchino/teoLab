import { Book, Video } from "lucide-react";

export interface ResourceMetadata {
  id: string;
  title: string;
  description: string;
  type: "book" | "video" | "curso" | "podcast";
  icon: any;
  color: "primary" | "accent" | "warm";
  url: string;
  keywords?: string[];
}

const resourcesMetadata: Record<string, ResourceMetadata> = {
  "resource-1": {
    id: "resource-1",
    title: "Livro: Confissões - Agostinho de Hipona",
    description: "Uma jornada íntima da alma do pecado à graça, onde o coração inquieto encontra repouso em Deus.",
    type: "book",
    icon: Book,
    color: "warm",
    url: "https://www.mercadolivre.com.br/livro-confissoes-de-santo-agostinho-de-santo-agostinho-editora-schwarcz-sa-capa-mole-2017/p/MLB19421267",
    keywords: ["livro", "agostinho", "confissões", "graça", "pecado"]
  },
  "resource-2": {
    id: "resource-2",
    title: "Livro: Inteligência Humilhada - Jonas Madureira",
    description: "O conceito de inteligência humilhada que visa estimular o interesse por uma razão que ora e uma fé que pensa.",
    type: "book",
    icon: Book,
    color: "warm",
    url: "https://www.mercadolivre.com.br/inteligncia-humilhada-livro-jonas-madureira-vida-nova/p/MLB19889408",
    keywords: ["livro", "inteligência", "humilhada", "fé", "razão"]
  },
  "resource-3": {
    id: "resource-3",
    title: "Playlist: Pílulas de Fé",
    description: "Aprenda práticas e comportamentos cristãos essenciais em vídeos curtos e impactantes.",
    type: "video",
    icon: Video,
    color: "warm",
    url: "https://www.youtube.com/c/Jo%C3%A3oPedroMaia/videos",
    keywords: ["vídeo", "fé", "práticas cristãs", "comportamento"]
  },
  "resource-4": {
    id: "resource-4",
    title: "Curso Teológico: Clube Fé e Razão",
    description: "Sua busca pela santidade não precisa mais ser confusa ou solitária.",
    type: "curso",
    icon: Video,
    color: "warm",
    url: "https://www.ferazao.com.br/cfr-t001/ved-vagasabertas-a5",
    keywords: ["curso", "teologia", "fé", "razão", "santidade"]
  }
};

export default resourcesMetadata;
