import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const ContactForm = () => {
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
          text: 'Your inspection request has been sent successfully!',
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
    <div className="bg-background p-6 md:p-8 rounded-lg max-w-md w-full mx-4 lg:mx-0">
      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        <div>
          <Label htmlFor="fullName" className="text-muted-foreground text-sm">
            Name *
          </Label>
          <Input
            id="fullName"
            name="fullName"
            placeholder="Full Name"
            className="mt-2"
            required
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-muted-foreground text-sm">
            Phone *
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(555) 123-4567"
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit US phone number"
            className="mt-2"
            required
          />
        </div>

        <div>
          <Label htmlFor="address" className="text-muted-foreground text-sm">
            Address *
          </Label>
          <Input
            id="address"
            name="address"
            placeholder="Property Address"
            className="mt-2"
            required
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-muted-foreground text-sm">
            Email (Optional)
          </Label>
          <Input
            id="email"
            name="email"
            placeholder="Email"
            type="email"
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="notes" className="text-muted-foreground text-sm">
            Additional Notes
          </Label>
          <Textarea
            id="notes"
            name="notes"
            placeholder="Add any additional notes or details here..."
            className="mt-2 min-h-[60px] md:min-h-[80px]"
          />
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox id="terms" name="terms" className="mt-1 flex-shrink-0" required />
          <Label htmlFor="terms" className="text-xs md:text-sm text-muted-foreground leading-relaxed">
            I agree to terms & conditions provided by Happy Home Roofers. By providing my phone number, I agree to receive text messages from the business.
          </Label>
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
          className="w-full bg-[#169AFF] hover:bg-[#0080e6] text-white font-semibold py-3 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Schedule Free Inspection'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;