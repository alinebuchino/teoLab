import articlesById from "@/artigos/metadatas/allArticlesId";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Mapeamento de meses em português para número
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

// Função para converter data em português para objeto Date
function parsePtDate(ptDate: string) {
  const [day, , month, year] = ptDate.split(" ");
  const monthNumber = monthMap[month.replace(",", "")];
  return new Date(`${year}-${monthNumber}-${day}`);
}

const ThemePage = () => {
  const { theme } = useParams<{ theme: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const articlesByTheme: Record<string, string[]> = {};
  const themeNames: Record<string, string> = {};

  Object.values(articlesById).forEach(article => {
    const themeSlug = article.category;

    if (!articlesByTheme[themeSlug]) {
      articlesByTheme[themeSlug] = [];
      themeNames[themeSlug] = article.category;
    }

    articlesByTheme[themeSlug].push(article.id);
  });

  // Pega os artigos do tema atual (slug da URL)
  const currentTheme = theme || "";
  const themeArticleIds = articlesByTheme[currentTheme] || [];
  let articles = themeArticleIds.map(id => articlesById[id]).filter(Boolean);

  // Ordena os artigos do mais recente para o mais antigo
  articles = articles.sort(
    (a, b) => parsePtDate(b.date).getTime() - parsePtDate(a.date).getTime()
  );

  const themeName = themeNames[currentTheme] || "Tema";

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Voltar para Início
          </Button>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {themeName}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore todos os artigos relacionados a {themeName.toLowerCase()}
            </p>
          </div>

          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <article
                  key={article.id}
                  className="card-sacred hover:shadow-[0_8px_30px_hsl(var(--primary)/0.1)] group cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => navigate(`/artigo/${article.id}`)}
                >
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="bg-accent/10 text-accent px-2 py-1 rounded text-xs font-medium">
                      {article.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
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

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {article.excerpt}
                  </p>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-4 w-full group-hover:text-accent"
                    onClick={() => navigate(`/artigo/${article.id}`)}
                  >
                    Ler Artigo
                  </Button>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                Nenhum artigo encontrado para este tema.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThemePage;
