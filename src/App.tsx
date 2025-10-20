import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import References from "./pages/References";
import Services from "./pages/Services";
import Wohnungselektro from "./pages/Wohnungselektro";
import SmartHome from "./pages/SmartHome";
import Balkonkraftwerk from "./pages/Balkonkraftwerk";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Impressum from "./pages/Impressum";
import Terms from "./pages/Terms";
import ScrollToTop from "./components/ScrollToTop";
import SiteLayout from "./layouts/SiteLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <SiteLayout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/ueber-mich" element={<About />} />
              <Route path="/referenzen" element={<References />} />
              <Route path="/leistungen" element={<Services />} />
              <Route path="/wohnungselektro" element={<Wohnungselektro />} />
              <Route path="/smart-home" element={<SmartHome />} />
              <Route path="/balkonkraftwerk" element={<Balkonkraftwerk />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/kontakt" element={<Contact />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/agb" element={<Terms />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </SiteLayout>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
