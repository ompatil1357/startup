
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ShieldCheck } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
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

  return (
    <nav className={cn("floating-navbar", scrolled && "scrolled")}>
      <div className="flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-xl font-semibold tracking-tight transition-colors"
        >
          <ShieldCheck className="h-6 w-6 text-primary" />
          <span className="animate-slide-up" style={{ animationDelay: '100ms' }}>AstroEscrow</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <NavLinks />
        </div>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button size="sm" variant="outline" asChild className="hidden sm:inline-flex hover:bg-primary hover:text-white">
            <Link to="/login">Login</Link>
          </Button>
          <Button size="sm" className="animate-slide-up hidden sm:inline-flex" style={{ animationDelay: '300ms' }}>
            <Link to="/signup">Get Started</Link>
          </Button>
        </div>
      </div>
    </nav>
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
    <>
      {links.map((link, index) => (
        <Link 
          key={link.href} 
          to={link.href}
          className="text-slide-hover text-muted-foreground hover:text-foreground transition-colors text-sm font-medium animate-slide-up"
          style={{ animationDelay: `${(index + 1) * 100}ms` }}
        >
          <span data-text={link.label}>{link.label}</span>
        </Link>
      ))}
    </>
  );
}
