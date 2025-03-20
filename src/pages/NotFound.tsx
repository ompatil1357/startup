
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container flex flex-col items-center justify-center text-center">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <p className="text-2xl text-muted-foreground mb-8">Oops! Page not found</p>
          <p className="text-muted-foreground max-w-md mb-8">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          <Button size="lg" asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Return to Home
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
