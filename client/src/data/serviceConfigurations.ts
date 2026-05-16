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

  // Versión internacionalizada: función que recibe t
export function getServiceConfigurations(t: (key: string) => string): Record<string, ServiceConfig> {
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