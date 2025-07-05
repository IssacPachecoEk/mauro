import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Ingresa un email válido"),
  telefono: z.string().min(10, "Ingresa un teléfono válido"),
  tipoProyecto: z.string().min(1, "Selecciona el tipo de proyecto"),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      nombre: "",
      email: "",
      telefono: "",
      tipoProyecto: "",
      mensaje: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    // En una aplicación real, aquí enviarías los datos al servidor
    console.log("Datos del formulario:", data);

    toast({
      title: "Mensaje Enviado",
      description: "Hemos recibido tu solicitud. Te contactaremos pronto.",
    });

    form.reset();
  };

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 relative"
        style={{ minHeight: '400px' }}>
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            backgroundImage: "url('/mano.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.25,
          }}
        />
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contactame
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Estoy listo para hacer realidad tu proyecto de construcción. Solicita tu presupuesto gratuito
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Solicitar Presupuesto</CardTitle>
              <p className="text-gray-600">
                Completa el formulario y me pongo en contacto contigo en menos de 24 horas
              </p>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="nombre"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre Completo *</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu nombre completo" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="tu@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="telefono"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Teléfono *</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="+52 55 1234 5678" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="tipoProyecto"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tipo de Proyecto *</FormLabel>
                        <FormControl>
                          <select
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            {...field}
                          >
                            <option value="">Selecciona el tipo de proyecto</option>
                            <option value="casa">Casa Residencial</option>
                            <option value="departamento">Departamento</option>
                            <option value="oficina">Oficina</option>
                            <option value="comercial">Local Comercial</option>
                            <option value="industrial">Nave Industrial</option>
                            <option value="remodelacion">Remodelación</option>
                            <option value="otro">Otro</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="mensaje"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Descripción del Proyecto *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe tu proyecto, ubicación, presupuesto estimado, y cualquier detalle importante..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Solicitud
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-blue-600" />
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Teléfono</h4>
                    <p className="text-gray-600">+52 55 1234 5678</p>
                    <p className="text-sm text-gray-500">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-600">mauro@constructora.com</p>
                    <p className="text-sm text-gray-500">Respuesta en menos de 24 horas</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Oficina</h4>
                    <p className="text-gray-600">
                      Calle 21 por 22 y 24 #102<br />
                      Hoctun, Yucatan CP 97480
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Horarios de Atención</h4>
                    <p className="text-gray-600">
                      Lunes a Viernes: 8:00 AM - 6:00 PM<br />
                      Sábados: 9:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-3">¿Por qué elegirme?</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    Presupuesto gratuito y sin compromiso
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    Más de 6 meses de experiencia
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    Garantía en todos mis trabajos
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    Materiales de primera calidad
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    Cumplimiento de plazos garantizado
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardContent className="pt-6 text-center">
                <h3 className="text-lg font-semibold mb-2 text-green-800">
                  ¡Consulta Gratuita!
                </h3>
                <p className="text-sm text-green-700 mb-4">
                  Agenda una cita para discutir tu proyecto sin ningún costo
                </p>
                <Button className="bg-green-600 hover:bg-green-700">
                  Agendar Cita
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Mi Ubicación</h2>
            <p className="text-gray-600">Visítanos en mi oficina central</p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-0">
              <div className="h-96 bg-gray-300 rounded-lg flex items-center justify-center">
                <div style={{ overflow: 'hidden', width: '100%', height: '100%', position: 'relative' }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://maps.google.com/maps?q=Materiales%20Para%20Construcci%C3%B3n%20Bibi,%20Hoctun,%20Yucatan&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    style={{ border: 0 }}
                  ></iframe>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}