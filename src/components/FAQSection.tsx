import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Kome je namenjen AI Zdravo?",
      answer: "AI Zdravo je namenjen svim profesionalcima koji žele da nauče praktične AI veštine - od početnika do naprednih korisnika. Naši kursevi su posebno korisni za marketare, preduzetnike, freelancere, studente i sve koji žele da uvećaju svoju produktivnost pomoću AI alata."
    },
    {
      question: "Šta dobijam u besplatnom probnom periodu?",
      answer: "Tokom 14-dnevnog besplatnog probnog perioda imate potpun pristup svim funkcijama vašeg odabranog plana. To uključuje pristup kursevima, prompt biblioteci, zajednici i svim ostalim resursima. Možete otkazati u bilo kom trenutku pre kraja probnog perioda."
    },
    {
      question: "Da li mogu da otkažem pretplatu bilo kada?",
      answer: "Apsolutno! Možete otkazati pretplatu bilo kada iz vašeg korisničkog profila. Nema skrivenih troškova ili penala. Ako otkažete, imaćete pristup sadržaju do kraja vašeg billing ciklusa."
    },
    {
      question: "Koji su načini plaćanja?",
      answer: "Prihvatamo sve glavne kreditne kartice (Visa, Mastercard, American Express) i PayPal. Za preduzeća nudimo i plaćanje fakturom. Svi podaci se obrađuju preko sigurnih Stripe servera."
    },
    {
      question: "Da li dobijam sertifikat nakon završenog kursa?",
      answer: "Da! Svi Premium članovi dobijaju verifikovane sertifikate nakon uspešnog završetka kurseva. Sertifikati mogu biti podeljeni na LinkedIn-u i drugim profesionalnim mrežama. Standard plan uključuje sertifikate za osnovne kurseve."
    },
    {
      question: "Da li su kursevi ažurni sa najnovijim AI trendovima?", 
      answer: "Apsolutno! Naši instruktori redovno ažuriraju sadržaj kako bi odražavao najnovije trendove u AI industriji. Dobijate pristup novim lekcijama i materijalima čim budu objavljeni, bez dodatnih troškova."
    },
    {
      question: "Mogu li pristupiti sadržaju sa mobilnog uređaja?",
      answer: "Da! Naša platforma je potpuno responzivna i radi odlično na svim uređajima. Takođe imamo mobilne aplikacije za iOS i Android koje omogućavaju učenje u pokretu, čak i offline."
    }
  ];

  return (
    <section className="section-spacing bg-muted/10">
      <div className="container px-4">
        <div className="text-center mb-20">
          <h2 className="brand-bar text-3xl md:text-4xl font-poppins font-bold mb-6 uppercase tracking-wide inline-block">
            Često Postavljana Pitanja
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter leading-relaxed">
            Odgovori na najčešće postavljana pitanja o AI Zdravo platformi
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary font-poppins uppercase tracking-wide">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-inter leading-relaxed pt-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;