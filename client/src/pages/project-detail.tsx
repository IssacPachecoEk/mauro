import { useRoute, Link, useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowLeft, Calendar, MapPin, Users, Camera, Building, Palette, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

// Datos extendidos de proyectos con más información
const proyectosDetalle = {
  1: {
    id: 1,
    titulo: "Casa Caoba / PAE + Rubén Gómez Gañán",
    descripcion: "Una casa moderna que integra perfectamente la arquitectura contemporánea con el entorno natural. El diseño aprovecha las vistas panorámicas y la ventilación natural del clima tropical.",
    ubicacion: "CASAS • ANAPIMA, COLOMBIA",
    fecha: "2023",
    area: "100 m²",
    fotografo: "Mateo Pérez Correa",
    proveedores: "ABACOL, JM Ferretería, Cerámica Italia, PAE Productos, Tucurinca, Vidrio Andino",
    categoria: "Casas",
    arquitectoDisenador: "Rubén Gómez Gañán, Nicolás Sánchez Jiménez",
    disenoEstructural: "Santiago Rodríguez",
    disenoInterior: "Lina María Cela",
    ciudad: "Anapima",
    pais: "Colombia",
    tags: ["arquitectonico", "visual", "estructural"],
    imagenes: [
      "/uno.jpg",
      "/dos.jpg",
      "/tres.jpg",
      "/cuatro.jpg",
      "/cinco.jpg"
    ]
  },
  2: {
    id: 2,
    titulo: "Oficina Corporativa Moderna",
    descripcion: "Espacio de trabajo innovador que combina funcionalidad y estética moderna. Diseñado para promover la colaboración y el bienestar de los empleados.",
    ubicacion: "OFICINAS • HOCTÚN, YUCATÁN",
    fecha: "2024",
    area: "150 m²",
    fotografo: "Carlos Mendoza",
    proveedores: "Materiales Yucatecos, Grupo Constructor, Iluminación LED, Mobiliario Moderno",
    categoria: "Oficinas",
    arquitectoDisenador: "Mauro Arquitectura",
    disenoEstructural: "Ingeniería Peninsular",
    disenoInterior: "Studio Interior",
    ciudad: "Hoctún",
    pais: "México",
    tags: ["arquitectonico", "electricas", "especiales"],
    imagenes: [
      "/cuatro.jpg",
      "/cinco.jpg",
      "/seis.jpg"
    ]
  },
  3: {
    id: 3,
    titulo: "Ampliación Residencial",
    descripcion: "Proyecto de expansión que respeta la arquitectura original mientras añade espacios modernos y funcionales para las nuevas necesidades de la familia.",
    ubicacion: "RESIDENCIAL • IZAMAL, YUCATÁN",
    fecha: "2023",
    area: "80 m²",
    fotografo: "Ana García Fotógrafa",
    proveedores: "Piedra Maya, Constructora Regional, Acabados Finos",
    categoria: "Ampliaciones",
    arquitectoDisenador: "Mauro Arquitectura",
    disenoEstructural: "Cálculos Estructurales SA",
    disenoInterior: "Diseño Integral",
    ciudad: "Izamal",
    pais: "México",
    tags: ["civil", "sanitarias", "hidraulicas"],
    imagenes: [
      "/siete.jpg",
      "/ocho.jpg",
      "/nueve.jpg"
    ]
  }
};

export default function ProjectDetail() {
  const { t } = useLanguage();
  const [location] = useLocation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Extract project ID from URL path
  const projectId = location.split('/').pop();
  const parsedId = projectId ? parseInt(projectId) : null;
  
  console.log('Location:', location, 'Project ID:', projectId, 'Parsed ID:', parsedId);
  
  const proyecto = parsedId ? proyectosDetalle[parsedId as keyof typeof proyectosDetalle] : null;

  if (!proyecto) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Proyecto no encontrado</h1>
          <Link href="/proyectos">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a proyectos
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header con navegación */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Link href="/proyectos">
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a proyectos
            </Button>
          </Link>
        </div>
      </div>

      {/* Título del proyecto */}
      <div className="bg-white text-gray-800 py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold">{proyecto.titulo}</h1>
        </div>
      </div>

      {/* Carrusel principal de imágenes */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="w-full">
            <div className="aspect-[16/10] overflow-hidden rounded-lg border border-gray-200 relative">
              <img
                src={proyecto.imagenes[currentImageIndex]}
                alt={`${proyecto.titulo} - ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Navegación manual */}
              <Button
                variant="outline"
                size="sm"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 border-gray-300 text-gray-800 hover:bg-white"
                onClick={() => setCurrentImageIndex(prev => 
                  prev > 0 ? prev - 1 : proyecto.imagenes.length - 1
                )}
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 border-gray-300 text-gray-800 hover:bg-white"
                onClick={() => setCurrentImageIndex(prev => 
                  prev < proyecto.imagenes.length - 1 ? prev + 1 : 0
                )}
              >
                <ArrowLeft className="h-4 w-4 rotate-180" />
              </Button>
            </div>
          </div>
        </div>

        {/* Miniaturas */}
        <div className="container mx-auto px-4 pb-8">
          <div className="flex gap-2 mt-4 overflow-x-auto">
            {proyecto.imagenes.map((imagen, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={imagen}
                  alt={`Miniatura ${index + 1}`}
                  className={`w-16 h-12 object-cover rounded border-2 cursor-pointer transition-all ${
                    index === currentImageIndex 
                      ? 'border-gray-800 ring-2 ring-gray-500' 
                      : 'border-gray-300 hover:border-gray-500'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              </div>
            ))}
            {proyecto.imagenes.length > 5 && (
              <div className="flex-shrink-0 w-16 h-12 bg-gray-100 rounded border-2 border-gray-300 flex items-center justify-center text-gray-600 text-xs font-semibold">
                + {proyecto.imagenes.length - 5}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Información del proyecto */}
      <div className="py-8 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Información principal */}
            <div className="lg:col-span-2">
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4 text-gray-800">Descripción del Proyecto</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {proyecto.descripcion}
                  </p>
                  <div className="text-sm text-gray-500">
                    {proyecto.ubicacion}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Detalles del proyecto */}
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">Detalles del Proyecto</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Building className="h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-700">Arquitectos:</div>
                        <div className="text-sm text-gray-600">{proyecto.arquitectoDisenador}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-700">Área:</div>
                        <div className="text-sm text-gray-600">{proyecto.area}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-700">Año:</div>
                        <div className="text-sm text-gray-600">{proyecto.fecha}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Camera className="h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-700">Fotografías:</div>
                        <div className="text-sm text-gray-600">{proyecto.fotografo}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-700">Proveedores:</div>
                        <div className="text-sm text-gray-600">{proyecto.proveedores}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Palette className="h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-700">Categoría:</div>
                        <div className="text-sm text-gray-600">{proyecto.categoria}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Building className="h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-700">Diseño Estructural:</div>
                        <div className="text-sm text-gray-600">{proyecto.disenoEstructural}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Palette className="h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-700">Diseño Interior:</div>
                        <div className="text-sm text-gray-600">{proyecto.disenoInterior}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-700">Ciudad:</div>
                        <div className="text-sm text-gray-600">{proyecto.ciudad}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-700">País:</div>
                        <div className="text-sm text-gray-600">{proyecto.pais}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}