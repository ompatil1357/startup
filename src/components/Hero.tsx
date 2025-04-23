
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, Shield, DollarSign } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { useState, useEffect } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export function Hero() {
  const [priceRange, setPriceRange] = useState([500]);
  const [priceInput, setPriceInput] = useState("500");
  const [experienceLevel, setExperienceLevel] = useState("beginner");

  // Sync the input with the slider
  useEffect(() => {
    setPriceInput(priceRange[0].toString());
  }, [priceRange]);

  // Handle direct price input
  const handlePriceInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPriceInput(value);
    
    const numValue = parseInt(value);
    if (!isNaN(numValue) && numValue >= 100 && numValue <= 10000) {
      setPriceRange([numValue]);
    }
  };

  // Handle price input blur to ensure valid range
  const handlePriceInputBlur = () => {
    const numValue = parseInt(priceInput);
    if (isNaN(numValue) || numValue < 100) {
      setPriceRange([100]);
      setPriceInput("100");
    } else if (numValue > 10000) {
      setPriceRange([10000]);
      setPriceInput("10000");
    }
  };

  return (
    <section className="relative overflow-hidden py-32 min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background z-0"></div>
      
      <div className="container relative z-10 text-center">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-sm text-primary mb-4 animate-fade-in hover-lift">
            <Shield className="h-3.5 w-3.5 mr-2" />
            <span>Secure Escrow Services for Digital Assets</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-slide-up text-center">
            <span className="block glow-text">Secure Transactions</span>
            <span className="block mt-2 text-white liquid-text">Beyond Boundaries</span>
          </h1>
          
          <p className="text-muted-foreground max-w-3xl text-lg md:text-xl animate-slide-up mx-auto mt-4" style={{ animationDelay: '200ms' }}>
            AstroEscrow provides a safe, transparent platform for conducting digital transactions. 
            Our state-of-the-art escrow service ensures your assets remain protected until all 
            conditions are met.
          </p>
          
          {/* Budget and Experience Selection Box - Smaller and moved up */}
          <div className="w-full max-w-xs mx-auto mt-4 p-2 bg-card/80 backdrop-blur-sm rounded-lg border border-border animate-fade-in hover-lift" style={{ animationDelay: '300ms' }}>
            <div className="space-y-2">
              <div className="space-y-1">
                <div className="flex items-center justify-between mb-1">
                  <Label htmlFor="price-range" className="text-xs font-medium">Budget Range</Label>
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-3 w-3" />
                    <Input
                      type="number"
                      value={priceInput}
                      onChange={handlePriceInputChange}
                      onBlur={handlePriceInputBlur}
                      className="w-16 h-6 p-1 text-right text-xs focus:ring-primary/50 focus:border-primary/50"
                      min="100"
                      max="10000"
                    />
                  </div>
                </div>
                <Slider
                  id="price-range"
                  value={priceRange}
                  min={100}
                  max={10000}
                  step={100}
                  onValueChange={setPriceRange}
                  className="py-0.5"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>$100</span>
                  <span>$10,000</span>
                </div>
              </div>
              
              <div className="space-y-1">
                <Label htmlFor="experience-level" className="text-xs font-medium">Experience Level</Label>
                <ToggleGroup 
                  id="experience-level"
                  type="single" 
                  value={experienceLevel} 
                  onValueChange={(value) => {
                    if (value) setExperienceLevel(value);
                  }}
                  className="justify-between w-full hover-lift"
                >
                  <ToggleGroupItem 
                    value="beginner" 
                    className="w-full text-xs data-[state=on]:bg-primary/20 transition-all duration-300 hover:bg-primary/10"
                  >
                    Beginner
                  </ToggleGroupItem>
                  <ToggleGroupItem 
                    value="intermediate" 
                    className="w-full text-xs data-[state=on]:bg-primary/20 transition-all duration-300 hover:bg-primary/10"
                  >
                    Intermediate
                  </ToggleGroupItem>
                  <ToggleGroupItem 
                    value="advanced" 
                    className="w-full text-xs data-[state=on]:bg-primary/20 transition-all duration-300 hover:bg-primary/10"
                  >
                    Advanced
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 mt-6 animate-slide-up" style={{ animationDelay: '400ms' }}>
            <Button size="sm" className="hover-slide-right px-6 py-5 text-sm" asChild>
              <Link to="/signup">Get Started <ChevronRight className="ml-1 h-4 w-4" /></Link>
            </Button>
            <Button size="sm" variant="outline" className="hover-slide-right px-6 py-5 text-sm" asChild>
              <Link to="/find-editors">Find Editors</Link>
            </Button>
          </div>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '500ms' }}>
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
