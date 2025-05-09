
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Menu, X } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav
        className={cn(
          // Remove border and background from navbar; add a more compact style for logo/toggle area
          "floating-navbar w-full max-w-full px-4 py-2 transition-all duration-300 mx-auto bg-transparent border-none shadow-none",
          scrolled && "scrolled"
        )}
        style={{ boxShadow: "none", border: "none" }}
      >
        <div className="flex items-center justify-between w-full">
          <Link 
            to="/" 
            className="flex items-center gap-1 text-xl font-semibold tracking-tight transition-colors"
          >
            <ShieldCheck className="h-6 w-6 md:h-7 md:w-7 text-white" />
            <span className="ml-1 text-base font-heming font-bold tracking-tight hidden sm:inline">AstroEscrow</span>
          </Link>
          
          <div className="hidden md:flex items-center justify-center flex-1 mx-6">
            <NavLinks />
          </div>
          
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <Button 
              size="sm" 
              variant="outline" 
              asChild 
              className="hidden sm:inline-flex hover:bg-white hover:text-primary hover-slide-right font-heming font-medium"
            >
              <Link to="/login">Login</Link>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden" 
              onClick={toggleMobileMenu}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open mobile menu</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm md:hidden">
          <div className="fixed top-0 right-0 w-full p-6">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-1 text-xl font-semibold font-heming" onClick={() => setMobileMenuOpen(false)}>
                <ShieldCheck className="h-6 w-6 text-white" />
                <span className="ml-1 text-base font-bold tracking-tight">AstroEscrow</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close mobile menu</span>
              </Button>
            </div>
          </div>
          <nav className="mt-20 p-6">
            <ul className="space-y-6 text-center text-lg">
              <li>
                <Link to="/how-it-works" className="block py-2 font-heming font-medium" onClick={() => setMobileMenuOpen(false)}>
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="block py-2 font-heming font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/about" className="block py-2 font-heming font-medium" onClick={() => setMobileMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="block py-2 font-heming font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </Link>
              </li>
              <li className="pt-4">
                <Button variant="outline" className="w-full font-heming font-medium hover-slide-right" asChild>
                  <Link to="/login" onClick={() => setMobileMenuOpen(false)}>Login</Link>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

function NavLinks() {
  const links = [
    { href: "/how-it-works", label: "How It Works" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="flex space-x-12">
      {links.map((link) => (
        <Link 
          key={link.href} 
          to={link.href}
          className="text-slide-hover text-muted-foreground hover:text-foreground transition-colors text-base font-heming font-medium tracking-wide"
        >
          <span data-text={link.label}>{link.label}</span>
        </Link>
      ))}
    </div>
  );
}
