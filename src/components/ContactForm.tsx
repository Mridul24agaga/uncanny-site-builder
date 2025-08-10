import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const ContactForm = () => {
  return (
    <div className="bg-background p-6 md:p-8 rounded-lg shadow-lg max-w-md w-full mx-4 lg:mx-0">
      <form className="space-y-4 md:space-y-6">
        <div>
          <Label htmlFor="fullName" className="text-muted-foreground text-sm">
            Full Name
          </Label>
          <Input
            id="fullName"
            placeholder="Full Name"
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-muted-foreground text-sm">
            Phone *
          </Label>
          <Input
            id="phone"
            placeholder="Phone"
            className="mt-2"
          />
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox id="terms" className="mt-1 flex-shrink-0" />
          <Label htmlFor="terms" className="text-xs md:text-sm text-muted-foreground leading-relaxed">
            I agree to terms & conditions provided by Happy Home Roofers. By providing my phone number, I agree to receive text messages from the business.
          </Label>
        </div>

        <div>
          <Label htmlFor="address" className="text-muted-foreground text-sm">
            Address For Scheduling
          </Label>
          <Textarea
            id="address"
            placeholder=""
            className="mt-2 min-h-[60px] md:min-h-[80px]"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-muted-foreground text-sm">
            Email *
          </Label>
          <Input
            id="email"
            placeholder="Email"
            type="email"
            className="mt-2"
          />
        </div>

        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-roofing-blue-dark text-primary-foreground font-semibold py-3 text-sm md:text-base"
        >
          Schedule Free Inspection
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;