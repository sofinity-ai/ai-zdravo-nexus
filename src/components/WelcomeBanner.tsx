import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const WelcomeBanner = () => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-card border border-border/50 h-[500px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative px-8 py-12 md:px-12 md:py-16 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <div className="flex items-center space-x-2 mb-4">
            <Sparkles className="h-5 w-5 text-primary animate-glow-pulse" />
            <span className="text-sm font-medium text-primary uppercase tracking-wide">Novi Kurs</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            Napredni Prompt Inženjering
          </h1>
          
          <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-xl">
            Otključajte tajne 'chain-of-thought' tehnike i kreirajte kompleksne AI procese.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
              Počni sa učenjem
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
              Pogledaj detalje kursa
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;