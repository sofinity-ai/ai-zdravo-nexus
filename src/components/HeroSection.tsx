import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
      
      {/* Content */}
      <div className="container relative z-20 px-4 py-20">
        <div className="max-w-3xl glass-hero rounded-2xl p-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-poppins font-bold mb-8 text-white leading-tight uppercase tracking-wide">
            Postanite Lider u{" "}
            <span className="gradient-text">AI Revoluciji</span>{" "}
            na Balkanu.
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 font-inter leading-relaxed max-w-2xl">
            Naučite praktične veštine, ovladajte najnovijim alatima i povežite se 
            sa zajednicom vodećih AI stručnjaka iz regiona.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow text-lg px-8 py-6">
              Započni Besplatan Probni Period
            </Button>
          </div>
          
          <p className="text-white/70 text-sm">
            Pridruži se hiljadama profesionalaca. Bez rizika, otkaži bilo kada.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;