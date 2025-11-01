import Propedeutica from "../Propedeutica";

const allArticles = [
  ...Propedeutica,
  // ...outros artigos
];

const articlesById: Record<string, any> = {};

allArticles.forEach(article => {
  articlesById[article.id] = article;
});

export default articlesById;
