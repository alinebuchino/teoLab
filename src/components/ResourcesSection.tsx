import resourcesMetadata from "@/artigos/metadatas/resourcesMetadata";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { useState } from "react";

const ResourcesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const resources = Object.values(resourcesMetadata);
  const visibleResources = showAll ? resources : resources.slice(0, 3);

  const colorClasses = {
    primary: "text-primary border-primary/20 hover:border-primary/40 hover:shadow-[0_8px_25px_hsl(var(--primary)/0.15)]",
    accent: "text-accent border-accent/20 hover:border-accent/40 hover:shadow-[0_8px_25px_hsl(var(--accent)/0.15)]",
    warm: "text-warm-accent border-warm-accent/20 hover:border-warm-accent/40 hover:shadow-[0_8px_25px_hsl(var(--warm-accent)/0.15)]"
  };

  return (
    <section id="resources-section" className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Recursos <span className="text-gradient-divine">Recomendados</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Amplie seus estudos com livros, vídeos e cursos cuidadosamente selecionados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {visibleResources.map((resource, index) => {
            const Icon = resource.icon;

            return (
              <div
                key={resource.id}
                className={`card-sacred group cursor-pointer ${colorClasses[resource.color]} animate-fade-in`}
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

                  <Button variant="ghost" size="sm" className="group-hover:text-current" onClick={() => window.open(resource.url, "_blank")}>
                    Acessar
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Ver Menos Recursos" : "Ver Mais Recursos"}
            {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
