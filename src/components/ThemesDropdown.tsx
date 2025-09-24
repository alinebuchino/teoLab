import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const themes = [
  "Cristologia",
  "Escatologia", 
  "Soteriologia",
  "Pneumatologia",
  "Eclesiologia",
  "Bibliologia"
]

export function ThemesDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Button 
        variant="ghost" 
        className="text-foreground hover:text-accent flex items-center gap-1"
      >
        Temas
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-48 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-lg z-50"
          >
            <div className="py-2">
              {themes.map((theme) => (
                <button
                  key={theme}
                  className="w-full text-left px-4 py-2 text-sm text-foreground/80 hover:text-accent hover:bg-muted/50 transition-colors"
                >
                  {theme}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}