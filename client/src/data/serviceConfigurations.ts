interface ServiceConfig {
  title: string;
  subtitle: string;
  description: string;
  services: {
    title: string;
    description: string;
  }[];
  filterTag: string;
  heroImage?: string;
}

type Language = 'es' | 'en' | 'pt' | 'fr' | 'cn';

const serviceLabelsByLanguage: Record<Language, Record<string, string>> = {
  es: {
    arquitectonico: 'Diseño Arquitectónico',
    visual: 'Representación Visual',
    sismorresistente: 'Diseño Sismorresistente',
    eolica: 'Análisis Eólico',
    sanitarias: 'Instalaciones Sanitarias',
    hidraulicas: 'Instalaciones Hidráulicas',
    electricas: 'Instalaciones Eléctricas',
    especiales: 'Instalaciones Especiales',
    civil: 'Construcción Civil',
    industrial: 'Construcción Industrial'
  },
  en: {
    arquitectonico: 'Architectural Design',
    visual: 'Visual Representation',
    sismorresistente: 'Earthquake-Resistant Design',
    eolica: 'Wind Engineering Analysis',
    sanitarias: 'Sanitary Installations',
    hidraulicas: 'Hydraulic Installations',
    electricas: 'Electrical Installations',
    especiales: 'Special Installations',
    civil: 'Civil Construction',
    industrial: 'Industrial Construction'
  },
  pt: {
    arquitectonico: 'Projeto Arquitetônico',
    visual: 'Representação Visual',
    sismorresistente: 'Projeto Sismorresistente',
    eolica: 'Análise Eólica',
    sanitarias: 'Instalações Sanitárias',
    hidraulicas: 'Instalações Hidráulicas',
    electricas: 'Instalações Elétricas',
    especiales: 'Instalações Especiais',
    civil: 'Construção Civil',
    industrial: 'Construção Industrial'
  },
  fr: {
    arquitectonico: 'Conception Architecturale',
    visual: 'Représentation Visuelle',
    sismorresistente: 'Conception Parasismique',
    eolica: 'Analyse Éolienne',
    sanitarias: 'Installations Sanitaires',
    hidraulicas: 'Installations Hydrauliques',
    electricas: 'Installations Électriques',
    especiales: 'Installations Spéciales',
    civil: 'Construction Civile',
    industrial: 'Construction Industrielle'
  },
  cn: {
    arquitectonico: '建筑设计',
    visual: '视觉呈现',
    sismorresistente: '抗震设计',
    eolica: '风工程分析',
    sanitarias: '给排水安装',
    hidraulicas: '水力安装',
    electricas: '电气安装',
    especiales: '特殊安装',
    civil: '土建施工',
    industrial: '工业施工'
  }
};

function normalizeLanguage(language: string): Language {
  if (language === 'en' || language === 'pt' || language === 'fr' || language === 'cn') {
    return language;
  }

  return 'es';
}

function getLanguageFromTranslate(translate: (key: string) => string): Language {
  const languageName = translate('language.es').toLowerCase();

  if (languageName.includes('spanish') || languageName.includes('espagnol') || languageName.includes('espanhol') || languageName.includes('西班牙')) {
    return 'en';
  }

  if (languageName.includes('portuguese') || languageName.includes('portugais') || languageName.includes('português') || languageName.includes('葡萄牙')) {
    return 'pt';
  }

  if (languageName.includes('french') || languageName.includes('français') || languageName.includes('francês') || languageName.includes('法语')) {
    return 'fr';
  }

  if (languageName.includes('chinese') || languageName.includes('chinois') || languageName.includes('chinês') || languageName.includes('中文')) {
    return 'cn';
  }

  return 'es';
}

