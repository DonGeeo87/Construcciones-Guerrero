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
  priceClp: 30000,
  formattedPrice: '$30.000 CLP',
  refundPolicy: 'Si decides contratar nuestro servicio, este valor se descuenta íntegramente del costo final de tu proyecto.',
  inclusions: [
    {
      title: 'Visita Técnica en Terreno',
      description: 'Un arquitecto y constructor profesional asiste presencialmente a tu propiedad en cualquier comuna de la Región de Valparaíso para medir y evaluar condiciones reales.',
      icon: 'MapPin'
    },
    {
      title: 'Asesoramiento Personalizado de Expertos',
      description: 'Analizamos la mejor solución constructiva, optimización de espacios, orientación solar, pendiente y selección de materiales para maximizar tu inversión.',
      icon: 'Lightbulb'
    },
    {
      title: 'Diseño 3D e Imágenes Fotorrealistas',
      description: 'Generamos imágenes digitales de cómo quedará exactamente tu propiedad con la remodelación o construcción proyectada.',
      icon: 'Layers'
    },
    {
      title: 'Visualización Espacial en tu Propio Terreno',
      description: 'Podrás ver cómo interactúa el nuevo espacio con tu patio, vistas, desniveles y entorno real antes de colocar el primer ladrillo o viga.',
      icon: 'Eye'
    },
    {
      title: 'Cubicación y Presupuesto Detallado',
      description: 'Desglose transparente ítem por ítem: materiales, mano de obra, plazos de ejecución en Carta Gantt y opciones de financiamiento.',
      icon: 'FileSpreadsheet'
    },
    {
      title: '100% Descontable de tu Contrato',
      description: 'Los $30.000 se restan directamente como abono al formalizar la obra. ¡Tu diseño y asesoría terminan siendo completamente gratis!',
      icon: 'CheckCircle2'
    }
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'arquitectura-diseno',
    title: 'Diseño & Arquitectura',
    subtitle: 'Planificación, visualización 3D y regularizaciones',
    description: 'Convertimos tus ideas en planos ejecutables y maquetas 3D realistas. Gestionamos permisos de edificación ante la DOM (Dirección de Obras Municipales) en toda la V Región.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Modelado 3D fotorrealista y recorridos virtuales',
      'Levantamiento topográfico y estudio de pendientes',
      'Tramitación de permisos y regularización Ley del Mono',
      'Cálculo estructural antisísmico según NCh433'
    ],
    materialsIncluded: ['Planos CAD/BIM', 'Renders 3D', 'Memoria de Cálculo'],
    idealFor: 'Terrenos en pendiente, ampliaciones complejas y viviendas nuevas.'
  },
  {
    id: 'construccion-hogares',
    title: 'Construcción Integral de Casas',
    subtitle: 'Obras sólidas, eficientes y llave en mano',
    description: 'Edificación completa desde fundaciones hasta finas terminaciones. Trabajamos con cuadrillas especializadas en madera noble, hormigón armado, albañilería y paneles SIP.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Construcción en pendiente (cerros y quebradas de la V Región)',
      'Modalidad Llave en Mano o Obra Gruesa',
      'Supervisión continua con libro de obras digital',
      'Garantía por contrato de 5 a 10 años estructurales'
    ],
    materialsIncluded: ['Paneles SIP', 'Hormigón Armado', 'Estructura Metálica', 'Madera Tratada'],
    idealFor: 'Familias que buscan construir su hogar definitivo o casa de descanso en la costa.'
  },
  {
    id: 'remodelacion-interior',
    title: 'Remodelación de Hogares',
    subtitle: 'Renovación moderna de cocinas, baños y espacios',
    description: 'Transformamos casas y departamentos antiguos en espacios modernos, luminosos y funcionales. Especialistas en concepto abierto (open plan) y renovación de terminaciones.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Cocinas estilo isla con cubiertas de cuarzo y granito',
      'Baños modernos con duchas shower door e impermeabilización',
      'Cambio integral de pisos (porcelanatos, vinílicos SPC, maderas)',
      'Actualización de redes eléctricas certificadas SEC y gasfitería'
    ],
    materialsIncluded: ['Cuarzo', 'Porcelanato', 'MDF Hidrófugo', 'Griferías de Alta Eficiencia'],
    idealFor: 'Hogares en Viña, Valparaíso y Concón que desean modernizarse y revalorizar su propiedad.'
  },
  {
    id: 'ampliaciones-terrazas',
    title: 'Ampliaciones & Terrazas con Quincho',
    subtitle: 'Gana metros habitables y espacios de encuentro',
    description: 'Construimos segundos pisos ligeros, mansardas habitables, terrazas panorámicas con vista al mar y quinchos rústicos o modernos para disfrutar en familia todo el año.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Quinchos con parrilla de acero inox, hornos y barra de madera',
      'Terrazas y pérgolas con vigas a la vista en pino oregón',
      'Ampliaciones rápidas con estructuras livianas y aislación SIP',
      'Cierre vidriado plegable tipo cortina de cristal para el viento costero'
    ],
    materialsIncluded: ['Pino Oregón', 'Metalcon estructural', 'Policarbonato alveolar', 'Piedra laja'],
    idealFor: 'Casas familiares que necesitan más dormitorios o un espacio soñado de reunión.'
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
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80',
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
    projectType: 'Remodelación completa de cocina & Quincho',
    materialUsed: 'Cuarzo, Madera y Metalcon',
    rating: 5,
    date: 'Hace 3 semanas',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    highlightPhrase: 'Pagar los $30.000 del presupuesto fue la mejor decisión',
    comment: 'Estábamos indecisos sobre botar un muro para la cocina americana. El arquitecto vino al terreno, nos asesoró y nos mostró las imágenes 3D de cómo se vería exactamente en nuestro espacio. Cuando decidimos contratar la obra, nos descontaron los $30.000 del total. Cumplieron con los plazos al pie de la letra y el quincho quedó increíble.',
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
    projectType: 'Restauración y Remodelación patrimonial',
    materialUsed: 'Madera tratada, Concreto y Ladrillo a la vista',
    rating: 5,
    date: 'Hace 2 meses',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    highlightPhrase: 'Ver el diseño en nuestro terreno antes de construir nos dio paz',
    comment: 'Trabajar en los cerros de Valparaíso es difícil por los accesos y pendientes. Los maestros y el arquitecto fueron súper profesionales, respetaron la arquitectura del cerro y la vista al puerto quedó aprovechada al 100%. Recomiendo a ojos cerrados la visita técnica.',
    verified: true
  },
  {
    id: 't-4',
    name: 'Rodrigo Morales & Marcela Tapia',
    location: 'El Belloto 2000, Quilpué',
    commune: 'Quilpué',
    projectType: 'Construcción de Casa Llave en Mano (120 m²)',
    materialUsed: 'Paneles SIP + Radier de Hormigón H25',
    rating: 5,
    date: 'Hace 3 meses',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    highlightPhrase: 'Presupuesto sin sorpresas ni costos ocultos',
    comment: 'Cotizamos con 4 empresas de la región. Ellos fueron los únicos que vinieron al terreno, analizaron el tipo de suelo y nos entregaron un presupuesto con imágenes digitales exactas de la casa. Todo lo presupuestado se cumplió peso a peso.',
    verified: true
  },
  {
    id: 't-5',
    name: 'Gonzalo Cárdenas',
    location: 'Maitencillo / Puchuncaví',
    commune: 'Puchuncaví',
    projectType: 'Terraza techada con vista panorámica y Hot Tub',
    materialUsed: 'Estructura Metálica y Maderas nobles',
    rating: 5,
    date: 'Hace 4 meses',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    highlightPhrase: 'Respuesta inmediata por WhatsApp y gran calidad',
    comment: 'Escribí al WhatsApp un sábado y el lunes ya estaban coordinando la visita técnica. El render que me mostraron de cómo se integraría la terraza con el desnivel del terreno fue idéntico al resultado final. Muy recomendados para la zona norte costera.',
    verified: true
  }
];

