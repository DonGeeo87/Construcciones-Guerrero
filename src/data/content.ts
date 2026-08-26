import { 
  ServiceItem, 
  MaterialSpecialty, 
  Testimonial, 
  ProjectShowcase, 
  CommuneCoverage 
} from '../types';

export const COMPANY_PHONE = '+56 9 9838 1384';
export const WHATSAPP_RAW_NUMBER = '56998381384';
export const WHATSAPP_DEFAULT_URL = `https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(
  'Hola, me comunico desde su sitio web. Quiero cotizar un proyecto de construcción / remodelación y conocer más sobre el presupuesto de $30.000 con visita en terreno.'
)}`;

export const BUDGET_OFFER_DETAILS = {
  priceClp: 30000, // mínimo, depende de la distancia desde Limache/Quilpué
  formattedPrice: 'Desde $30.000 CLP',
  refundPolicy: 'Si decides contratar nuestro servicio, este valor se descuenta íntegramente del costo final de tu proyecto.',
  visitFrom: 'Desde $30.000 CLP, según la distancia desde Limache/Quilpué',
  inclusions: [
    {
      title: 'Visita Técnica en Terreno',
      description: 'Un profesional de nuestro equipo de construcción asiste presencialmente a tu propiedad en cualquier comuna de la Región de Valparaíso para medir y evaluar las condiciones reales.',
      icon: 'MapPin'
    },
    {
      title: 'Asesoramiento Personalizado',
      description: 'Analizamos la mejor solución para tu espacio: distribución, materiales, alcances de la obra y cómo optimizar tu inversión según lo que realmente necesitas.',
      icon: 'Lightbulb'
    },
    {
      title: 'Revisión en tu Propio Espacio',
      description: 'Evaluamos muros, techos, pisos, terrenos en pendiente y condiciones de acceso directamente en tu propiedad antes de proponer cualquier trabajo.',
      icon: 'Eye'
    },
    {
      title: 'Cubicación y Presupuesto Detallado',
      description: 'Desglose transparente ítem por ítem: materiales, mano de obra, plazos de ejecución en Carta Gantt y opciones de financiamiento.',
      icon: 'FileSpreadsheet'
    },
    {
      title: '100% Descontable de tu Contrato',
      description: 'Los $30.000 se restan directamente como abono al formalizar la obra. Tu visita y asesoría terminan siendo completamente gratis.',
      icon: 'CheckCircle2'
    }
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'remodelaciones',
    title: 'Remodelaciones de Hogar',
    subtitle: 'Renovamos cocinas, baños y espacios',
    description: 'Transformamos casas y departamentos antiguos en espacios modernos y funcionales. Especialistas en concepto abierto, cambio de pisos, renovación de terminaciones y redistribución de espacios.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Cocinas modernas con cubiertas de cuarzo y granito',
      'Baños renovados con duchas y impermeabilización',
      'Cambio integral de pisos (porcelanatos, vinílicos, maderas)',
      'Redistribución de espacios interiores y cielos'
    ],
    materialsIncluded: ['Cuarzo', 'Porcelanato', 'MDF Hidrófugo', 'Pintura'],
    idealFor: 'Hogares en Viña, Valparaíso y Concón que desean modernizarse y revalorizar su propiedad.'
  },
  {
    id: 'pintura',
    title: 'Pintura Interior y Exterior',
    subtitle: 'Renueva el aspecto de tu casa',
    description: 'Trabajos de pintura profesionales para interiores y exteriores. Preparación de superficies, sellado de grietas, pintura de fachadas, cielos, rejas y estructuras metálicas o de madera.',
    image: 'https://images.unsplash.com/photo-1574359411659-15573a27fd0c?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Pintura de fachadas y muros exteriores',
      'Interiores completos: muros, cielos y puertas',
      'Preparación de superficies y sellado',
      'Pintura para madera y estructuras metálicas'
    ],
    materialsIncluded: ['Esmalte al agua', 'Pintura anti-moho', 'Selladores', 'Imprimantes'],
    idealFor: 'Casas y departamentos que necesitan un cambio de imagen rápido, limpio y económico.'
  },
  {
    id: 'cierres-perimetrales',
    title: 'Cierres Perimetrales y Portones',
    subtitle: 'Seguridad y delimitación de tu propiedad',
    description: 'Instalamos y renovamos cierres perimetrales completos: muros, enrejados metálicos, portones peatonales y vehiculares, rejas y cercos que entregan seguridad y delimitan tu terreno.',
    image: 'https://images.pexels.com/photos/10529669/pexels-photo-10529669.jpeg?auto=compress&cs=tinysrgb&w=1000&q=80',
    highlights: [
      'Muros perimetrales de albañilería o metalcon',
      'Enrejados metálicos y rejas de seguridad',
      'Portones peatonales y vehiculares (batiente y corredera)',
      'Cierros de madera, malla o combinados'
    ],
    materialsIncluded: ['Perfiles metálicos', 'Malla acma', 'Madera', 'Bloques'],
    idealFor: 'Terrenos, casas y parcelas que requieren delimitación, seguridad o privacidad.'
  },
  {
    id: 'terrazas-quinchos',
    title: 'Terrazas y Quinchos',
    subtitle: 'Espacios para disfrutar al aire libre',
    description: 'Construimos y renovamos terrazas techadas, quinchos con parrilla, pergaminos y decks exteriores. Diseñamos espacios de reunión para disfrutar en familia todo el año.',
    image: 'https://images.unsplash.com/photo-1720532181565-47a80ab06eb0?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Quinchos con parrilla de acero y horno',
      'Terrazas y pergaminos con vigas a la vista',
      'Decks exteriores en madera tratada',
      'Techumbres de policarbonato o zincalum'
    ],
    materialsIncluded: ['Pino Oregón', 'Metalcon', 'Policarbonato', 'Piedra laja'],
    idealFor: 'Familias que quieren aprovechar su patio con un espacio de reunión y esparcimiento.'
  },
  {
    id: 'techos',
    title: 'Techumbres y Cubiertas',
    subtitle: 'Repara o renueva el techo de tu casa',
    description: 'Instalamos, reparamos y renovamos techumbres completas: cambio de cubierta, aislación térmica, solución de filtraciones, mantención de canaletas y estructuración.',
    image: 'https://images.pexels.com/photos/221525/pexels-photo-221525.jpeg?auto=compress&cs=tinysrgb&w=1000&q=80',
    highlights: [
      'Cambio y reparación de cubiertas',
      'Solución de filtraciones y goteras',
      'Aislación térmica y acústica de techos',
      'Mantención de canaletas y bajadas de agua'
    ],
    materialsIncluded: ['Zincum', 'Fibras', 'Policarbonato', 'Aislación'],
    idealFor: 'Casas que necesitan renovar su techo o solucionar filtraciones antes del invierno.'
  }
];

