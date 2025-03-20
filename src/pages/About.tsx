
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">About AstroEscrow</h1>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground mb-8">
                AstroEscrow was founded with a simple mission: to create a secure, transparent platform 
                for digital transactions in an increasingly connected world.
              </p>
              
              <h2 className="text-2xl font-semibold mt-12 mb-4">Our Story</h2>
              <p>
                Established in 2023, AstroEscrow emerged as a response to the growing need for secure 
                transaction methods in the digital marketplace. Our founders, seasoned professionals 
                from the fintech and cybersecurity industries, recognized the challenges faced by 
                individuals and businesses conducting online transactions: lack of trust, security 
                concerns, and payment disputes.
              </p>
              
              <h2 className="text-2xl font-semibold mt-12 mb-4">Our Mission</h2>
              <p>
                We are dedicated to providing a seamless, secure escrow service that protects all parties 
                in a transaction. By combining advanced technology with user-friendly design, we aim to 
                make escrow services accessible to everyone, from individual freelancers to global enterprises.
              </p>
              
              <h2 className="text-2xl font-semibold mt-12 mb-4">Our Values</h2>
              <ul>
                <li>
                  <strong>Security:</strong> We implement the highest standards of data protection and 
                  financial security to safeguard our users' assets and information.
                </li>
                <li>
                  <strong>Transparency:</strong> We believe in clear communication and complete visibility 
                  throughout the transaction process.
                </li>
                <li>
                  <strong>Integrity:</strong> We operate with honesty and fairness, ensuring impartial 
                  handling of all transactions and disputes.
                </li>
                <li>
                  <strong>Innovation:</strong> We continuously evolve our platform to incorporate the latest 
                  technologies and respond to the changing needs of our users.
                </li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-12 mb-4">Our Team</h2>
              <p>
                The AstroEscrow team brings together expertise from diverse fields including fintech, 
                cybersecurity, law, and customer service. This cross-disciplinary approach allows us to 
                address the complex challenges of secure digital transactions from multiple perspectives.
              </p>
              
              <h2 className="text-2xl font-semibold mt-12 mb-4">Global Reach</h2>
              <p>
                Based in San Francisco with team members across North America, Europe, and Asia, AstroEscrow 
                serves clients worldwide. Our platform supports multiple currencies and complies with relevant 
                regulations in the jurisdictions we operate in.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
