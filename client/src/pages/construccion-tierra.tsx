import { useLanguage } from "@/contexts/LanguageContext";

export function ConstruccionTierraPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gray-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('nav.construccion.industrial')}
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Especialistas en movimiento de tierras y cimentaciones
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Servicios de Movimiento de Tierras</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                  Excavaciones
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                  Cimentaciones
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                  Nivelación de terrenos
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                  Muros de contención
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                  Drenajes subterráneos
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                  Compactación de suelos
                </li>
              </ul>
            </div>
            <div className="bg-stone-200 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">¿Por qué elegir nuestros servicios?</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Maquinaria Especializada</h4>
                  <p className="text-gray-600">Contamos con el equipo adecuado para cada trabajo</p>
                </div>
                <div>
                  <h4 className="font-semibold">Estudios de Suelo</h4>
                  <p className="text-gray-600">Análisis previo para garantizar estabilidad</p>
                </div>
                <div>
                  <h4 className="font-semibold">Cumplimiento Normativo</h4>
                  <p className="text-gray-600">Seguimos todas las regulaciones de construcción</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}