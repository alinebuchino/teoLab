import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Inscrição realizada!",
        description: "Você receberá nossas atualizações teológicas em breve.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="card-sacred text-center bg-gradient-to-br from-primary/5 via-background to-accent/5 border-accent/20">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-divine flex items-center justify-center animate-divine-pulse">
            <Mail className="w-8 h-8 text-accent-foreground" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mantenha-se <span className="text-gradient-divine">Atualizado</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Receba em primeira mão novos artigos teológicos, estudos bíblicos e recursos para o crescimento espiritual.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 border-border/50 focus:border-accent"
                required
              />
              <Button 
                type="submit" 
                variant="divine" 
                size="lg"
                className="h-12 px-8"
              >
                Inscrever-se
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </form>
          
          <p className="text-xs text-muted-foreground mt-4">
            Respeitamos sua privacidade. Você pode cancelar a inscrição a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;