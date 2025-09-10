import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const InstructorSpotlight = () => {
  const instructors = [
    {
      name: "Marko Petrović",
      title: "AI Konsultant & Osnivač AI Zdravo",
      bio: "Preko 8 godina iskustva u AI industriji. Pomaže kompanijama da implementiraju AI rešenja i transformišu svoje poslovanje kroz praktičnu primenu tehnologije.",
      avatar: "/placeholder-avatar.jpg",
      initials: "MP"
    },
    {
      name: "Ana Jovanović", 
      title: "Senior AI Engineer & Prompt Specialist",
      bio: "Stručnjak za napredni prompt engineering sa iskustvom u velikim tech kompanijama. Kreirala je metodologije koje koriste hiljade developera širom regiona.",
      avatar: "/placeholder-avatar.jpg", 
      initials: "AJ"
    },
    {
      name: "Stefan Nikolić",
      title: "AI Business Strategist & Autor",
      bio: "Pomaže organizacijama da razviju AI strategiju. Autor je nekoliko publikacija o praktičnoj primeni AI u poslovanju i redovan govornik na tech konferencijama.",
      avatar: "/placeholder-avatar.jpg",
      initials: "SN"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
            Učite od Dokazanih Stručnjaka
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Naši instruktori su priznati eksperti sa godina iskustva u AI industriji
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <Card key={index} className="glass-card hover-lift border-border/50">
              <CardContent className="p-8 text-center">
                <Avatar className="w-24 h-24 mx-auto mb-6">
                  <AvatarImage src={instructor.avatar} />
                  <AvatarFallback className="bg-gradient-primary text-primary-foreground text-lg">
                    {instructor.initials}
                  </AvatarFallback>
                </Avatar>
                
                <h3 className="text-xl font-semibold mb-2 font-poppins">
                  {instructor.name}
                </h3>
                
                <p className="text-primary text-sm font-medium mb-4">
                  {instructor.title}
                </p>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {instructor.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorSpotlight;