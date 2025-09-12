import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PublicNavigation = () => {
  return (
    <header className="sticky top-0 z-50 w-full glass-navigation">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">AI</span>
          </div>
          <span className="font-poppins font-bold text-xl gradient-text">Zdravo</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            Katalog Kurseva
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            O Nama
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            Cene
          </Button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            Prijava
          </Button>
          <Button variant="default" size="sm" className="bg-gradient-primary hover:opacity-90 shadow-glow">
            Započni Besplatno
          </Button>
        </div>
      </div>
    </header>
  );
};

export default PublicNavigation;