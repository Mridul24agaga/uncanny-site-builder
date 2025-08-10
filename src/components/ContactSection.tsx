import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl w-full">
          {/* Contact Form */}
          <Card className="w-full">
            <CardHeader className="pb-6">
              <p className="text-primary font-semibold mb-2 text-sm tracking-wide uppercase">
                GET IN TOUCH
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Drop a Message
              </h2>
            </CardHeader>
            <CardContent>

            <form className="space-y-4">
              <div>
                <Label htmlFor="fullName" className="text-foreground font-medium mb-2 block">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  placeholder="Full Name"
                  className="w-full"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-foreground font-medium mb-2 block">
                  Phone *
                </Label>
                <Input
                  id="phone"
                  placeholder="Phone"
                  className="w-full"
                />
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox id="terms" className="mt-1" />
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
                  placeholder="Email"
                  type="email"
                  className="w-full"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-roofing-blue-dark text-primary-foreground font-semibold py-3 text-lg"
              >
                Send Message
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
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Address:</h4>
                    <p className="text-muted-foreground">214 W Texas Ave, Midland, Tx</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone:</h4>
                    <p className="text-muted-foreground">+1 (432) 999 4694</p>
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