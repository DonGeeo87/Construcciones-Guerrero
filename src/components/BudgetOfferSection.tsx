import { 
  MapPin, 
  Lightbulb, 
  Eye, 
  FileSpreadsheet, 
  CheckCircle2, 
  MessageSquare, 
  Compass, 
  Sparkles, 
  ArrowRight,
  TrendingDown
} from 'lucide-react';
import { WHATSAPP_RAW_NUMBER } from '../data/content';

interface BudgetOfferSectionProps {
  onOpenBookingModal: () => void;
}

export default function BudgetOfferSection({ onOpenBookingModal }: BudgetOfferSectionProps) {
  const steps = [
    {
      number: '01',
      title: 'Visita Técnica en tu Terreno',
      description: 'Asistimos directamente a tu inmueble o terreno en Viña del Mar, Valparaíso, Concón, Quilpué, Villa Alemana o cualquier punto de la V Región para medir y evaluar la topografía y estructura.',
      icon: MapPin,
      badge: 'En Toda la V Región'
    },
    {
      number: '02',
      title: 'Asesoramiento Profesional',
      description: 'Te orientamos sobre la mejor solución para tu espacio: materiales, alcances de la obra, distribución y cómo optimizar tu inversión según lo que realmente necesitas.',
      icon: Lightbulb,
      badge: 'Solución a tu Medida'
    },
    {
      number: '03',
      title: 'Revisión en tu Propio Espacio',
      description: 'Evaluamos muros, techos, pisos, condiciones de acceso y pendiente del terreno directamente en tu propiedad antes de proponer cualquier trabajo.',
      icon: Eye,
      badge: 'Cero Sorpresas'
    },
    {
      number: '04',
      title: 'Cubicación & Carta Gantt',
      description: 'Presupuesto transparente y detallado ítem por ítem con cotización de materiales, costos de mano de obra y cronograma estricto de entrega por etapas.',
      icon: FileSpreadsheet,
      badge: 'Transparencia Total'
    },
    {
      number: '05',
      title: '¡100% Descontable de tu Obra!',
      description: 'Si decides ejecutar la obra con nosotros, los $30.000 pagados se descuentan de forma automática del primer pago. ¡Tu visita y asesoría te resultan gratis!',
      icon: TrendingDown,
      badge: 'Reembolso Garantizado'
    }
  ];

  return (
    <section id="presupuesto-30k" className="py-20 bg-slate-50 text-slate-900 border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Servicio Exclusivo en la Región de Valparaíso</span>
          </div>

          <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Presupuesto con Visita en Terreno por solo{' '}
            <span className="text-blue-600">
              $30.000 CLP
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            No cobramos por dar un número al azar. Realizamos una revisión real de tu espacio y te entregamos un <strong>presupuesto detallado y transparente</strong> para tu remodelación, pintura, cierre, terraza o techado.
          </p>

          {/* Guarantee banner for 100% discount */}
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl text-center shadow-xs">
            <p className="text-sm sm:text-base text-blue-900 font-semibold flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>
                <strong>Importante:</strong> Si decides contratar nuestro servicio, los $30.000 <strong>se descuentan íntegramente</strong> del costo final de tu obra.
              </span>
            </p>
          </div>
        </div>

        {/* Steps Interactive Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {steps.map((step) => {
            const Icon = step.icon;
            const isDiscountCard = step.number === '05';

            return (
              <div
                key={step.number}
                className={`relative rounded-xl p-6 transition-all duration-300 ${
                  isDiscountCard
                    ? 'bg-gradient-to-b from-blue-50/80 to-white border-2 border-blue-600 shadow-lg'
                    : 'bg-white hover:bg-slate-50/80 border border-slate-200 hover:border-blue-300 shadow-sm'
                }`}
              >
                {/* Step number badge & tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    isDiscountCard 
                      ? 'bg-blue-600 text-white font-bold' 
                      : 'bg-blue-50 text-blue-600 border border-blue-100'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {step.badge}
                    </span>
                    <span className="font-['Outfit'] text-2xl font-black text-slate-400">
                      {step.number}
                    </span>
                  </div>
                </div>

                <h3 className="font-['Outfit'] text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Conversion Box */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 sm:p-10 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 text-white">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="font-['Outfit'] text-2xl sm:text-3xl font-bold text-white">
              ¿Listo para un presupuesto sin sorpresas?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Agenda tu visita en terreno. Revisaremos tu espacio, evaluaremos el alcance de la obra y te entregaremos un presupuesto detallado y descontable.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <a
              id="budget-section-whatsapp-btn"
              href={`https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(
                'Hola! Deseo agendar la visita en terreno y presupuesto de $30.000 para mi propiedad en la Región de Valparaíso.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-all active:scale-95 text-sm"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>WhatsApp: +56 9 9838 1384</span>
            </a>

            <button
              id="budget-section-modal-btn"
              onClick={onOpenBookingModal}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-all active:scale-95 text-sm group"
            >
              <Compass className="w-5 h-5 text-white" />
              <span>Agendar Visita ($30.000)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
