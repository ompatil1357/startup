
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { ShieldCheck, Twitter, Linkedin, Github, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-xl font-semibold tracking-tight">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <span>AstroEscrow</span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Secure, transparent escrow services for digital transactions across the globe.
            </p>
            <div className="flex items-center gap-4">
              <SocialLink icon={<Twitter className="h-5 w-5" />} href="#" label="Twitter" />
              <SocialLink icon={<Linkedin className="h-5 w-5" />} href="#" label="LinkedIn" />
              <SocialLink icon={<Github className="h-5 w-5" />} href="#" label="GitHub" />
              <SocialLink icon={<Facebook className="h-5 w-5" />} href="#" label="Facebook" />
              <ThemeToggle />
            </div>
          </div>
          
          <FooterLinks 
            title="Product" 
            links={[
              { label: "Features", href: "/features" },
              { label: "How It Works", href: "/how-it-works" },
              { label: "Pricing", href: "/pricing" },
              { label: "Case Studies", href: "/case-studies" },
              { label: "Documentation", href: "/docs" },
            ]} 
          />
          
          <FooterLinks 
            title="Company" 
            links={[
              { label: "About", href: "/about" },
              { label: "Careers", href: "/careers" },
              { label: "Blog", href: "/blog" },
              { label: "Press", href: "/press" },
              { label: "Contact", href: "/contact" },
            ]} 
          />
          
          <FooterLinks 
            title="Legal" 
            links={[
              { label: "Terms of Service", href: "/terms" },
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Security", href: "/security" },
              { label: "Compliance", href: "/compliance" },
              { label: "Cookies Policy", href: "/cookies" },
            ]} 
          />
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} AstroEscrow Inc. All rights reserved.</p>
          <p className="mt-4 sm:mt-0">Secure by design. Built for trust.</p>
        </div>
      </div>
    </footer>
  );
}

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

function SocialLink({ icon, href, label }: SocialLinkProps) {
  return (
    <a 
      href={href} 
      aria-label={label}
      className="p-2 rounded-full hover:bg-primary/10 transition-colors"
    >
      {icon}
    </a>
  );
}

interface FooterLinksProps {
  title: string;
  links: Array<{ label: string; href: string }>;
}

function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link 
              to={link.href} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
