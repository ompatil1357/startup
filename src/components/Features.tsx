
import { ShieldCheck, Eye, Globe, Clock, Lock, Zap } from 'lucide-react';

export function Features() {
  return (
    <section className="py-24 bg-secondary/50 dark:bg-secondary/10">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Advanced Features for Modern Transactions
          </h2>
          <p className="text-muted-foreground text-lg">
            Our platform combines cutting-edge technology with user-friendly design to provide 
            the most secure and efficient escrow experience available.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureItem 
            icon={<ShieldCheck className="h-8 w-8 text-primary" />}
            title="Secure Vault"
            description="Your digital assets are stored in our secure vault, protected by military-grade encryption and multi-factor authentication."
          />
          <FeatureItem 
            icon={<Eye className="h-8 w-8 text-primary" />}
            title="Complete Transparency"
            description="Track every step of your transaction with real-time updates and comprehensive audit trails."
          />
          <FeatureItem 
            icon={<Globe className="h-8 w-8 text-primary" />}
            title="Global Accessibility"
            description="Our platform supports transactions across borders and time zones, with multiple currency options."
          />
          <FeatureItem 
            icon={<Clock className="h-8 w-8 text-primary" />}
            title="Time-Locked Contracts"
            description="Set precise timeframes for contract fulfillment with automatic execution or refund options."
          />
          <FeatureItem 
            icon={<Lock className="h-8 w-8 text-primary" />}
            title="Smart Contract Integration"
            description="Leverage blockchain technology for certain transaction types with programmable contract terms."
          />
          <FeatureItem 
            icon={<Zap className="h-8 w-8 text-primary" />}
            title="Rapid Resolution"
            description="Our dispute resolution system ensures quick and fair settlements for all parties involved."
          />
        </div>
      </div>
    </section>
  );
}

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className="group p-6 rounded-xl border border-border bg-card hover:shadow-md transition-all">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
