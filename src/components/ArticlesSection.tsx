import articlesById from "@/artigos/metadatas/allArticlesId";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, ChevronDown, ChevronUp, Clock } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const monthMap: Record<string, string> = {
  Janeiro: "01",
  Fevereiro: "02",
  Março: "03",
  Abril: "04",
  Maio: "05",
  Junho: "06",
  Julho: "07",
  Agosto: "08",
  Setembro: "09",
  Outubro: "10",
  Novembro: "11",
  Dezembro: "12",
};

function parsePtDate(ptDate: string) {
  const [day, , month, year] = ptDate.split(" ");
  const monthNumber = monthMap[month.replace(",", "")];
  return new Date(`${year}-${monthNumber}-${day}`);
}

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const headerOffset = 80;
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

const ArticlesSection = () => {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(3);

  // Ordena os artigos do mais recente para o mais antigo
  const articles = Object.values(articlesById)
    .filter(Boolean)
    .sort((a, b) => parsePtDate(b.date).getTime() - parsePtDate(a.date).getTime());

  if (!articles.length) return null;

  // Mostra apenas a quantidade definida
  const visibleArticles = articles.slice(0, visibleCount);

  // Verifica se ainda há mais artigos para carregar
  const hasMore = visibleCount < articles.length;

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

        {/* Botão de carregar mais */}
        <div className="text-center">
          {hasMore ? (
            <Button
              variant="outline"
              size="lg"
              onClick={() => setVisibleCount((prev) => prev + 6)}
            >
              Ver Mais Artigos
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                setVisibleCount(6);
                scrollToSection("articles-section");
              }}
            >
              Ver Menos Artigos
              <ChevronUp className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
