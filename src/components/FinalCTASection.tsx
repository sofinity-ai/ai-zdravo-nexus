import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="section-spacing bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-50" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container px-4 relative z-10">
        <div className="glass-hero rounded-3xl p-16 text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <Sparkles className="w-16 h-16 text-primary animate-glow-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-8 leading-tight uppercase tracking-wide">
            Spremni da Transformišete{" "}
            <span className="gradient-text">Svoju Karijeru</span>?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-inter leading-relaxed">
            Počnite svoje AI putovanje već danas. Pristup svim kursevima, alatima i zajednici - potpuno besplatno prvih 14 dana.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 shadow-glow text-lg px-12 py-6 group"
            >
              Započni Svoje AI Putovanje - Besplatno
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground font-inter">
            <div className="flex items-center">
              <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              14 dana besplatno
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Otkažite bilo kada
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Bez skrivenih troškova
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;