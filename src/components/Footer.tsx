import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-subtle border-t border-border/50">
      <div className="container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Mission */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">AI</span>
              </div>
              <span className="font-poppins font-bold text-xl gradient-text">Zdravo</span>
            </Link>
            
            <p className="text-muted-foreground font-inter leading-relaxed max-w-md">
              Vaš partner za uspeh u AI revoluciji. Praktične veštine, alati i zajednica na jednom mestu.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                LinkedIn
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                YouTube
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                Twitter
              </Button>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold mb-6 font-poppins uppercase tracking-wide">Platforma</h4>
            <ul className="space-y-3">
              <li>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary p-0 h-auto font-inter">
                  Kursevi
                </Button>
              </li>
              <li>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary p-0 h-auto font-inter">
                  Prompt Biblioteka
                </Button>
              </li>
              <li>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary p-0 h-auto font-inter">
                  Zajednica
                </Button>
              </li>
              <li>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary p-0 h-auto font-inter">
                  Cene
                </Button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-6 font-poppins uppercase tracking-wide">Kompanija</h4>
            <ul className="space-y-3">
              <li>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary p-0 h-auto font-inter">
                  O Nama
                </Button>
              </li>
              <li>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary p-0 h-auto font-inter">
                  Kontakt
                </Button>
              </li>
              <li>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary p-0 h-auto font-inter">
                  Karijere
                </Button>
              </li>
              <li>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary p-0 h-auto font-inter">
                  Blog
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground font-inter">
            © {currentYear} AI Zdravo. Sva prava zadržana.
          </p>
          
          <div className="flex space-x-6">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary p-0 h-auto text-sm font-inter">
              Uslovi Korišćenja
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary p-0 h-auto text-sm font-inter">
              Politika Privatnosti
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary p-0 h-auto text-sm font-inter">
              Kolačići
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;