export const MATERIALS_SPECIALTY: MaterialSpecialty[] = [
  {
    id: 'paneles-sip',
    name: 'Paneles SIP (Structural Insulated Panel)',
    tagline: 'Máxima eficiencia térmica y rapidez récord de montaje',
    description: 'El sistema constructivo más avanzado para el clima de la V Región. Combina resistencia estructural con un núcleo de poliestireno de alta densidad que mantiene tu hogar cálido en invierno y fresco en verano sin gasto excesivo de calefacción.',
    advantages: [
      'Ahorro de hasta 60% en consumo de calefacción/aire',
      'Construcción hasta 3 veces más rápida que sistemas tradicionales',
      'Excelente aislación acústica contra ruidos exteriores',
      'Comportamiento antisísmico liviano y flexible'
    ],
    idealForClimate: 'Ideal para zonas costeras húmedas (Viña, Concón, Maitencillo) y valles interiores calurosos (Quilpué, Quillota).',
    image: 'https://images.pexels.com/photos/36532585/pexels-photo-36532585.jpeg?auto=compress&cs=tinysrgb&w=800',
    thermalEfficiency: 'Extrema',
    speed: 'Muy Rápido'
  },
  {
    id: 'hormigon-concreto',
    name: 'Concreto & Hormigón Armado',
    tagline: 'Solidez inquebrantable para pendientes, muros y fundaciones',
    description: 'Utilizamos hormigones certificados (H20, H25, H30) con enfierradura calculada para fundaciones en los cerros de Valparaíso, muros de contención en terrenos inclinados y losas estructurales con durabilidad de por vida.',
    advantages: [
      'Durabilidad extrema y resistencia al fuego incombustible',
      'Capacidad insuperable para contención de tierras en pendientes',
      'Inercia térmica ideal para retener temperatura',
      'Terminaciones en hormigón visto estilo arquitectónico contemporáneo'
    ],
    idealForClimate: 'Imprescindible para fundaciones seguras en cerros y construcciones monumentales de costa.',
    image: 'https://images.pexels.com/photos/4134382/pexels-photo-4134382.jpeg?auto=compress&cs=tinysrgb&w=800',
    thermalEfficiency: 'Alta',
    speed: 'Estándar'
  },
  {
    id: 'estructuras-metalicas',
    name: 'Estructuras Metálicas & Metalcon',
    tagline: 'Precisión milimétrica, antisísmico y versátil',
    description: 'Perfiles de acero galvanizado liviano (Steel Framing / Metalcon) y vigas estructurales pesadas de acero electropintado. Permite grandes luces sin columnas intermedias y ampliaciones en segundos pisos sin sobrecargar la estructura base.',
    advantages: [
      'Inmune a plagas de termitas e indeformable con la humedad',
      'Montaje en seco limpio y seguro',
      'Ideal para ampliaciones en segundos pisos y techumbres',
      'Resistencia sísmica superior por su relación peso-resistencia'
    ],
    idealForClimate: 'Tratamientos anticorrosivos marinos para resistir la brisa marina del litoral.',
    image: 'https://images.pexels.com/photos/31197870/pexels-photo-31197870.jpeg?auto=compress&cs=tinysrgb&w=800',
    thermalEfficiency: 'Muy Alta',
    speed: 'Muy Rápido'
  },
  {
    id: 'madera-tratada',
    name: 'Madera Tratada & Pino Oregón',
    tagline: 'Calidez natural, nobleza y estética costera chilena',
    description: 'Trabajamos con maderas impregnadas CCA de primera calidad, pino oregón nacional y maderas nativas para vigas a la vista, entablados rústicos, decks de exterior y cabañas de arquitectura bioclimática.',
    advantages: [
      'Estética cálida y acogedora única e inigualable',
      'Material ecológico con baja huella de carbono',
      'Tratamiento autoclave contra pudrición y humedad',
      'Excelente adaptabilidad para terrazas y decks exteriores'
    ],
    idealForClimate: 'Tratada con selladores náuticos hidrorrepelentes para la costa y cerros verdes.',
    image: 'https://images.pexels.com/photos/23322381/pexels-photo-23322381.jpeg?auto=compress&cs=tinysrgb&w=800',
    thermalEfficiency: 'Alta',
    speed: 'Rápido'
  },
  {
    id: 'ladrillos-albanileria',
    name: 'Ladrillos & Albañilería Armada',
    tagline: 'Tradición constructiva con aislación acústica y robustez',
    description: 'Construcción con ladrillo princesa, fiscal y bloques estructurales confinados con cadenas y pilares de hormigón. Un clásico chileno confiable con excelente masa térmica y terminaciones a la vista de gran valor estético.',
    advantages: [
      'Gran aislamiento acústico contra ruidos de calle',
      'Mantenimiento prácticamente nulo durante décadas',
      'Aspecto rústico o pintado de gran carácter arquitectónico',
      'Alta resistencia a impactos mecánicos'
    ],
    idealForClimate: 'Excelente para sectores urbanos y residenciales tradicionales de la región.',
    image: 'https://images.pexels.com/photos/36259359/pexels-photo-36259359.jpeg?auto=compress&cs=tinysrgb&w=800',
    thermalEfficiency: 'Media',
    speed: 'Estándar'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Matías & Camila Vergara',
    location: 'Bosques de Montemar, Concón',
    commune: 'Concón',
    projectType: 'Remodelación completa de cocina',
    materialUsed: 'Cuarzo y porcelanato',
    rating: 5,
    date: 'Hace 3 semanas',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    highlightPhrase: 'Pagar los $30.000 del presupuesto fue la mejor decisión',
    comment: 'Estábamos indecisos sobre si botar un muro para la cocina americana. Vinieron al terreno, nos asesoraron y nos entregaron un presupuesto detallado ítem por ítem. Cuando contratamos la obra, nos descontaron los $30.000 del total. Cumplieron con los plazos al pie de la letra y el quincho quedó increíble.',
    verified: true
  },
  {
    id: 't-2',
    name: 'Ignacio Silva R.',
    location: 'Jardín del Mar, Reñaca (Viña del Mar)',
    commune: 'Viña del Mar',
    projectType: 'Ampliación 2° Piso (55 m²)',
    materialUsed: 'Paneles SIP y Pino Oregón',
    rating: 5,
    date: 'Hace 1 mes',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    highlightPhrase: 'Aislación térmica insuperable y cero filtraciones',
    comment: 'Teníamos miedo de hacer el segundo piso por el peso sobre la casa antigua y la humedad costera. Nos recomendaron panel SIP y fue un acierto total: en invierno no se pasa el frío y la obra estuvo lista en tiempo récord. El trato por WhatsApp con el equipo siempre fue transparente.',
    verified: true
  },
  {
    id: 't-3',
    name: 'Valeria Henríquez',
    location: 'Cerro Alegre, Valparaíso',
    commune: 'Valparaíso',
    projectType: 'Restauración y remodelación de fachada',
    materialUsed: 'Pintura y madera tratada',
    rating: 5,
    date: 'Hace 2 meses',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    highlightPhrase: 'Quedó impecable y por un precio justo',
    comment: 'Trabajar en los cerros de Valparaíso es difícil por los accesos y pendientes. El equipo fue súper profesional, respetaron la arquitectura del cerro y el resultado de la pintura y los trabajos de madera quedó excelente. Recomiendo a ojos cerrados la visita técnica.',
    verified: true
  },
  {
    id: 't-4',
    name: 'Rodrigo Morales & Marcela Tapia',
    location: 'El Belloto 2000, Quilpué',
    commune: 'Quilpué',
    projectType: 'Cierre perimetral y portón',
    materialUsed: 'Malla y perfiles metálicos',
    rating: 5,
    date: 'Hace 3 meses',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    highlightPhrase: 'Presupuesto sin sorpresas ni costos ocultos',
    comment: 'Cotizamos con 4 empresas de la región. Ellos fueron los únicos que vinieron al terreno, analizaron el espacio y nos entregaron un presupuesto claro y completo. Todo lo presupuestado se cumplió peso a peso y el portón quedó funcionando perfecto.',
    verified: true
  },
  {
    id: 't-5',
    name: 'Gonzalo Cárdenas',
    location: 'Maitencillo / Puchuncaví',
    commune: 'Puchuncaví',
    projectType: 'Terraza techada y quincho',
    materialUsed: 'Estructura Metálica y Maderas nobles',
    rating: 5,
    date: 'Hace 4 meses',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    highlightPhrase: 'Respuesta inmediata por WhatsApp y gran calidad',
    comment: 'Escribí al WhatsApp un sábado y el lunes ya estaban coordinando la visita técnica. El resultado del quincho y la terraza fue exactamente lo que esperábamos. Muy recomendados para la zona norte costera.',
    verified: true
  }
];

