import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Users, Target, Heart, Award, Calendar } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  
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
              {t('about.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              {t('about.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">{t('about.story.title')}</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                {t('about.story.paragraph1')}
              </p>
              <p>
                {t('about.story.paragraph2')}
              </p>
              <p>
                {t('about.story.paragraph3')}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="text-center p-6">
              <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold">2025</h3>
              <p className="text-gray-600">{t('about.story.foundation')}</p>
            </Card>
            <Card className="text-center p-6">
              <Building2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold">5+</h3>
              <p className="text-gray-600">{t('about.story.completed')}</p>
            </Card>
            <Card className="text-center p-6">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold">1</h3>
              <p className="text-gray-600">{t('about.story.employees')}</p>
            </Card>
            <Card className="text-center p-6">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold">6</h3>
              <p className="text-gray-600">{t('about.story.months')}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.values.title')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('about.story.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>{t('about.mission.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t('about.mission.text')}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Building2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>{t('about.vision.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t('about.vision.text')}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>{t('about.values.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2">
                  <li>• {t('about.values.integrity.title')}: {t('about.values.integrity.desc')}</li>
                  <li>• {t('about.values.excellence.title')}: {t('about.values.excellence.desc')}</li>
                  <li>• {t('about.values.innovation.title')}: {t('about.values.innovation.desc')}</li>
                  <li>• {t('about.values.customer.title')}: {t('about.values.customer.desc')}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.team.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('about.team.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('about.team.architects')}</h3>
              <p className="text-gray-600">
                {t('about.team.architects.desc')}
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('about.team.engineers')}</h3>
              <p className="text-gray-600">
                {t('about.team.engineers.desc')}
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('about.team.foremen')}</h3>
              <p className="text-gray-600">
                {t('about.team.foremen.desc')}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('about.certifications.title')}</h2>
          <p className="text-lg text-blue-100 mb-8">{t('about.certifications.subtitle')}</p>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Award className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{t('about.certifications.degree')}</h3>
              <p className="text-blue-100">{t('about.certifications.degree.desc')}</p>
            </div>
            <div>
              <Building2 className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{t('about.certifications.experience')}</h3>
              <p className="text-blue-100">{t('about.certifications.experience.desc')}</p>
            </div>
            <div>
              <Users className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{t('about.certifications.training')}</h3>
              <p className="text-blue-100">{t('about.certifications.training.desc')}</p>
            </div>
            <div>
              <Target className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{t('about.certifications.safety')}</h3>
              <p className="text-blue-100">{t('about.certifications.safety.desc')}</p>
            </div>
          </div>
        </div>
      </section>


      <section className="container mx-auto px-4 text-center">
        <Card className="bg-gray-50">
          <CardContent className="py-12">
            <h2 className="text-3xl font-bold mb-4">
              {t('about.cta.title')}
            </h2>
            <p className="text-xl mb-8 text-gray-600">
              {t('about.cta.subtitle')}
            </p>
            <Link href="/contacto">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                {t('about.cta.button')}
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}