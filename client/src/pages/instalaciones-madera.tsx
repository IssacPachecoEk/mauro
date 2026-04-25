import { useLanguage } from "@/contexts/LanguageContext";

export function InstalacionesMaderaPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gray-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('nav.instalaciones.sanitarias')}
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Especialistas en instalación y fabricación de estructuras de madera
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Servicios de Carpintería</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                  Estructuras de madera
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                  Pisos de madera
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                  Techos de madera
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                  Muebles empotrados
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                  Pergolas y terrazas
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                  Restauración de madera
                </li>
              </ul>
            </div>
            <div className="bg-stone-200 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">¿Por qué elegir nuestros servicios?</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Madera de Calidad</h4>
                  <p className="text-gray-600">Seleccionamos las mejores maderas para cada proyecto</p>
                </div>
                <div>
                  <h4 className="font-semibold">Diseños Personalizados</h4>
                  <p className="text-gray-600">Creamos soluciones únicas para cada cliente</p>
                </div>
                <div>
                  <h4 className="font-semibold">Acabados Profesionales</h4>
                  <p className="text-gray-600">Tratamientos especiales para mayor durabilidad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}