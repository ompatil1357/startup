
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Have questions about our escrow services? Our team is here to help.
                  Fill out the form and we'll get back to you shortly.
                </p>
                
                <div className="space-y-6 mt-12">
                  <ContactInfo 
                    icon={<Mail className="h-5 w-5 text-primary" />}
                    title="Email Us"
                    content="support@astroescrow.com"
                    href="mailto:support@astroescrow.com"
                  />
                  <ContactInfo 
                    icon={<Phone className="h-5 w-5 text-primary" />}
                    title="Call Us"
                    content="+1 (555) 123-4567"
                    href="tel:+15551234567"
                  />
                  <ContactInfo 
                    icon={<MapPin className="h-5 w-5 text-primary" />}
                    title="Visit Us"
                    content="123 Secure Way, San Francisco, CA 94103"
                    href="https://maps.google.com"
                  />
                  <ContactInfo 
                    icon={<MessageSquare className="h-5 w-5 text-primary" />}
                    title="Live Chat"
                    content="Available 24/7 for quick assistance"
                    href="#"
                  />
                </div>
                
                <div className="mt-12 p-6 rounded-xl border border-border bg-card">
                  <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 8:00 PM ET</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 6:00 PM ET</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" placeholder="How can we help you?" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="inquiry" className="text-sm font-medium">
                      Inquiry Type
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Information</SelectItem>
                        <SelectItem value="sales">Sales Inquiry</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="billing">Billing Question</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Please provide details about your inquiry..." 
                      rows={5}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">Send Message</Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our <a href="/privacy" className="underline">Privacy Policy</a> and 
                    consent to being contacted regarding your inquiry.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  href: string;
}

function ContactInfo({ icon, title, content, href }: ContactInfoProps) {
  return (
    <div className="flex items-start">
      <div className="p-2 rounded-full bg-primary/10 mr-4">{icon}</div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <a 
          href={href} 
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          {content}
        </a>
      </div>
    </div>
  );
}

export default Contact;
