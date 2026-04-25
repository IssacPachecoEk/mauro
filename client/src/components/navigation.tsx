import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Building2, Home, Phone, Users, FolderOpen, Zap, HardHat, ChevronDown, Landmark, Pyramid, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { USFlag, MXFlag, PTFlag, FRFlag, CNFlag } from "@/components/ui/flag-icons";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Estado para el menú móvil
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  // Detectar scroll para cambiar el fondo del header
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldBeScrolled = scrollTop > 20;
      setIsScrolled(shouldBeScrolled);
    };

    // Llamar la función una vez para establecer el estado inicial
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Barra de navegación fija */}
      <nav className={`shadow-md border-b border-gray-200 fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white' 
          : 'bg-white'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center space-x-2 cursor-pointer">
                <Building2 className="h-8 w-8 text-gray-500" />
                <span className="text-xl font-bold text-gray-700">Mauro Muñoz y Alvaro May Construcciones</span>
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
               <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant={location.includes("/arquitectura") ? "default" : "ghost"}
                    className="flex items-center space-x-2"
                  >
                    <Landmark className="h-4 w-4" />
                    <span>{t('nav.arquitectura')}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/arquitectura/arquitectonico">
                      <span>{t('nav.arquitectura.arquitectonico')}</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/arquitectura/visual">
                      <span>{t('nav.arquitectura.visual')}</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant={location.includes("/estructural") ? "default" : "ghost"}
                    className="flex items-center space-x-2"
                  >
                    <Pyramid className="h-4 w-4" />
                    <span>{t('nav.estructural')}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/estructural/sismorresistente">
                      <span>{t('nav.estructural.sismorresistente')}</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/estructural/eolica">
                      <span>{t('nav.estructural.eolica')}</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
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
                    <Link href="/construccion/civil">
                      <span>{t('nav.construccion.civil')}</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/construccion/industrial">
                      <span>{t('nav.construccion.industrial')}</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="/nosotros">
                <Button
                  variant={location === "/nosotros" ? "default" : "ghost"}
                  className="flex items-center space-x-2"
                >
                  <Users className="h-4 w-4" />
                  <span>{t('nav.sobre-nosotros')}</span>
                </Button>
              </Link>
              <Link href="/proyectos">
                <Button
                  variant={location === "/proyectos" ? "default" : "ghost"}
                  className="flex items-center space-x-2"
                >
                  <FolderOpen className="h-4 w-4" />
                  <span>{t('nav.proyectos')}</span>
                </Button>
              </Link>
              <Link href="/contacto">
                <Button
                  variant={location === "/contacto" ? "default" : "ghost"}
                  className="flex items-center space-x-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>{t('nav.contacto')}</span>
                </Button>
              </Link>
              
              {/* Language Selector Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center space-x-2"
                  >
                    <Globe className="h-4 w-4" />
                    <span>{t(`language.${language}`)}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem 
                    onClick={() => setLanguage('es')}
                    className="flex items-center space-x-2"
                  >
                    <MXFlag className="rounded-sm" width={20} height={14} />
                    <span>{t('language.es')}</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => setLanguage('en')}
                    className="flex items-center space-x-2"
                  >
                    <USFlag className="rounded-sm" width={20} height={14} />
                    <span>{t('language.en')}</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => setLanguage('pt')}
                    className="flex items-center space-x-2"
                  >
                    <PTFlag className="rounded-sm" width={20} height={14} />
                    <span>{t('language.pt')}</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => setLanguage('fr')}
                    className="flex items-center space-x-2"
                  >
                    <FRFlag className="rounded-sm" width={20} height={14} />
                    <span>{t('language.fr')}</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => setLanguage('cn')}
                    className="flex items-center space-x-2"
                  >
                    <CNFlag className="rounded-sm" width={20} height={14} />
                    <span>{t('language.cn')}</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
            <div className="md:hidden pb-4 space-y-2 bg-white border-t border-gray-200">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant={location === "/" ? "default" : "ghost"}
                  className="w-full justify-start"
                >
                  <Home className="h-4 w-4 mr-2" />
                  {t('nav.inicio')}
                </Button>
              </Link>
              <Link href="/nosotros" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant={location === "/nosotros" ? "default" : "ghost"}
                  className="w-full justify-start"
                >
                  <Users className="h-4 w-4 mr-2" />
                  {t('nav.sobre-nosotros')}
                </Button>
              </Link>

              <div className="space-y-1">
                <Button
                  variant={location.includes("/arquitectura") ? "default" : "ghost"}
                  className="w-full justify-start text-sm font-medium"
                >
                  <Landmark className="h-4 w-4 mr-2" />
                  {t('nav.arquitectura')}
                </Button>
                <div className="pl-6 space-y-1">
                  <Link href="/arquitectura/arquitectonico" onClick={() => setMobileMenuOpen(false)}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm"
                    >
                      {t('nav.arquitectura.arquitectonico')}
                    </Button>
                  </Link>
                  <Link href="/arquitectura/visual" onClick={() => setMobileMenuOpen(false)}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm"
                    >
                      {t('nav.arquitectura.visual')}
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="space-y-1">
                <Button
                  variant={location.includes("/estructural") ? "default" : "ghost"}
                  className="w-full justify-start text-sm font-medium"
                >
                  <Pyramid className="h-4 w-4 mr-2" />
                  {t('nav.estructural')}
                </Button>
                <div className="pl-6 space-y-1">
                  <Link href="/estructural/sismorresistente" onClick={() => setMobileMenuOpen(false)}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm"
                    >
                      {t('nav.estructural.sismorresistente')}
                    </Button>
                  </Link>
                  <Link href="/estructural/eolica" onClick={() => setMobileMenuOpen(false)}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm"
                    >
                      {t('nav.estructural.eolica')}
                    </Button>
                  </Link>
                </div>
              </div>
              
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
                  <Link href="/construccion/civil" onClick={() => setMobileMenuOpen(false)}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm"
                    >
                      {t('nav.construccion.civil')}
                    </Button>
                  </Link>
                  <Link href="/construccion/industrial" onClick={() => setMobileMenuOpen(false)}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm"
                    >
                      {t('nav.construccion.industrial')}
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
              <Link href="/contacto" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant={location === "/contacto" ? "default" : "ghost"}
                  className="w-full justify-start"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  {t('nav.contacto')}
                </Button>
              </Link>
              
              {/* Language Selector Mobile */}
              <div className="space-y-1">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-sm font-medium"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  {t('nav.idioma') || 'Idioma'}
                </Button>
                <div className="pl-6 space-y-1">
                  <Button
                    variant="ghost"
                    onClick={() => setLanguage('es')}
                    className="w-full justify-start text-sm"
                  >
                    <MXFlag className="rounded-sm mr-2" width={16} height={12} />
                    {t('language.es')}
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => setLanguage('en')}
                    className="w-full justify-start text-sm"
                  >
                    <USFlag className="rounded-sm mr-2" width={16} height={12} />
                    {t('language.en')}
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => setLanguage('pt')}
                    className="w-full justify-start text-sm"
                  >
                    <PTFlag className="rounded-sm mr-2" width={16} height={12} />
                    {t('language.pt')}
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => setLanguage('fr')}
                    className="w-full justify-start text-sm"
                  >
                    <FRFlag className="rounded-sm mr-2" width={16} height={12} />
                    {t('language.fr')}
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => setLanguage('cn')}
                    className="w-full justify-start text-sm"
                  >
                    <CNFlag className="rounded-sm mr-2" width={16} height={12} />
                    {t('language.cn')}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Espacio para compensar la barra fija */}
      <div className="pt-16 md:pt-16"></div>
    </>
  );
}