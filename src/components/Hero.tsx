
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, Shield, Star } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden py-32 min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background z-0"></div>
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex flex-col items-center space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-sm text-primary mb-4 animate-fade-in hover-lift">
              <Shield className="h-3.5 w-3.5 mr-2" />
              <span>Secure Escrow Services for Digital Assets</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-slide-up">
              <span className="block">Secure Transactions</span>
              <span className="block mt-2 text-primary">Beyond Boundaries</span>
            </h1>
            
            <p className="text-muted-foreground max-w-3xl text-lg md:text-xl animate-slide-up mx-auto" style={{ animationDelay: '200ms' }}>
              AstroEscrow provides a safe, transparent platform for conducting digital transactions. 
              Our state-of-the-art escrow service ensures your assets remain protected until all 
              conditions are met.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-slide-up" style={{ animationDelay: '300ms' }}>
              <Button size="lg" className="hover-lift" asChild>
                <Link to="/signup">Get Started <ChevronRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="hover-lift" asChild>
                <Link to="/how-it-works">How It Works</Link>
              </Button>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground pt-8 animate-slide-up" style={{ animationDelay: '400ms' }}>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted/80"></div>
                ))}
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                <span className="font-medium">4.9/5</span>
                <span className="ml-2">from over 3,000 reviews</span>
              </div>
            </div>
          </div>
          
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '500ms' }}>
            <FeatureCard 
              title="Secure Transactions" 
              description="Military-grade encryption protects your data and assets at every step."
              delay={100}
            />
            <FeatureCard 
              title="Transparent Process" 
              description="Clear milestones and real-time updates keep all parties informed."
              delay={200}
            />
            <FeatureCard 
              title="Global Reach" 
              description="Conduct transactions with partners anywhere in the world securely."
              delay={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  delay: number;
}

function FeatureCard({ title, description, delay }: FeatureCardProps) {
  return (
    <div 
      className="group relative p-6 rounded-xl border border-border bg-card backdrop-blur-sm hover:shadow-md transition-all animate-scale-in hover-lift"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      
      <div className="mt-4 h-1.5 w-12 rounded-full bg-primary/20 group-hover:w-16 transition-all duration-300"></div>
    </div>
  );
}
