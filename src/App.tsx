import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MidlandOdessa from "./pages/MidlandOdessa";
import NotFound from "./pages/NotFound";
import ImagePreloader from "./components/ImagePreloader";

const queryClient = new QueryClient();

// Critical images that should be preloaded for fast loading
const criticalImages = [
  '/lovable-uploads/b808aa46-b91e-4f5b-8573-6e27bb488e2e.png', // Logo
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
