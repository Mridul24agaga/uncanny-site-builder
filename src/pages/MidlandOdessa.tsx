import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Check } from "lucide-react";

const MidlandOdessa = () => {
  const roofingServices = [
    "Free Roof Inspection",
    "Roof Installation", 
    "Roof Damage Repair",
    "Storm Restoration",
    "Gutter Installation",
    "Gutter Repair",
    "Shingle Replacement",
    "Metal Roofing",
    "Tile Roofing",
    "Flat Roof Repair",
    "Roof Maintenance",
    "Emergency Repairs",
    "Commercial Roofing",
    "Residential Roofing"
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <section className="bg-white py-12 text-center">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/b808aa46-b91e-4f5b-8573-6e27bb488e2e.png" 
              alt="Happy Home Roofing" 
              className="h-24 w-auto mx-auto mb-6"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">
            ROOFING IS COMPLEX,<br />
            YOUR EXPERIENCE WON'T BE
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-6">
            ALL SERVICES COME WITH A 10 YEAR WARRANTY
          </p>
          
          <div className="text-3xl md:text-4xl font-bold text-primary">
            (432) 999-4694
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-slate-800 rounded-3xl overflow-hidden shadow-2xl max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - Services */}
              <div className="bg-slate-800 p-8 lg:p-12 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  READY TO START<br />
                  YOUR PROJECT?
                </h2>
                <p className="text-lg mb-8 text-gray-300">
                  Let's make your roofing vision a reality.
                </p>
                
                <div className="space-y-4">
                  {roofingServices.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                      <span className="text-white">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="bg-white p-8 lg:p-12">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                    ESTIMATES IN 24 HOURS<br />
                    OR LESS
                  </h3>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-slate-600 text-sm mb-2 block">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        placeholder=""
                        className="border-b-2 border-t-0 border-x-0 border-gray-300 rounded-none bg-transparent px-0 focus:border-primary"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-slate-600 text-sm mb-2 block">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        placeholder=""
                        className="border-b-2 border-t-0 border-x-0 border-gray-300 rounded-none bg-transparent px-0 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-slate-600 text-sm mb-2 block">
                        Phone *
                      </Label>
                      <Input
                        id="phone"
                        placeholder=""
                        className="border-b-2 border-t-0 border-x-0 border-gray-300 rounded-none bg-transparent px-0 focus:border-primary"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-slate-600 text-sm mb-2 block">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder=""
                        className="border-b-2 border-t-0 border-x-0 border-gray-300 rounded-none bg-transparent px-0 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="location" className="text-slate-600 text-sm mb-2 block">
                      Enter a location
                    </Label>
                    <Input
                      id="location"
                      placeholder="Address Line 1"
                      className="border-b-2 border-t-0 border-x-0 border-gray-300 rounded-none bg-transparent px-0 focus:border-primary"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city" className="text-slate-600 text-sm mb-2 block">
                        City
                      </Label>
                      <Input
                        id="city"
                        placeholder=""
                        className="border-b-2 border-t-0 border-x-0 border-gray-300 rounded-none bg-transparent px-0 focus:border-primary"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state" className="text-slate-600 text-sm mb-2 block">
                        State
                      </Label>
                      <Select>
                        <SelectTrigger className="border-b-2 border-t-0 border-x-0 border-gray-300 rounded-none bg-transparent px-0 focus:border-primary">
                          <SelectValue placeholder="— Select state —" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="TX">Texas</SelectItem>
                          <SelectItem value="OK">Oklahoma</SelectItem>
                          <SelectItem value="NM">New Mexico</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="zipCode" className="text-slate-600 text-sm mb-2 block">
                      Zip Code
                    </Label>
                    <Input
                      id="zipCode"
                      placeholder=""
                      className="border-b-2 border-t-0 border-x-0 border-gray-300 rounded-none bg-transparent px-0 focus:border-primary w-1/2"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="bestDay" className="text-slate-600 text-sm mb-2 block">
                        Best day for an Estimate *
                      </Label>
                      <Input
                        id="bestDay"
                        placeholder=""
                        className="border-b-2 border-t-0 border-x-0 border-gray-300 rounded-none bg-transparent px-0 focus:border-primary"
                      />
                    </div>
                    <div>
                      <Label htmlFor="bestTime" className="text-slate-600 text-sm mb-2 block">
                        Best time of day *
                      </Label>
                      <Select>
                        <SelectTrigger className="border-b-2 border-t-0 border-x-0 border-gray-300 rounded-none bg-transparent px-0 focus:border-primary">
                          <SelectValue placeholder="— select best time of day —" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                          <SelectItem value="evening">Evening (5PM - 8PM)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="services" className="text-slate-600 text-sm mb-2 block">
                      What roofing services are you interested in? *
                    </Label>
                    <Textarea
                      id="services"
                      placeholder=""
                      className="border-b-2 border-t-0 border-x-0 border-gray-300 rounded-none bg-transparent px-0 focus:border-primary min-h-[80px] resize-none"
                    />
                  </div>

                  <div>
                    <Label htmlFor="hearAbout" className="text-slate-600 text-sm mb-2 block">
                      How did you hear about us?
                    </Label>
                    <Select>
                      <SelectTrigger className="border-b-2 border-t-0 border-x-0 border-gray-300 rounded-none bg-transparent px-0 focus:border-primary">
                        <SelectValue placeholder="— Select —" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="google">Google Search</SelectItem>
                        <SelectItem value="referral">Referral</SelectItem>
                        <SelectItem value="social">Social Media</SelectItem>
                        <SelectItem value="advertisement">Advertisement</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 text-lg rounded-full mt-8"
                  >
                    Submit
                  </Button>

                  <p className="text-xs text-slate-500 mt-4 leading-relaxed">
                    By submitting, you authorize Happy Home Roofing to reach out via phone, email, or text for explicit information about roofing needs. We will never share your personal information with 3rd parties for marketing purposes or spam you. You can opt-out at any time. Message/data rates apply. Consent is not a condition of purchase.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MidlandOdessa;