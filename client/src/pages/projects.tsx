import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Calendar, MapPin, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();

  // Datos de ejemplo de proyectos
  const proyectos = [
    {
      id: 1,
      titulo: t('project.casa-moderna.title'),
      descripcion: t('project.casa-moderna.description'),
      ubicacion: "Mérida, Yucatán",
      fecha: "2024",
      area: "200m²",
      maps: "https://maps.google.com/maps?q=Materiales%20Para%20Construcci%C3%B3n%20Bibi,%20Hoctun,%20Yucatan&t=&z=16&ie=UTF8&iwloc=&output=embed",
      imagenes: [
        "/uno.jpg",
        "/dos.jpg",
        "/tres.jpg"
      ]
    },
    {
      id: 2,
      titulo: t('project.oficina.title'),
      descripcion: t('project.oficina.description'),
      ubicacion: "Hoctún, Yucatán",
      fecha: "2024",
      area: "150m²",
      maps: "https://maps.google.com/maps?q=Bodega%20Aurrera,%20Quetzalcóatl&t=&z=10&ie=UTF8&iwloc=&output=embed",
      imagenes: [
        "/cuatro.jpg",
        "/cinco.jpg",
        "/seis.jpg"
      ]
    },
    {
      id: 3,
      titulo: t('project.ampliacion.title'),
      descripcion: t('project.ampliacion.description'),
      ubicacion: "Izamal, Yucatán",
      fecha: "2023",
      area: "80m²",
      maps: "https://maps.google.com/maps?q=izamal,%20yucatan&t=&z=10&ie=UTF8&iwloc=&output=embed",
      imagenes: [
        "/siete.jpg",
        "/ocho.jpg",
        "/nueve.jpg"
      ]
    }
  ];
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 relative">
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            backgroundImage: "url('/sky.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.25,
          }}
        />
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('projects.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              {t('projects.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('projects.gallery.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('projects.gallery.subtitle')}
          </p>
        </div>

        <div className="space-y-16">
          {proyectos.map((proyecto, index) => (
            <Card key={proyecto.id} className="overflow-hidden shadow-lg">
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Carousel de imágenes */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <Carousel className="w-full">
                    <CarouselContent>
                      {proyecto.imagenes.map((imagen, imgIndex) => (
                        <CarouselItem key={imgIndex}>
                          <div className="aspect-[4/3] overflow-hidden">
                            <img
                              src={imagen}
                              alt={`${proyecto.titulo} - Imagen ${imgIndex + 1}`}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </Carousel>
                </div>

                {/* Información del proyecto */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <CardHeader>
                    <CardTitle className="text-2xl text-blue-600">
                      {proyecto.titulo}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 h-full flex flex-col">
                    <p className="text-gray-600 leading-relaxed">
                      {proyecto.descripcion}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4 text-blue-600" />
                        <span>{proyecto.ubicacion}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4 text-blue-600" />
                        <span>{proyecto.fecha}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="h-4 w-4 text-blue-600" />
                        <span>{proyecto.area}</span>
                      </div>
                    </div>

                    <div className="pt-4 flex-1">
                      <div className="h-64 lg:h-full bg-gray-300 rounded-lg overflow-hidden">
                        <iframe
                          width="100%"
                          height="85%"
                          className="lg:h-[85%] h-full"
                          src={proyecto.maps}
                          style={{ border: 0 }}
                          title={`Ubicación del proyecto ${proyecto.titulo}`}
                        ></iframe>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">{t('projects.cta.title')}</h2>
            <p className="text-gray-600 mb-8">
              {t('projects.cta.subtitle')}
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              {t('projects.cta.button')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
