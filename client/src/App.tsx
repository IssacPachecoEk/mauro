import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Router, Route } from "wouter";
import Home from "@/pages/home";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Projects from "@/pages/projects";
import ProjectDetail from "@/pages/project-detail";
import { ServiceTemplate } from "@/components/ServiceTemplate";
import { getServiceConfigurations } from "@/data/serviceConfigurations";
import { useLanguage } from "@/contexts/LanguageContext";
import { Navigation } from "@/components/navigation";
import Footer from "@/components/Footer";

function App() {
  const { t } = useLanguage();
  const serviceConfigurations = getServiceConfigurations(t);
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router>
          <Route path="/">
            <div className="min-h-screen bg-background">
              <Home />
            </div>
          </Route>
          {/* Arquitectura */}
          <Route path="/arquitectura/arquitectonico">
            <div className="min-h-screen bg-background">
              <Navigation />
              <main>
                <ServiceTemplate {...serviceConfigurations.arquitectonico} />
              </main>
              <Footer />
            </div>
          </Route>
          <Route path="/arquitectura/visual">
            <div className="min-h-screen bg-background">
              <Navigation />
              <main>
                <ServiceTemplate {...serviceConfigurations.visual} />
              </main>
              <Footer />
            </div>
          </Route>
          {/* Estructural */}
          <Route path="/estructural/sismorresistente">
            <div className="min-h-screen bg-background">
              <Navigation />
              <main>
                <ServiceTemplate {...serviceConfigurations.sismorresistente} />
              </main>
              <Footer />
            </div>
          </Route>
          <Route path="/estructural/eolica">
            <div className="min-h-screen bg-background">
              <Navigation />
              <main>
                <ServiceTemplate {...serviceConfigurations.eolica} />
              </main>
              <Footer />
            </div>
          </Route>
          {/* Instalaciones */}
          <Route path="/instalaciones/sanitarias">
            <div className="min-h-screen bg-background">
              <Navigation />
              <main>
                <ServiceTemplate {...serviceConfigurations.sanitarias} />
              </main>
              <Footer />
            </div>
          </Route>
          <Route path="/instalaciones/hidraulicas">
            <div className="min-h-screen bg-background">
              <Navigation />
              <main>
                <ServiceTemplate {...serviceConfigurations.hidraulicas} />
              </main>
              <Footer />
            </div>
          </Route>
          <Route path="/instalaciones/electricas">
            <div className="min-h-screen bg-background">
              <Navigation />
              <main>
                <ServiceTemplate {...serviceConfigurations.electricas} />
              </main>
              <Footer />
            </div>
          </Route>
          <Route path="/instalaciones/especiales">
            <div className="min-h-screen bg-background">
              <Navigation />
              <main>
                <ServiceTemplate {...serviceConfigurations.especiales} />
              </main>
              <Footer />
            </div>
          </Route>
          {/* Construcción */}
          <Route path="/construccion/civil">
            <div className="min-h-screen bg-background">
              <Navigation />
              <main>
                <ServiceTemplate {...serviceConfigurations.civil} />
              </main>
              <Footer />
            </div>
          </Route>
          <Route path="/construccion/industrial">
            <div className="min-h-screen bg-background">
              <Navigation />
              <main>
                <ServiceTemplate {...serviceConfigurations.industrial} />
              </main>
              <Footer />
            </div>
          </Route>
          {/* Información */}
          <Route path="/informacion/proyectos">
            <div className="min-h-screen bg-background">
              <Navigation />
              <main>
                <Projects />
              </main>
              <Footer />
            </div>
          </Route>
          <Route path="/informacion/contacto">
            <div className="min-h-screen bg-background">
              <Navigation />
              <main>
                <Contact />
              </main>
              <Footer />
            </div>
          </Route>
          <Route path="/informacion/nosotros">
            <div className="min-h-screen bg-background">
              <Navigation />
              <main>
                <About />
              </main>
              <Footer />
            </div>
          </Route>
          <Route path="/nosotros">
            <div className="min-h-screen bg-background">
              <Navigation />
              <main>
                <About />
              </main>
              <Footer />
            </div>
          </Route>
          <Route path="/proyectos">
            <div className="min-h-screen bg-background">
              <Navigation />
              <main>
                <Projects />
              </main>
              <Footer />
            </div>
          </Route>
          <Route path="/proyecto/:id">
            <div className="min-h-screen bg-background">
              <Navigation />
              <main>
                <ProjectDetail />
              </main>
              <Footer />
            </div>
          </Route>
          <Route path="/servicio/:id">
            <div className="min-h-screen bg-background">
              <Navigation />
              <main>
                <ServiceTemplate serviceConfigurations={serviceConfigurations} />
              </main>
              <Footer />
            </div>
          </Route>
          <Route path="/contacto">
            <div className="min-h-screen bg-background">
              <Navigation />
              <main>
                <Contact />
              </main>
              <Footer />
            </div>
          </Route>
          <Route path="/instalaciones/sanitarias">
            <div className="min-h-screen bg-background">
              <Navigation />
              <main>
                <ServiceTemplate {...serviceConfigurations.sanitarias} />
              </main>
              <Footer />
            </div>
          </Route>
          <Route path="/instalaciones/hidraulicas">
            <div className="min-h-screen bg-background">
              <Navigation />
              <main>
                <ServiceTemplate {...serviceConfigurations.hidraulicas} />
              </main>
              <Footer />
            </div>
          </Route>
          <Route path="/instalaciones/electricas">
            <div className="min-h-screen bg-background">
              <Navigation />
              <main>
                <ServiceTemplate {...serviceConfigurations.electricas} />
              </main>
              <Footer />
            </div>
          </Route>
          <Route path="/instalaciones/especiales">
            <div className="min-h-screen bg-background">
              <Navigation />
              <main>
                <ServiceTemplate {...serviceConfigurations.especiales} />
              </main>
              <Footer />
            </div>
          </Route>
          <Route path="/construccion/civil">
            <div className="min-h-screen bg-background">
              <Navigation />
              <main>
                <ServiceTemplate {...serviceConfigurations.civil} />
              </main>
              <Footer />
            </div>
          </Route>
          <Route path="/construccion/industrial">
            <div className="min-h-screen bg-background">
              <Navigation />
              <main>
                <ServiceTemplate {...serviceConfigurations.industrial} />
              </main>
              <Footer />
            </div>
          </Route>
          <Route>
            <div className="min-h-screen bg-background">
              <Navigation />
              <main>
                <h1 className="text-center mt-20">404 - Página no encontrada</h1>
              </main>
              <Footer />
            </div>
          </Route>
        </Router>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
