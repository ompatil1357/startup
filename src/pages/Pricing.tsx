
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Transparent Pricing</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that suits your transaction needs. All plans include our core security features and support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard 
              title="Basic"
              price="1.5%"
              description="For individuals and small transactions"
              features={[
                "Transaction limit: $10,000",
                "Standard security features",
                "Email support",
                "3-day release period",
                "Basic dispute resolution"
              ]}
              buttonText="Get Started"
              buttonVariant="outline"
            />
            
            <PricingCard 
              title="Professional"
              price="1.2%"
              description="For businesses and larger transactions"
              features={[
                "Transaction limit: $50,000",
                "Advanced security features",
                "Priority email & chat support",
                "Custom release schedules",
                "Priority dispute resolution",
                "Transaction milestone tracking"
              ]}
              buttonText="Get Started"
              buttonVariant="default"
              highlighted={true}
            />
            
            <PricingCard 
              title="Enterprise"
              price="Custom"
              description="For high-volume or complex needs"
              features={[
                "Unlimited transaction value",
                "Highest security tier",
                "Dedicated account manager",
                "Custom contract terms",
                "24/7 phone support",
                "Advanced API integration",
                "Custom reporting"
              ]}
              buttonText="Contact Sales"
              buttonVariant="outline"
            />
          </div>
          
          <div className="mt-16 pt-8 border-t border-border">
            <h2 className="text-2xl font-semibold text-center mb-8">Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <FAQItem 
                question="How are fees calculated?" 
                answer="Fees are calculated as a percentage of the total transaction value. For example, a $1,000 transaction on the Basic plan would incur a $15 fee." 
              />
              <FAQItem 
                question="Are there any hidden fees?" 
                answer="No. The percentage fee you see is the total you'll pay. There are no setup fees, monthly fees, or hidden charges." 
              />
              <FAQItem 
                question="What payment methods are accepted?" 
                answer="We accept major credit cards, bank transfers, and several cryptocurrencies including Bitcoin and Ethereum." 
              />
              <FAQItem 
                question="How long does the escrow process take?" 
                answer="The standard release period is 3 days after delivery verification, but this can be customized based on your plan and specific needs." 
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonVariant: "default" | "outline";
  highlighted?: boolean;
}

function PricingCard({ 
  title, 
  price, 
  description, 
  features, 
  buttonText, 
  buttonVariant,
  highlighted = false 
}: PricingCardProps) {
  return (
    <div className={`
      rounded-xl border ${highlighted ? 'border-primary' : 'border-border'} 
      bg-card p-8 
      ${highlighted ? 'shadow-lg ring-1 ring-primary/20' : ''}
      flex flex-col
    `}>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold">{price}</span>
          {price !== "Custom" && <span className="text-muted-foreground">per transaction</span>}
        </div>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </div>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button variant={buttonVariant} size="lg" asChild className="mt-auto">
        <Link to={buttonText === "Contact Sales" ? "/contact" : "/signup"}>
          {buttonText}
        </Link>
      </Button>
    </div>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div>
      <h3 className="text-lg font-medium mb-2">{question}</h3>
      <p className="text-muted-foreground">{answer}</p>
    </div>
  );
}

export default Pricing;
