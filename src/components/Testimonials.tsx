
import { Star } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="py-24 bg-secondary/50 dark:bg-secondary/10">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Trusted by Thousands Worldwide
          </h2>
          <p className="text-muted-foreground text-lg">
            See what our customers say about their experience with AstroEscrow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            name="Sarah Johnson"
            role="Digital Artist"
            content="AstroEscrow made selling my digital art internationally so much easier. The secure payment system gave both me and my clients peace of mind throughout the process."
            rating={5}
          />
          <TestimonialCard 
            name="James Wilson"
            role="Software Developer"
            content="As a freelancer, I've dealt with payment issues before. AstroEscrow's milestone-based system ensures I get paid for completed work while giving my clients verification options."
            rating={5}
          />
          <TestimonialCard 
            name="Elena Rodriguez"
            role="E-commerce Merchant"
            content="The transparency of AstroEscrow's platform has significantly reduced disputes with customers. The clear transaction timeline keeps everyone on the same page."
            rating={4}
          />
          <TestimonialCard 
            name="Michael Chang"
            role="Cryptocurrency Trader"
            content="I needed a secure way to handle large crypto transactions with new trading partners. AstroEscrow's vault system provides the security and verification I was looking for."
            rating={5}
          />
          <TestimonialCard 
            name="Olivia Parker"
            role="Real Estate Investor"
            content="Even for complex transactions with multiple conditions, AstroEscrow's customizable contracts made the process smooth and secure. Excellent service!"
            rating={5}
          />
          <TestimonialCard 
            name="David Mehta"
            role="Import/Export Business"
            content="International business comes with risks, but AstroEscrow's global platform has simplified our payment process and reduced our exposure significantly."
            rating={4}
          />
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
}

function TestimonialCard({ name, role, content, rating }: TestimonialCardProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all">
      <div className="flex space-x-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            className={`h-4 w-4 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-muted'}`} 
          />
        ))}
      </div>
      
      <p className="mb-6 text-muted-foreground">{content}</p>
      
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-primary/20 mr-3"></div>
        <div>
          <h4 className="font-medium">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
}
