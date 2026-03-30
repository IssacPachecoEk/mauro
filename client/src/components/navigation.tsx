import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Building2, Home, Users, Phone, FolderOpen, Hammer, Zap, HardHat, ChevronDown } from "lucide-react";
import { useState } from "react"; // Añadimos useState para controlar el menú móvil
import { useLanguage } from "@/contexts/LanguageContext";
import { USFlag, MXFlag } from "@/components/ui/flag-icons";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Estado para el menú móvil
  const { language, setLanguage, t } = useLanguage();

  return (
    <>
      {/* Barra de navegación fija */}
      <nav className="bg-stone-350 shadow-md border-b fixed w-full top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center space-x-2 cursor-pointer">
                <Building2 className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">Mauro Muñoz y Alvaro May Construcciones</span>
              </div>
            </Link>

            {/* Navigation Links (desktop) */}
            <div className="hidden md:flex space-x-8 items-center">
              <Link href="/">
                <Button
                  variant={location === "/" ? "default" : "ghost"}
                  className="flex items-center space-x-2"
                >
                  <Home className="h-4 w-4" />
                  <span>{t('nav.inicio')}</span>
                </Button>
              </Link>
              <Link href="/arquitectura">
                <Button
                  variant={location === "/arquitectura" ? "default" : "ghost"}
                  className="flex items-center space-x-2"
                >
                  <Users className="h-4 w-4" />
                  <span>{t('nav.sobre-mi')}</span>
                </Button>
              </Link>
              {/* <Link href="/nosotros">
                <Button
                  variant={location === "/nosotros" ? "default" : "ghost"}
                  className="flex items-center space-x-2"
                >
                  <Users className="h-4 w-4" />
                  <span>{t('nav.sobre-mi')}</span>
                </Button>
              </Link> */}
              <Link href="/estructural">
                <Button
                  variant={location === "/estructural" ? "default" : "ghost"}
                  className="flex items-center space-x-2"
                >
                  <Hammer className="h-4 w-4" />
                  <span>{t('nav.contacto')}</span>
                </Button>
              </Link>
              
              {/* Instalaciones with Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant={location.includes("/instalaciones") ? "default" : "ghost"}
                    className="flex items-center space-x-2"
                  >
                    <Zap className="h-4 w-4" />
                    <span>{t('nav.instalaciones')}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/instalaciones/sanitarias">
                      <span>{t('nav.instalaciones.sanitarias')}</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/instalaciones/hidraulicas">
                      <span>{t('nav.instalaciones.hidraulicas')}</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/instalaciones/electricas">
                      <span>{t('nav.instalaciones.electricas')}</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/instalaciones/especiales">
                      <span>{t('nav.instalaciones.especiales')}</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              {/* Construccion with Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant={location.includes("/construccion") ? "default" : "ghost"}
                    className="flex items-center space-x-2"
                  >
                    <HardHat className="h-4 w-4" />
                    <span>{t('nav.construccion')}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/construccion/agua">
                      <span>{t('nav.construccion.agua')}</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/construccion/tierra">
                      <span>{t('nav.construccion.tierra')}</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="/proyectos">
                <Button
                  variant={location === "/proyectos" ? "default" : "ghost"}
                  className="flex items-center space-x-2"
                >
                  <FolderOpen className="h-4 w-4" />
                  <span>{t('nav.proyectos')}</span>
                </Button>
              </Link>
              {/* <Link href="/contacto">
                <Button
                  variant={location === "/contacto" ? "default" : "ghost"}
                  className="flex items-center space-x-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>{t('nav.contacto')}</span>
                </Button>
              </Link> */}
              
              {/* Language Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                className="flex items-center space-x-2"
              >
                {language === 'es' ? (
                  <MXFlag className="rounded-sm" width={20} height={14} />
                ) : (
                  <USFlag className="rounded-sm" width={20} height={14} />
                )}
              </Button>
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
            <div className="md:hidden pb-4 space-y-2 bg-stone-200">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant={location === "/" ? "default" : "ghost"}
                  className="w-full justify-start"
                >
                  <Home className="h-4 w-4 mr-2" />
                  {t('nav.inicio')}
                </Button>
              </Link>
              <Link href="/arquitectura" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant={location === "/arquitectura" ? "default" : "ghost"}
                  className="w-full justify-start"
                >
                  <Users className="h-4 w-4 mr-2" />
                  {t('nav.sobre-mi')}
                </Button>
              </Link> 
              {/* <Link href="/nosotros" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant={location === "/nosotros" ? "default" : "ghost"}
                  className="w-full justify-start"
                >
                  <Users className="h-4 w-4 mr-2" />
                  {t('nav.sobre-mi')}
                </Button>
              </Link> */}
              <Link href="/estructural" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant={location === "/estructural" ? "default" : "ghost"}
                  className="w-full justify-start"
                >
                  <Hammer className="h-4 w-4 mr-2" />
                  {t('nav.contacto')}
                </Button>
              </Link>
              
              {/* Instalaciones Mobile */}
              <div className="space-y-1">
                <Button
                  variant={location.includes("/instalaciones") ? "default" : "ghost"}
                  className="w-full justify-start text-sm font-medium"
                >
                  <Zap className="h-4 w-4 mr-2" />
                  {t('nav.instalaciones')}
                </Button>
                <div className="pl-6 space-y-1">
                  <Link href="/instalaciones/sanitarias" onClick={() => setMobileMenuOpen(false)}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm"
                    >
                      {t('nav.instalaciones.sanitarias')}
                    </Button>
                  </Link>
                  <Link href="/instalaciones/hidraulicas" onClick={() => setMobileMenuOpen(false)}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm"
                    >
                      {t('nav.instalaciones.hidraulicas')}
                    </Button>
                  </Link>
                  <Link href="/instalaciones/electricas" onClick={() => setMobileMenuOpen(false)}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm"
                    >
                      {t('nav.instalaciones.electricas')}
                    </Button>
                  </Link>
                  <Link href="/instalaciones/especiales" onClick={() => setMobileMenuOpen(false)}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm"
                    >
                      {t('nav.instalaciones.especiales')}
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Construccion Mobile */}
              <div className="space-y-1">
                <Button
                  variant={location.includes("/construccion") ? "default" : "ghost"}
                  className="w-full justify-start text-sm font-medium"
                >
                  <HardHat className="h-4 w-4 mr-2" />
                  {t('nav.construccion')}
                </Button>
                <div className="pl-6 space-y-1">
                  <Link href="/construccion/agua" onClick={() => setMobileMenuOpen(false)}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm"
                    >
                      {t('nav.construccion.agua')}
                    </Button>
                  </Link>
                  <Link href="/construccion/tierra" onClick={() => setMobileMenuOpen(false)}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm"
                    >
                      {t('nav.construccion.tierra')}
                    </Button>
                  </Link>
                </div>
              </div>
              <Link href="/proyectos" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant={location === "/proyectos" ? "default" : "ghost"}
                  className="w-full justify-start"
                >
                  <FolderOpen className="h-4 w-4 mr-2" />
                  {t('nav.proyectos')}
                </Button>
              </Link>
              {/* <Link href="/contacto" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant={location === "/contacto" ? "default" : "ghost"}
                  className="w-full justify-start"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  {t('nav.contacto')}
                </Button>
              </Link> */}
              
              {/* Language Toggle Mobile */}
              <Button
                variant="ghost"
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                className="w-full justify-start"
              >
                {language === 'es' ? (
                  <>
                    <MXFlag className="rounded-sm mr-2" width={20} height={14} />
                    Español
                  </>
                ) : (
                  <>
                    <USFlag className="rounded-sm mr-2" width={20} height={14} />
                    English
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Espacio para compensar la barra fija */}
      <div className="pt-16 md:pt-16"></div>
    </>
  );
}