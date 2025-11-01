import articlesById from "@/artigos/metadatas/allArticlesId";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, ChevronDown, ChevronUp, Clock } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ArticlesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const articles = Object.values(articlesById).filter(Boolean);
  const visibleArticles = showAll ? articles : articles.slice(0, 4);

  if (!articles.length) return null;

  return (
    <section id="articles-section" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Artigos <span className="text-gradient-primary">Recentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estudos teológicos cuidadosamente preparados para iluminar sua mente e fortalecer seu coração na fé.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Artigo em destaque */}
          {articles[0] && (
            <div className="lg:col-span-2">
              <article className="card-sacred relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 border-accent/20">
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-divine text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Artigo em Destaque
                  </span>
                </div>

                <div className="pt-16 pb-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="bg-accent/10 text-accent px-2 py-1 rounded text-xs font-medium">
                      {articles[0].category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {articles[0].date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {articles[0].readTime}
                    </div>
                  </div>

                  <h3
                    className="text-2xl font-bold text-foreground mb-3 hover:text-primary transition-colors cursor-pointer"
                    onClick={() => navigate(`/artigo/${articles[0].id}`)}
                  >
                    {articles[0].title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {articles[0].excerpt}
                  </p>

                  <Button
                    variant="sacred"
                    className="group hover:text-accent"
                    onClick={() => navigate(`/artigo/${articles[0].id}`)}
                  >
                    Ler Artigo Completo
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </article>
            </div>
          )}

          {/* Demais artigos */}
          {visibleArticles.slice(1).map((article, index) => (
            <article
              key={article.id}
              className="card-sacred hover:shadow-[0_8px_30px_hsl(var(--primary)/0.1)] group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              onClick={() => navigate(`/artigo/${article.id}`)}
            >
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">
                  {article.category}
                </span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {article.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {article.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {article.excerpt}
              </p>

              <div className="flex items-center text-accent text-sm font-medium group-hover:text-accent-glow transition-colors">
                Continuar lendo
                <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Ver Menos Artigos" : "Ver Todos os Artigos"}
            {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
