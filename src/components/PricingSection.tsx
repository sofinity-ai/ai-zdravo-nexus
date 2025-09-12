import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Standard",
      monthlyPrice: 29,
      annualPrice: 23,
      currency: "€",
      description: "Idealno za početnike koji žele da uče AI",
      features: [
        "Pristup svim osnovnim kursevima",
        "Biblioteka od 100+ promptova",
        "Zajednica i forum",
        "Mesečni Q&A sesioni",
        "Email podrška",
        "Mobilna aplikacija"
      ],
      popular: false
    },
    {
      name: "Premium", 
      monthlyPrice: 59,
      annualPrice: 47,
      currency: "€",
      description: "Za profesionalce koji žele napredne veštine",
      features: [
        "Pristup SVIM kursevima",
        "Biblioteka od 500+ promptova",
        "Prioritetna podrška",
        "1-na-1 mentoring sesije",
        "Ekskluzivni webinari",
        "Sertifikati za završene kurseve",
        "AI alati i integracije",
        "Rani pristup novim sadržajima"
      ],
      popular: true
    }
  ];

  return (
    <section className="section-spacing bg-background">
      <div className="container px-4">
        <div className="text-center mb-20">
          <h2 className="brand-bar text-3xl md:text-4xl font-poppins font-bold mb-6 uppercase tracking-wide inline-block">
            Izaberi Plan Koji Ti Odgovara
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 font-inter leading-relaxed">
            Fleksibilni planovi prilagođeni tvojim potrebama i ciljevima
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm ${!isAnnual ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              Mesečno
            </span>
            <Switch 
              checked={isAnnual} 
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-primary"
            />
            <span className={`text-sm ${isAnnual ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              Godišnje
            </span>
            {isAnnual && (
              <Badge variant="secondary" className="ml-2 bg-primary/10 text-primary">
                Uštedi 20%
              </Badge>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`hover-lift relative ${
                plan.popular ? 'glass-premium' : 'glass-card'
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-primary-foreground">
                  Najpopularnije
                </Badge>
              )}
              
              <CardHeader className="text-center pb-10">
                <CardTitle className="text-2xl font-poppins font-bold uppercase tracking-wide">
                  {plan.name}
                </CardTitle>
                <p className="text-muted-foreground mb-6 font-inter leading-relaxed">
                  {plan.description}
                </p>
                
                <div className="text-center">
                  <span className="text-4xl font-bold gradient-text">
                    {plan.currency}{isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground font-inter">/mesečno</span>
                  {isAnnual && (
                    <p className="text-sm text-muted-foreground mt-2 font-inter">
                      Naplaćeno godišnje ({plan.currency}{plan.annualPrice * 12})
                    </p>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-8">
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-primary hover:opacity-90 shadow-glow' 
                      : 'variant-outline'
                  }`}
                  size="lg"
                >
                  Započni Besplatan Probni Period
                </Button>
                
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="font-inter">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <p className="text-center text-sm text-muted-foreground mt-12 font-inter">
          Svi planovi uključuju 14-dnevni besplatan probni period. Otkažite bilo kada.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;