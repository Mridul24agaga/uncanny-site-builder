import Header from "@/components/Header";
import Footer from "@/components/Footer";
import roofRepairWarning from "@/assets/roof-repair-warning-signs.jpg";
import { Helmet } from "react-helmet";

const RoofRepairWarnings = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>7 Warning Signs Your Roof Needs Immediate Repair | Happy Home Roofing</title>
        <meta name="description" content="Learn the 7 critical warning signs that indicate your roof needs immediate repair. Protect your home from costly damage with our expert roofing guide." />
        <meta name="keywords" content="roof repair warning signs, roof damage, roofing contractor, roof maintenance, home protection" />
        <link rel="canonical" href="/7-warning-signs-your-roof-needs-immediate-repair" />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <article>
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              7 Warning Signs Your Roof Needs Immediate Repair
            </h1>
            <div className="w-full h-64 md:h-96 mb-6 rounded-lg overflow-hidden">
              <img 
                src={roofRepairWarning} 
                alt="Roof in need of repair showing warning signs" 
                className="w-full h-full object-cover"
              />
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              Your roof is one of the most critical parts of your home, providing essential protection from weather elements and contributing to your home's overall value. Knowing when your roof requires repair can help prevent costly damage and extend its lifespan. In this comprehensive guide, we will explore seven warning signs that your roof may need immediate attention, along with actionable tips and solutions.
            </p>

            <section className="mb-10">
              <h2 className="text-3xl font-semibold text-primary mb-4">1. Leaks and Water Stains: The First Red Flag</h2>
              <p className="mb-4">
                Water damage is one of the most obvious signs of roof problems. Even small leaks can lead to major structural damage over time if not addressed promptly.
              </p>

              <h3 className="text-xl font-medium mb-3">What to Look For:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Water stains on ceilings or walls</li>
                <li>Dripping water during or after rainfall</li>
                <li>Mold or mildew growth in the attic or upper rooms</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">Why It Matters:</h3>
              <p className="mb-4">
                Water infiltration weakens your home's structural integrity, damages insulation, and can cause harmful mold growth.
              </p>

              <h3 className="text-xl font-medium mb-3">How to Fix:</h3>
              <p className="mb-6">
                Call a professional roofer for an inspection to pinpoint the source of the leak and carry out necessary repairs.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-semibold text-primary mb-4">Conclusion: Protecting Your Home Starts with Your Roof</h2>
              <p className="text-lg mb-4">
                Your roof is a critical part of your home's protection system. By staying vigilant and addressing warning signs early, you can prevent costly repairs and extend the life of your roof. If you notice any of the signs mentioned in this guide, don't hesitate to contact a professional roofing contractor for an inspection and necessary repairs.
              </p>
              <p className="text-lg">
                Being proactive about roof maintenance ensures that your home remains safe, energy-efficient, and structurally sound. Remember, a well-maintained roof is a smart investment that pays off in the long run.
              </p>
            </section>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default RoofRepairWarnings;