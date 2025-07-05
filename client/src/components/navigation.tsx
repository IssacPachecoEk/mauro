import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Building2, Home, Users, Phone } from "lucide-react";
import { useState } from "react"; // Añadimos useState para controlar el menú móvil

export function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Estado para el menú móvil

  return (
    <>
      {/* Barra de navegación fija */}
      <nav className="bg-white shadow-md border-b fixed w-full top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center space-x-2 cursor-pointer">
                <Building2 className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">Mauro Muñoz Construcciones</span>
              </div>
            </Link>

            {/* Navigation Links (desktop) */}
            <div className="hidden md:flex space-x-8">
              <Link href="/">
                <Button
                  variant={location === "/" ? "default" : "ghost"}
                  className="flex items-center space-x-2"
                >
                  <Home className="h-4 w-4" />
                  <span>Inicio</span>
                </Button>
              </Link>
              <Link href="/nosotros">
                <Button
                  variant={location === "/nosotros" ? "default" : "ghost"}
                  className="flex items-center space-x-2"
                >
                  <Users className="h-4 w-4" />
                  <span>Sobre mi</span>
                </Button>
              </Link>
              <Link href="/contacto">
                <Button
                  variant={location === "/contacto" ? "default" : "ghost"}
                  className="flex items-center space-x-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>Contacto</span>
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Mobile menu (condicional) */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 bg-white">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant={location === "/" ? "default" : "ghost"}
                  className="w-full justify-start"
                >
                  <Home className="h-4 w-4 mr-2" />
                  Inicio
                </Button>
              </Link>
              <Link href="/nosotros" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant={location === "/nosotros" ? "default" : "ghost"}
                  className="w-full justify-start"
                >
                  <Users className="h-4 w-4 mr-2" />
                  Sobre mi
                </Button>
              </Link>
              <Link href="/contacto" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant={location === "/contacto" ? "default" : "ghost"}
                  className="w-full justify-start"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Contacto
                </Button>
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Espacio para compensar la barra fija */}
      <div className="pt-16 md:pt-16"></div>
    </>
  );
}