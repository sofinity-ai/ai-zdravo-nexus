import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSlide {
  id: string;
  tagline: string;
  title: string;
  description: string;
  primaryButton: {
    text: string;
    action: () => void;
  };
  secondaryButton: {
    text: string;
    action: () => void;
  };
}

const heroSlides: HeroSlide[] = [
  {
    id: "1",
    tagline: "NOVI KURS",
    title: "Napredni Prompt Inženjering",
    description: "Otključajte tajne 'chain-of-thought' tehnike i kreirajte kompleksne AI procese.",
    primaryButton: {
      text: "Počni sa učenjem",
      action: () => console.log("Start learning")
    },
    secondaryButton: {
      text: "Pogledaj detalje kursa",
      action: () => console.log("View course details")
    }
  },
  {
    id: "2",
    tagline: "UŽIVO RADIONICA",
    title: "AI Automatizacija za Biznis",
    description: "Pridružite nam se na ekskluzivnoj radionici i naučite kako da automatizujete poslovne procese uz n8n i AI.",
    primaryButton: {
      text: "Rezerviši Mesto",
      action: () => console.log("Reserve spot")
    },
    secondaryButton: {
      text: "Saznaj Više",
      action: () => console.log("Learn more")
    }
  },
  {
    id: "3",
    tagline: "IZ ZAJEDNICE",
    title: "Pokaži Svoj Rad: Mesečni Izazov",
    description: "Podelite svoje AI projekte sa zajednicom i osvojite vredne nagrade. Tema ovog meseca: AI Art.",
    primaryButton: {
      text: "Učestvuj u Izazovu",
      action: () => console.log("Join challenge")
    },
    secondaryButton: {
      text: "Istraži Zajednicu",
      action: () => console.log("Explore community")
    }
  }
];

const VideoHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        {/* Placeholder for video - You'll need to replace src with your video file */}
        {/* Note: YouTube videos can't be used directly. Please download and convert the video to MP4 format */}
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          {/* Replace with your converted video file */}
          <source src="/placeholder-video.mp4" type="video/mp4" />
          {/* Fallback gradient background if video fails to load */}
        </video>
        
        {/* Fallback animated background (shown if video doesn't load) */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary-glow/10">
          <div className="absolute inset-0">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Netflix-style Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Left Side - Content (60%) */}
            <div className="lg:col-span-3 space-y-6 text-center lg:text-left">
              {/* Tagline */}
              <div className="inline-block">
                <span className="font-manrope font-medium text-sm uppercase tracking-[0.2em] text-primary-glow bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                  {slide.tagline}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-satoshi font-semibold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
                <span className="gradient-text">{slide.title}</span>
              </h1>

              {/* Description */}
              <p className="font-manrope text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                {slide.description}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="font-manrope font-medium px-8 py-4 text-base bg-gradient-primary hover:opacity-90 transition-opacity"
                  onClick={slide.primaryButton.action}
                >
                  {slide.primaryButton.text}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="font-manrope font-medium px-8 py-4 text-base border-primary/30 hover:bg-primary/10 transition-colors"
                  onClick={slide.secondaryButton.action}
                >
                  {slide.secondaryButton.text}
                </Button>
              </div>
            </div>

            {/* Right Side - Minimal space for background to show (40%) */}
            <div className="lg:col-span-2 hidden lg:block" />
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-primary scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Arrow Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-20 group"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-20 group"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <div 
          className="h-full bg-primary transition-all duration-300 ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / heroSlides.length) * 100}%`,
          }}
        />
      </div>
    </section>
  );
};

export default VideoHero;