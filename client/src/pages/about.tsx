import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Users, Target, Heart, Award, Calendar } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  
  return (
    <div >
      {/* Hero Section */}
      <section
        className="bg-white text-gray-700 py-8 relative border-b border-gray-200"
        style={{ minHeight: '50px' }}
      >
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            backgroundImage: "url('/avis.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1,
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
              {t('about.hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              {t('about.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{t('about.story.title')}</h2>
              <div className="space-y-3 text-gray-600 leading-relaxed">
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
              <Card className="text-center p-6 bg-white border border-gray-200 h-full flex flex-col justify-center">
                <Calendar className="h-12 w-12 text-gray-500 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-gray-800 mb-1">2025</h3>
                <p className="text-sm text-gray-600">{t('about.story.foundation')}</p>
              </Card>
              <Card className="text-center p-6 bg-white border border-gray-200 h-full flex flex-col justify-center">
                <Building2 className="h-12 w-12 text-gray-500 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-gray-800 mb-1">5+</h3>
                <p className="text-sm text-gray-600">{t('about.story.completed')}</p>
              </Card>
              <Card className="text-center p-6 bg-white border border-gray-200 h-full flex flex-col justify-center">
                <Users className="h-12 w-12 text-gray-500 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-gray-800 mb-1">2</h3>
                <p className="text-sm text-gray-600">{t('about.story.employees')}</p>
              </Card>
              <Card className="text-center p-6 bg-white border border-gray-200 h-full flex flex-col justify-center">
                <Award className="h-12 w-12 text-gray-500 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-gray-800 mb-1">24</h3>
                <p className="text-sm text-gray-600">{t('about.story.months')}</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">{t('about.values.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t('about.story.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center bg-white border border-gray-200 h-full">
              <CardHeader className="pb-4">
                <Target className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                <CardTitle className="text-lg font-bold text-gray-800">{t('about.mission.title')}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t('about.mission.text')}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white border border-gray-200 h-full">
              <CardHeader className="pb-4">
                <Building2 className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                <CardTitle className="text-lg font-bold text-gray-800">{t('about.vision.title')}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t('about.vision.text')}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white border border-gray-200 h-full">
              <CardHeader className="pb-4">
                <Heart className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                <CardTitle className="text-lg font-bold text-gray-800">{t('about.values.title')}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="text-gray-600 space-y-2 text-left text-sm leading-relaxed">
                  <li>• <span className="font-medium">{t('about.values.integrity.title')}</span>: {t('about.values.integrity.desc')}</li>
                  <li>• <span className="font-medium">{t('about.values.excellence.title')}</span>: {t('about.values.excellence.desc')}</li>
                  <li>• <span className="font-medium">{t('about.values.innovation.title')}</span>: {t('about.values.innovation.desc')}</li>
                  <li>• <span className="font-medium">{t('about.values.customer.title')}</span>: {t('about.values.customer.desc')}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">{t('about.team.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t('about.team.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center bg-white border border-gray-200 h-full">
              <CardContent className="pt-6 pb-6 px-6 flex flex-col justify-center h-full">
                <div className="w-20 h-20 bg-gray-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">{t('about.team.architects')}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t('about.team.architects.desc')}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white border border-gray-200 h-full">
              <CardContent className="pt-6 pb-6 px-6 flex flex-col justify-center h-full">
                <div className="w-20 h-20 bg-gray-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">{t('about.team.engineers')}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t('about.team.engineers.desc')}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white border border-gray-200 h-full">
              <CardContent className="pt-6 pb-6 px-6 flex flex-col justify-center h-full">
                <div className="w-20 h-20 bg-gray-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">{t('about.team.foremen')}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t('about.team.foremen.desc')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">{t('about.certifications.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">{t('about.certifications.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-5 bg-white rounded-lg border border-gray-200 h-full flex flex-col justify-center">
              <Award className="h-12 w-12 mx-auto mb-4 text-gray-500" />
              <h3 className="text-lg font-bold mb-3 text-gray-800">{t('about.certifications.degree')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{t('about.certifications.degree.desc')}</p>
            </div>
            <div className="text-center p-5 bg-white rounded-lg border border-gray-200 h-full flex flex-col justify-center">
              <Building2 className="h-12 w-12 mx-auto mb-4 text-gray-500" />
              <h3 className="text-lg font-bold mb-3 text-gray-800">{t('about.certifications.experience')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{t('about.certifications.experience.desc')}</p>
            </div>
            <div className="text-center p-5 bg-white rounded-lg border border-gray-200 h-full flex flex-col justify-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-gray-500" />
              <h3 className="text-lg font-bold mb-3 text-gray-800">{t('about.certifications.training')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{t('about.certifications.training.desc')}</p>
            </div>
            <div className="text-center p-5 bg-white rounded-lg border border-gray-200 h-full flex flex-col justify-center">
              <Target className="h-12 w-12 mx-auto mb-4 text-gray-500" />
              <h3 className="text-lg font-bold mb-3 text-gray-800">{t('about.certifications.safety')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{t('about.certifications.safety.desc')}</p>
            </div>
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Card className="bg-white border border-gray-200 max-w-3xl mx-auto">
            <CardContent className="py-8 px-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                {t('about.cta.title')}
              </h2>
              <p className="mb-6 text-gray-600 max-w-xl mx-auto leading-relaxed">
                {t('about.cta.subtitle')}
              </p>
              <Link href="/contacto">
                <Button size="lg" className="bg-gray-500 hover:bg-gray-600 px-6 py-3">
                  {t('about.cta.button')}
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}