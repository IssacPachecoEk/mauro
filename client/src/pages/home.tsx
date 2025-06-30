import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Hammer, Users, Award, ArrowRight, Phone } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
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
              Mauro Muñoz Construcciones
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Soy un ingeniero civil con más de 6 meses de experiencia en proyectos residenciales y comerciales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-500">
                  Solicitar Presupuesto
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/nosotros">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-500">
                  Conoce Más
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mis Servicios</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrezco una amplia gama de servicios de construcción para satisfacer todas tus necesidades
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Building2 className="h-8 w-8 text-blue-600" />
                <span>Construcción Residencial</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Casas, condominios y proyectos habitacionales con los más altos estándares de calidad.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Diseño arquitectónico personalizado</li>
                <li>• Construcción llave en mano</li>
                <li>• Remodelaciones y ampliaciones</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Hammer className="h-8 w-8 text-blue-600" />
                <span>Construcción Comercial</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Oficinas, locales comerciales y naves industriales adaptadas a las necesidades de tu negocio.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Edificios de oficinas</li>
                <li>• Centros comerciales</li>
                <li>• Instalaciones industriales</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users className="h-8 w-8 text-blue-600" />
                <span>Consultoría y Diseño</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Asesoramiento profesional desde la planificación hasta la ejecución de tu proyecto.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Estudios de factibilidad</li>
                <li>• Gestión de permisos</li>
                <li>• Supervisión de obra</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por Qué Elegirnos?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Me destaco por mi experiencia, calidad y compromiso con cada proyecto
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">+6 Meses</h3>
              <p className="text-gray-600">De experiencia en el sector</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">+5 Proyectos</h3>
              <p className="text-gray-600">Completados exitosamente</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Hammer className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Calidad Garantizada</h3>
              <p className="text-gray-600">Materiales de primera calidad</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 text-center">
        <Card className="bg-blue-600 text-white">
          <CardContent className="py-12">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para Comenzar tu Proyecto?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contáctame hoy y recibe una consulta gratuita para tu proyecto de construcción
            </p>
            <Link href="/contacto">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-500">
                <Phone className="mr-2 h-5 w-5" />
                Contactar Ahora
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
