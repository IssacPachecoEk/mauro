import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en' | 'pt' | 'fr' | 'cn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Navigation
    'nav.inicio': 'Inicio',
    'nav.arquitectura': 'Arquitectura',
    'nav.estructural': 'Ingeniería Estructural',
    'nav.instalaciones': 'Instalaciones',
    'nav.construccion': 'Construcción',
    'nav.proyectos': 'Proyectos',
    'nav.sobre-nosotros': 'Sobre Nosotros',
    'nav.contacto': 'Contacto',
    
    // Dropdown Option
    'nav.arquitectura.arquitectonico': 'Diseño arquitectónico',
    'nav.arquitectura.visual': 'Representación visual',
    'nav.estructural.sismorresistente': 'Sismorresistente',
    'nav.estructural.eolica': 'Eólica',
    'nav.instalaciones.sanitarias': 'Sanitarias',
    'nav.instalaciones.hidraulicas': 'Hidráulicas',
    'nav.instalaciones.electricas': 'Eléctricas',
    'nav.instalaciones.especiales': 'Especiales',
    'nav.construccion.civil': 'Civil',
    'nav.construccion.industrial': 'Industrial',
    
    // Language names
    'language.es': 'Español',
    'language.en': 'Ingles',
    'language.pt': 'Portugues',
    'language.fr': 'Frances',
    'language.cn': 'Chino',
    
    // Home Page
    'home.hero.title': 'Mauro Muñoz y Alvaro May Construcciones',
    'home.hero.subtitle': 'Soy un ingeniero civil con más de 6 meses de experiencia en proyectos residenciales y comerciales.',
    'home.hero.button.quote': 'Solicitar Presupuesto',
    'home.hero.button.learn': 'Conoce Más',
    'home.services.title': 'Mis Servicios',
    'home.services.subtitle': 'Ofrezco una amplia gama de servicios de construcción para satisfacer todas tus necesidades',
    'home.services.residential.title': 'Construcción Residencial',
    'home.services.residential.description': 'Casas, condominios y proyectos habitacionales con los más altos estándares de calidad.',
    'home.services.residential.item1': 'Diseño arquitectónico personalizado',
    'home.services.residential.item2': 'Construcción llave en mano',
    'home.services.residential.item3': 'Remodelaciones y ampliaciones',
    'home.services.commercial.title': 'Construcción Comercial',
    'home.services.commercial.description': 'Oficinas, locales comerciales y naves industriales adaptadas a las necesidades de tu negocio.',
    'home.services.commercial.item1': 'Edificios de oficinas',
    'home.services.commercial.item2': 'Centros comerciales',
    'home.services.commercial.item3': 'Instalaciones industriales',
    'home.services.consulting.title': 'Consultoría y Diseño',
    'home.services.consulting.description': 'Asesoramiento profesional desde la planificación hasta la ejecución de tu proyecto.',
    'home.services.consulting.item1': 'Estudios de factibilidad',
    'home.services.consulting.item2': 'Gestión de permisos',
    'home.services.consulting.item3': 'Supervisión de obra',
    'home.why.title': '¿Por Qué Elegirnos?',
    'home.why.subtitle': 'Me destaco por mi experiencia, calidad y compromiso con cada proyecto',
    'home.why.experience': '+6 Meses',
    'home.why.experience.desc': 'De experiencia en el sector',
    'home.why.projects': '+5 Proyectos',
    'home.why.projects.desc': 'Completados exitosamente',
    'home.why.quality': 'Calidad Garantizada',
    'home.why.quality.desc': 'Materiales de primera calidad',
    'home.cta.title': '¿Listo para Comenzar tu Proyecto?',
    'home.cta.subtitle': 'Contáctame hoy y recibe una consulta gratuita para tu proyecto de construcción',
    'home.cta.button': 'Contactar Ahora',
    
    // About Page
    'about.hero.title': 'Sobre Nosotros',
    'about.hero.subtitle': 'Conoce nuestra experiencia y compromiso con la excelencia en construcción',
    'about.story.title': 'Mi Historia',
    'about.story.subtitle': 'Un camino de dedicación y crecimiento profesional',
    'about.story.paragraph1': 'Comenzamos nuestras carreras en ingeniería civil y arquitectura con una pasión inquebrantable por crear espacios que transformen vidas. Desde nuestros primeros proyectos, nos hemos dedicado a combinar la técnica más avanzada con un enfoque humano y personalizado.',
    'about.story.paragraph2': 'Nuestra experiencia abarca desde pequeñas remodelaciones residenciales hasta complejos proyectos comerciales, siempre manteniendo los más altos estándares de calidad y cumplimiento de plazos.',
    'about.story.paragraph3': 'Cada proyecto representa una oportunidad de crecer, aprender y entregar algo excepcional que supere las expectativas de nuestros clientes.',
    'about.story.foundation': 'Año de fundación',
    'about.story.completed': 'Proyectos completados',
    'about.story.employees': 'Empleados',
    'about.story.months': 'Meses de experiencia',
    'about.mission.title': 'Misión',
    'about.mission.text': 'Transformar ideas en realidades construidas, ofreciendo servicios de construcción e ingeniería de la más alta calidad, con un enfoque en la innovación, sostenibilidad y satisfacción total del cliente.',
    'about.vision.title': 'Visión',
    'about.vision.text': 'Ser reconocidos como ingenieros civiles y arquitectos de referencia en la región, liderando proyectos que marquen la diferencia en el desarrollo urbano y la calidad de vida de las comunidades.',
    'about.values.title': 'Valores',
    'about.values.integrity.title': 'Integridad',
    'about.values.integrity.desc': 'Honestidad y transparencia en cada proyecto',
    'about.values.excellence.title': 'Excelencia',
    'about.values.excellence.desc': 'Compromiso con la más alta calidad',
    'about.values.innovation.title': 'Innovación',
    'about.values.innovation.desc': 'Técnicas y materiales de vanguardia',
    'about.values.customer.title': 'Orientación al Cliente',
    'about.values.customer.desc': 'Tu satisfacción es nuestra prioridad',
    'about.certifications.title': 'Certificaciones y Logros',
    'about.certifications.subtitle': 'Respaldado por la educación y experiencia profesional',
    'about.certifications.degree': 'Ingeniería Civil',
    'about.certifications.degree.desc': 'Universidad Tecnologica',
    'about.certifications.experience': 'Experiencia Práctica',
    'about.certifications.experience.desc': 'Más de 24 meses en proyectos diversos',
    'about.certifications.training': 'Capacitación Continua',
    'about.certifications.training.desc': 'Actualización constante en normativas',
    'about.certifications.safety': 'Seguridad Industrial',
    'about.certifications.safety.desc': 'Certificado en protocolos de seguridad',
    'about.team.title': 'Mi Equipo',
    'about.team.subtitle': 'Un equipo multidisciplinario de profesionales comprometidos con la excelencia',
    'about.team.architects': 'Arquitectos',
    'about.team.architects.desc': 'Profesionales creativos que diseñan espacios funcionales y estéticamente atractivos',
    'about.team.engineers': 'Ingenieros',
    'about.team.engineers.desc': 'Especialistas en estructuras, instalaciones y gestión de proyectos de construcción',
    'about.team.foremen': 'Maestros de Obra',
    'about.team.foremen.desc': 'Expertos constructores con años de experiencia que garantizan la calidad en cada detalle',
    'about.cta.title': '¿Quieres ser Parte de Mis Próximos Proyectos?',
    'about.cta.subtitle': 'Contactanos y descubre cómo podemos hacer realidad tu proyecto de construcción',
    'about.cta.button': 'Solicitar Información',
    
    // Projects Page
    'projects.hero.title': 'Mis Proyectos',
    'projects.hero.subtitle': 'Descubre algunos de los proyectos que he realizado con calidad y dedicación',
    'projects.gallery.title': 'Galería de Proyectos',
    'projects.gallery.subtitle': 'Cada proyecto es único y refleja mi compromiso con la excelencia y la atención al detalle',
    'projects.cta.title': '¿Tienes un proyecto en mente?',
    'projects.cta.subtitle': 'Me encantaría conocer tu idea y ayudarte a hacerla realidad con la misma calidad y dedicación',
    'projects.cta.button': 'Solicitar Presupuesto Gratuito',
    
    // Project Data
    'project.casa-moderna.title': 'Casa Residencial Moderna',
    'project.casa-moderna.description': 'Construcción de casa familiar de 200m² con diseño contemporáneo, acabados de lujo y jardín.',
    'project.oficina.title': 'Remodelación de Oficina',
    'project.oficina.description': 'Remodelación completa de oficina comercial con espacios abiertos y acabados modernos.',
    'project.ampliacion.title': 'Ampliación Residencial',
    'project.ampliacion.description': 'Ampliación de vivienda existente con nueva recámara, baño completo y área de estar.',
    
    // Contact Page
    'contact.hero.title': 'Contactame',
    'contact.hero.subtitle': 'Estoy listo para hacer realidad tu proyecto de construcción. Solicita tu presupuesto gratuito',
    'contact.form.title': 'Solicitar Presupuesto',
    'contact.form.subtitle': 'Completa el formulario y me pongo en contacto contigo en menos de 24 horas',
    'contact.form.name': 'Nombre Completo',
    'contact.form.name.placeholder': 'Tu nombre completo',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'tu@email.com',
    'contact.form.phone': 'Teléfono',
    'contact.form.phone.placeholder': '+52 55 1234 5678',
    'contact.form.project-type': 'Tipo de Proyecto',
    'contact.form.project-type.placeholder': 'Selecciona el tipo de proyecto',
    'contact.form.project-type.casa': 'Casa Residencial',
    'contact.form.project-type.departamento': 'Departamento',
    'contact.form.project-type.oficina': 'Oficina',
    'contact.form.project-type.comercial': 'Local Comercial',
    'contact.form.project-type.industrial': 'Nave Industrial',
    'contact.form.project-type.remodelacion': 'Remodelación',
    'contact.form.project-type.otro': 'Otro',
    'contact.form.message': 'Descripción del Proyecto',
    'contact.form.message.placeholder': 'Describe tu proyecto, ubicación, presupuesto estimado, y cualquier detalle importante...',
    'contact.form.send': 'Enviar Solicitud',
    'contact.info.title': 'Información de Contacto',
    'contact.info.phone': 'Teléfono',
    'contact.info.phone.schedule': 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    'contact.info.email': 'Email',
    'contact.info.email.response': 'Respuesta en menos de 24 horas',
    'contact.info.office': 'Oficina',
    'contact.info.schedule': 'Horarios de Atención',
    'contact.info.schedule.weekdays': 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    'contact.info.schedule.saturday': 'Sábados: 9:00 AM - 2:00 PM',
    'contact.why.title': '¿Por qué elegirme?',
    'contact.why.free-quote': 'Presupuesto gratuito y sin compromiso',
    'contact.why.experience': 'Más de 6 meses de experiencia',
    'contact.why.warranty': 'Garantía en todos mis trabajos',
    'contact.why.materials': 'Materiales de primera calidad',
    'contact.why.delivery': 'Cumplimiento de plazos garantizado',
    'contact.consultation.title': '¡Consulta Gratuita!',
    'contact.consultation.subtitle': 'Agenda una cita para discutir tu proyecto sin ningún costo',
    'contact.consultation.button': 'Agendar Cita',
    'contact.location.title': 'Mi Ubicación',
    'contact.location.subtitle': 'Visítanos en mi oficina central',
    
    // Footer
    'footer.text': 'Elaborado por Issac Nolberto Pacheco Ek',
  },
  en: {
    // Navigation
    'nav.inicio': 'Home',
    'nav.arquitectura': 'Architecture',
    'nav.estructural': 'Structural Engineering',
    'nav.instalaciones': 'Installations',
    'nav.construccion': 'Construction',
    'nav.proyectos': 'Projects',
    
    // Dropdown Options
    'nav.arquitectura.arquitectonico': 'Architectural Design',
    'nav.arquitectura.visual': 'Visual Representation',
    'nav.estructural.sismorresistente': 'Earthquake Resistant',
    'nav.estructural.eolica': 'Wind Engineering',
    'nav.instalaciones.sanitarias': 'Sanitary',
    'nav.instalaciones.hidraulicas': 'Hydraulic',
    'nav.instalaciones.electricas': 'Electrical',
    'nav.instalaciones.especiales': 'Special',
    'nav.construccion.civil': 'Civil',
    'nav.construccion.industrial': 'Industrial',
    
    // Language names
    'language.es': 'Spanish',
    'language.en': 'English',
    'language.pt': 'Portuguese',
    'language.fr': 'French',
    'language.cn': 'Chinese',
  },
  pt: {
    // Navigation
    'nav.inicio': 'Início',
    'nav.arquitectura': 'Arquitetura',
    'nav.estructural': 'Engenharia Estrutural',
    'nav.instalaciones': 'Instalações',
    'nav.construccion': 'Construção',
    'nav.proyectos': 'Projetos',
    
    // Dropdown Options
    'nav.arquitectura.arquitectonico': 'Design Arquitetônico',
    'nav.arquitectura.visual': 'Representação Visual',
    'nav.estructural.sismorresistente': 'Resistente a Terremotos',
    'nav.estructural.eolica': 'Eólica',
    'nav.instalaciones.sanitarias': 'Sanitárias',
    'nav.instalaciones.hidraulicas': 'Hidráulicas',
    'nav.instalaciones.electricas': 'Elétricas',
    'nav.instalaciones.especiales': 'Especiais',
    'nav.construccion.civil': 'Civil',
    'nav.construccion.industrial': 'Industrial',
    
    // Language names
    'language.es': 'Espanhol',
    'language.en': 'Inglês',
    'language.pt': 'Português',
    'language.fr': 'Francês',
    'language.cn': 'Chinês',
    
    // Footer
    'footer.text': 'Criado por Issac Nolberto Pacheco Ek',
  },
  fr: {
    // Navigation
    'nav.inicio': 'Accueil',
    'nav.arquitectura': 'Architecture',
    'nav.estructural': 'Ingénierie Structurelle',
    'nav.instalaciones': 'Installations',
    'nav.construccion': 'Construction',
    'nav.proyectos': 'Projets',
    
    // Dropdown Options
    'nav.arquitectura.arquitectonico': 'Design Architectural',
    'nav.arquitectura.visual': 'Représentation Visuelle',
    'nav.estructural.sismorresistente': 'Résistant aux Tremblements',
    'nav.estructural.eolica': 'Éolienne',
    'nav.instalaciones.sanitarias': 'Sanitaires',
    'nav.instalaciones.hidraulicas': 'Hydrauliques',
    'nav.instalaciones.electricas': 'Électriques',
    'nav.instalaciones.especiales': 'Spéciales',
    'nav.construccion.civil': 'Civil',
    'nav.construccion.industrial': 'Industriel',
    
    // Language names
    'language.es': 'Espagnol',
    'language.en': 'Anglais',
    'language.pt': 'Portugais',
    'language.fr': 'Français',
    'language.cn': 'Chinois',
    
    // Footer
    'footer.text': 'Créé par Issac Nolberto Pacheco Ek',
  },
  cn: {
    // Navigation
    'nav.inicio': '首页',
    'nav.arquitectura': '建筑',
    'nav.estructural': '结构工程',
    'nav.instalaciones': '设施安装',
    'nav.construccion': '施工建设',
    'nav.proyectos': '项目',
    
    // Dropdown Options
    'nav.arquitectura.arquitectonico': '建筑设计',
    'nav.arquitectura.visual': '视觉呈现',
    'nav.estructural.sismorresistente': '抗震',
    'nav.estructural.eolica': '风力工程',
    'nav.instalaciones.sanitarias': '卫生设施',
    'nav.instalaciones.hidraulicas': '水力设施',
    'nav.instalaciones.electricas': '电气设施',
    'nav.instalaciones.especiales': '特殊设施',
    'nav.construccion.civil': '民用建筑',
    'nav.construccion.industrial': '工业建筑',
    
    // Language names
    'language.es': '西班牙语',
    'language.en': '英语',
    'language.pt': '葡萄牙语',
    'language.fr': '法语',
    'language.cn': '中文',
    
    // Footer
    'footer.text': '由 Issac Nolberto Pacheco Ek 制作',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    const currentTranslations = translations[language] as any;
    return currentTranslations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
