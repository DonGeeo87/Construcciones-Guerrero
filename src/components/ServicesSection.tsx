import { 
  Building2, 
  Sparkles, 
  Maximize2, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  ShieldCheck 
} from 'lucide-react';
import { SERVICES, WHATSAPP_RAW_NUMBER } from '../data/content';

interface ServicesSectionProps {
  onOpenBookingModal: () => void;
}

export default function ServicesSection({ onOpenBookingModal }: ServicesSectionProps) {
  return (
    <section id="servicios" className="py-20 bg-slate-100/80 text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xs">
            <Building2 className="w-4 h-4 text-blue-600" />
            <span>Nuestros Servicios Integrales</span>
          </div>

          <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Servicios de Construcción que Necesitas
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Nos especializamos en remodelaciones, pintura, cierres perimetrales, terrazas, techos y quinchos en toda la Región de Valparaíso. Trabajo de calidad con maestros y cuadrillas profesionales.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Image with overlay tags */}
              <div className="relative h-64 overflow-hidden bg-slate-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-white bg-blue-600 px-2.5 py-1 rounded-md shadow-xs">
                    {service.subtitle}
                  </span>
                  <h3 className="font-['Outfit'] text-2xl font-bold mt-1 text-white">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                      Incluye & Alcances:
                    </h4>
                    <ul className="space-y-2">
                      {service.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal for note */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-600">
                    <strong className="text-slate-900">Recomendado para:</strong> {service.idealFor}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={`https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(
                      `Hola, me interesa cotizar el servicio de *${service.title}* en la Región de Valparaíso.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-1/2 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-lg text-xs transition-colors shadow-xs"
                  >
                    <span>Cotizar por WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={onOpenBookingModal}
                    className="w-full sm:w-1/2 flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 font-bold py-2.5 px-4 rounded-lg text-xs transition-colors"
                  >
                    <span>Ver Visita en Terreno ($30K)</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
