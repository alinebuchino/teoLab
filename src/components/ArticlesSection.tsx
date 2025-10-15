import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const ArticlesSection = () => {
  const articles = [
    {
      title: "A Natureza Divina de Cristo: Uma Análise Bíblica",
      excerpt: "Explorando as Escrituras que revelam a divindade de Jesus Cristo e sua importância para a fé cristã.",
      category: "Cristologia",
      date: "15 de Setembro, 2024",
      readTime: "8 min",
      featured: true
    },
    {
      title: "Graça e Obras: O Equilíbrio Bíblico da Salvação",
      excerpt: "Como compreender o papel da graça divina e das boas obras na vida do cristão segundo as Escrituras.",
      category: "Soteriologia",
      date: "10 de Setembro, 2024",
      readTime: "12 min",
      featured: false
    },
    {
      title: "Os Pais da Igreja e a Formação Doutrinária",
      excerpt: "O papel fundamental dos primeiros teólogos cristãos na preservação e desenvolvimento da doutrina.",
      category: "História",
      date: "5 de Setembro, 2024",
      readTime: "15 min",
      featured: false
    },
    {
      title: "Hermenêutica Bíblica: Princípios de Interpretação",
      excerpt: "Métodos essenciais para uma interpretação correta e contextual das Sagradas Escrituras.",
      category: "Hermenêutica",
      date: "1 de Setembro, 2024",
      readTime: "10 min",
      featured: false
    }
  ];

  return (
    <section id="articles-section" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Artigos <span className="text-gradient-primary">Recentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra insights teológicos profundos através de estudos cuidadosamente elaborados para fortalecer sua fé.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Article */}
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
                
                <h3 className="text-2xl font-bold text-foreground mb-3 hover:text-primary transition-colors cursor-pointer">
                  {articles[0].title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {articles[0].excerpt}
                </p>
                
                <Button variant="sacred" className="group">
                  Ler Artigo Completo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          </div>

          {/* Other Articles */}
          {articles.slice(1).map((article, index) => (
            <article 
              key={article.title}
              className="card-sacred hover:shadow-[0_8px_30px_hsl(var(--primary)/0.1)] group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
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
          <Button variant="outline" size="lg">
            Ver Todos os Artigos
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