export const BEFORE_AFTER_CASES = [
  {
    id: 'case-1',
    title: 'Transformación Cocina Americana & Living en Viña del Mar',
    location: 'Viña del Mar (Recreo)',
    description: 'De una cocina cerrada y oscura de los años 80 a un concepto abierto e iluminado con isla de cuarzo blanco, iluminación LED cálida y muebles hidrófugos a medida.',
    beforeImage: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=900&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    duration: '21 días hábiles',
    material: 'MDF Hidrófugo, Cubierta Cuarzo Calacatta, Porcelanato 60x120'
  },
  {
    id: 'case-2',
    title: 'Ampliación Segundo Piso & Terraza en Panel SIP',
    location: 'Concón (Costa)',
    description: 'Construcción sobre casa de un piso añadiendo dormitorio principal en suite, walk-in closet y terraza con vista a las dunas y al mar.',
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80',
    duration: '38 días hábiles',
    material: 'Paneles SIP 114mm, Siding de Fibrocemento, Termopaneles'
  },
  {
    id: 'case-3',
    title: 'Quincho & Terraza Panorámica en Madera y Acero',
    location: 'Quilpué / Belloto',
    description: 'Patio en desuso convertido en centro de reunión familiar con parrilla en acero inoxidable, horno a leña y vigas a la vista en pino oregón.',
    beforeImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=900&q=80',
    afterImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80',
    duration: '15 días hábiles',
    material: 'Vigas Pino Oregón 3x8, Piedra Laja, Parrilla de Inox 304'
  }
];