export const BEFORE_AFTER_CASES: ProjectShowcase[] = [
  {
    id: 'case-1',
    title: 'Remodelación de Cocina & Living en Viña del Mar',
    location: 'Viña del Mar (Recreo)',
    commune: 'Viña del Mar',
    description: 'De una cocina cerrada y oscura de los años 80 a un concepto abierto e iluminado con isla de cuarzo blanco, iluminación LED cálida y muebles hidrófugos a medida.',
    afterImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80',
    category: 'remodelacion',
    sqm: 35,
    duration: '21 días hábiles',
    material: 'MDF Hidrófugo, Cubierta Cuarzo, Porcelanato',
    features: ['Cocina americana', 'Isla de cuarzo', 'Cambio de pisos']
  },
  {
    id: 'case-2',
    title: 'Ampliación Segundo Piso & Terraza en Panel SIP',
    location: 'Concón (Costa)',
    commune: 'Concón',
    description: 'Construcción sobre casa de un piso añadiendo dormitorio principal, walk-in closet y terraza con vista al mar.',
    afterImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80',
    category: 'ampliacion',
    sqm: 55,
    duration: '38 días hábiles',
    material: 'Panel SIP, Siding Fibrocemento, Termopaneles',
    features: ['2° piso', 'Walk-in closet', 'Terraza']
  },
  {
    id: 'case-3',
    title: 'Quincho & Terraza en Madera y Acero',
    location: 'Quilpué / Belloto',
    commune: 'Quilpué',
    description: 'Patio en desuso convertido en centro de reunión familiar con parrilla en acero inoxidable, horno a leña y vigas a la vista.',
    afterImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80',
    category: 'terrazas',
    sqm: 28,
    duration: '15 días hábiles',
    material: 'Vigas Pino Oregón, Piedra laja, Parrilla de inox',
    features: ['Quincho', 'Parrilla', 'Vigas a la vista']
  }
];

