import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

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

  const processSteps = [
    {
      number: "01",
      title: "FREE ESTIMATE",
      description: "We start with a fast, no-obligation estimate. One of our friendly experts will assess your roof, answer questions, and give you a clear, honest quote — no hidden fees, ever."
    },
    {
      number: "02",
      title: "MATERIAL CONSULTATION",
      description: "Not sure which material or style to choose? We'll help you find the perfect roofing solution that fits your home, budget, and goals. Our team can match existing materials or recommend fresh new looks to elevate your property."
    },
    {
      number: "03",
      title: "WORK BEGINS",
      description: "Once you're ready, our crew gets to work. We show up on time, treat your home like our own, and follow our proven prep and installation process to ensure beautiful, lasting results."
    },
    {
      number: "04",
      title: "FINAL WALKTHROUGH",
      description: "Before we leave, our experts conduct a final walk through with you to ensure your 100% satisfaction. We don't leave until you love the work — and we clean up like we were never there."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Header with Navigation */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/b808aa46-b91e-4f5b-8573-6e27bb488e2e.png" 
                alt="Happy Home Roofing" 
                className="h-12 md:h-16 w-auto"
              />
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center text-slate-600">
                <Phone className="h-4 w-4 mr-2" />
                <span className="font-medium">(432) 999-4694</span>
              </div>
              <Button 
                className="bg-[#169AFF] hover:bg-[#0080e6] text-white"
                onClick={() => document.getElementById('estimate-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Estimate
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 font-playfair leading-tight">
            ROOFING IS COMPLEX,<br />
            YOUR EXPERIENCE WON'T BE
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 font-medium">
            ALL SERVICES COME WITH A 10 YEAR WARRANTY
          </p>
          
          <div className="text-3xl md:text-4xl font-bold text-[#169AFF] mb-12">
            (432) 999-4694
          </div>

          <Button 
            size="lg"
            className="bg-[#169AFF] hover:bg-[#0080e6] text-white px-8 py-4 text-lg font-semibold"
            onClick={() => document.getElementById('estimate-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Schedule Free Inspection
          </Button>
        </div>
      </section>

      {/* Main Estimate Form Section */}
      <section id="estimate-form" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <Card className="max-w-6xl mx-auto shadow-2xl border-0" style={{ backgroundColor: '#169AFF' }}>
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left Side - Services */}
                <div className="p-8 lg:p-12 text-white">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">
                    READY TO START<br />
                    YOUR PROJECT?
                  </h2>
                  <p className="text-lg mb-8 text-white/90">
                    Let's make your roofing vision a reality.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {roofingServices.map((service, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                        <span className="text-white/95 text-sm">{service}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <h3 className="text-xl font-bold mb-4">Why Choose Happy Home Roofing?</h3>
                    <ul className="space-y-2 text-sm text-white/90">
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2" /> 10 Year Warranty</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2" /> Licensed & Insured</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2" /> Free Estimates</li>
                      <li className="flex items-center"><Check className="h-4 w-4 mr-2" /> Local Experts</li>
                    </ul>
                  </div>
                </div>

                {/* Right Side - Form */}
                <div className="bg-white p-8 lg:p-12">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 font-playfair">
                      ESTIMATES IN 24 HOURS<br />
                      OR LESS
                    </h3>
                  </div>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-slate-700 text-sm mb-2 block font-medium">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          placeholder="Enter your first name"
                          className="border-b-2 border-t-0 border-x-0 border-slate-300 rounded-none bg-transparent px-0 focus:border-[#169AFF] transition-colors"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-slate-700 text-sm mb-2 block font-medium">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          placeholder="Enter your last name"
                          className="border-b-2 border-t-0 border-x-0 border-slate-300 rounded-none bg-transparent px-0 focus:border-[#169AFF] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-slate-700 text-sm mb-2 block font-medium">
                          Phone *
                        </Label>
                        <Input
                          id="phone"
                          placeholder="(432) 000-0000"
                          className="border-b-2 border-t-0 border-x-0 border-slate-300 rounded-none bg-transparent px-0 focus:border-[#169AFF] transition-colors"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-slate-700 text-sm mb-2 block font-medium">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          className="border-b-2 border-t-0 border-x-0 border-slate-300 rounded-none bg-transparent px-0 focus:border-[#169AFF] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="location" className="text-slate-700 text-sm mb-2 block font-medium">
                        Property Address
                      </Label>
                      <Input
                        id="location"
                        placeholder="123 Main Street"
                        className="border-b-2 border-t-0 border-x-0 border-slate-300 rounded-none bg-transparent px-0 focus:border-[#169AFF] transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city" className="text-slate-700 text-sm mb-2 block font-medium">
                          City
                        </Label>
                        <Input
                          id="city"
                          placeholder="Midland"
                          className="border-b-2 border-t-0 border-x-0 border-slate-300 rounded-none bg-transparent px-0 focus:border-[#169AFF] transition-colors"
                        />
                      </div>
                      <div>
                        <Label htmlFor="state" className="text-slate-700 text-sm mb-2 block font-medium">
                          State
                        </Label>
                        <Select>
                          <SelectTrigger className="border-b-2 border-t-0 border-x-0 border-slate-300 rounded-none bg-transparent px-0 focus:border-[#169AFF]">
                            <SelectValue placeholder="Texas" />
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
                      <Label htmlFor="services" className="text-slate-700 text-sm mb-2 block font-medium">
                        What roofing services are you interested in? *
                      </Label>
                      <Textarea
                        id="services"
                        placeholder="Describe your roofing needs..."
                        className="border-b-2 border-t-0 border-x-0 border-slate-300 rounded-none bg-transparent px-0 focus:border-[#169AFF] min-h-[80px] resize-none transition-colors"
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-[#169AFF] hover:bg-[#0080e6] text-white font-semibold py-4 text-lg rounded-xl mt-8 transition-colors"
                    >
                      Get My Free Estimate
                    </Button>

                    <p className="text-xs text-slate-500 mt-4 leading-relaxed text-center">
                      By submitting, you authorize Happy Home Roofing to reach out via phone, email, or text for information about roofing services. We respect your privacy and will never share your information.
                    </p>
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Proudly Serving Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 font-playfair animate-fade-in">
            PROUDLY SERVING MIDLAND-ODESSA, TX
          </h2>
          
          <Card className="max-w-5xl mx-auto bg-gradient-to-br from-white/10 to-white/5 border-white/20 backdrop-blur-md shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] animate-scale-in">
            <CardContent className="p-8 md:p-16 lg:p-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative group">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                    <img 
                      src="/src/assets/roofing-background.jpg" 
                      alt="Beautiful home interior" 
                      className="w-full h-72 md:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    
                    {/* Animated Logo overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/95 rounded-full p-8 shadow-2xl transform transition-all duration-500 hover:scale-110 hover:rotate-6 hover:shadow-3xl">
                        <img 
                          src="/lovable-uploads/b808aa46-b91e-4f5b-8573-6e27bb488e2e.png" 
                          alt="Happy Home Roofing" 
                          className="h-20 w-auto"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating decoration elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#169AFF]/20 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
                
                <div className="text-white space-y-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <h3 className="text-3xl md:text-4xl font-bold font-playfair leading-tight">
                    Your Trusted Local 
                    <span className="text-[#169AFF] relative">
                      Roofing Partner
                      <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#169AFF] to-transparent rounded-full"></div>
                    </span>
                  </h3>
                  
                  <p className="text-xl leading-relaxed text-white/90">
                    For over <span className="font-bold text-[#169AFF]">15 years</span>, Happy Home Roofing has been the go-to choice for homeowners and businesses in Midland, Odessa, and throughout the Permian Basin. We combine expertise with exceptional service to deliver roofing solutions that protect and enhance your property.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                    <div className="flex items-center p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                      <div className="w-12 h-12 bg-[#169AFF]/20 rounded-full flex items-center justify-center mr-4">
                        <MapPin className="h-6 w-6 text-[#169AFF]" />
                      </div>
                      <div>
                        <p className="text-sm text-white/60 font-medium">Coverage Area</p>
                        <p className="font-bold text-lg">50+ Mile Radius</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                      <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                        <Check className="h-6 w-6 text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm text-white/60 font-medium">Satisfied Clients</p>
                        <p className="font-bold text-lg">1000+ Customers</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    className="bg-[#169AFF] hover:bg-[#0080e6] text-white px-8 py-4 text-lg font-semibold rounded-full mt-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    onClick={() => document.getElementById('estimate-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Your Free Estimate
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Enhanced background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 bg-[#169AFF]/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-white/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-[#169AFF]/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        
        {/* Geometric patterns */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-32 right-32 w-2 h-2 bg-[#169AFF] rounded-full animate-ping"></div>
          <div className="absolute bottom-40 left-40 w-3 h-3 bg-white rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-[#169AFF] rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-playfair">
              OUR PROCESS
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From initial consultation to final walkthrough, we make roofing simple and stress-free
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {processSteps.map((step, index) => (
              <Card key={index} className="bg-white border-2 hover:border-[#169AFF]/30 transition-colors duration-300 shadow-lg hover:shadow-xl">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="text-5xl font-bold text-[#169AFF] mb-4 font-playfair">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed flex-grow">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-playfair">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Contact us today for your free roofing consultation
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <div className="flex items-center">
              <Phone className="h-6 w-6 mr-3 text-[#169AFF]" />
              <div>
                <p className="text-sm text-white/60">Call us at</p>
                <p className="text-2xl font-bold">(432) 999-4694</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <MapPin className="h-6 w-6 mr-3 text-[#169AFF]" />
              <div>
                <p className="text-sm text-white/60">Visit us at</p>
                <p className="font-medium">214 W Texas Ave, Midland, TX 79701</p>
              </div>
            </div>
          </div>
          
          <Link to="/" className="text-[#169AFF] hover:text-white transition-colors font-medium">
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MidlandOdessa;