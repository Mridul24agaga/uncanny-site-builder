import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import roofInspectionServices from "@/assets/roof-inspection-services.jpg";

const RoofInspectionServices = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Professional Roof Inspection Services | Detailed Roof Reports | Happy Home Roofers</title>
        <meta name="description" content="Comprehensive roof inspection services with detailed reports. Pre-purchase inspections, storm damage assessments, and routine maintenance inspections." />
        <meta name="keywords" content="roof inspection, roof assessment, storm damage inspection, pre-purchase roof inspection, roof condition report" />
        <link rel="canonical" href="/roof-inspection-services" />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Professional Roof Inspection Services
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive roof inspections with detailed reports and recommendations
            </p>
          </header>

          <div className="mb-8">
            <img
              src={roofInspectionServices}
              alt="Professional roof inspection services"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Why Regular Roof Inspections Matter</h2>
            <p className="mb-6 text-foreground leading-relaxed">
              Regular roof inspections are essential for maintaining your home's protection and value. Happy Home Roofers provides thorough, professional inspections that identify potential issues before they become costly repairs, helping you make informed decisions about your roof's maintenance and care.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Types of Roof Inspections</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Routine Maintenance Inspection</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>Annual or bi-annual checkups</li>
                  <li>Preventive maintenance planning</li>
                  <li>Early problem detection</li>
                  <li>Warranty compliance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Storm Damage Assessment</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>Post-storm damage evaluation</li>
                  <li>Insurance claim documentation</li>
                  <li>Emergency repair recommendations</li>
                  <li>Priority repair identification</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">What We Inspect</h2>
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold">Roofing Materials</h3>
                <p>Condition of shingles, tiles, metal panels, or other roofing materials</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold">Flashing & Seals</h3>
                <p>Chimney, vent, and penetration flashing integrity</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold">Gutters & Drainage</h3>
                <p>Gutter condition, downspouts, and water management systems</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold">Structural Elements</h3>
                <p>Roof deck, trusses, and support structure assessment</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Our Inspection Process</h2>
            <div className="space-y-4 mb-8">
              <div className="bg-muted p-4 rounded">
                <h3 className="font-semibold mb-2">1. Exterior Inspection</h3>
                <p>Comprehensive examination of all visible roof components from ground level and roof access</p>
              </div>
              <div className="bg-muted p-4 rounded">
                <h3 className="font-semibold mb-2">2. Interior Assessment</h3>
                <p>Attic and interior ceiling inspection for signs of leaks or damage</p>
              </div>
              <div className="bg-muted p-4 rounded">
                <h3 className="font-semibold mb-2">3. Documentation</h3>
                <p>Detailed photos and notes of all findings and conditions</p>
              </div>
              <div className="bg-muted p-4 rounded">
                <h3 className="font-semibold mb-2">4. Detailed Report</h3>
                <p>Comprehensive written report with findings, recommendations, and priority levels</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Specialized Inspection Services</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">✓</div>
                <div>
                  <h3 className="font-semibold">Pre-Purchase Inspections</h3>
                  <p>Detailed assessment for home buyers to understand roof condition and potential costs</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">✓</div>
                <div>
                  <h3 className="font-semibold">Insurance Inspections</h3>
                  <p>Professional documentation for insurance claims and policy requirements</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">✓</div>
                <div>
                  <h3 className="font-semibold">Warranty Inspections</h3>
                  <p>Verification of proper installation and compliance with manufacturer warranties</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">✓</div>
                <div>
                  <h3 className="font-semibold">Commercial Inspections</h3>
                  <p>Specialized inspections for commercial and multi-family properties</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Common Issues We Identify</h2>
            <ul className="list-disc ml-6 mb-8">
              <li>Missing, damaged, or loose shingles</li>
              <li>Cracked or deteriorated flashing</li>
              <li>Gutter problems and drainage issues</li>
              <li>Ventilation inadequacies</li>
              <li>Signs of water penetration</li>
              <li>Structural damage or sagging</li>
              <li>Moss, algae, or pest infestations</li>
              <li>Chimney and penetration issues</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">When to Schedule an Inspection</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Recommended Times</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>After severe weather events</li>
                  <li>Before buying or selling a home</li>
                  <li>Annual maintenance checks</li>
                  <li>Before winter season</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Warning Signs</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>Interior water stains</li>
                  <li>Missing or damaged shingles</li>
                  <li>Excessive granules in gutters</li>
                  <li>Sagging roof areas</li>
                </ul>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Schedule Your Roof Inspection</h3>
              <p className="mb-4 text-foreground">Get a professional assessment of your roof's condition with our detailed inspection service.</p>
              <Button size="lg" className="mr-4">
                Book Inspection
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

export default RoofInspectionServices;