import biblicalStudiesIcon from "@/assets/biblical-studies-icon.jpg";
import christologyIcon from "@/assets/christology-icon.jpg";
import churchHistoryIcon from "@/assets/church-history-icon.jpg";
import doctrineIcon from "@/assets/doctrine-icon.jpg";
import eschatologyIcon from "@/assets/eschatology-icon.jpg";

export interface ThemeMetadata {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  color: "primary" | "accent" | "warm";
  keywords?: string[];
}

const themesMetadata: Record<string, ThemeMetadata> = {
  "theme-1": {
    id: "theme-1",
    title: "Propedêutica Teológica",
    description:
      "A porta de entrada para compreender Deus, preparando mente e coração para a jornada da fé.",
    category: "Propedêutica",
    image: doctrineIcon,
    color: "primary",
    keywords: ["propedêutica", "teologia", "fundamentos"]
  },
  "theme-2": {
    id: "theme-2",
    title: "Maturidade Cristã",
    description:
      "O crescimento contínuo da fé, caráter e vida espiritual rumo à semelhança com Cristo.",
    category: "Disciplina",
    image: christologyIcon,
    color: "accent",
    keywords: ["maturidade", "crescimento", "vida espiritual"]
  },
  "theme-3": {
    id: "theme-3",
    title: "Apologética Cristã",
    description:
      "Defesa inteligente da fé cristã, usando razão e clareza para comunicar a verdade de Deus.",
    category: "Apologética",
    image: eschatologyIcon,
    color: "warm",
    keywords: ["apologética", "defesa da fé", "razão", "verdade de Deus"]
  },
  "theme-4": {
    id: "theme-4",
    title: "História da Igreja",
    description: "Jornada através dos marcos históricos do cristianismo através dos séculos.",
    category: "História",
    image: churchHistoryIcon,
    color: "primary",
    keywords: ["história", "cristianismo", "igreja", "reforma", "concílios"]
  },
  "theme-5": {
    id: "theme-5",
    title: "Antropologia Bíblica",
    description:
      "O estudo do ser humano à luz das Escrituras, revelando sua natureza, propósito e relação com Deus.",
    category: "História",
    image: churchHistoryIcon,
    color: "primary",
    keywords: ["história", "cristianismo", "igreja", "reforma", "concílios"]
  },
  "theme-6": {
    id: "theme-6",
    title: "Estudos Bíblicos",
    description:
      "Métodos de interpretação bíblica e análise exegética das Escrituras.",
    category: "Hermenêutica",
    image: biblicalStudiesIcon,
    color: "accent",
    keywords: ["estudos bíblicos", "exegese", "interpretação", "escrituras", "análise"]
  }
};

export default themesMetadata;
