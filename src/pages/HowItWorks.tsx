
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HowItWorks as HowItWorksSection } from "@/components/HowItWorks";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">How AstroEscrow Works</h1>
            <p className="text-lg text-muted-foreground">
              Our escrow process is designed to be simple, secure, and transparent,
              giving all parties peace of mind throughout the transaction.
            </p>
          </div>
        </div>
        
        <HowItWorksSection />
        
        <div className="container mt-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Detailed Process Flow</h2>
            
            <div className="space-y-12">
              <ProcessStep 
                number={1}
                title="Agreement Creation"
                description="Both buyer and seller define the terms of the transaction, including description of goods or services, timeline, price, and any specific conditions."
                details={[
                  "Create a secure account on our platform",
                  "Initiate a new escrow transaction",
                  "Invite other party via email",
                  "Define detailed terms and conditions",
                  "Both parties review and accept terms"
                ]}
              />
              
              <ProcessStep 
                number={2}
                title="Secure Fund Deposit"
                description="The buyer deposits the agreed amount into our secure escrow vault, where it remains protected until all conditions are met."
                details={[
                  "Buyer receives secure payment instructions",
                  "Funds are transferred to the escrow account",
                  "Both parties receive confirmation of deposit",
                  "Seller begins work or prepares goods for delivery",
                  "Real-time tracking of deposit status"
                ]}
              />
              
              <ProcessStep 
                number={3}
                title="Delivery & Verification"
                description="The seller delivers the goods or services as specified in the agreement, and the buyer verifies that everything meets the agreed standards."
                details={[
                  "Seller delivers goods or completes service",
                  "Delivery confirmation is recorded in the system",
                  "Buyer inspects the delivered items or work",
                  "Inspection period begins (typically 1-3 days)",
                  "Buyer approves or raises concerns"
                ]}
              />
              
              <ProcessStep 
                number={4}
                title="Payment Release"
                description="Once verification is complete, the funds are released from escrow to the seller, completing the transaction securely."
                details={[
                  "System notifies parties of approval",
                  "Funds are released from escrow",
                  "Seller receives payment in preferred method",
                  "Transaction receipt and documentation provided",
                  "Option to leave feedback and ratings"
                ]}
              />
            </div>
            
            <div className="mt-16 p-8 rounded-xl border border-border bg-card">
              <h3 className="text-xl font-semibold mb-4">Dispute Resolution (If Needed)</h3>
              <p className="mb-4">
                In the rare case that a dispute arises, our platform provides a structured resolution process:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-6">
                <li>Party raises a formal dispute with supporting evidence</li>
                <li>Both parties can submit their perspective and documentation</li>
                <li>Our expert mediators review all materials</li>
                <li>If needed, additional information may be requested</li>
                <li>A fair resolution is determined based on evidence and terms</li>
                <li>Funds are released according to the resolution decision</li>
              </ol>
              <p>
                Our dispute resolution team includes experts in various fields to ensure fair and 
                knowledgeable handling of all issues.
              </p>
            </div>
            
            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-6">Ready to Experience Secure Transactions?</h2>
              <Button size="lg" asChild>
                <Link to="/signup">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  details: string[];
}

function ProcessStep({ number, title, description, details }: ProcessStepProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      <div className="lg:col-span-2">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="font-bold text-primary">{number}</span>
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
      
      <div className="lg:col-span-3 bg-secondary/30 rounded-xl p-6">
        <h4 className="font-medium mb-4">What happens in this step:</h4>
        <ul className="space-y-2">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HowItWorksPage;
