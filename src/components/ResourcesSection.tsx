import { Button } from "@/components/ui/button";
import { Book, Headphones, Video, ExternalLink } from "lucide-react";

const ResourcesSection = () => {
  const resources = [
    {
      type: "book",
      title: "Teologia Sistemática - Wayne Grudem",
      description: "Uma obra completa e acessível sobre os fundamentos da fé cristã.",
      icon: Book,
      color: "primary"
    },
    {
      type: "podcast",
      title: "Podcast Reforma Hoje",
      description: "Discussões teológicas profundas com líderes e estudiosos cristãos.",
      icon: Headphones,
      color: "accent"
    },
    {
      type: "video",
      title: "Série: Hermenêutica Bíblica",
      description: "Aprenda métodos corretos de interpretação das Sagradas Escrituras.",
      icon: Video,
      color: "warm"
    }
  ];

  return (
    <section id="resources-section" className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Recursos <span className="text-gradient-divine">Recomendados</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Amplie seus estudos com livros, podcasts e vídeos cuidadosamente selecionados por especialistas em teologia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            const colorClasses = {
              primary: "text-primary border-primary/20 hover:border-primary/40 hover:shadow-[0_8px_25px_hsl(var(--primary)/0.15)]",
              accent: "text-accent border-accent/20 hover:border-accent/40 hover:shadow-[0_8px_25px_hsl(var(--accent)/0.15)]",
              warm: "text-warm-accent border-warm-accent/20 hover:border-warm-accent/40 hover:shadow-[0_8px_25px_hsl(var(--warm-accent)/0.15)]"
            };

            return (
              <div 
                key={resource.title}
                className={`card-sacred group cursor-pointer ${colorClasses[resource.color as keyof typeof colorClasses]} animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-current/10 to-current/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-current transition-colors">
                    {resource.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {resource.description}
                  </p>
                  
                  <Button variant="ghost" size="sm" className="group-hover:text-current">
                    Acessar
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            Ver Mais Recursos
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;