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
    titulo: "projectDetail.1.titulo",
    descripcion: "projectDetail.1.descripcion",
    ubicacion: "projectDetail.1.ubicacion",
    fecha: "projectDetail.1.fecha",
    area: "projectDetail.1.area",
    fotografo: "projectDetail.1.fotografo",
    proveedores: "projectDetail.1.proveedores",
    categoria: "projectDetail.1.categoria",
    arquitectoDisenador: "projectDetail.1.arquitectoDisenador",
    disenoEstructural: "projectDetail.1.disenoEstructural",
    disenoInterior: "projectDetail.1.disenoInterior",
    ciudad: "projectDetail.1.ciudad",
    pais: "projectDetail.1.pais",
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
    titulo: "projectDetail.2.titulo",
    descripcion: "projectDetail.2.descripcion",
    ubicacion: "projectDetail.2.ubicacion",
    fecha: "projectDetail.2.fecha",
    area: "projectDetail.2.area",
    fotografo: "projectDetail.2.fotografo",
    proveedores: "projectDetail.2.proveedores",
    categoria: "projectDetail.2.categoria",
    arquitectoDisenador: "projectDetail.2.arquitectoDisenador",
    disenoEstructural: "projectDetail.2.disenoEstructural",
    disenoInterior: "projectDetail.2.disenoInterior",
    ciudad: "projectDetail.2.ciudad",
    pais: "projectDetail.2.pais",
    tags: ["arquitectonico", "electricas", "especiales"],
    imagenes: [
      "/cuatro.jpg",
      "/cinco.jpg",
      "/seis.jpg"
    ]
  },
  3: {
    id: 3,
    titulo: "projectDetail.3.titulo",
    descripcion: "projectDetail.3.descripcion",
    ubicacion: "projectDetail.3.ubicacion",
    fecha: "projectDetail.3.fecha",
    area: "projectDetail.3.area",
    fotografo: "projectDetail.3.fotografo",
    proveedores: "projectDetail.3.proveedores",
    categoria: "projectDetail.3.categoria",
    arquitectoDisenador: "projectDetail.3.arquitectoDisenador",
    disenoEstructural: "projectDetail.3.disenoEstructural",
    disenoInterior: "projectDetail.3.disenoInterior",
    ciudad: "projectDetail.3.ciudad",
    pais: "projectDetail.3.pais",
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
          <h1 className="text-2xl font-bold text-gray-800 mb-4">{t('projectDetail.no-encontrado')}</h1>
          <Link href="/proyectos">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('projectDetail.volver')}
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
              {t('projectDetail.volver')}
            </Button>
          </Link>
        </div>
      </div>

      {/* Título del proyecto */}
      <div className="bg-white text-gray-800 py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold">{t(proyecto.titulo)}</h1>
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
                  <h2 className="text-xl font-semibold mb-4 text-gray-800">{t('projectDetail.descripcion')}</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {t(proyecto.descripcion)}
                  </p>
                  <div className="text-sm text-gray-500">
                    {t(proyecto.ubicacion)}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Detalles del proyecto */}
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">{t('projectDetail.titulo')}</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Building className="h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-700">{t('projectDetail.arquitectoDisenador')}:</div>
                        <div className="text-sm text-gray-600">{t(proyecto.arquitectoDisenador)}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-700">{t('projectDetail.area')}:</div>
                        <div className="text-sm text-gray-600">{t(proyecto.area)}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-700">{t('projectDetail.fecha')}:</div>
                        <div className="text-sm text-gray-600">{t(proyecto.fecha)}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Camera className="h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-700">{t('projectDetail.fotografo')}:</div>
                        <div className="text-sm text-gray-600">{t(proyecto.fotografo)}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-700">{t('projectDetail.proveedores')}:</div>
                        <div className="text-sm text-gray-600">{t(proyecto.proveedores)}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Palette className="h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-700">{t('projectDetail.categoria')}:</div>
                        <div className="text-sm text-gray-600">{t(proyecto.categoria)}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Building className="h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-700">{t('projectDetail.disenoEstructural')}:</div>
                        <div className="text-sm text-gray-600">{t(proyecto.disenoEstructural)}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Palette className="h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-700">{t('projectDetail.disenoInterior')}:</div>
                        <div className="text-sm text-gray-600">{t(proyecto.disenoInterior)}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-700">{t('projectDetail.ciudad')}:</div>
                        <div className="text-sm text-gray-600">{t(proyecto.ciudad)}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-700">{t('projectDetail.pais')}:</div>
                        <div className="text-sm text-gray-600">{t(proyecto.pais)}</div>
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