import { BookOpen, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Strukturirano Učenje",
      description: "Od početnika do eksperta. Naša AI Škola nudi jasne staze učenja kroz video kurseve i praktične lekcije koje su kreirali regionalni stručnjaci."
    },
    {
      icon: Zap,
      title: "Praktični Alati i Resursi", 
      description: "Ubrzajte svoj rad uz našu biblioteku sa stotinama gotovih promptova. Preuzmite templejte i resurse koji vam donose rezultate odmah."
    },
    {
      icon: Users,
      title: "Ekspertska Zajednica",
      description: "Povežite se sa kolegama i mentorima. Naš forum je centralno mesto za diskusiju, rešavanje problema i deljenje znanja na lokalnom jeziku."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
            Šta Dobijaš?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sve što ti je potrebno za uspeh u AI revoluciji na jednom mestu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="glass-card hover-lift border-border/50">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 font-poppins">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;