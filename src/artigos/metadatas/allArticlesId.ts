import Antropologia from "../Antropologia";
import Maturidade from "../Maturidade";
import Propedeutica from "../Propedeutica";

const allArticles = [
  ...Propedeutica,
  ...Antropologia,
  ...Maturidade
  // ...outros artigos
];

const articlesById: Record<string, any> = {};

allArticles.forEach(article => {
  articlesById[article.id] = article;
});

export default articlesById;
