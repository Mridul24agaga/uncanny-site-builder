import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import roofStormDamageHero from "@/assets/roof-storm-damage-hero.jpg";
import roofRepairWarning from "@/assets/roof-repair-warning-signs.jpg";
import winterRoofPrep from "@/assets/winter-roof-preparation.jpg";
import roofInspectionChecklist from "@/assets/roof-inspection-checklist.jpg";
import metalVsAsphalt from "@/assets/metal-vs-asphalt-comparison.jpg";

const blogPosts = [
  {
    title: "5 Most Common Causes of Roof Storm Damage",
    description: "Discover the top 5 causes of roof storm damage including wind, rain, hail, debris, and ice. Learn prevention tips and how to protect your roof from storm damage.",
    image: roofStormDamageHero,
    slug: "/5-most-common-causes-of-roof-storm-damage",
    category: "Storm Damage"
  },
  {
    title: "7 Warning Signs Your Roof Needs Immediate Repair",
    description: "Learn the 7 critical warning signs that indicate your roof needs immediate repair. Protect your home from costly damage with our expert roofing guide.",
    image: roofRepairWarning,
    slug: "/7-warning-signs-your-roof-needs-immediate-repair",
    category: "Roof Repair"
  },
  {
    title: "How to Prepare Your Roof for Winter: Essential Steps",
    description: "Learn essential steps to prepare your roof for winter weather. Protect your home from snow, ice, and cold with our expert winter roofing guide.",
    image: winterRoofPrep,
    slug: "/how-to-prepare-your-roof-for-winter",
    category: "Winter Preparation"
  },
  {
    title: "Roof Inspection Checklist: What Experts Look For",
    description: "Complete roof inspection checklist covering what roofing experts look for during inspections. Learn to identify common issues and maintain your roof properly.",
    image: roofInspectionChecklist,
    slug: "/roof-inspection-checklist",
    category: "Inspection"
  },
  {
    title: "Metal vs. Asphalt Shingles: Which Roof Is Right for You?",
    description: "Compare metal roofing vs asphalt shingles. Learn about cost, durability, energy efficiency, and maintenance to choose the right roof for your home.",
    image: metalVsAsphalt,
    slug: "/metal-vs-asphalt-",
    category: "Materials"
  }
];

const Blogs = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Roofing Blog | Expert Tips & Guides | Happy Home Roofing</title>
        <meta name="description" content="Expert roofing advice, tips, and guides. Learn about roof repair, storm damage, winter preparation, inspections, and material comparisons." />
        <meta name="keywords" content="roofing blog, roof repair tips, storm damage, winter preparation, roof inspection, roofing materials" />
        <link rel="canonical" href="/blogs" />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Roofing Blog & Expert Guides
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay informed with our comprehensive roofing guides, expert tips, and industry insights to help protect and maintain your home.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {post.description}
                  </CardDescription>
                  <Link to={post.slug}>
                    <Button className="w-full">
                      Read Full Article
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blogs;