function buildServiceFallback(key: string, language: Language): string | undefined {
  const match = key.match(/^service\.([^.]+)\.(title|subtitle|description|service([1-6])\.(title|description))$/);

  if (!match) {
    return undefined;
  }

  const category = match[1];
  const token = match[2];
  const serviceNumber = match[3];
  const label = serviceLabelsByLanguage[language][category] ?? serviceLabelsByLanguage.es[category] ?? category;
  const labelLower = language === 'cn' ? label : label.toLowerCase();

  if (token === 'title') {
    return label;
  }

  if (token === 'subtitle') {
    if (language === 'en') {
      return `Professional solutions in ${labelLower}`;
    }

    if (language === 'pt') {
      return `Soluções profissionais em ${labelLower}`;
    }

    if (language === 'fr') {
      return `Solutions professionnelles en ${labelLower}`;
    }

    if (language === 'cn') {
      return `${label}专业解决方案`;
    }

    return `Soluciones profesionales en ${labelLower}`;
  }

  if (token === 'description') {
    if (language === 'en') {
      return `We develop ${labelLower} projects with technical quality, compliance, and end-to-end support.`;
    }

    if (language === 'pt') {
      return `Desenvolvemos projetos de ${labelLower} com qualidade técnica, conformidade e acompanhamento integral.`;
    }

    if (language === 'fr') {
      return `Nous développons des projets de ${labelLower} avec qualité technique, conformité et accompagnement intégral.`;
    }

    if (language === 'cn') {
      return `我们提供${label}项目，具备技术质量、规范合规和全流程支持。`;
    }

    return `Desarrollamos proyectos de ${labelLower} con calidad técnica, cumplimiento y acompañamiento integral.`;
  }

  if (token.endsWith('.title') && serviceNumber) {
    if (language === 'en') {
      return `${label} - Service ${serviceNumber}`;
    }

    if (language === 'pt') {
      return `${label} - Serviço ${serviceNumber}`;
    }

    if (language === 'fr') {
      return `${label} - Service ${serviceNumber}`;
    }

    if (language === 'cn') {
      return `${label} - 服务 ${serviceNumber}`;
    }

    return `${label} - Servicio ${serviceNumber}`;
  }

  if (token.endsWith('.description')) {
    if (language === 'en') {
      return `Specialized support in ${labelLower}, adapted to your project requirements.`;
    }

    if (language === 'pt') {
      return `Atendimento especializado em ${labelLower}, adaptado aos requisitos do seu projeto.`;
    }

    if (language === 'fr') {
      return `Accompagnement spécialisé en ${labelLower}, adapté aux exigences de votre projet.`;
    }

    if (language === 'cn') {
      return `提供${label}专项服务，按您的项目需求定制。`;
    }

    return `Atención especializada en ${labelLower}, adaptada a los requerimientos de tu proyecto.`;
  }

  return undefined;
}

  // Versión internacionalizada: función que recibe t
