import apologeticaIcon from "@/assets/apologetica-icon.jpg";
import cristaoIcon from "@/assets/cristao-icon.jpg";
import evangelhoIcon from "@/assets/evangelho-icon.jpg";
import maturidadeIcon from "@/assets/maturidade-icon.jpg";
import primeirosPassosIcon from "@/assets/primeiros-passos-icon.jpg";
import propedeuticaIcon from "@/assets/propedeutica-icon.jpg";
import theologyIcon from "@/assets/theology-hero.jpg";

export interface ThemeMetadata {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  color: "primary" | "accent" | "warm";
  keywords?: string[];
  parentId?: string;
}

const themesMetadata: Record<string, ThemeMetadata> = {
  "theme-1": {
    id: "theme-1",
    title: "Primeiros Passos",
    description:
      "Interpretações biblicas fundamentais do evangelho e do cristão para iniciar a jornada cristã com firmeza na fé.",
    category: "Início",
    image: primeirosPassosIcon,
    color: "accent",
    keywords: ["primeiros passos", "vida cristã", "maturidade cristã"]
  },
  "theme-1-evangelho": {
    id: "theme-1-evangelho",
    title: "O Evangelho",
    description: "A mensagem central da salvação e o sacrifício de Cristo.",
    category: "Evangelho",
    parentId: "theme-1", // Vincula ao Início
    image: evangelhoIcon,
    color: "accent",
    keywords: ["boas novas", "salvação"]
  },
  "theme-1-cristao": {
    id: "theme-1-cristao",
    title: "A vida do Cristão",
    description: "A identidade e o caráter daquele que segue a Cristo.",
    category: "Cristão",
    parentId: "theme-1", // Vincula ao Início
    image: cristaoIcon,
    color: "accent",
    keywords: ["identidade", "discípulo"]
  },
  "theme-2": {
    id: "theme-2",
    title: "Maturidade Cristã",
    description:
      "O crescimento contínuo da fé, caráter e vida espiritual rumo à semelhança com Cristo.",
    category: "Maturidade",
    image: maturidadeIcon,
    color: "accent",
    keywords: ["maturidade", "crescimento", "vida espiritual"]
  },
  "theme-3": {
    id: "theme-3",
    title: "Propedêutica Teológica",
    description:
      "A porta de entrada para compreender Deus, preparando mente e coração para a jornada da fé.",
    category: "Propedêutica",
    image: propedeuticaIcon,
    color: "primary",
    keywords: ["propedêutica", "teologia", "fundamentos"]
  },
  "theme-4": {
    id: "theme-4",
    title: "Antropologia Bíblica",
    description:
      "O estudo do ser humano à luz das Escrituras, revelando sua natureza, propósito e relação com Deus.",
    category: "Antropologia",
    image: theologyIcon,
    color: "primary",
    keywords: ["história", "cristianismo", "igreja", "reforma", "concílios"]
  },
  "theme-5": {
    id: "theme-5",
    title: "Apologética Cristã",
    description:
      "Defesa inteligente da fé cristã, usando razão e clareza para comunicar a verdade de Deus.",
    category: "Apologética",
    image: apologeticaIcon,
    color: "warm",
    keywords: ["apologética", "defesa da fé", "razão", "verdade de Deus"]
  },
  // "theme-6": {
  //   id: "theme-6",
  //   title: "História da Igreja",
  //   description: "Jornada através dos marcos históricos do cristianismo através dos séculos.",
  //   category: "História",
  //   image: churchHistoryIcon,
  //   color: "primary",
  //   keywords: ["história", "cristianismo", "igreja", "reforma", "concílios"]
  // }
};

export default themesMetadata;
