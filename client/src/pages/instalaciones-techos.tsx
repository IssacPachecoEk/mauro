import { useLanguage } from "@/contexts/LanguageContext";

export function InstalacionesTechosPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-stone-300">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('nav.instalaciones.sanitarias')}
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Especialistas en instalación y reparación de todo tipo de techos
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Servicios de Techado</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Techos de concreto
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Techos de lámina
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Techos de teja
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Impermeabilización
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Reparación de goteras
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Mantenimiento preventivo
                </li>
              </ul>
            </div>
            <div className="bg-stone-200 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">¿Por qué elegir nuestros servicios?</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Experiencia Comprobada</h4>
                  <p className="text-gray-600">Más de 6 meses especializándonos en techados</p>
                </div>
                <div>
                  <h4 className="font-semibold">Materiales de Calidad</h4>
                  <p className="text-gray-600">Utilizamos solo los mejores materiales del mercado</p>
                </div>
                <div>
                  <h4 className="font-semibold">Garantía Total</h4>
                  <p className="text-gray-600">Garantizamos la calidad de nuestro trabajo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}