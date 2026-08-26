import { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Navigation, 
  Phone, 
  MessageSquare,
  ShieldCheck
} from 'lucide-react';
import { COMMUNES_COVERED, WHATSAPP_RAW_NUMBER } from '../data/content';

interface CoverageMapSectionProps {
  onOpenBookingModal: () => void;
}

export default function CoverageMapSection({ onOpenBookingModal }: CoverageMapSectionProps) {
  const [selectedZone, setSelectedZone] = useState<string>('Todas');

  const zones = ['Todas', 'Costa', 'Interior', 'Costa Norte'];

  const filteredCommunes = selectedZone === 'Todas'
    ? COMMUNES_COVERED
    : COMMUNES_COVERED.filter(c => c.zone === selectedZone);

  return (
    <section id="cobertura" className="py-20 bg-slate-100/80 text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xs">
            <Navigation className="w-4 h-4 text-blue-600" />
            <span>Cobertura Regional V Región</span>
          </div>

          <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Llegamos a tu Terreno en Toda la Región
          </h2>

          <p className="text-slate-600 text-base">
            Contamos con cuadrillas activas que se trasladan directamente a tu propiedad para realizar la visita técnica desde $30.000 (100% descontable).
          </p>
        </div>

        {/* Zone Selector */}
        <div className="flex justify-center gap-2 mb-10">
          {zones.map((zone) => (
            <button
              key={zone}
              onClick={() => setSelectedZone(zone)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm transition-all ${
                selectedZone === zone
                  ? 'bg-blue-600 text-white shadow-xs font-bold'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 font-medium'
              }`}
            >
              Zona {zone}
            </button>
          ))}
        </div>

        {/* Communes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {filteredCommunes.map((commune) => (
            <div
              key={commune.name}
              className="bg-white border border-slate-200 hover:border-blue-300 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-900 font-bold font-['Outfit'] text-lg">
                    <MapPin className="w-5 h-5 text-blue-600 shrink-0" />
                    <span>{commune.name}</span>
                  </div>
                  <span className="text-[11px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                    {commune.zone}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-emerald-700 font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Disponibilidad de visita: <strong>{commune.visitAvailability}</strong></span>
                </div>

                <p className="text-xs text-slate-600 pt-1">
                  <strong className="text-slate-900">Obras habituales:</strong> {commune.popularProjects}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Visita desde $30K Descontable</span>
                <a
                  href={`https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(
                    `Hola! Quiero coordinar una visita técnica en *${commune.name}* (V Región).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  <span>Agendar en {commune.name.split(' ')[0]}</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Regional Banner */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-['Outfit'] text-2xl font-bold text-white">
              ¿Tu terreno o casa está en un sector rural o cerro específico?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              También asistimos a parcelas en Olmué, Casablanca, Quebrada Alvarado, Quintay, Tunquén y cerros de Valparaíso y Viña del Mar.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <button
              onClick={onOpenBookingModal}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-md transition-colors"
            >
              Consultar Mi Dirección
            </button>
            <a
              href={`https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(
                'Hola, me gustaría saber si tienen cobertura para mi ubicación exacta en la V Región.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 px-5 py-3 rounded-xl text-xs sm:text-sm border border-slate-700 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Preguntar por WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
