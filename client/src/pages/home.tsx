import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Hammer, Users, Award, ArrowRight, Phone } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  
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
              {t('home.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-500">
                  {t('home.hero.button.quote')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/nosotros">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-500">
                  {t('home.hero.button.learn')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('home.services.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('home.services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Building2 className="h-8 w-8 text-blue-600" />
                <span>{t('home.services.residential.title')}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                {t('home.services.residential.description')}
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• {t('home.services.residential.item1')}</li>
                <li>• {t('home.services.residential.item2')}</li>
                <li>• {t('home.services.residential.item3')}</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Hammer className="h-8 w-8 text-blue-600" />
                <span>{t('home.services.commercial.title')}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                {t('home.services.commercial.description')}
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• {t('home.services.commercial.item1')}</li>
                <li>• {t('home.services.commercial.item2')}</li>
                <li>• {t('home.services.commercial.item3')}</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users className="h-8 w-8 text-blue-600" />
                <span>{t('home.services.consulting.title')}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                {t('home.services.consulting.description')}
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• {t('home.services.consulting.item1')}</li>
                <li>• {t('home.services.consulting.item2')}</li>
                <li>• {t('home.services.consulting.item3')}</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('home.why.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('home.why.subtitle')}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 justify-center">
          <Card className="hover:shadow-lg transition-shadow flex flex-col items-center text-center">
            <CardHeader>
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl font-semibold mb-2">{t('home.why.experience')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{t('home.why.experience.desc')}</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow flex flex-col items-center text-center">
            <CardHeader>
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl font-semibold mb-2">{t('home.why.projects')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{t('home.why.projects.desc')}</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow flex flex-col items-center text-center">
            <CardHeader>
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Hammer className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl font-semibold mb-2">{t('home.why.quality')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{t('home.why.quality.desc')}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 text-center">
        <Card className="bg-blue-600 text-white">
          <CardContent className="py-12">
            <h2 className="text-3xl font-bold mb-4">
              {t('home.cta.title')}
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              {t('home.cta.subtitle')}
            </p>
            <Link href="/contacto">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-500">
                <Phone className="mr-2 h-5 w-5" />
                {t('home.cta.button')}
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
