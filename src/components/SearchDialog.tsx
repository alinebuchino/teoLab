import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { DialogTitle } from "@/components/ui/dialog";
import { searchableContent, SearchableItem } from "@/data/searchData";
import { Book, FileText, Library, Newspaper } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Função para normalizar texto (remover acentos e converter para minúscula)
const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
};

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState<SearchableItem[]>([]);
  const navigate = useNavigate();

  // Resetar a busca quando o diálogo abre
  useEffect(() => {
    if (!open) {
      setSearchQuery("");
      setFilteredResults([]);
    }
  }, [open]);

  // Filtrar resultados em tempo real
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredResults([]);
      return;
    }

    const query = normalizeText(searchQuery);
    const results = searchableContent.filter((item) => {
      const titleMatch = normalizeText(item.title).includes(query);
      const descriptionMatch = normalizeText(item.description).includes(query);
      const categoryMatch = normalizeText(item.category).includes(query);
      const keywordsMatch = item.keywords?.some((keyword) =>
        normalizeText(keyword).includes(query)
      );

      return titleMatch || descriptionMatch || categoryMatch || keywordsMatch;
    });

    setFilteredResults(results);
  }, [searchQuery]);

  const handleSelect = (item: SearchableItem) => {
    // Scroll para a seção correspondente
    let sectionId = "";
    if (item.type === "article") {
      navigate(`/artigo/${item.id}`);
      return;
    } else if (item.type === "theme") {
      navigate(`/tema/${item.category}`);
      return;
    } else if (item.type === "resource") {
      sectionId = "resources-section";
    }

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

    onOpenChange(false);
    setSearchQuery("");
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "article":
        return <Newspaper className="w-4 h-4 text-accent" />;
      case "theme":
        return <Book className="w-4 h-4 text-primary" />;
      case "resource":
        return <Library className="w-4 h-4 text-warm-accent" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "article":
        return "Artigo";
      case "theme":
        return "Tema";
      case "resource":
        return "Recurso";
      default:
        return type;
    }
  };

  // Agrupar resultados por tipo
  const groupedResults = {
    articles: filteredResults.filter((item) => item.type === "article"),
    themes: filteredResults.filter((item) => item.type === "theme"),
    resources: filteredResults.filter((item) => item.type === "resource"),
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <DialogTitle className="sr-only">Pesquisar conteúdo</DialogTitle>
      <Command shouldFilter={false}>
        <CommandInput
          placeholder="Pesquisar artigos, temas, recursos..."
          value={searchQuery}
          onValueChange={setSearchQuery}
        />
        <CommandList>
          <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>

          {groupedResults.articles.length > 0 && (
            <CommandGroup heading="Artigos">
              {groupedResults.articles.map((item) => (
                <CommandItem
                  key={item.id}
                  onSelect={() => handleSelect(item)}
                  className="cursor-pointer"
                >
                  <div className="flex items-start gap-3 w-full">
                    {getIcon(item.type)}
                    <div className="flex-1">
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-muted-foreground line-clamp-1">
                        {item.description}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded">
                          {item.category}
                        </span>
                        {item.readTime && (
                          <span className="text-xs text-muted-foreground">
                            {item.readTime}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}

          {groupedResults.themes.length > 0 && (
            <CommandGroup heading="Temas">
              {groupedResults.themes.map((item) => (
                <CommandItem
                  key={item.id}
                  onSelect={() => handleSelect(item)}
                  className="cursor-pointer"
                >
                  <div className="flex items-start gap-3 w-full">
                    {getIcon(item.type)}
                    <div className="flex-1">
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-muted-foreground line-clamp-1">
                        {item.description}
                      </div>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded mt-1 inline-block">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}

          {groupedResults.resources.length > 0 && (
            <CommandGroup heading="Recursos">
              {groupedResults.resources.map((item) => (
                <CommandItem
                  key={item.id}
                  onSelect={() => handleSelect(item)}
                  className="cursor-pointer"
                >
                  <div className="flex items-start gap-3 w-full">
                    {getIcon(item.type)}
                    <div className="flex-1">
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-muted-foreground line-clamp-1">
                        {item.description}
                      </div>
                      <span className="text-xs bg-warm-accent/10 text-warm-accent px-2 py-0.5 rounded mt-1 inline-block">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </Command>
    </CommandDialog>
  );
};

export default SearchDialog;
