import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import ContactForm from "@/components/ContactForm";
import ImagePreloader from "@/components/ImagePreloader";
import { useState, useEffect } from "react";

const MidlandOdessa = () => {
  const [showStickyBar, setShowStickyBar] = useState(false);
  
  // Critical images to preload for faster mobile performance
  const criticalImages = [
    "/lovable-uploads/b808aa46-b91e-4f5b-8573-6e27bb488e2e.png", // Header logo
    "/lovable-uploads/9963ca67-782b-4932-aabd-62132c2849cc.png"  // Main logo
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const roofingServices = ["Free Roof Inspection", "Roof Installation", "Roof Damage Repair", "Storm Restoration", "Gutter Installation", "Gutter Repair", "Shingle Replacement", "Metal Roofing", "Tile Roofing", "Flat Roof Repair", "Roof Maintenance", "Emergency Repairs", "Commercial Roofing", "Residential Roofing"];
  const processSteps = [{
    number: "01",
    title: "FREE ESTIMATE",
    description: "We start with a fast, no-obligation estimate. One of our friendly experts will assess your roof, answer questions, and give you a clear, honest quote — no hidden fees, ever."
  }, {
    number: "02",
    title: "INSURANCE CONSULTATION",
    description: "We help you navigate the insurance process from start to finish. Our team works directly with your insurance company to maximize your coverage and minimize your out-of-pocket costs."
  }, {
    number: "03",
    title: "MATERIAL CONSULTATION",
    description: "Not sure which material or style to choose? We'll help you find the perfect roofing solution that fits your home, budget, and goals. Our team can match existing materials or recommend fresh new looks to elevate your property."
  }, {
    number: "04",
    title: "WORK BEGINS",
    description: "Once you're ready, our crew gets to work. We show up on time, treat your home like our own, and follow our proven prep and installation process to ensure beautiful, lasting results."
  }];
  return <div className="min-h-screen bg-white font-inter">
      <ImagePreloader images={criticalImages} />
      {/* Header with Navigation */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img src="/lovable-uploads/b808aa46-b91e-4f5b-8573-6e27bb488e2e.png" alt="Happy Home Roofing" className="h-16 md:h-20 w-auto" loading="eager" fetchPriority="high" />
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center text-slate-600">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+14322877329" className="font-medium hover:text-[#169AFF] transition-colors">
                  (432) 287-7329
                </a>
              </div>
              <Button className="bg-[#169AFF] hover:bg-[#0080e6] text-white text-sm md:text-base px-3 md:px-4 py-2 md:py-3" onClick={() => document.getElementById('estimate-form')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Get Estimate
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky Call-to-Action Bar */}
      <div className={`fixed top-0 left-0 right-0 bg-[#169AFF] text-white py-2 md:py-3 px-2 md:px-4 shadow-lg z-50 transform transition-transform duration-300 ${
        showStickyBar ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center flex-1 mr-2">
            <Phone className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2 flex-shrink-0" />
            <span className="font-semibold text-xs md:text-base">
              <span className="hidden sm:inline">CALL NOW TO BOOK YOUR FREE INSPECTION IN 24 HOURS OR LESS!</span>
              <span className="sm:hidden">FREE INSPECTION IN 24 HOURS!</span>
            </span>
          </div>
          <a 
            href="tel:+14322877329" 
            className="bg-white text-[#169AFF] px-2 md:px-4 py-1 md:py-2 rounded-lg font-bold text-xs md:text-sm hover:bg-gray-100 transition-colors flex-shrink-0"
          >
            <span className="hidden sm:inline">(432) 287-7329</span>
            <span className="sm:hidden">CALL NOW</span>
          </a>
        </div>
      </div>


      {/* Contact Form Section */}
      

      {/* Main Estimate Form Section */}
      <section id="estimate-form" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Logo Section */}
          <div className="flex justify-center mb-12">
            <img 
              src="/lovable-uploads/9963ca67-782b-4932-aabd-62132c2849cc.png" 
              alt="Happy Home Roofing - Permian Trusted Roofer"
              className="w-auto h-24 md:h-32 max-w-full"
              loading="lazy"
              decoding="async"
            />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
            {/* Why Choose Us - Left Side on Desktop */}
            <div className="order-2 lg:order-1">
              <div className="p-6 lg:p-8 bg-[#169AFF] rounded-2xl">
                <h3 className="text-2xl lg:text-3xl font-bold mb-6 font-poppins text-white">Why Choose Happy Home Roofing?</h3>
                <div className="space-y-4 text-white">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 mr-3 flex-shrink-0" />
                    <h4 className="font-semibold text-lg">Professional Trained Workers</h4>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 mr-3 flex-shrink-0" />
                    <h4 className="font-semibold text-lg">Local & Family Owned</h4>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 mr-3 flex-shrink-0" />
                    <h4 className="font-semibold text-lg">Quality Materials</h4>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 mr-3 flex-shrink-0" />
                    <h4 className="font-semibold text-lg">Free Roof Inspection</h4>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 mr-3 flex-shrink-0" />
                    <h4 className="font-semibold text-lg">Insured & Bonded</h4>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 mr-3 flex-shrink-0" />
                    <h4 className="font-semibold text-lg">Over 100 Years of Combined Experience</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Form - Right Side on Desktop */}
            <div className="order-1 lg:order-2 flex justify-center">
              <Card className="border w-full max-w-md lg:max-w-none">
                <CardContent className="p-6 sm:p-8 lg:p-12">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center font-poppins">
                    FREE INSPECTION IN 24 HOURS OR LESS
                  </h3>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


      {/* Proudly Serving Section */}
      <section className="py-16 bg-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 font-poppins">
            PROUDLY SERVING MIDLAND-ODESSA, TX
          </h2>
          
          <Card className="max-w-4xl mx-auto bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative rounded-2xl overflow-hidden">
                  <img src="/lovable-uploads/8ee16cd7-0fa7-471d-bed9-4470d670809a.png" alt="Beautiful home interior" className="w-full h-64 md:h-80 object-cover" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  
                  {/* Logo overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/95 rounded-full p-6 shadow-2xl">
                      <img src="/lovable-uploads/b808aa46-b91e-4f5b-8573-6e27bb488e2e.png" alt="Happy Home Roofing" className="h-16 w-auto" loading="lazy" decoding="async" />
                    </div>
                  </div>
                </div>
                
                <div className="text-white space-y-6 text-left">
                  <h3 className="text-2xl font-bold font-poppins">The Happy Home Roofing Way</h3>
                  <p className="text-lg leading-relaxed text-white/90">
                    We are your trusted Permian Basin roofing experts, proudly serving Midland, Odessa, and surrounding communities for over 15 years. Whether you're dealing with storm damage, planning a full roof replacement, or simply need a quick repair — we've got you covered.
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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-poppins">
              OUR PROCESS
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From initial consultation to final walkthrough, we make roofing simple and stress-free
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {processSteps.map((step, index) => <Card key={index} className="bg-white border-2 hover:border-[#169AFF]/30 transition-colors duration-300 shadow-lg hover:shadow-xl">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="text-5xl font-bold text-[#169AFF] mb-4 font-poppins">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 font-poppins">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed flex-grow">
                    {step.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Customer Reviews & Projects Section */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-poppins">
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
                  <img src="/lovable-uploads/736dcf78-ee19-4a87-8ff4-e898a256bc19.png" alt="Louie 510" className="w-10 h-10 rounded-full mr-3 object-cover" loading="lazy" decoding="async" />
                  <div className="flex-1">
                    <div className="flex text-yellow-400 mb-1">
                      {[...Array(5)].map((_, i) => <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>)}
                    </div>
                    <span className="text-white font-semibold">Louie 510</span>
                  </div>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">
                  "Great work, good communication, and overall a great team!"
                </p>
              </CardContent>
            </Card>

            {/* Review 2 */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img src="/lovable-uploads/eea2af0b-a141-4e5e-9226-a2b75c47548f.png" alt="David Hernandez" className="w-10 h-10 rounded-full mr-3 object-cover" loading="lazy" decoding="async" />
                  <div className="flex-1">
                    <div className="flex text-yellow-400 mb-1">
                      {[...Array(5)].map((_, i) => <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>)}
                    </div>
                    <span className="text-white font-semibold">David Hernandez</span>
                  </div>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">
                  "Extremely experienced and knowledgeable roofing company, highly recommended!"
                </p>
              </CardContent>
            </Card>

            {/* Review 3 */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img src="/lovable-uploads/9429e377-0e4e-4448-a027-cd5bbf0c38af.png" alt="Ivan Alvarado" className="w-10 h-10 rounded-full mr-3 object-cover" loading="lazy" decoding="async" />
                  <div className="flex-1">
                    <div className="flex text-yellow-400 mb-1">
                      {[...Array(5)].map((_, i) => <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>)}
                    </div>
                    <span className="text-white font-semibold">Ivan Alvarado</span>
                  </div>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">
                  "I love my new roof, Martin Compos and his team did a beautiful job. You can see the difference in my new roof, thank you so much to Happy Home Roof. I would recommend them 100% 🙏"
                </p>
              </CardContent>
            </Card>

            {/* Review 4 */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img src="/lovable-uploads/dd707ca4-ce08-4267-9042-30298c8e1667.png" alt="Juan Cabrera" className="w-10 h-10 rounded-full mr-3 object-cover" loading="lazy" decoding="async" />
                  <div className="flex-1">
                    <div className="flex text-yellow-400 mb-1">
                      {[...Array(5)].map((_, i) => <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>)}
                    </div>
                    <span className="text-white font-semibold">Juan Cabrera</span>
                  </div>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">
                  "They are reliable and efficient. Recommend them 100%"
                </p>
              </CardContent>
            </Card>

            {/* Review 5 */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img src="/lovable-uploads/9de20225-a3d4-4530-b184-93e82ea0f7b1.png" alt="Alicia Dendura" className="w-10 h-10 rounded-full mr-3 object-cover" loading="lazy" decoding="async" />
                  <div className="flex-1">
                    <div className="flex text-yellow-400 mb-1">
                      {[...Array(5)].map((_, i) => <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>)}
                    </div>
                    <span className="text-white font-semibold">Alicia Dendura</span>
                  </div>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">
                  "Great service and detailed work! 100% recommended!!!"
                </p>
              </CardContent>
            </Card>

            {/* Review 6 */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img src="/lovable-uploads/341d79ee-8691-4acc-af3a-6bec6a276f42.png" alt="Ivonne Nava" className="w-10 h-10 rounded-full mr-3 object-cover" loading="lazy" decoding="async" />
                  <div className="flex-1">
                    <div className="flex text-yellow-400 mb-1">
                      {[...Array(5)].map((_, i) => <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>)}
                    </div>
                    <span className="text-white font-semibold">Ivonne Nava</span>
                  </div>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">
                  "Highly recommend! Great customer service and love that it's a family business! Reach out to them for your needs."
                </p>
              </CardContent>
            </Card>

            {/* Review 7 */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img src="/lovable-uploads/220bf27d-a4c0-47f4-9313-e11b32f78998.png" alt="Suzzett Rodriguez" className="w-10 h-10 rounded-full mr-3 object-cover" loading="lazy" decoding="async" />
                  <div className="flex-1">
                    <div className="flex text-yellow-400 mb-1">
                      {[...Array(5)].map((_, i) => <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>)}
                    </div>
                    <span className="text-white font-semibold">Suzzett Rodriguez</span>
                  </div>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">
                  "Diego did a great job on our roof replacement. They had great communication and took care of the entire insurance process."
                </p>
              </CardContent>
            </Card>

            {/* Review 8 */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img src="/lovable-uploads/bfff6401-79a3-457d-8a27-c02a5770e745.png" alt="Javier" className="w-10 h-10 rounded-full mr-3 object-cover" loading="lazy" decoding="async" />
                  <div className="flex-1">
                    <div className="flex text-yellow-400 mb-1">
                      {[...Array(5)].map((_, i) => <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>)}
                    </div>
                    <span className="text-white font-semibold">Javier</span>
                  </div>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">
                  "Highly recommend - Martin and his crew took care of my roofing. On time, no price surprises and amazing customer service"
                </p>
              </CardContent>
            </Card>

            {/* Review 9 */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img src="/lovable-uploads/81729a25-9c7c-42c2-b076-e0719d0f7886.png" alt="Saúl Fierro" className="w-10 h-10 rounded-full mr-3 object-cover" loading="lazy" decoding="async" />
                  <div className="flex-1">
                    <div className="flex text-yellow-400 mb-1">
                      {[...Array(5)].map((_, i) => <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>)}
                    </div>
                    <span className="text-white font-semibold">Saúl Fierro</span>
                  </div>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">
                  "They're a great group to work with, extremely informative and answered all my questions"
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Project Gallery */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4 font-poppins">
              Recent Projects
            </h3>
            <p className="text-white/80">
              See the quality craftsmanship we deliver to Midland-Odessa homes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <img src="/lovable-uploads/5b873240-e804-4e92-bbe7-e4085fd54467.png" alt="Residential roofing project in progress" className="w-full h-64 object-cover" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="relative rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <img src="/lovable-uploads/20e15359-2823-4915-9bb9-072d4a573428.png" alt="Quality shingle installation detail" className="w-full h-64 object-cover" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="relative rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <img src="/lovable-uploads/2bf2fb87-9b64-430f-9dba-449a1a25544e.png" alt="Professional roofing craftsmanship" className="w-full h-64 object-cover" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Best House Guests Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-slate-50 to-slate-100 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-40 h-40 bg-[#169AFF] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#169AFF] rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#169AFF] font-inter tracking-wider mb-6 leading-tight">
              WE'RE THE ROOFING EXPERTS YOU CAN TRUST
            </h2>
            <div className="w-32 h-1 bg-[#169AFF] mx-auto rounded-full mb-6"></div>
            <p className="text-lg md:text-xl text-slate-600 font-medium">
              We treat your home with the same care and respect we'd show our own family
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-poppins">
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
                <a href="tel:+14322877329" className="text-2xl font-bold hover:text-gray-200 transition-colors">
                  (432) 287-7329
                </a>
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
    </div>;
};
export default MidlandOdessa;