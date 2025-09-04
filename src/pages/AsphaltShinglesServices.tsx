import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import asphaltShinglesInstallation from "@/assets/asphalt-shingles-installation.jpg";

const AsphaltShinglesServices = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Asphalt Shingle Roofing | Installation & Repair | Happy Home Roofers</title>
        <meta name="description" content="Professional asphalt shingle roofing installation and repair. Quality architectural shingles with warranties. Expert roofing contractors." />
        <meta name="keywords" content="asphalt shingles, shingle roofing, architectural shingles, 3-tab shingles, asphalt roof installation, shingle repair" />
        <link rel="canonical" href="/asphalt-shingles-services" />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Asphalt Shingle Roofing Services
            </h1>
            <p className="text-lg text-muted-foreground">
              Quality asphalt shingle installation and repair services
            </p>
          </header>

          <div className="mb-8">
            <img
              src={asphaltShinglesInstallation}
              alt="Asphalt shingle roofing installation"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Why Choose Asphalt Shingles?</h2>
            <p className="mb-6">
              Asphalt shingles remain the most popular roofing choice for homeowners due to their affordability, versatility, and proven performance. Happy Home Roofers specializes in premium asphalt shingle installation that provides excellent protection and curb appeal for your home.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Types of Asphalt Shingles</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Architectural Shingles</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>Dimensional appearance</li>
                  <li>Enhanced durability</li>
                  <li>20-30 year warranties</li>
                  <li>Superior wind resistance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">3-Tab Shingles</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>Cost-effective option</li>
                  <li>Clean, uniform appearance</li>
                  <li>15-25 year warranties</li>
                  <li>Reliable performance</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Premium Shingle Features</h2>
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold">Wind Resistance</h3>
                <p>Enhanced wind ratings up to 130 mph for severe weather protection</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold">Algae Resistance</h3>
                <p>Special granules prevent unsightly algae stains and streaks</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold">Impact Resistance</h3>
                <p>Class 4 impact ratings for hail protection and insurance discounts</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold">Energy Efficiency</h3>
                <p>Cool roof technology reduces heat absorption and energy costs</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Our Installation Process</h2>
            <div className="space-y-4 mb-8">
              <div className="bg-muted p-4 rounded">
                <h3 className="font-semibold mb-2">1. Roof Inspection</h3>
                <p>Thorough assessment of existing roof condition and structure</p>
              </div>
              <div className="bg-muted p-4 rounded">
                <h3 className="font-semibold mb-2">2. Material Selection</h3>
                <p>Choose from premium shingle options and color selections</p>
              </div>
              <div className="bg-muted p-4 rounded">
                <h3 className="font-semibold mb-2">3. Proper Installation</h3>
                <p>Expert installation following manufacturer specifications</p>
              </div>
              <div className="bg-muted p-4 rounded">
                <h3 className="font-semibold mb-2">4. Quality Assurance</h3>
                <p>Final inspection and cleanup with warranty protection</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Benefits of Our Asphalt Shingle Service</h2>
            <ul className="list-disc ml-6 mb-8">
              <li>Competitive pricing and financing options</li>
              <li>Wide variety of colors and styles</li>
              <li>Manufacturer and workmanship warranties</li>
              <li>Insurance claim assistance</li>
              <li>Licensed and insured contractors</li>
              <li>Local weather expertise</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Shingle Maintenance & Repair</h2>
            <p className="mb-6">
              Regular maintenance extends the life of your asphalt shingle roof. We provide comprehensive repair services including shingle replacement, flashing repair, and preventive maintenance to keep your roof in optimal condition.
            </p>

            <div className="bg-muted p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Need Asphalt Shingle Roofing?</h3>
              <p className="mb-4">Get a free estimate for your asphalt shingle roofing project.</p>
              <Button size="lg" className="mr-4">
                Free Estimate
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

export default AsphaltShinglesServices;