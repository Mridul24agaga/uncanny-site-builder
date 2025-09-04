import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import gutterServices from "@/assets/gutter-services.jpg";

const GutterServices = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Gutter Installation & Repair Services | Seamless Gutters | Happy Home Roofers</title>
        <meta name="description" content="Professional gutter installation, repair, and cleaning services. Seamless gutters, downspouts, and gutter guards to protect your home." />
        <meta name="keywords" content="gutter installation, gutter repair, seamless gutters, downspouts, gutter cleaning, gutter guards" />
        <link rel="canonical" href="/gutter-services" />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Gutter Services
            </h1>
            <p className="text-lg text-muted-foreground">
              Complete gutter installation, repair, and maintenance services
            </p>
          </header>

          <div className="mb-8">
            <img
              src={gutterServices}
              alt="Professional gutter installation and repair services"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Complete Gutter Solutions</h2>
            <p className="mb-6 text-foreground leading-relaxed">
              Protect your home's foundation, landscaping, and exterior with professional gutter services from Happy Home Roofers. Our comprehensive gutter solutions include installation, repair, cleaning, and maintenance to keep water flowing properly away from your home.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Our Gutter Services</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Gutter Installation</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>Seamless aluminum gutters</li>
                  <li>Custom fit and sizing</li>
                  <li>Professional downspout placement</li>
                  <li>Quality hangers and brackets</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Gutter Repair</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>Leak repairs and sealing</li>
                  <li>Sagging gutter fixes</li>
                  <li>Downspout repairs</li>
                  <li>Bracket and hanger replacement</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Gutter Materials & Options</h2>
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold">Aluminum Gutters</h3>
                <p>Lightweight, corrosion-resistant, and available in many colors</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold">Copper Gutters</h3>
                <p>Premium option with distinctive appearance and long lifespan</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold">Steel Gutters</h3>
                <p>Strong and durable for heavy-duty applications</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold">Vinyl Gutters</h3>
                <p>Budget-friendly option for basic water management</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Gutter Guards & Protection</h2>
            <div className="space-y-4 mb-8">
              <div className="bg-muted p-4 rounded">
                <h3 className="font-semibold mb-2">Mesh Gutter Guards</h3>
                <p>Fine mesh screens that block debris while allowing water flow</p>
              </div>
              <div className="bg-muted p-4 rounded">
                <h3 className="font-semibold mb-2">Solid Gutter Covers</h3>
                <p>Surface tension systems that guide water into gutters</p>
              </div>
              <div className="bg-muted p-4 rounded">
                <h3 className="font-semibold mb-2">Foam Inserts</h3>
                <p>Porous foam that blocks debris while filtering water</p>
              </div>
              <div className="bg-muted p-4 rounded">
                <h3 className="font-semibold mb-2">Brush Guards</h3>
                <p>Cylindrical brushes that catch leaves and debris</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Signs You Need Gutter Service</h2>
            <ul className="list-disc ml-6 mb-8">
              <li>Water overflowing from gutters</li>
              <li>Sagging or pulling away from the house</li>
              <li>Rust spots or visible corrosion</li>
              <li>Cracks or holes in gutter sections</li>
              <li>Foundation water damage</li>
              <li>Landscape erosion near the foundation</li>
              <li>Ice dams in winter</li>
              <li>Peeling paint on gutters or home exterior</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Our Installation Process</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">1</div>
                <div>
                  <h3 className="font-semibold">Assessment & Measurement</h3>
                  <p>Detailed evaluation of your home's drainage needs</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">2</div>
                <div>
                  <h3 className="font-semibold">Custom Fabrication</h3>
                  <p>On-site creation of seamless gutters for perfect fit</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">3</div>
                <div>
                  <h3 className="font-semibold">Professional Installation</h3>
                  <p>Proper mounting and alignment for optimal performance</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">4</div>
                <div>
                  <h3 className="font-semibold">Testing & Cleanup</h3>
                  <p>Flow testing and complete job site cleanup</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Maintenance Services</h2>
            <p className="mb-4">Regular maintenance keeps your gutters functioning properly:</p>
            <ul className="list-disc ml-6 mb-8">
              <li>Professional gutter cleaning</li>
              <li>Downspout clearing and flushing</li>
              <li>Inspection for damage or wear</li>
              <li>Seasonal maintenance programs</li>
              <li>Emergency repair services</li>
            </ul>

            <div className="bg-muted p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Need Gutter Services?</h3>
              <p className="mb-4 text-foreground">Contact us for professional gutter installation, repair, or maintenance.</p>
              <Button size="lg" className="mr-4">
                Get Free Quote
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

export default GutterServices;