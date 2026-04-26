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

export const serviceConfigurations: Record<string, ServiceConfig> = {
  // ARQUITECTURA
  'arquitectonico': {
    title: 'Diseño Arquitectónico',
    subtitle: 'Creamos espacios únicos con diseños innovadores y funcionales',
    description: 'Nuestro equipo de arquitectos especializados desarrolla proyectos que combinan estética, funcionalidad y sustentabilidad. Desde el concepto inicial hasta los planos ejecutivos, creamos soluciones arquitectónicas que se adaptan a las necesidades específicas de cada cliente y del entorno.',
    filterTag: 'arquitectonico',
    services: [
      {
        title: 'Diseño Conceptual',
        description: 'Desarrollo de conceptos arquitectónicos innovadores basados en las necesidades del cliente y análisis del sitio.'
      },
      {
        title: 'Planos Ejecutivos',
        description: 'Elaboración detallada de planos arquitectónicos, estructurales y de instalaciones para construcción.'
      },
      {
        title: 'Modelado 3D',
        description: 'Representación tridimensional realista de proyectos para visualización previa a la construcción.'
      },
      {
        title: 'Diseño Sustentable',
        description: 'Implementación de criterios de arquitectura verde y eficiencia energética en todos nuestros proyectos.'
      },
      {
        title: 'Remodelación',
        description: 'Renovación y adaptación de espacios existentes con nuevos conceptos arquitectónicos modernos.'
      },
      {
        title: 'Consultoría Técnica',
        description: 'Asesoría especializada en normativas, códigos de construcción y optimización de diseños.'
      }
    ]
  },
  'visual': {
    title: 'Diseño Visual',
    subtitle: 'Transformamos conceptos en experiencias visuales impactantes',
    description: 'Especializados en el desarrollo de identidad visual arquitectónica y diseño de espacios que comunican. Nuestro enfoque integral combina arquitectura, interiorismo y comunicación visual para crear ambientes que transmiten la esencia y valores de cada proyecto.',
    filterTag: 'visual',
    services: [
      {
        title: 'Identidad Arquitectónica',
        description: 'Desarrollo de conceptos visuales únicos que definen el carácter y personalidad de cada proyecto.'
      },
      {
        title: 'Diseño de Interiores',
        description: 'Creación de ambientes interiores funcionales y estéticamente atractivos con materiales selectos.'
      },
      {
        title: 'Señalética',
        description: 'Sistemas de comunicación visual y wayfinding para optimizar la experiencia del usuario en el espacio.'
      },
      {
        title: 'Iluminación Arquitectónica',
        description: 'Diseño de sistemas de iluminación que resaltan las características arquitectónicas y crean ambientes.'
      },
      {
        title: 'Paisajismo',
        description: 'Integración de elementos naturales y diseño de jardines que complementan la arquitectura.'
      },
      {
        title: 'Mobiliario Personalizado',
        description: 'Diseño y fabricación de mobiliario único adaptado a las necesidades específicas del proyecto.'
      }
    ]
  },

  // ESTRUCTURAL
  'sismorresistente': {
    title: 'Ingeniería Sismorresistente',
    subtitle: 'Estructuras seguras diseñadas para resistir movimientos sísmicos',
    description: 'Desarrollamos sistemas estructurales robustos aplicando las más avanzadas técnicas de ingeniería sismorresistente. Nuestros diseños cumplen con las normativas más estrictas de seguridad estructural, garantizando la protección de vidas y patrimonio ante eventos sísmicos.',
    filterTag: 'sismorresistente',
    services: [
      {
        title: 'Análisis Sísmico',
        description: 'Evaluación detallada de riesgos sísmicos y comportamiento estructural ante movimientos telúricos.'
      },
      {
        title: 'Diseño Estructural',
        description: 'Cálculo y diseño de elementos estructurales con criterios sismorresistentes y códigos actualizados.'
      },
      {
        title: 'Refuerzo Estructural',
        description: 'Mejoramiento y reforzamiento de estructuras existentes para incrementar su resistencia sísmica.'
      },
      {
        title: 'Aisladores Sísmicos',
        description: 'Implementación de sistemas de aislamiento sísmico para reducir la transmisión de movimientos.'
      },
      {
        title: 'Supervisión Técnica',
        description: 'Seguimiento especializado durante la construcción para garantizar el cumplimiento del diseño.'
      },
      {
        title: 'Dictámenes Estructurales',
        description: 'Evaluación profesional del estado estructural de edificaciones existentes y recomendaciones.'
      }
    ]
  },
  'eolica': {
    title: 'Ingeniería Eólica',
    subtitle: 'Diseño estructural resistente a cargas de viento',
    description: 'Especialistas en el análisis y diseño de estructuras sometidas a cargas de viento. Aplicamos metodologías avanzadas de simulación y cálculo para garantizar que las edificaciones resistan eficientemente las solicitaciones eólicas más severas de la región.',
    filterTag: 'eolica',
    services: [
      {
        title: 'Estudios de Viento',
        description: 'Análisis climatológico y medición de velocidades de viento para caracterización del sitio.'
      },
      {
        title: 'Simulación CFD',
        description: 'Modelado computacional de fluidos para análisis detallado del comportamiento del viento.'
      },
      {
        title: 'Diseño Aerodinámico',
        description: 'Optimización de formas arquitectónicas para minimizar efectos adversos del viento.'
      },
      {
        title: 'Torres y Mástiles',
        description: 'Diseño especializado de estructuras altas con consideraciones específicas de cargas eólicas.'
      },
      {
        title: 'Fachadas Ventiladas',
        description: 'Sistemas de envolvente que consideran presiones y succiones del viento de manera eficiente.'
      },
      {
        title: 'Certificaciones',
        description: 'Validación de diseños mediante ensayos y certificaciones de resistencia al viento.'
      }
    ]
  },

  // INSTALACIONES
  'sanitarias': {
    title: 'Instalaciones Sanitarias',
    subtitle: 'Sistemas hidráulicos y sanitarios eficientes y sustentables',
    description: 'Diseñamos e implementamos sistemas de instalaciones sanitarias completos, desde el suministro de agua potable hasta el tratamiento de aguas residuales. Nuestras soluciones integran tecnologías modernas de ahorro de agua y tratamiento ecológico.',
    filterTag: 'sanitarias',
    services: [
      {
        title: 'Agua Potable',
        description: 'Diseño de redes de distribución de agua fría y caliente con sistemas de presurización eficientes.'
      },
      {
        title: 'Drenaje Sanitario',
        description: 'Sistemas de desalojo de aguas residuales con criterios de ventilación y pendientes adecuadas.'
      },
      {
        title: 'Drenaje Pluvial',
        description: 'Manejo integral de aguas de lluvia con sistemas de captación, conducción y aprovechamiento.'
      },
      {
        title: 'Tratamiento de Aguas',
        description: 'Plantas de tratamiento de aguas residuales y sistemas de reciclaje para uso secundario.'
      },
      {
        title: 'Equipos Sanitarios',
        description: 'Selección e instalación de muebles y accesorios sanitarios de alta eficiencia.'
      },
      {
        title: 'Mantenimiento',
        description: 'Programas de mantenimiento preventivo y correctivo para sistemas sanitarios.'
      }
    ]
  },
  'hidraulicas': {
    title: 'Instalaciones Hidráulicas',
    subtitle: 'Sistemas de agua eficientes con tecnología de vanguardia',
    description: 'Desarrollamos sistemas hidráulicos integrales que garantizan el suministro confiable y eficiente de agua. Desde cisternas y equipos de bombeo hasta redes de distribución, aplicamos las mejores prácticas de la ingeniería hidráulica moderna.',
    filterTag: 'hidraulicas',
    services: [
      {
        title: 'Sistemas de Bombeo',
        description: 'Selección e instalación de equipos de bombeo con variadores de frecuencia y automatización.'
      },
      {
        title: 'Cisternas y Tanques',
        description: 'Diseño de sistemas de almacenamiento de agua con materiales y recubrimientos especializados.'
      },
      {
        title: 'Redes de Distribución',
        description: 'Tuberías y accesorios hidráulicos dimensionados para presiones y caudales óptimos.'
      },
      {
        title: 'Sistemas de Presión',
        description: 'Equipos hidroneumáticos y variadores para mantener presión constante en todo el sistema.'
      },
      {
        title: 'Medición y Control',
        description: 'Instrumentación para monitoreo de presiones, caudales y niveles en tiempo real.'
      },
      {
        title: 'Eficiencia Hídrica',
        description: 'Implementación de tecnologías de ahorro de agua y aprovechamiento de agua pluvial.'
      }
    ]
  },
  'electricas': {
    title: 'Instalaciones Eléctricas',
    subtitle: 'Sistemas eléctricos seguros y eficientes energéticamente',
    description: 'Especialistas en el diseño e implementación de instalaciones eléctricas residenciales, comerciales e industriales. Nuestros proyectos integran las últimas tecnologías en automatización, domótica y sistemas de energía renovable.',
    filterTag: 'electricas',
    services: [
      {
        title: 'Diseño Eléctrico',
        description: 'Cálculo de cargas eléctricas y diseño de circuitos cumpliendo normativas vigentes de seguridad.'
      },
      {
        title: 'Tableros y Protecciones',
        description: 'Selección de interruptores, fusibles y dispositivos de protección contra sobrecorrientes.'
      },
      {
        title: 'Iluminación LED',
        description: 'Sistemas de iluminación eficiente con tecnología LED y controles automatizados.'
      },
      {
        title: 'Tierra Física',
        description: 'Sistemas de puesta a tierra y protección contra descargas atmosféricas.'
      },
      {
        title: 'Energía Solar',
        description: 'Instalación de paneles fotovoltaicos e inversores para generación de energía limpia.'
      },
      {
        title: 'Automatización',
        description: 'Sistemas domóticos y de control inteligente para optimización del consumo energético.'
      }
    ]
  },
  'especiales': {
    title: 'Instalaciones Especiales',
    subtitle: 'Sistemas tecnológicos avanzados y comunicaciones',
    description: 'Implementamos sistemas especializados de comunicaciones, seguridad y tecnología que requieren conocimientos técnicos específicos. Desde redes de datos hasta sistemas de aire acondicionado, cubrimos las necesidades tecnológicas más exigentes.',
    filterTag: 'especiales',
    services: [
      {
        title: 'Redes de Datos',
        description: 'Cableado estructurado, fibra óptica y sistemas de telecomunicaciones de alta velocidad.'
      },
      {
        title: 'CCTV y Seguridad',
        description: 'Sistemas de videovigilancia, control de acceso y alarmas con tecnología IP avanzada.'
      },
      {
        title: 'Climatización',
        description: 'Aires acondicionados centrales y VRF con sistemas de control automático de temperatura.'
      },
      {
        title: 'Detección de Incendios',
        description: 'Sistemas de detección y extinción de incendios cumpliendo normativas de protección civil.'
      },
      {
        title: 'Audio y Video',
        description: 'Sistemas audiovisuales profesionales para auditorios, salas de juntas y espacios comerciales.'
      },
      {
        title: 'Elevadores',
        description: 'Instalación y mantenimiento de sistemas de transporte vertical y escaleras mecánicas.'
      }
    ]
  },

  // CONSTRUCCIÓN
  'civil': {
    title: 'Construcción Civil',
    subtitle: 'Obras civiles con los más altos estándares de calidad',
    description: 'Ejecutamos proyectos de construcción civil aplicando metodologías modernas de gestión y control de calidad. Desde cimentaciones hasta acabados finales, nuestro equipo garantiza la entrega de obras que superan las expectativas en tiempo, costo y calidad.',
    filterTag: 'civil',
    services: [
      {
        title: 'Movimiento de Tierra',
        description: 'Excavaciones, nivelaciones y compactación de terrenos con maquinaria especializada.'
      },
      {
        title: 'Cimentaciones',
        description: 'Zapatas, losas de cimentación y pilotes diseñados según estudios de mecánica de suelos.'
      },
      {
        title: 'Estructura de Concreto',
        description: 'Columnas, vigas y losas de concreto armado con control de resistencia y calidad.'
      },
      {
        title: 'Mampostería',
        description: 'Muros de ladrillo, block y materiales regionales con morteros especializados.'
      },
      {
        title: 'Acabados',
        description: 'Pisos, azulejos, pintura y acabados decorativos con materiales de primera calidad.'
      },
      {
        title: 'Control de Calidad',
        description: 'Supervisión técnica y pruebas de laboratorio para garantizar especificaciones del proyecto.'
      }
    ]
  },
  'industrial': {
    title: 'Construcción Industrial',
    subtitle: 'Infraestructura industrial robusta y funcional',
    description: 'Especializados en la construcción de naves industriales, bodegas y infraestructura para procesos productivos. Aplicamos técnicas de construcción industrializada y materiales de alto rendimiento para crear espacios eficientes y duraderos.',
    filterTag: 'industrial',
    services: [
      {
        title: 'Naves Industriales',
        description: 'Estructuras metálicas y de concreto presforzado para grandes espacios libres de columnas.'
      },
      {
        title: 'Pisos Industriales',
        description: 'Pisos de concreto de alta resistencia con tratamientos superficiales especializados.'
      },
      {
        title: 'Grúas y Polipastos',
        description: 'Sistemas de izaje y manejo de materiales con capacidades desde 1 hasta 50 toneladas.'
      },
      {
        title: 'Techumbres',
        description: 'Cubiertas metálicas, de concreto y materiales compuestos con aislamiento térmico.'
      },
      {
        title: 'Servicios Auxiliares',
        description: 'Casetas de vigilancia, oficinas, comedores y servicios de apoyo a la operación industrial.'
      },
      {
        title: 'Mantenimiento Industrial',
        description: 'Servicios de mantenimiento preventivo y correctivo para infraestructura productiva.'
      }
    ]
  }
};