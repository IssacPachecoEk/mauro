import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Calendar, MapPin, Users } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

interface Service {
  title: string;
  description: string;
}

interface Project {
  id: number;
  titulo: string;
  descripcion: string;
  ubicacion: string;
  fecha: string;
  area: string;
  maps: string;
  imagenes: string[];
  tags: string[];
}

interface ServiceTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  services: Service[];
  filterTag: string;
  heroImage?: string;
}

// Datos de proyectos con tags
const proyectos: Project[] = [
  {
    id: 1,
    titulo: "Casa Moderna Residencial",
    descripcion: "Proyecto integral de construcción residencial con diseño arquitectónico contemporáneo, instalaciones completas y acabados de alta calidad.",
    ubicacion: "Mérida, Yucatán",
    fecha: "2024",
    area: "200m²",
    maps: "https://maps.google.com/maps?q=Materiales%20Para%20Construcci%C3%B3n%20Bibi,%20Hoctun,%20Yucatan&t=&z=16&ie=UTF8&iwloc=&output=embed",
    imagenes: ["/uno.jpg", "/dos.jpg", "/tres.jpg"],
    tags: ["arquitectonico", "visual", "sismorresistente", "sanitarias", "hidraulicas", "electricas", "civil"]
  },
  {
    id: 2,
    titulo: "Oficina Corporativa",
    descripcion: "Diseño y construcción de oficinas modernas con espacios funcionales, instalaciones especializadas y sistemas de climatización eficientes.",
    ubicacion: "Hoctún, Yucatán",
    fecha: "2024",
    area: "150m²",
    maps: "https://maps.google.com/maps?q=Bodega%20Aurrera,%20Quetzalcóatl&t=&z=10&ie=UTF8&iwloc=&output=embed",
    imagenes: ["/cuatro.jpg", "/cinco.jpg", "/seis.jpg"],
    tags: ["visual", "eolica", "electricas", "especiales", "industrial"]
  },
  {
    id: 3,
    titulo: "Ampliación Residencial",
    descripcion: "Ampliación de vivienda existente con nuevos espacios habitacionales, renovación de instalaciones y mejoramiento estructural.",
    ubicacion: "Izamal, Yucatán",
    fecha: "2023",
    area: "80m²",
    maps: "https://maps.google.com/maps?q=izamal,%20yucatan&t=&z=10&ie=UTF8&iwloc=&output=embed",
    imagenes: ["/siete.jpg", "/ocho.jpg", "/nueve.jpg"],
    tags: ["arquitectonico", "sismorresistente", "hidraulicas", "civil"]
  },
  {
    id: 4,
    titulo: "Centro Comercial",
    descripcion: "Desarrollo comercial con estructura de acero, instalaciones de alta capacidad y sistemas de seguridad modernos.",
    ubicacion: "Valladolid, Yucatán",
    fecha: "2023",
    area: "500m²",
    maps: "https://maps.google.com/maps?q=valladolid,%20yucatan&t=&z=10&ie=UTF8&iwloc=&output=embed",
    imagenes: ["/uno.jpg", "/dos.jpg", "/tres.jpg"],
    tags: ["visual", "eolica", "sanitarias", "especiales", "industrial"]
  },
  {
    id: 5,
    titulo: "Complejo Habitacional",
    descripcion: "Desarrollo habitacional multifamiliar con diseño sustentable, áreas verdes y servicios comunitarios.",
    ubicacion: "Tizimín, Yucatán",
    fecha: "2022",
    area: "1200m²",
    maps: "https://maps.google.com/maps?q=tizimin,%20yucatan&t=&z=10&ie=UTF8&iwloc=&output=embed",
    imagenes: ["/cuatro.jpg", "/cinco.jpg", "/seis.jpg"],
    tags: ["arquitectonico", "visual", "sismorresistente", "eolica", "sanitarias", "hidraulicas", "electricas", "civil"]
  }
];

export function ServiceTemplate({ title, subtitle, description, services, filterTag, heroImage = "/sky.jpg" }: ServiceTemplateProps) {
  const { t } = useLanguage();

  // Filtrar proyectos por tag
  const proyectosFiltrados = proyectos.filter(proyecto => 
    proyecto.tags.includes(filterTag)
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white text-gray-700 py-20 relative border-b border-gray-200">
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            backgroundImage: `url('${heroImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1,
          }}
        />
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
              {title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600">
              {subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg leading-relaxed text-gray-700">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
              Nuestros Servicios
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-800">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {proyectosFiltrados.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Proyectos Relacionados
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Conoce algunos de nuestros trabajos realizados en esta especialidad
              </p>
            </div>

            <div className="space-y-12">
              {proyectosFiltrados.map((proyecto, index) => (
                <Card key={proyecto.id} className="overflow-hidden shadow-lg bg-white border border-gray-200">
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
                        <CardTitle className="text-2xl text-gray-800">
                          {proyecto.titulo}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6 h-full flex flex-col">
                        <p className="text-gray-600 leading-relaxed">
                          {proyecto.descripcion}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="h-4 w-4 text-gray-500" />
                            <span>{proyecto.ubicacion}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span>{proyecto.fecha}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Users className="h-4 w-4 text-gray-500" />
                            <span>{proyecto.area}</span>
                          </div>
                        </div>

                        <div className="pt-4 flex-1">
                          <div className="h-64 lg:h-full bg-gray-200 rounded-lg overflow-hidden border border-gray-200">
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
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-gray-300 mb-8">
              Contáctanos para recibir una cotización personalizada y gratuita
            </p>
            <Link href="/contacto">
              <Button size="lg" className="bg-white text-gray-800 hover:bg-gray-100 border-0">
                Solicitar Cotización
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}