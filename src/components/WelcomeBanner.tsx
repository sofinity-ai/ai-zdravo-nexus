import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const WelcomeBanner = () => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-card border border-border/50">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      {/* Content */}
      <div className="relative px-8 py-12 md:px-12 md:py-16">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-2 mb-4">
            <Sparkles className="h-5 w-5 text-primary animate-glow-pulse" />
            <span className="text-sm font-medium text-primary">Dobrodošli nazad!</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
            Nastavite svoje 
            <span className="gradient-text"> AI putovanje</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Otkrijte najnovije AI alate, savladajte prompting tehnike i povezujte se sa 
            zajednicom stručnjaka iz Zapadnog Balkana.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
              Nastavi učenje
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-border/50 hover:bg-muted/50">
              Explore novi sadržaj
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;