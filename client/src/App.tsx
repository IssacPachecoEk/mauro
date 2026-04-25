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
            <Route path="/">
              {/* Home sin navegación ni footer */}
              <div className="min-h-screen bg-background">
                <Home />
              </div>
            </Route>
            
            {/* Todas las demás rutas con navegación y footer */}
            <Route path="/:rest*">
              <div className="min-h-screen bg-background">
                <Navigation />
                <main>
                  <Route path="/nosotros" component={About} />
                  <Route path="/proyectos" component={Projects} />
                  <Route path="/contacto" component={Contact} />
                  <Route path="/arquitectura/arquitectonico" component={InstalacionesTechosPage} />
                  <Route path="/arquitectura/visual" component={InstalacionesMaderaPage} />
                  <Route path="/estructural/sismorresistente" component={InstalacionesTechosPage} />
                  <Route path="/estructural/eolica" component={InstalacionesMaderaPage} />
                  <Route path="/instalaciones/sanitarias" component={InstalacionesTechosPage} />
                  <Route path="/instalaciones/hidraulicas" component={InstalacionesMaderaPage} />
                  <Route path="/instalaciones/electricas" component={InstalacionesTechosPage} />
                  <Route path="/instalaciones/especiales" component={InstalacionesMaderaPage} />
                  <Route path="/construccion/civil" component={ConstruccionAguaPage} />
                  <Route path="/construccion/industrial" component={ConstruccionTierraPage} />
                </main>
                <Footer />
              </div>
            </Route>
            <Toaster />
          </Router>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
