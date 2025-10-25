import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ThemePage = () => {
  const { theme } = useParams<{ theme: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Dados dos artigos organizados por tema
  const articlesByTheme: Record<string, any[]> = {
    "doutrina-da-salvacao": [
      {
        title: "Graça e Obras: O Equilíbrio Bíblico da Salvação",
        slug: "graca-obras-salvacao",
        excerpt:
          "Como compreender o papel da graça divina e das boas obras na vida do cristão segundo as Escrituras.",
        category: "Soteriologia",
        date: "10 de Setembro, 2024",
        readTime: "12 min",
      },
      {
        title: "Justificação pela Fé: Fundamento da Reforma",
        slug: "justificacao-pela-fe",
        excerpt:
          "A doutrina central que transformou a compreensão da salvação na história da igreja.",
        category: "Soteriologia",
        date: "20 de Agosto, 2024",
        readTime: "10 min",
      },
      {
        title: "Santificação: O Processo de Crescimento Espiritual",
        slug: "santificacao-processo-espiritual",
        excerpt:
          "Compreendendo o papel do Espírito Santo na transformação contínua do crente.",
        category: "Soteriologia",
        date: "15 de Agosto, 2024",
        readTime: "9 min",
      },
    ],
    "cristologia": [
      {
        title: "A Natureza Divina de Cristo: Uma Análise Bíblica",
        slug: "natureza-divina-cristo",
        excerpt:
          "Explorando as Escrituras que revelam a divindade de Jesus Cristo e sua importância para a fé cristã.",
        category: "Cristologia",
        date: "15 de Setembro, 2024",
        readTime: "8 min",
      },
      {
        title: "As Duas Naturezas de Cristo",
        slug: "duas-naturezas-de-cristo",
        excerpt:
          "Entendendo a união hipostática: Jesus como verdadeiro Deus e verdadeiro homem.",
        category: "Cristologia",
        date: "5 de Setembro, 2024",
        readTime: "11 min",
      },
      {
        title: "A Obra Expiatória de Cristo",
        slug: "obra-expiatoria-de-cristo",
        excerpt:
          "O significado e alcance da morte e ressurreição de Jesus para a redenção humana.",
        category: "Cristologia",
        date: "30 de Agosto, 2024",
        readTime: "13 min",
      },
    ],
    "escatologia": [
      {
        title: "Visões do Milênio: Pré, Pós e Amilenismo",
        slug: "visoes-do-milenio",
        excerpt:
          "Comparando as principais interpretações sobre o reino milenar de Cristo.",
        category: "Escatologia",
        date: "12 de Setembro, 2024",
        readTime: "14 min",
      },
      {
        title: "A Segunda Vinda de Cristo",
        slug: "segunda-vinda-de-cristo",
        excerpt:
          "O que as Escrituras revelam sobre o retorno triunfante do Messias.",
        category: "Escatologia",
        date: "2 de Setembro, 2024",
        readTime: "10 min",
      },
      {
        title: "Céu, Inferno e Estado Intermediário",
        slug: "ceu-inferno-e-estado-intermediario",
        excerpt:
          "Compreendendo o destino eterno e o estado entre a morte e a ressurreição.",
        category: "Escatologia",
        date: "22 de Agosto, 2024",
        readTime: "12 min",
      },
    ],
    "historia-da-igreja": [
      {
        title: "Os Pais da Igreja e a Formação Doutrinária",
        slug: "pais-igreja-formacao",
        excerpt:
          "O papel fundamental dos primeiros teólogos cristãos na preservação e desenvolvimento da doutrina.",
        category: "História",
        date: "5 de Setembro, 2024",
        readTime: "15 min",
      },
      {
        title: "Reforma Protestante: Contexto e Implicações",
        slug: "reforma-protestante",
        excerpt:
          "Um olhar histórico sobre os eventos que moldaram o cristianismo moderno.",
        category: "História",
        date: "25 de Agosto, 2024",
        readTime: "14 min",
      },
      {
        title: "Os Concílios Ecumênicos e a Ortodoxia",
        slug: "concilios-ecumenicos",
        excerpt: "Como os grandes concílios definiram a fé cristã ortodoxa.",
        category: "História",
        date: "18 de Agosto, 2024",
        readTime: "16 min",
      },
    ],
    "estudos-biblicos": [
      {
        title: "Hermenêutica Bíblica: Princípios de Interpretação",
        slug: "hermeneutica-biblica",
        excerpt:
          "Métodos essenciais para uma interpretação correta e contextual das Sagradas Escrituras.",
        category: "Hermenêutica",
        date: "1 de Setembro, 2024",
        readTime: "10 min",
      },
      {
        title: "Contexto Histórico-Cultural da Bíblia",
        slug: "contexto-historico-cultural-da-biblia",
        excerpt:
          "Entendendo o mundo antigo para compreender melhor as Escrituras.",
        category: "Hermenêutica",
        date: "24 de Agosto, 2024",
        readTime: "11 min",
      },
      {
        title: "Gêneros Literários nas Escrituras",
        slug: "generos-literarios-nas-escrituras",
        excerpt:
          "Como reconhecer e interpretar diferentes tipos de literatura bíblica.",
        category: "Hermenêutica",
        date: "17 de Agosto, 2024",
        readTime: "9 min",
      },
    ],
  };

  const themeNames: Record<string, string> = {
    "doutrina-da-salvacao": "Doutrina da Salvação",
    "cristologia": "Cristologia",
    "escatologia": "Escatologia",
    "historia-da-igreja": "História da Igreja",
    "estudos-biblicos": "Estudos Bíblicos",
  };

  const currentTheme = theme || "";
  const articles = articlesByTheme[currentTheme] || [];
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
                  key={article.slug}
                  className="card-sacred hover:shadow-[0_8px_30px_hsl(var(--primary)/0.1)] group cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
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
                    onClick={() => navigate(`/artigo/${article.slug}`)}
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
