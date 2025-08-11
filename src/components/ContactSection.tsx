import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MapPin, Phone } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Hide previous messages
    setMessage({ text: '', type: '' });
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const webhookUrl = 'https://services.leadconnectorhq.com/hooks/tZhtNR2ksn4OupjirHIK/webhook-trigger/228adbef-5d2b-421f-a386-40530ec80c2d';

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setMessage({
          text: 'Your message has been sent successfully!',
          type: 'success'
        });
        // Reset form
        (event.target as HTMLFormElement).reset();
      } else {
        const errorText = await response.text();
        setMessage({
          text: `Submission failed: ${response.status} ${response.statusText}. ${errorText.substring(0, 100)}...`,
          type: 'error'
        });
      }
    } catch (error) {
      setMessage({
        text: 'An error occurred. Please try again later.',
        type: 'error'
      });
      console.error('Fetch error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl w-full">
          {/* Contact Form */}
          <Card className="w-full">
            <CardHeader className="pb-6">
              <p className="text-[#169AFF] font-semibold mb-2 text-sm tracking-wide uppercase">
                GET IN TOUCH
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Drop a Message
              </h2>
            </CardHeader>
            <CardContent>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="fullName" className="text-foreground font-medium mb-2 block">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="Full Name"
                  className="w-full"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-foreground font-medium mb-2 block">
                  Phone *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  className="w-full"
                  required
                />
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox id="terms" name="terms" className="mt-1" required />
                <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed">
                  I agree to terms & conditions provided by Happy Home Roofers. By providing my phone number, I agree to receive text messages from the business.
                </Label>
              </div>

              <div>
                <Label htmlFor="notes" className="text-foreground font-medium mb-2 block">
                  Notes
                </Label>
                <Textarea
                  id="notes"
                  name="notes"
                  placeholder="Add any additional notes or details here..."
                  className="w-full min-h-[100px]"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground font-medium mb-2 block">
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  className="w-full"
                  required
                />
              </div>

              {/* Success/Error Message */}
              {message.text && (
                <div className={`p-3 rounded-md text-sm ${
                  message.type === 'success' 
                    ? 'bg-green-100 text-green-800 border border-green-200' 
                    : 'bg-red-100 text-red-800 border border-red-200'
                }`}>
                  {message.text}
                </div>
              )}

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#169AFF] hover:bg-[#0080e6] text-white font-semibold py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
            </CardContent>
          </Card>

          {/* Address Information */}
          <div className="lg:ml-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Our Address
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#169AFF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-[#169AFF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Address:</h4>
                    <p className="text-muted-foreground">214 W Texas Ave, Midland, Tx</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#169AFF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-[#169AFF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone:</h4>
                    <a href="tel:+14329994694" className="text-muted-foreground hover:text-[#169AFF] transition-colors">
                      +1 (432) 999-4694
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;