export const COMMUNES_COVERED: CommuneCoverage[] = [
  { name: 'Viña del Mar', zone: 'Costa', visitAvailability: '24-48 hrs', popularProjects: 'Remodelaciones integrales, pintura y cierres' },
  { name: 'Valparaíso', zone: 'Costa', visitAvailability: '24-48 hrs', popularProjects: 'Remodelaciones, muros en cerro y pintura' },
  { name: 'Concón', zone: 'Costa', visitAvailability: '24-48 hrs', popularProjects: 'Terrazas, quinchos y ampliaciones' },
  { name: 'Quilpué & Belloto', zone: 'Interior', visitAvailability: '24-48 hrs', popularProjects: 'Remodelaciones y cierres perimetrales' },
  { name: 'Villa Alemana & Peñablanca', zone: 'Interior', visitAvailability: '24-48 hrs', popularProjects: 'Casas en parcelas, cierres y quinchos' },
  { name: 'Limache & Olmué', zone: 'Interior', visitAvailability: '48 hrs', popularProjects: 'Cabañas en madera, quinchos y techos' },
  { name: 'Quillota & La Calera', zone: 'Interior', visitAvailability: '48 hrs', popularProjects: 'Remodelaciones y ampliaciones' },
  { name: 'Maitencillo & Puchuncaví', zone: 'Costa Norte', visitAvailability: '48 hrs', popularProjects: 'Terrazas, quinchos y segundas viviendas' },
  { name: 'Zapallar & Papudo', zone: 'Costa Norte', visitAvailability: '48-72 hrs', popularProjects: 'Remodelaciones de alto estándar' },
  { name: 'Casablanca', zone: 'Interior', visitAvailability: '48 hrs', popularProjects: 'Cierres, terrazas y estructuras' }
];

