import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import References from "./pages/References";
import Services from "./pages/Services";
import Impressum from "./pages/Impressum";
import Terms from "./pages/Terms";
import SiteLayout from "./layouts/SiteLayout";

const queryClient = new QueryClient();

const App = () => {
  const isFile = typeof window !== 'undefined' && window.location.protocol === 'file:';
  const Router = isFile ? HashRouter : BrowserRouter;

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Router>
            <SiteLayout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/ueber-mich" element={<About />} />
                <Route path="/referenzen" element={<References />} />
                <Route path="/leistungen" element={<Services />} />
                <Route path="/impressum" element={<Impressum />} />
                <Route path="/agb" element={<Terms />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </SiteLayout>
          </Router>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
