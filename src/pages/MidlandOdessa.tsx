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
      <section className="py-16 bg-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 font-playfair">
            PROUDLY SERVING MIDLAND-ODESSA, TX
          </h2>
          
          <Card className="max-w-4xl mx-auto bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src="/src/assets/roofing-background.jpg" 
                    alt="Beautiful home interior" 
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  
                  {/* Logo overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/95 rounded-full p-6 shadow-2xl">
                      <img 
                        src="/lovable-uploads/b808aa46-b91e-4f5b-8573-6e27bb488e2e.png" 
                        alt="Happy Home Roofing" 
                        className="h-16 w-auto"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="text-white space-y-6 text-left">
                  <h3 className="text-2xl font-bold font-playfair">Your Trusted Local Roofing Partner</h3>
                  <p className="text-lg leading-relaxed text-white/90">
                    For over 15 years, Happy Home Roofing has been the go-to choice for homeowners and businesses in Midland, Odessa, and throughout the Permian Basin. We combine expertise with exceptional service to deliver roofing solutions that protect and enhance your property.
                  </p>
                  <div className="flex gap-4 text-sm">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-[#169AFF]" />
                      <span>Serving 50+ Mile Radius</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-green-400" />
                      <span>1000+ Happy Customers</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#169AFF]/30 rounded-full blur-xl"></div>
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

      {/* Customer Reviews & Projects Section */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-playfair">
              What Our Customers Say
            </h2>
            <p className="text-xl text-white/80">
              Real reviews from satisfied homeowners in Midland-Odessa
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Review 1 */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-white font-semibold">Jackson R.</span>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">
                  "I couldn't be happier with the roof repair service I received! The team was prompt, professional, and thorough. My roof looks amazing, and I feel confident it will withstand the unpredictable West Texas weather. Highly recommended!"
                </p>
              </CardContent>
            </Card>

            {/* Review 2 */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-white font-semibold">Maria T.</span>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">
                  "From the first call to project completion, their customer service was top-notch. They walked me through the entire process and answered all my questions. It's rare to find such courteous and knowledgeable roofing experts."
                </p>
              </CardContent>
            </Card>

            {/* Review 3 */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-white font-semibold">Chris L.</span>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">
                  "These folks take pride in their work! The quality of materials and attention to detail were impressive. My new roof looks fantastic and was completed on time without any issues. Great experience!"
                </p>
              </CardContent>
            </Card>

            {/* Review 4 */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-white font-semibold">Robert K.</span>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">
                  "Outstanding workmanship and customer service! They replaced my entire roof after storm damage and the results exceeded my expectations. The crew was respectful, clean, and finished ahead of schedule."
                </p>
              </CardContent>
            </Card>

            {/* Review 5 */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-white font-semibold">Sarah D.</span>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">
                  "Happy Home Roofing transformed my commercial property with a new roof installation. Their team was professional, efficient, and delivered exceptional quality. I highly recommend them for any roofing needs."
                </p>
              </CardContent>
            </Card>

            {/* Review 6 */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-white font-semibold">Bethany M.</span>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">
                  "In a world where it's hard to find good contractors, this company stands out. They provided a fair estimate, kept us updated throughout the project, and delivered excellent results. I wouldn't hesitate to call them again."
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Project Gallery */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4 font-playfair">
              Recent Projects
            </h3>
            <p className="text-white/80">
              See the quality craftsmanship we deliver to Midland-Odessa homes
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="relative rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <img 
                src="/src/assets/project-1.jpg" 
                alt="Roofing project 1" 
                className="w-full h-32 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="relative rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <img 
                src="/src/assets/project-2.jpg" 
                alt="Roofing project 2" 
                className="w-full h-32 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="relative rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <img 
                src="/src/assets/project-3.jpg" 
                alt="Roofing project 3" 
                className="w-full h-32 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="relative rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <img 
                src="/src/assets/project-4.jpg" 
                alt="Roofing project 4" 
                className="w-full h-32 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="relative rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <img 
                src="/src/assets/about-roofer.jpg" 
                alt="Professional roofer" 
                className="w-full h-32 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="relative rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <img 
                src="/src/assets/roofing-background.jpg" 
                alt="Roofing work" 
                className="w-full h-32 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
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