export const FAQS = [
  {
    question: '¿Por qué cobran desde $30.000 por la visita y presupuesto?',
    answer: 'A diferencia de una simple cotización telefónica o "al ojo", nuestro servicio (desde $30.000) incluye la presencia física de un profesional de nuestro equipo en tu propiedad en cualquier comuna de la V Región, un análisis real del terreno o estructura existente y un presupuesto detallado ítem por ítem. El valor parte en $30.000 y varía según la distancia desde nuestro punto de partida en Limache y Quilpué. Este valor filtra visitas no comprometidas y garantiza que dedicamos horas profesionales reales a tu proyecto. Y lo mejor: si decides contratar con nosotros, se te descuenta el 100% en el primer estado de pago.'
  },
  {
    question: '¿Qué incluye exactamente la visita en terreno?',
    answer: 'Durante la visita medimos el espacio, evaluamos muros, techos, pisos y condiciones de acceso, revisamos la pendiente del terreno y tomamos nota de tu proyecto (remodelación, pintura, cierre, terraza, techado, etc.). Con esa información te entregamos un presupuesto transparente con materiales y plazos, sin costos ocultos.'
  },
  {
    question: '¿Trabajan en terrenos con pendiente pronunciada (cerros de Valparaíso, Viña o Concón)?',
    answer: 'Sí, estamos acostumbrados a los cerros de la Región de Valparaíso. Calculamos y ejecutamos muros de contención en hormigón armado, fundaciones sobre pilotes y estructuras livianas antisísmicas (SIP o Metalcon) para optimizar costos en terrenos inclinados.'
  },
  {
    question: '¿Qué formas de pago y garantías ofrecen para la obra?',
    answer: 'Trabajamos por estados de avance verificables en terreno. Entregamos un presupuesto escrito con plazos y damos garantía por contrato sobre los trabajos realizados. Te explicamos las condiciones específicas de cada obra antes de partir.'
  },
  {
    question: '¿Cómo puedo agendar la visita en terreno hoy mismo?',
    answer: 'Escribe directamente a nuestro WhatsApp oficial +56 9 9838 1384 o completa el formulario en esta página indicando tu comuna y tipo de obra. Coordinaremos fecha y hora conveniente para la visita técnica.'
  }
];
