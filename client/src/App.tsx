import { useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Router, Route } from "wouter";
import Home from "@/pages/home";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Projects from "@/pages/projects";
import { InstalacionesTechosPage } from "@/pages/instalaciones-techos";
import { InstalacionesMaderaPage } from "@/pages/instalaciones-madera";
import { ConstruccionAguaPage } from "@/pages/construccion-agua";
import { ConstruccionTierraPage } from "@/pages/construccion-tierra";
import { Navigation } from "@/components/navigation";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <Router>
            <div className="min-h-screen bg-background">
              <Navigation />
              
              <main>
                <Route path="/" component={Home} />
                <Route path="/nosotros" component={About} />
                <Route path="/proyectos" component={Projects} />
                <Route path="/contacto" component={Contact} />
                <Route path="/instalaciones/sanitarias" component={InstalacionesTechosPage} />
                <Route path="/instalaciones/madera" component={InstalacionesMaderaPage} />
                <Route path="/construccion/agua" component={ConstruccionAguaPage} />
                <Route path="/construccion/tierra" component={ConstruccionTierraPage} />
              </main>
              <Footer />
            </div>
            <Toaster />
          </Router>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
