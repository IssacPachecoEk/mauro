import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Users, Target, Heart, Award, Calendar } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 relative"
        style={{ minHeight: '400px' }}
      >
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            backgroundImage: "url('/avis.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.25,
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sobre Mi
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Más de 6 meses construyendo sueños y transformando espacios con calidad, innovación y compromiso
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Mi Historia</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Mauro Muñoz Construcciones nació en 2025 con la visión de transformar la industria de la construcción 
                a través de la excelencia, la innovación y el compromiso con nuestros clientes.
              </p>
              <p>
                Desde mis inicios como una pequeña empresa escolar, he crecido hasta convertirme 
                en una de los ingenieros civiles emergente de la región, completando más de 5 proyectos 
                exitosos en los sectores residencial y comercial.
              </p>
              <p>
                Mi éxito se basa en tres pilares fundamentales: calidad en cada detalle, 
                cumplimiento de plazos y presupuestos.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="text-center p-6">
              <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold">2025</h3>
              <p className="text-gray-600">Año de fundación</p>
            </Card>
            <Card className="text-center p-6">
              <Building2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold">5+</h3>
              <p className="text-gray-600">Proyectos completados</p>
            </Card>
            <Card className="text-center p-6">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold">1</h3>
              <p className="text-gray-600">Empleados</p>
            </Card>
            <Card className="text-center p-6">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold">6</h3>
              <p className="text-gray-600">Meses de experiencia</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mis Valores</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Los principios que guían cada uno de mis proyectos y definen nuestra cultura empresarial
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Misión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Construir espacios que mejoren la calidad de vida de las personas, 
                  utilizando las mejores prácticas, materiales de calidad y tecnología innovadora.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Building2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Visión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ser el ingeniero civil líder en la región, reconocida por la excelencia 
                  en mis proyectos y el compromiso con la satisfacción del cliente.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2">
                  <li>• Calidad y excelencia</li>
                  <li>• Honestidad y transparencia</li>
                  <li>• Compromiso y responsabilidad</li>
                  <li>• Innovación continua</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mi Equipo</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un equipo multidisciplinario de profesionales comprometidos con la excelencia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Arquitectos</h3>
              <p className="text-gray-600">
                Profesionales creativos que diseñan espacios funcionales y estéticamente atractivos
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Ingenieros</h3>
              <p className="text-gray-600">
                Especialistas en estructuras, instalaciones y gestión de proyectos de construcción
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Maestros de Obra</h3>
              <p className="text-gray-600">
                Expertos constructores con años de experiencia que garantizan la calidad en cada detalle
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Certificaciones y Reconocimientos</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Award className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">ISO 9001</h3>
              <p className="text-blue-100">Calidad certificada</p>
            </div>
            <div>
              <Building2 className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Cámara de Construcción</h3>
              <p className="text-blue-100">Miembro activo</p>
            </div>
            <div>
              <Users className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Empresa Responsable</h3>
              <p className="text-blue-100">Certificación social</p>
            </div>
            <div>
              <Target className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Excelencia 2023</h3>
              <p className="text-blue-100">Premio regional</p>
            </div>
          </div>
        </div>
      </section>


      <section className="container mx-auto px-4 text-center">
        <Card className="bg-gray-50">
          <CardContent className="py-12">
            <h2 className="text-3xl font-bold mb-4">
              ¿Quieres ser Parte de Mis Próximos Proyectos?
            </h2>
            <p className="text-xl mb-8 text-gray-600">
              Contáctame y descubre cómo podemos hacer realidad tu proyecto de construcción
            </p>
            <Link href="/contacto">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Solicitar Información
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}