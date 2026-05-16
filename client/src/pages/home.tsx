import { Link, useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";
import { ChevronDown, Globe} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { USFlag, MXFlag, PTFlag, FRFlag, CNFlag } from "@/components/ui/flag-icons";

export default function Home() {
  const { t, language, setLanguage } = useLanguage();
  const [location] = useLocation();
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({});
  const [isScrolled, setIsScrolled] = useState(false);

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
  
  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  
  return (
    <>
      {/* DISEÑO MÓVIL - Mantiene el diseño original */}
      <div className="md:hidden relative min-h-screen flex items-center justify-center">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/video/intro.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        {/* Content */}
        <div className="relative z-20 text-center text-white px-4 max-w-2xl mx-auto">
          {/* Main Title */}
          <h1 className="text-2xl font-light tracking-[0.3em] mb-6">
            {t('home.hero.title')}
          </h1>
          {/* Subtitle */}
          <p className="text-sm font-light tracking-[0.2em] mb-3 uppercase">
            {t('home.hero.subtitle')}
          </p>
          <p className="text-sm font-light tracking-[0.15em] mb-12 uppercase">
            MAURO MUÑOZ Y ÁLVARO MAY
          </p>
          {/* Navigation Menu */}
          <nav className="space-y-6">
            {/* Arquitectura */}
            <div className="space-y-2">
              <button
                onClick={() => toggleSection('arquitectura')}
                className="w-full text-center group cursor-pointer py-2 px-4 bg-gray-600 rounded-md border-2 border-white"
              >
                <p className="text-sm font-light tracking-[0.2em] uppercase">
                  {t('nav.arquitectura')}
                </p>
              </button>
              {expandedSections.arquitectura && (
                <div className="flex flex-col items-center space-y-1 pt-2">
                  <Link href="/arquitectura/arquitectonico">
                    <div className="group bg-gray-600 rounded-md border-2 border-white py-2 px-4 cursor-pointer">
                      <p className="text-sm font-light tracking-[0.15em] uppercase">
                        {t('nav.arquitectura.arquitectonico')}
                      </p>
                    </div>
                  </Link>
                  <Link href="/arquitectura/visual">
                    <div className="group bg-gray-600 rounded-md border-2 border-white py-2 px-4 cursor-pointer">
                      <p className="text-sm font-light tracking-[0.15em] uppercase">
                        {t('nav.arquitectura.visual')}
                      </p>
                    </div>
                  </Link>
                </div>
              )}
            </div>
            {/* Estructural */}
            <div className="space-y-2">
              <button
                onClick={() => toggleSection('estructural')}
                className="w-full text-center group cursor-pointer py-2 px-4 bg-gray-600 rounded-md border-2 border-white"
              >
                <p className="text-sm font-light tracking-[0.2em] uppercase">
                  {t('nav.estructural')}
                </p>
              </button>
              {expandedSections.estructural && (
                <div className="flex flex-col items-center space-y-1 pt-2">
                  <Link href="/estructural/sismorresistente">
                    <div className="group bg-gray-600 rounded-md border-2 border-white py-2 px-4 cursor-pointer">
                      <p className="text-sm font-light tracking-[0.15em] uppercase">
                        {t('nav.estructural.sismorresistente')}
                      </p>
                    </div>
                  </Link>
                  <Link href="/estructural/eolica">
                    <div className="group bg-gray-600 rounded-md border-2 border-white py-2 px-4 cursor-pointer">
                      <p className="text-sm font-light tracking-[0.15em] uppercase">
                        {t('nav.estructural.eolica')}
                      </p>
                    </div>
                  </Link>
                </div>
              )}
            </div>
            {/* Instalaciones */}
            <div className="space-y-2">
              <button
                onClick={() => toggleSection('instalaciones')}
                className="w-full text-center group cursor-pointer py-2 px-4 bg-gray-600 rounded-md border-2 border-white"
              >
                <p className="text-sm font-light tracking-[0.2em] uppercase">
                  {t('nav.instalaciones')}
                </p>
              </button>
              {expandedSections.instalaciones && (
                <div className="flex flex-col items-center space-y-1 pt-2">
                  <Link href="/instalaciones/sanitarias">
                    <div className="group bg-gray-600 rounded-md border-2 border-white py-2 px-4 cursor-pointer">
                      <p className="text-sm font-light tracking-[0.15em] uppercase">
                        {t('nav.instalaciones.sanitarias')}
                      </p>
                    </div>
                  </Link>
                  <Link href="/instalaciones/hidraulicas">
                    <div className="group bg-gray-600 rounded-md border-2 border-white py-2 px-4 cursor-pointer">
                      <p className="text-sm font-light tracking-[0.15em] uppercase">
                        {t('nav.instalaciones.hidraulicas')}
                      </p>
                    </div>
                  </Link>
                  <Link href="/instalaciones/electricas">
                    <div className="group bg-gray-600 rounded-md border-2 border-white py-2 px-4 cursor-pointer">
                      <p className="text-sm font-light tracking-[0.15em] uppercase">
                        {t('nav.instalaciones.electricas')}
                      </p>
                    </div>
                  </Link>
                  <Link href="/instalaciones/especiales">
                    <div className="group bg-gray-600 rounded-md border-2 border-white py-2 px-4 cursor-pointer">
                      <p className="text-sm font-light tracking-[0.15em] uppercase">
                        {t('nav.instalaciones.especiales')}
                      </p>
                    </div>
                  </Link>
                </div>
              )}
            </div>
            {/* Construcción */}
            <div className="space-y-2">
              <button
                onClick={() => toggleSection('construccion')}
                className="w-full text-center group cursor-pointer py-2 px-4 bg-gray-600 rounded-md border-2 border-white"
              >
                <p className="text-sm font-light tracking-[0.2em] uppercase">
                  {t('nav.construccion')}
                </p>
              </button>
              {expandedSections.construccion && (
                <div className="flex flex-col items-center space-y-1 pt-2">
                  <Link href="/construccion/civil">
                    <div className="group bg-gray-600 rounded-md border-2 border-white py-2 px-4 cursor-pointer">
                      <p className="text-sm font-light tracking-[0.15em] uppercase">
                        {t('nav.construccion.civil')}
                      </p>
                    </div>
                  </Link>
                  <Link href="/construccion/industrial">
                    <div className="group bg-gray-600 rounded-md border-2 border-white py-2 px-4 cursor-pointer">
                      <p className="text-sm font-light tracking-[0.15em] uppercase">
                        {t('nav.construccion.industrial')}
                      </p>
                    </div>
                  </Link>
                </div>
              )}
            </div>
            {/* Informacion */}
            <div className="space-y-2">
              <button
                onClick={() => toggleSection('informacion')}
                className="w-full text-center group cursor-pointer py-2 px-4 bg-gray-600 rounded-md border-2 border-white"
              >
                <p className="text-sm font-light tracking-[0.2em] uppercase">
                  {t('nav.informacion')}
                </p>
              </button>
              {expandedSections.informacion && (
                <div className="flex flex-col items-center space-y-1 pt-2">
                  <Link href="/proyectos">
                    <div className="group bg-gray-600 rounded-md border-2 border-white py-2 px-4 cursor-pointer">
                      <p className="text-sm font-light tracking-[0.15em] uppercase">
                        {t('nav.informacion.proyectos')}
                      </p>
                    </div>
                  </Link>
                  <Link href="/contacto">
                    <div className="group bg-gray-600 rounded-md border-2 border-white py-2 px-4 cursor-pointer">
                      <p className="text-sm font-light tracking-[0.15em] uppercase">
                        {t('nav.informacion.contacto')}
                      </p>
                    </div>
                  </Link>
                  <Link href="/nosotros">
                    <div className="group bg-gray-600 rounded-md border-2 border-white py-2 px-4 cursor-pointer">
                      <p className="text-sm font-light tracking-[0.15em] uppercase">
                        {t('nav.informacion.nosotros')}
                      </p>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>

      {/* DISEÑO DESKTOP/TABLET - Nuevo diseño basado en la imagen */}
      <div className="hidden md:block relative min-h-screen">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/video/intro.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        {/* Header Navigation */}
        <nav className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-lg border-b border-gray-200' 
            : 'bg-transparent'
        }`}>
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/">
                <div className="flex items-center space-x-3 cursor-pointer">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                  isScrolled ? 'bg-gray-800' : 'bg-white/90'
                }`}>
                  <span className={`text-xl font-bold transition-colors duration-300 ${
                    isScrolled ? 'text-white' : 'text-gray-900'
                  }`}>MM</span>
                  </div>
                </div>
              </Link>
              {/* Navigation Links */}
              <div className={`flex space-x-8 items-center ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                <Link href="/">
                  <Button
                    variant="ghost"
                    className={`${isScrolled ? 'text-gray-800' : 'text-white'} font-light tracking-wider uppercase transition-colors duration-300 border-2 border-white px-4 py-2`}
                  >
                    {t('nav.inicio')}
                  </Button>
                </Link>
                {/* Arquitectura Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={`${isScrolled ? 'text-gray-800' : 'text-white'} font-light tracking-wider uppercase flex items-center space-x-1 transition-colors duration-300 border-2 border-white px-4 py-2`}
                    >
                      <span>{t('nav.arquitectura')}</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white/90 backdrop-blur-sm border-0">
                    <DropdownMenuItem asChild>
                      <Link href="/arquitectura/arquitectonico">
                        <span className="uppercase tracking-wide">{t('nav.arquitectura.arquitectonico')}</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/arquitectura/visual">
                        <span className="uppercase tracking-wide">{t('nav.arquitectura.visual')}</span>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                {/* Estructural Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={`${isScrolled ? 'text-gray-800' : 'text-white'} font-light tracking-wider uppercase flex items-center space-x-1 transition-colors duration-300 border-2 border-white px-4 py-2`}
                    >
                      <span>{t('nav.estructural')}</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white/90 backdrop-blur-sm border-0">
                    <DropdownMenuItem asChild>
                      <Link href="/estructural/sismorresistente">
                        <span className="uppercase tracking-wide">{t('nav.estructural.sismorresistente')}</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/estructural/eolica">
                        <span className="uppercase tracking-wide">{t('nav.estructural.eolica')}</span>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                {/* Instalaciones Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={`${isScrolled ? 'text-gray-800' : 'text-white'} font-light tracking-wider uppercase flex items-center space-x-1 transition-colors duration-300 border-2 border-white px-4 py-2`}
                    >
                      <span>{t('nav.instalaciones')}</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white/90 backdrop-blur-sm border-0">
                    <DropdownMenuItem asChild>
                      <Link href="/instalaciones/sanitarias">
                        <span className="uppercase tracking-wide">{t('nav.instalaciones.sanitarias')}</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/instalaciones/hidraulicas">
                        <span className="uppercase tracking-wide">{t('nav.instalaciones.hidraulicas')}</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/instalaciones/electricas">
                        <span className="uppercase tracking-wide">{t('nav.instalaciones.electricas')}</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/instalaciones/especiales">
                        <span className="uppercase tracking-wide">{t('nav.instalaciones.especiales')}</span>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                {/* Construcción Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={`${isScrolled ? 'text-gray-800' : 'text-white'} font-light tracking-wider uppercase flex items-center space-x-1 transition-colors duration-300 border-2 border-white px-4 py-2`}
                    >
                      <span>{t('nav.construccion')}</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white/90 backdrop-blur-sm border-0">
                    <DropdownMenuItem asChild>
                      <Link href="/construccion/civil">
                        <span className="uppercase tracking-wide">{t('nav.construccion.civil')}</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/construccion/industrial">
                        <span className="uppercase tracking-wide">{t('nav.construccion.industrial')}</span>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                {/* Informacion Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={`${isScrolled ? 'text-gray-800' : 'text-white'} font-light tracking-wider uppercase flex items-center space-x-1 transition-colors duration-300 border-2 border-white px-4 py-2`}
                    >
                      <span>{t('nav.informacion')}</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white/90 backdrop-blur-sm border-0">
                    <DropdownMenuItem asChild>
                      <Link href="/proyectos">
                        <span className="uppercase tracking-wide">{t('nav.informacion.proyectos')}</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/contacto">
                        <span className="uppercase tracking-wide">{t('nav.informacion.contacto')}</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/nosotros">
                        <span className="uppercase tracking-wide">{t('nav.informacion.nosotros')}</span>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                {/* Language Selector */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={`${isScrolled ? 'text-gray-800' : 'text-white'} flex items-center space-x-1 transition-colors duration-300 border-2 border-white px-4 py-2`}
                    >
                      <Globe className="h-4 w-4" />
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white/90 backdrop-blur-sm border-0">
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
            </div>
          </div>
        </nav>
        {/* Main Content */}
        <div className="relative z-20 flex items-center justify-center min-h-screen pt-20">
          <div className="text-center text-white px-8 max-w-4xl mx-auto">
            {/* Main Title */}
            <h1 className="text-5xl lg:text-7xl font-light tracking-[0.3em] mb-6">
              {t('home.hero.title')}
            </h1>
            <h2 className="text-4xl lg:text-6xl font-light tracking-[0.3em] mb-12">
              M&M
            </h2>
            {/* Subtitle */}
            <p className="text-xl lg:text-2xl font-light tracking-[0.2em] mb-16 uppercase max-w-2xl mx-auto leading-relaxed">
              {t('home.hero.subtitle')}
            </p>
            <p className="text-xl lg:text-2xl font-light tracking-[0.2em] mb-16 uppercase max-w-2xl mx-auto leading-relaxed">
              {/* Puedes agregar otra clave de traducción si tienes otro subtítulo */}
              Y PRECISIÓN
            </p>
            {/* CTA Button */}
            <Link href="/proyectos">
              <Button
                className="bg-orange-500 text-white px-12 py-4 text-sm font-light tracking-[0.15em] uppercase rounded-none border-0"
              >
                {t('projects.cta.button')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
