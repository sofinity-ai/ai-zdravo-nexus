import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-8 max-w-md mx-auto px-4">
        {/* 404 Animation */}
        <div className="relative">
          <h1 className="text-8xl font-poppins font-bold gradient-text animate-glow-pulse">
            404
          </h1>
          <div className="absolute inset-0 bg-gradient-glow opacity-20 animate-pulse" />
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h2 className="text-2xl font-poppins font-semibold">
            Stranica nije pronađena
          </h2>
          <p className="text-muted-foreground">
            Izvinjavamo se, ali stranica koju tražite ne postoji ili je premeštena.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
            <a href="/">
              <Home className="w-4 h-4 mr-2" />
              Idite na početak
            </a>
          </Button>
          <Button variant="outline" size="lg" onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Idite nazad
          </Button>
        </div>

        {/* Help Text */}
        <p className="text-sm text-muted-foreground">
          Ako mislite da je ovo greška, molimo vas da kontaktirate naš tim.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