export const COMMUNES_COVERED: CommuneCoverage[] = [
  { name: 'Viña del Mar', zone: 'Costa', visitAvailability: '24-48 hrs', popularProjects: 'Remodelaciones integrales, terrazas y departamentos' },
  { name: 'Valparaíso', zone: 'Costa', visitAvailability: '24-48 hrs', popularProjects: 'Obras en cerros, fundaciones en pendiente y patrimonio' },
  { name: 'Concón', zone: 'Costa', visitAvailability: '24-48 hrs', popularProjects: 'Casas en paneles SIP, ampliaciones y quinchos' },
  { name: 'Quilpué & Belloto', zone: 'Interior', visitAvailability: '24-48 hrs', popularProjects: 'Construcción llave en mano y segundos pisos' },
  { name: 'Villa Alemana & Peñablanca', zone: 'Interior', visitAvailability: '24-48 hrs', popularProjects: 'Casas en parcelas, piscinas y quinchos' },
  { name: 'Limache & Olmué', zone: 'Interior', visitAvailability: '48 hrs', popularProjects: 'Cabañas rústicas en madera, quinchos y piscinas' },
  { name: 'Quillota & La Calera', zone: 'Interior', visitAvailability: '48 hrs', popularProjects: 'Construcción habitacional y ampliaciones sólidas' },
  { name: 'Maitencillo & Puchuncaví', zone: 'Costa Norte', visitAvailability: '48 hrs', popularProjects: 'Segundas viviendas de playa y terrazas bioclimáticas' },
  { name: 'Zapallar & Papudo', zone: 'Costa Norte', visitAvailability: '48-72 hrs', popularProjects: 'Arquitectura de alto estándar y remodelaciones' },
  { name: 'Casablanca', zone: 'Interior', visitAvailability: '48 hrs', popularProjects: 'Casas de campo en parcelas y estructuras metálicas' }
];

export const FAQS = [
  {
    question: '¿Por qué cobran $30.000 por el presupuesto y diseño preliminar?',
    answer: 'A diferencia de una simple cotización telefónica o "al ojo", nuestro servicio de $30.000 incluye la presencia física de un arquitecto o constructor en tu propiedad en cualquier comuna de la V Región, un análisis técnico del terreno o estructura existente, y el desarrollo de imágenes/renders 3D de cómo quedará tu proyecto. Este valor filtra visitas no comprometidas y garantiza que dedicamos horas profesionales reales a tu proyecto. Y lo mejor: si decides construir con nosotros, se te descuenta el 100% de los $30.000 en el primer estado de pago.'
  },
  {
    question: '¿Cómo funciona la visualización 3D en mi propio terreno?',
    answer: 'Durante la visita tomamos medidas láser, fotografías y cotas de nivel. Con esa información modelamos la propuesta y generamos vistas fotorrealistas insertadas en el entorno real de tu patio, cerro o fachada. Así podrás saber con exactitud cómo se verá el espacio, la luz solar y la volumetría antes de gastar en materiales.'
  },
  {
    question: '¿Trabajan en terrenos con pendiente pronunciada (cerros de Valparaíso, Viña o Concón)?',
    answer: 'Sí, somos especialistas en topografía de la Región de Valparaíso. Calculamos y ejecutamos muros de contención en hormigón armado, fundaciones sobre pilotes o poyos de concreto y estructuras livianas antisísmicas (SIP o Metalcon) para optimizar costos en terrenos inclinados.'
  },
  {
    question: '¿Qué formas de pago y garantías ofrecen para la obra?',
    answer: 'Trabajamos por estados de avance (hitos verificables por contrato ante notario). Otorgamos garantías según la Ley General de Urbanismo y Construcciones (LGUC): 10 años en fallas estructurales, 5 años en elementos constructivos y 3 años en terminaciones e instalaciones.'
  },
  {
    question: '¿Cómo puedo agendar la visita en terreno hoy mismo?',
    answer: 'Puedes escribirnos directamente a nuestro WhatsApp oficial +56 9 9838 1384 o completar el formulario en esta página indicando tu comuna y tipo de obra. Coordinaremos fecha y hora conveniente para la visita técnica.'
  }
];
