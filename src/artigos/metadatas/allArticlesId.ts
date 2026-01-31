import Antropologia from "../Antropologia";
import Cristao from "../Cristao";
import Evangelho from "../Evangelho";
import Maturidade from "../Maturidade";
import Propedeutica from "../Propedeutica";

const allArticles = [
  ...Cristao,
  ...Evangelho,
  ...Maturidade,
  ...Propedeutica,
  ...Antropologia,
  // ...outros artigos
];

const articlesById: Record<string, any> = {};

allArticles.forEach(article => {
  articlesById[article.id] = article;
});

export default articlesById;