export function getServiceConfigurations(translate: (key: string) => string, language?: string): Record<string, ServiceConfig> {
  const currentLanguage = language ? normalizeLanguage(language) : getLanguageFromTranslate(translate);

  const t = (key: string): string => {
    const translated = translate(key);

    if (translated !== key) {
      return translated;
    }

    return buildServiceFallback(key, currentLanguage) ?? key;
  };

  return {
  // ARQUITECTURA
    'arquitectonico': {
      title: t('service.arquitectonico.title'),
      subtitle: t('service.arquitectonico.subtitle'),
      description: t('service.arquitectonico.description'),
      filterTag: 'arquitectonico',
      services: [
        { title: t('service.arquitectonico.service1.title'), description: t('service.arquitectonico.service1.description') },
        { title: t('service.arquitectonico.service2.title'), description: t('service.arquitectonico.service2.description') },
        { title: t('service.arquitectonico.service3.title'), description: t('service.arquitectonico.service3.description') },
        { title: t('service.arquitectonico.service4.title'), description: t('service.arquitectonico.service4.description') },
        { title: t('service.arquitectonico.service5.title'), description: t('service.arquitectonico.service5.description') },
        { title: t('service.arquitectonico.service6.title'), description: t('service.arquitectonico.service6.description') }
      ]
    },
    'visual': {
      title: t('service.visual.title'),
      subtitle: t('service.visual.subtitle'),
      description: t('service.visual.description'),
      filterTag: 'visual',
      services: [
        { title: t('service.visual.service1.title'), description: t('service.visual.service1.description') },
        { title: t('service.visual.service2.title'), description: t('service.visual.service2.description') },
        { title: t('service.visual.service3.title'), description: t('service.visual.service3.description') },
        { title: t('service.visual.service4.title'), description: t('service.visual.service4.description') },
        { title: t('service.visual.service5.title'), description: t('service.visual.service5.description') },
        { title: t('service.visual.service6.title'), description: t('service.visual.service6.description') }
      ]
    },

  // ESTRUCTURAL
    'sismorresistente': {
      title: t('service.sismorresistente.title'),
      subtitle: t('service.sismorresistente.subtitle'),
      description: t('service.sismorresistente.description'),
      filterTag: 'sismorresistente',
      services: [
        { title: t('service.sismorresistente.service1.title'), description: t('service.sismorresistente.service1.description') },
        { title: t('service.sismorresistente.service2.title'), description: t('service.sismorresistente.service2.description') },
        { title: t('service.sismorresistente.service3.title'), description: t('service.sismorresistente.service3.description') },
        { title: t('service.sismorresistente.service4.title'), description: t('service.sismorresistente.service4.description') },
        { title: t('service.sismorresistente.service5.title'), description: t('service.sismorresistente.service5.description') },
        { title: t('service.sismorresistente.service6.title'), description: t('service.sismorresistente.service6.description') }
      ]
    },
    'eolica': {
      title: t('service.eolica.title'),
      subtitle: t('service.eolica.subtitle'),
      description: t('service.eolica.description'),
      filterTag: 'eolica',
      services: [
        { title: t('service.eolica.service1.title'), description: t('service.eolica.service1.description') },
        { title: t('service.eolica.service2.title'), description: t('service.eolica.service2.description') },
        { title: t('service.eolica.service3.title'), description: t('service.eolica.service3.description') },
        { title: t('service.eolica.service4.title'), description: t('service.eolica.service4.description') },
        { title: t('service.eolica.service5.title'), description: t('service.eolica.service5.description') },
        { title: t('service.eolica.service6.title'), description: t('service.eolica.service6.description') }
      ]
    },

  // INSTALACIONES
    'sanitarias': {
      title: t('service.sanitarias.title'),
      subtitle: t('service.sanitarias.subtitle'),
      description: t('service.sanitarias.description'),
      filterTag: 'sanitarias',
      services: [
        { title: t('service.sanitarias.service1.title'), description: t('service.sanitarias.service1.description') },
        { title: t('service.sanitarias.service2.title'), description: t('service.sanitarias.service2.description') },
        { title: t('service.sanitarias.service3.title'), description: t('service.sanitarias.service3.description') },
        { title: t('service.sanitarias.service4.title'), description: t('service.sanitarias.service4.description') },
        { title: t('service.sanitarias.service5.title'), description: t('service.sanitarias.service5.description') },
        { title: t('service.sanitarias.service6.title'), description: t('service.sanitarias.service6.description') }
      ]
    },
    'hidraulicas': {
      title: t('service.hidraulicas.title'),
      subtitle: t('service.hidraulicas.subtitle'),
      description: t('service.hidraulicas.description'),
      filterTag: 'hidraulicas',
      services: [
        { title: t('service.hidraulicas.service1.title'), description: t('service.hidraulicas.service1.description') },
        { title: t('service.hidraulicas.service2.title'), description: t('service.hidraulicas.service2.description') },
        { title: t('service.hidraulicas.service3.title'), description: t('service.hidraulicas.service3.description') },
        { title: t('service.hidraulicas.service4.title'), description: t('service.hidraulicas.service4.description') },
        { title: t('service.hidraulicas.service5.title'), description: t('service.hidraulicas.service5.description') },
        { title: t('service.hidraulicas.service6.title'), description: t('service.hidraulicas.service6.description') }
      ]
    },
    'electricas': {
      title: t('service.electricas.title'),
      subtitle: t('service.electricas.subtitle'),
      description: t('service.electricas.description'),
      filterTag: 'electricas',
      services: [
        { title: t('service.electricas.service1.title'), description: t('service.electricas.service1.description') },
        { title: t('service.electricas.service2.title'), description: t('service.electricas.service2.description') },
        { title: t('service.electricas.service3.title'), description: t('service.electricas.service3.description') },
        { title: t('service.electricas.service4.title'), description: t('service.electricas.service4.description') },
        { title: t('service.electricas.service5.title'), description: t('service.electricas.service5.description') },
        { title: t('service.electricas.service6.title'), description: t('service.electricas.service6.description') }
      ]
    },
    'especiales': {
      title: t('service.especiales.title'),
      subtitle: t('service.especiales.subtitle'),
      description: t('service.especiales.description'),
      filterTag: 'especiales',
      services: [
        { title: t('service.especiales.service1.title'), description: t('service.especiales.service1.description') },
        { title: t('service.especiales.service2.title'), description: t('service.especiales.service2.description') },
        { title: t('service.especiales.service3.title'), description: t('service.especiales.service3.description') },
        { title: t('service.especiales.service4.title'), description: t('service.especiales.service4.description') },
        { title: t('service.especiales.service5.title'), description: t('service.especiales.service5.description') },
        { title: t('service.especiales.service6.title'), description: t('service.especiales.service6.description') }
      ]
    },

  // CONSTRUCCIÓN
    'civil': {
      title: t('service.civil.title'),
      subtitle: t('service.civil.subtitle'),
      description: t('service.civil.description'),
      filterTag: 'civil',
      services: [
        { title: t('service.civil.service1.title'), description: t('service.civil.service1.description') },
        { title: t('service.civil.service2.title'), description: t('service.civil.service2.description') },
        { title: t('service.civil.service3.title'), description: t('service.civil.service3.description') },
        { title: t('service.civil.service4.title'), description: t('service.civil.service4.description') },
        { title: t('service.civil.service5.title'), description: t('service.civil.service5.description') },
        { title: t('service.civil.service6.title'), description: t('service.civil.service6.description') }
      ]
    },
    'industrial': {
      title: t('service.industrial.title'),
      subtitle: t('service.industrial.subtitle'),
      description: t('service.industrial.description'),
      filterTag: 'industrial',
      services: [
        { title: t('service.industrial.service1.title'), description: t('service.industrial.service1.description') },
        { title: t('service.industrial.service2.title'), description: t('service.industrial.service2.description') },
        { title: t('service.industrial.service3.title'), description: t('service.industrial.service3.description') },
        { title: t('service.industrial.service4.title'), description: t('service.industrial.service4.description') },
        { title: t('service.industrial.service5.title'), description: t('service.industrial.service5.description') },
        { title: t('service.industrial.service6.title'), description: t('service.industrial.service6.description') }
      ]
    }
  };
}