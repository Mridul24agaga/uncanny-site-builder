import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import tileRoofingInstallation from "@/assets/tile-roofing-installation.jpg";

const TileRoofingServices = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Tile Roofing Services | Clay & Concrete Tile Installation | Happy Home Roofers</title>
        <meta name="description" content="Professional tile roofing installation and repair. Clay tiles, concrete tiles, and slate roofing services with expert craftsmanship and warranties." />
        <meta name="keywords" content="tile roofing, clay tiles, concrete tiles, slate roofing, tile roof installation, tile roof repair" />
        <link rel="canonical" href="/tile-roofing-services" />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Tile Roofing Services
            </h1>
            <p className="text-lg text-muted-foreground">
              Premium tile roofing installation and repair services
            </p>
          </header>

          <div className="mb-8">
            <img
              src={tileRoofingInstallation}
              alt="Tile roofing installation services"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Why Choose Tile Roofing?</h2>
            <p className="mb-6">
              Tile roofing offers exceptional durability, timeless beauty, and superior protection for your home. With proper installation by Happy Home Roofers, tile roofs can last 50-100 years while providing excellent insulation and weather resistance.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Types of Tile Roofing</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Clay Tiles</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>Traditional Mediterranean style</li>
                  <li>Natural fire resistance</li>
                  <li>Excellent insulation properties</li>
                  <li>100+ year lifespan</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Concrete Tiles</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>Cost-effective alternative</li>
                  <li>Wide variety of colors</li>
                  <li>Durable and weather-resistant</li>
                  <li>50+ year lifespan</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Tile Roofing Benefits</h2>
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold">Exceptional Durability</h3>
                <p>Resistant to wind, hail, fire, and extreme weather conditions</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold">Energy Efficiency</h3>
                <p>Natural insulation properties reduce heating and cooling costs</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold">Low Maintenance</h3>
                <p>Minimal upkeep required with proper installation</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold">Aesthetic Appeal</h3>
                <p>Timeless beauty that enhances home value and curb appeal</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Tile Styles & Profiles</h2>
            <div className="space-y-4 mb-8">
              <div className="bg-muted p-4 rounded">
                <h3 className="font-semibold mb-2">Spanish/Mission Tiles</h3>
                <p>Classic S-curve profile for traditional southwestern appeal</p>
              </div>
              <div className="bg-muted p-4 rounded">
                <h3 className="font-semibold mb-2">French Tiles</h3>
                <p>Interlocking design with clean lines and modern aesthetics</p>
              </div>
              <div className="bg-muted p-4 rounded">
                <h3 className="font-semibold mb-2">Flat Tiles</h3>
                <p>Sleek, contemporary appearance with excellent weather protection</p>
              </div>
              <div className="bg-muted p-4 rounded">
                <h3 className="font-semibold mb-2">Roman Tiles</h3>
                <p>Alternating large and small ribs for distinctive styling</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Our Tile Installation Process</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">1</div>
                <div>
                  <h3 className="font-semibold">Structural Assessment</h3>
                  <p>Evaluate roof structure to ensure adequate support for tile weight</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">2</div>
                <div>
                  <h3 className="font-semibold">Underlayment Installation</h3>
                  <p>Install proper waterproof barrier and ventilation systems</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">3</div>
                <div>
                  <h3 className="font-semibold">Tile Installation</h3>
                  <p>Expert installation following manufacturer specifications</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">4</div>
                <div>
                  <h3 className="font-semibold">Quality Inspection</h3>
                  <p>Thorough inspection and warranty protection</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Maintenance & Repair Services</h2>
            <ul className="list-disc ml-6 mb-8">
              <li>Individual tile replacement</li>
              <li>Underlayment repair</li>
              <li>Flashing and ridge repair</li>
              <li>Preventive maintenance inspections</li>
              <li>Moss and debris removal</li>
              <li>Gutter and drainage maintenance</li>
            </ul>

            <div className="bg-muted p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Interested in Tile Roofing?</h3>
              <p className="mb-4">Contact us for a consultation on tile roofing options for your home.</p>
              <Button size="lg" className="mr-4">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg">
                Call (432) 214-4764
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TileRoofingServices;