import articlesMetadata from "@/artigos/metadatas/articlesMetadata";
import resourcesMetadata from "@/artigos/metadatas/resourcesMetadata";
import themesMetadata from "@/artigos/metadatas/themesMetadata";

export interface SearchableItem {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'article' | 'theme' | 'resource';
  keywords?: string[];
  date?: string;
  readTime?: string;
  parentId?: string;
}

const articleItems: SearchableItem[] = Object.values(articlesMetadata).map(
  (article) => ({
    id: article.id,
    title: article.title,
    description: article.excerpt,
    category: article.category,
    type: "article",
    date: article.date,
    readTime: article.readTime
  })
);

const themeItems: SearchableItem[] = Object.values(themesMetadata).map(
  (theme) => ({
    id: theme.id,
    title: theme.title,
    description: theme.description,
    category: theme.category,
    type: "theme",
    keywords: theme.keywords,
    parentId: theme.parentId
  })
);

const resourceItems: SearchableItem[] = Object.values(resourcesMetadata).map(
  (resource) => ({
    id: resource.id,
    title: resource.title,
    description: resource.description,
    category: resource.type, 
    type: "resource",
    keywords: resource.keywords
  })
);

export const searchableContent: SearchableItem[] = [
  ...articleItems,
  ...themeItems,
  ...resourceItems,
];

export const searchableContentMap: Record<string, SearchableItem> =
  searchableContent.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {} as Record<string, SearchableItem>);
