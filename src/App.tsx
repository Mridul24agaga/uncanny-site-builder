import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MidlandOdessa from "./pages/MidlandOdessa";
import RoofStormDamage from "./pages/RoofStormDamage";
import RoofRepairWarnings from "./pages/RoofRepairWarnings";
import WinterRoofPreparation from "./pages/WinterRoofPreparation";
import RoofInspectionChecklist from "./pages/RoofInspectionChecklist";
import MetalVsAsphalt from "./pages/MetalVsAsphalt";
import Blogs from "./pages/Blogs";
import NotFound from "./pages/NotFound";
import ImagePreloader from "./components/ImagePreloader";

const queryClient = new QueryClient();

// Critical images that should be preloaded for fast loading
const criticalImages = [
  '/lovable-uploads/b808aa46-b91e-4f5b-8573-6e27bb488e2e.png', // Logo
  '/lovable-uploads/8ee16cd7-0fa7-471d-bed9-4470d670809a.png', // Hero background
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ImagePreloader images={criticalImages} />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/midland-odessa" element={<MidlandOdessa />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/5-most-common-causes-of-roof-storm-damage" element={<RoofStormDamage />} />
          <Route path="/7-warning-signs-your-roof-needs-immediate-repair" element={<RoofRepairWarnings />} />
          <Route path="/how-to-prepare-your-roof-for-winter" element={<WinterRoofPreparation />} />
          <Route path="/roof-inspection-checklist" element={<RoofInspectionChecklist />} />
          <Route path="/metal-vs-asphalt-" element={<MetalVsAsphalt />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
