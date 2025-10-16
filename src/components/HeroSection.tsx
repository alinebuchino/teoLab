import heroImage from "@/assets/theology-hero.jpg";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-16">
      <LampContainer backgroundImage={heroImage}>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-center max-w-4xl mx-auto px-6"
        >
          <h1 className="heading-divine mb-6">
            <span className="block text-foreground">Explorando a</span>
            <span className="text-gradient-divine block mt-2">Teologia Cristã</span>
          </h1>

          <p className="subheading-sacred mb-8 max-w-2xl mx-auto">
            Mergulhe em estudos profundos sobre doutrina, história da igreja e fundamentos bíblicos que transformam vidas e edificam a fé cristã.
          </p>
        </motion.div>
      </LampContainer>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-50">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;