import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import stormDamageRepair from "@/assets/storm-damage-repair.jpg";

const StormDamageRepair = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Storm Damage Roof Repair | Emergency Roofing Services | Happy Home Roofers</title>
        <meta name="description" content="Expert storm damage roof repair services. Fast response for hail damage, wind damage, and emergency roofing repairs. Insurance-approved contractors." />
        <meta name="keywords" content="storm damage roof repair, hail damage repair, wind damage repair, emergency roofing, storm damage insurance claims" />
        <link rel="canonical" href="/storm-damage-repair" />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Storm Damage Roof Repair Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fast, reliable storm damage repair and emergency roofing services
            </p>
          </header>

          <div className="mb-8">
            <img
              src={stormDamageRepair}
              alt="Storm damage roof repair services"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Emergency Storm Damage Response</h2>
            <p className="mb-6 text-foreground leading-relaxed">
              When storms strike, your roof takes the brunt of nature's fury. At Happy Home Roofers, we provide 24/7 emergency storm damage repair services to protect your home and family. Our experienced team responds quickly to assess damage, provide temporary repairs, and restore your roof to its pre-storm condition.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Types of Storm Damage We Repair</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Hail Damage</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>Cracked or broken shingles</li>
                  <li>Granule loss from impact</li>
                  <li>Dented gutters and flashing</li>
                  <li>Compromised roof integrity</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Wind Damage</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>Missing or lifted shingles</li>
                  <li>Damaged roof decking</li>
                  <li>Broken flashing and trim</li>
                  <li>Structural damage</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Our Storm Damage Repair Process</h2>
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold">1. Emergency Assessment</h3>
                <p>Immediate inspection to assess damage and safety concerns</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold">2. Temporary Protection</h3>
                <p>Emergency tarping and stabilization to prevent further damage</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold">3. Insurance Documentation</h3>
                <p>Detailed damage assessment and insurance claim assistance</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold">4. Complete Restoration</h3>
                <p>Full repair or replacement using premium materials</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Why Choose Happy Home Roofers for Storm Damage?</h2>
            <ul className="list-disc ml-6 mb-8">
              <li>24/7 emergency response team</li>
              <li>Insurance claim specialists</li>
              <li>Licensed and insured contractors</li>
              <li>Free storm damage inspections</li>
              <li>Quality materials and workmanship</li>
              <li>Local weather expertise</li>
            </ul>

            <div className="bg-muted p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Need Emergency Storm Damage Repair?</h3>
              <p className="mb-4 text-foreground">Don't wait - storm damage can worsen quickly. Contact us now for immediate assistance.</p>
              <Button size="lg" className="mr-4">
                Call Now: (432) 999-4694
              </Button>
              <Button variant="outline" size="lg">
                Schedule Inspection
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StormDamageRepair;