
import { Check, ArrowRight } from 'lucide-react';

export function HowItWorks() {
  return (
    <section className="py-24">
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            How AstroEscrow Works
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Our transparent, step-by-step process ensures a secure transaction experience for all parties involved.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StepCard 
              step={1}
              title="Create Agreement"
              description="Establish the terms and conditions of your transaction with detailed milestones."
            />
            <StepCard 
              step={2}
              title="Secure Deposit"
              description="The buyer securely deposits funds into the AstroEscrow vault."
            />
            <StepCard 
              step={3}
              title="Delivery & Verification"
              description="The seller delivers the goods or services for buyer verification."
            />
            <StepCard 
              step={4}
              title="Release Payment"
              description="Upon verification, the payment is released to the seller automatically."
            />
          </div>
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
            <h3 className="text-xl font-semibold mb-4">Why Choose Our Process:</h3>
            <ul className="space-y-3">
              <BenefitItem text="Protection for both buyers and sellers throughout the transaction" />
              <BenefitItem text="Dispute resolution by impartial mediators if needed" />
              <BenefitItem text="Customizable contract terms and milestones" />
              <BenefitItem text="Full tracking and transparency of the transaction status" />
              <BenefitItem text="Secure handling of digital assets and sensitive information" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

interface StepCardProps {
  step: number;
  title: string;
  description: string;
}

function StepCard({ step, title, description }: StepCardProps) {
  return (
    <div className="group relative flex flex-col items-center text-center">
      <div className="relative mb-4">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border-4 border-background z-10 relative">
          <span className="text-xl font-bold text-primary">{step}</span>
        </div>
        {step < 4 && <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-muted-foreground" />}
      </div>
      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm sm:text-base">{description}</p>
    </div>
  );
}

function BenefitItem({ text }: { text: string }) {
  return (
    <li className="flex items-start">
      <div className="mr-3 mt-1 flex-shrink-0">
        <Check className="h-5 w-5 text-primary" />
      </div>
      <span className="text-sm sm:text-base">{text}</span>
    </li>
  );
}
