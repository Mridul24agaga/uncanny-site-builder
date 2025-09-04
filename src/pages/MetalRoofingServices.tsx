import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import metalRoofingInstallation from "@/assets/metal-roofing-installation.jpg";

const MetalRoofingServices = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Metal Roofing Installation & Repair | Durable Metal Roofs | Happy Home Roofers</title>
        <meta name="description" content="Professional metal roofing installation and repair services. Durable, energy-efficient metal roofs with long-term warranties. Expert metal roofing contractors." />
        <meta name="keywords" content="metal roofing, metal roof installation, metal roof repair, steel roofing, aluminum roofing, standing seam metal roof" />
        <link rel="canonical" href="/metal-roofing-services" />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-heading-black mb-4">
              Metal Roofing Services
            </h1>
            <p className="text-lg text-muted-foreground">
              Durable, energy-efficient metal roofing installation and repair
            </p>
          </header>

          <div className="mb-8">
            <img
              src={metalRoofingInstallation}
              alt="Metal roofing installation services"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <h2 className="text-2xl font-semibold text-heading-black mt-8 mb-4">Why Choose Metal Roofing?</h2>
            <p className="mb-6 text-foreground leading-relaxed">
              Metal roofing offers superior durability, energy efficiency, and longevity compared to traditional roofing materials. With proper installation by Happy Home Roofers, your metal roof can last 50+ years while providing excellent protection and cost savings.
            </p>

            <h2 className="text-2xl font-semibold text-heading-black mt-8 mb-4">Benefits of Metal Roofing</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Durability & Longevity</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>50+ year lifespan</li>
                  <li>Weather resistant</li>
                  <li>Fire resistant</li>
                  <li>Impact resistant</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Energy Efficiency</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>Reflects solar heat</li>
                  <li>Reduces cooling costs</li>
                  <li>ENERGY STAR certified options</li>
                  <li>Environmentally friendly</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-heading-black mt-8 mb-4">Types of Metal Roofing We Install</h2>
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold">Standing Seam Metal Roofing</h3>
                <p>Premium option with concealed fasteners and superior weather protection</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold">Metal Shingles</h3>
                <p>Traditional shingle appearance with metal durability</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold">Corrugated Metal</h3>
                <p>Cost-effective option for residential and commercial applications</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold">Metal Tiles</h3>
                <p>Elegant appearance combining metal benefits with tile aesthetics</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-heading-black mt-8 mb-4">Our Metal Roofing Process</h2>
            <div className="space-y-4 mb-8">
              <div className="bg-muted p-4 rounded">
                <h3 className="font-semibold mb-2">1. Consultation & Design</h3>
                <p>Free consultation to determine the best metal roofing solution for your home</p>
              </div>
              <div className="bg-muted p-4 rounded">
                <h3 className="font-semibold mb-2">2. Precise Measurement</h3>
                <p>Accurate measurements and custom fabrication for perfect fit</p>
              </div>
              <div className="bg-muted p-4 rounded">
                <h3 className="font-semibold mb-2">3. Professional Installation</h3>
                <p>Expert installation following manufacturer specifications</p>
              </div>
              <div className="bg-muted p-4 rounded">
                <h3 className="font-semibold mb-2">4. Quality Inspection</h3>
                <p>Thorough inspection and cleanup with warranty protection</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-heading-black mt-8 mb-4">Metal Roofing Materials</h2>
            <ul className="list-disc ml-6 mb-8">
              <li><strong>Steel:</strong> Most popular, cost-effective, and durable</li>
              <li><strong>Aluminum:</strong> Lightweight, corrosion-resistant, ideal for coastal areas</li>
              <li><strong>Copper:</strong> Premium option with natural patina development</li>
              <li><strong>Zinc:</strong> Long-lasting with self-healing properties</li>
            </ul>

            <div className="bg-muted p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Ready for a Metal Roof?</h3>
              <p className="mb-4 text-foreground">Get a free consultation and estimate for your metal roofing project.</p>
              <Button size="lg" className="mr-4">
                Get Free Estimate
              </Button>
              <Button variant="outline" size="lg">
                Call (432) 999-4694
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MetalRoofingServices;