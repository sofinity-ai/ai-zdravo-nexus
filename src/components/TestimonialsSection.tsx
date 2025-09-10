import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "AI Zdravo mi je pomogao da automatizujem 50% svojih marketing zadataka. Zajednica je neprocenjiva za rešavanje realnih problema.",
      name: "Milica Stojanović",
      title: "Marketing Manager, Comtrade",
      avatar: "/placeholder-avatar.jpg",
      initials: "MS"
    },
    {
      quote: "Praktični pristup učenju i kvalitet kurseva su na nivou najboljih svetskih platformi. Konačno AI edukacija na našem jeziku!",
      name: "Aleksandar Milenković", 
      title: "CTO, Nordeus",
      avatar: "/placeholder-avatar.jpg",
      initials: "AM"
    },
    {
      quote: "Prompt biblioteka je revolucionirala način na koji pristupam AI projektima. Uštedeo sam sate vremena dnevno.",
      name: "Jovana Radić",
      title: "AI Specialist, HTEC Group", 
      avatar: "/placeholder-avatar.jpg",
      initials: "JR"
    }
  ];

  return (
    <section className="relative py-24 bg-muted/20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
      </div>
      
      <div className="container px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
            Postani Deo AI Zajednice Balkana
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Čuj šta kažu naši članovi o transformaciji koju su doživeli
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-card hover-lift border-border/50">
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-primary mb-6" />
                
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;