import { Link, useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight, Building2, Globe, Landmark, Pyramid, Zap, HardHat, FolderOpen } from "lucide-react";
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
          <h1 className="text-6xl font-light tracking-[0.3em] mb-8">
            NOMBRE EMPRESA
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg font-light tracking-[0.2em] mb-4 uppercase">
            CONSTRUCCIONES Y ARQUITECTURA
          </p>
          
          <p className="text-base font-light tracking-[0.15em] mb-16 uppercase">
            MAURO MUÑOZ Y ÁLVARO MAY
          </p>
          
          {/* Navigation Menu */}
          <nav className="space-y-6">
            {/* Arquitectura */}
            <div className="space-y-2">
              <button
                onClick={() => toggleSection('arquitectura')}
                className="w-full text-center group cursor-pointer py-3 px-6 bg-gray-600 rounded-md"
              >
                <p className="text-xl font-light tracking-[0.2em] uppercase">
                  ARQUITECTURA
                </p>
              </button>
              {expandedSections.arquitectura && (
                <div className="flex flex-col items-center space-y-1 pt-2">
                  <Link href="/arquitectura/arquitectonico">
                    <div className="group cursor-pointer py-1">
                      <p className="text-base font-light tracking-[0.15em] uppercase">
                        ARQUITECTÓNICO
                      </p>
                    </div>
                  </Link>
                  <Link href="/arquitectura/visual">
                    <div className="group cursor-pointer py-1">
                      <p className="text-base font-light tracking-[0.15em] uppercase">
                        VISUAL
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
                className="w-full text-center group cursor-pointer py-3 px-6 bg-gray-600 rounded-md"
              >
                <p className="text-xl font-light tracking-[0.2em] uppercase">
                  ESTRUCTURAL
                </p>
              </button>
              {expandedSections.estructural && (
                <div className="flex flex-col items-center space-y-1 pt-2">
                  <Link href="/estructural/sismorresistente">
                    <div className="group cursor-pointer py-1">
                      <p className="text-base font-light tracking-[0.15em] uppercase">
                        SISMORRESISTENTE
                      </p>
                    </div>
                  </Link>
                  <Link href="/estructural/eolica">
                    <div className="group cursor-pointer py-1">
                      <p className="text-base font-light tracking-[0.15em] uppercase">
                        EÓLICA
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
                className="w-full text-center group cursor-pointer py-3 px-6 bg-gray-600 rounded-md"
              >
                <p className="text-xl font-light tracking-[0.2em] uppercase">
                  INSTALACIONES
                </p>
              </button>
              {expandedSections.instalaciones && (
                <div className="flex flex-col items-center space-y-1 pt-2">
                  <Link href="/instalaciones/sanitarias">
                    <div className="group cursor-pointer py-1">
                      <p className="text-base font-light tracking-[0.15em] uppercase">
                        SANITARIAS
                      </p>
                    </div>
                  </Link>
                  <Link href="/instalaciones/hidraulicas">
                    <div className="group cursor-pointer py-1">
                      <p className="text-base font-light tracking-[0.15em] uppercase">
                        HIDRÁULICAS
                      </p>
                    </div>
                  </Link>
                  <Link href="/instalaciones/electricas">
                    <div className="group cursor-pointer py-1">
                      <p className="text-base font-light tracking-[0.15em] uppercase">
                        ELÉCTRICAS
                      </p>
                    </div>
                  </Link>
                  <Link href="/instalaciones/especiales">
                    <div className="group cursor-pointer py-1">
                      <p className="text-base font-light tracking-[0.15em] uppercase">
                        ESPECIALES
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
                className="w-full text-center group cursor-pointer py-3 px-6 bg-gray-600 rounded-md"
              >
                <p className="text-xl font-light tracking-[0.2em] uppercase">
                  CONSTRUCCIÓN
                </p>
              </button>
              {expandedSections.construccion && (
                <div className="flex flex-col items-center space-y-1 pt-2">
                  <Link href="/construccion/civil">
                    <div className="group cursor-pointer py-1">
                      <p className="text-base font-light tracking-[0.15em] uppercase">
                        CIVIL
                      </p>
                    </div>
                  </Link>
                  <Link href="/construccion/industrial">
                    <div className="group cursor-pointer py-1">
                      <p className="text-base font-light tracking-[0.15em] uppercase">
                        INDUSTRIAL
                      </p>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Sobre nosotros */}
            <div className="space-y-2">
              <Link href="/nosotros">
                <div className="w-full text-center group cursor-pointer py-3 px-6 bg-gray-600 rounded-md">
                  <p className="text-xl font-light tracking-[0.2em] uppercase">
                    SOBRE NOSOTROS
                  </p>
                </div>
              </Link>
            </div>

            {/* Proyectos */}
            <div className="space-y-2">
              <Link href="/proyectos">
                <div className="w-full text-center group cursor-pointer py-3 px-6 bg-gray-600 rounded-md">
                  <p className="text-xl font-light tracking-[0.2em] uppercase">
                    PROYECTOS
                  </p>
                </div>
              </Link>
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
                    className={`${isScrolled ? 'text-gray-800' : 'text-white'} font-light tracking-wider uppercase transition-colors duration-300`}
                  >
                    INICIO
                  </Button>
                </Link>
                
                {/* Arquitectura Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={`${isScrolled ? 'text-gray-800' : 'text-white'} font-light tracking-wider uppercase flex items-center space-x-1 transition-colors duration-300`}
                    >
                      <span>ARQUITECTURA</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white/90 backdrop-blur-sm border-0">
                    <DropdownMenuItem asChild>
                      <Link href="/arquitectura/arquitectonico">
                        <span className="uppercase tracking-wide">Arquitectónico</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/arquitectura/visual">
                        <span className="uppercase tracking-wide">Visual</span>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Estructural Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={`${isScrolled ? 'text-gray-800' : 'text-white'} font-light tracking-wider uppercase flex items-center space-x-1 transition-colors duration-300`}
                    >
                      <span>ESTRUCTURAL</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white/90 backdrop-blur-sm border-0">
                    <DropdownMenuItem asChild>
                      <Link href="/estructural/sismorresistente">
                        <span className="uppercase tracking-wide">Sismorresistente</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/estructural/eolica">
                        <span className="uppercase tracking-wide">Eólica</span>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Instalaciones Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={`${isScrolled ? 'text-gray-800' : 'text-white'} font-light tracking-wider uppercase flex items-center space-x-1 transition-colors duration-300`}
                    >
                      <span>INSTALACIONES</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white/90 backdrop-blur-sm border-0">
                    <DropdownMenuItem asChild>
                      <Link href="/instalaciones/sanitarias">
                        <span className="uppercase tracking-wide">Sanitarias</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/instalaciones/hidraulicas">
                        <span className="uppercase tracking-wide">Hidráulicas</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/instalaciones/electricas">
                        <span className="uppercase tracking-wide">Eléctricas</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/instalaciones/especiales">
                        <span className="uppercase tracking-wide">Especiales</span>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Construcción Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={`${isScrolled ? 'text-gray-800' : 'text-white'} font-light tracking-wider uppercase flex items-center space-x-1 transition-colors duration-300`}
                    >
                      <span>CONSTRUCCIÓN</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white/90 backdrop-blur-sm border-0">
                    <DropdownMenuItem asChild>
                      <Link href="/construccion/civil">
                        <span className="uppercase tracking-wide">Civil</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/construccion/industrial">
                        <span className="uppercase tracking-wide">Industrial</span>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Link href="/proyectos">
                  <Button
                    variant="ghost"
                    className={`${isScrolled ? 'text-gray-800' : 'text-white'} font-light tracking-wider uppercase transition-colors duration-300`}
                  >
                    PROYECTOS
                  </Button>
                </Link>

                <Link href="/nosotros">
                  <Button
                    variant="ghost"
                    className={`${isScrolled ? 'text-gray-800' : 'text-white'} font-light tracking-wider uppercase transition-colors duration-300`}
                  >
                    SOBRE NOSOTROS
                  </Button>
                </Link>

                {/* Language Selector */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={`${isScrolled ? 'text-gray-800' : 'text-white'} flex items-center space-x-1 transition-colors duration-300`}
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
                      <span>Español</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => setLanguage('en')}
                      className="flex items-center space-x-2"
                    >
                      <USFlag className="rounded-sm" width={20} height={14} />
                      <span>English</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => setLanguage('pt')}
                      className="flex items-center space-x-2"
                    >
                      <PTFlag className="rounded-sm" width={20} height={14} />
                      <span>Português</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => setLanguage('fr')}
                      className="flex items-center space-x-2"
                    >
                      <FRFlag className="rounded-sm" width={20} height={14} />
                      <span>Français</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => setLanguage('cn')}
                      className="flex items-center space-x-2"
                    >
                      <CNFlag className="rounded-sm" width={20} height={14} />
                      <span>中文</span>
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
              ESTUDIO ARQUITECTÓNICO
            </h1>
            <h2 className="text-4xl lg:text-6xl font-light tracking-[0.3em] mb-12">
              M&M
            </h2>
            
            {/* Subtitle */}
            <p className="text-xl lg:text-2xl font-light tracking-[0.2em] mb-16 uppercase max-w-2xl mx-auto leading-relaxed">
              CONSTRUIMOS TU VISIÓN CON PASIÓN
            </p>
            <p className="text-xl lg:text-2xl font-light tracking-[0.2em] mb-16 uppercase max-w-2xl mx-auto leading-relaxed">
              Y PRECISIÓN
            </p>
            
            {/* CTA Button */}
            <Link href="/proyectos">
              <Button
                className="bg-orange-500 text-white px-12 py-4 text-lg font-light tracking-[0.15em] uppercase rounded-none border-0"
              >
                EXPLORAR NUESTRO PORTAFOLIO
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
