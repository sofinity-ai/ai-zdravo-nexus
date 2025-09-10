const SocialProofBar = () => {
  const companies = [
    { name: "Comtrade", logo: "/placeholder-logo.svg" },
    { name: "Nordeus", logo: "/placeholder-logo.svg" },
    { name: "HTEC", logo: "/placeholder-logo.svg" },
    { name: "Univerzitet u Beogradu", logo: "/placeholder-logo.svg" },
    { name: "Infostud", logo: "/placeholder-logo.svg" },
    { name: "Schneider Electric", logo: "/placeholder-logo.svg" },
    { name: "Vega IT", logo: "/placeholder-logo.svg" },
    { name: "Levi9", logo: "/placeholder-logo.svg" }
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="container px-4">
        <h2 className="text-center text-lg font-medium text-muted-foreground mb-12">
          Poverenje nam ukazuju stručnjaci iz vodećih regionalnih kompanija
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {companies.map((company, index) => (
            <div 
              key={index}
              className="flex items-center justify-center grayscale opacity-60 hover:opacity-100 transition-opacity"
            >
              <div className="w-24 h-12 bg-muted/50 rounded-md flex items-center justify-center">
                <span className="text-xs text-muted-foreground font-medium">
                  {company.name.split(' ')[0]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;