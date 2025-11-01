import articlesById from "@/artigos/metadatas/allArticlesId";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ArticlePage = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const currentArticle = articlesById[articleId || ""];

  if (!currentArticle) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 pb-20 px-6 text-center">
          <h1 className="text-3xl font-bold mb-4">Artigo não encontrado</h1>
          <Button onClick={() => navigate("/")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Início
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />

      <article className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Botão Voltar */}
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Voltar para Início
          </Button>

          {/* Cabeçalho do Artigo */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                {currentArticle.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {currentArticle.title}
            </h1>

            <div className="flex items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {currentArticle.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {currentArticle.readTime} de leitura
              </div>
            </div>

            <div className="flex items-center justify-between pb-6 border-b border-border ">
              {/* <p className="text-gray-300 font-medium">
                Por {currentArticle.author}
              </p>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Compartilhar
              </Button> */}
            </div>
          </div>

          {/* Conteúdo do Artigo */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:text-foreground prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-strong:text-foreground prose-strong:font-semibold
              prose-ul:text-muted-foreground prose-ul:my-6
              prose-li:mb-2"
            dangerouslySetInnerHTML={{ __html: currentArticle.content }}
          />

          {/* Rodapé do Artigo */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => navigate("/")}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar para Artigos
              </Button>
              {/* <Button variant="outline">
                <Share2 className="w-4 h-4 mr-2" />
                Compartilhar Artigo
              </Button> */}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default ArticlePage;
