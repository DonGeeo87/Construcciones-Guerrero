import { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle2,
  Layers
} from 'lucide-react';
import { BEFORE_AFTER_CASES, WHATSAPP_RAW_NUMBER } from '../data/content';

export default function BeforeAfterSlider() {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);

  const currentCase = BEFORE_AFTER_CASES[activeCaseIndex];

  return (
    <section id="trabajos" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider">
            <Layers className="w-4 h-4 text-blue-600" />
            <span>Nuestros Trabajos en la V Región</span>
          </div>

          <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Proyectos Reales, Resultados que Duran
          </h2>

          <p className="text-slate-600 text-base">
            Remodelaciones, terrazas y ampliaciones que hemos ejecutado para familias de la Región de Valparaíso.
          </p>
        </div>

        {/* Project Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {BEFORE_AFTER_CASES.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveCaseIndex(idx)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeCaseIndex === idx
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {item.title.split('&')[0]} ({item.location.split('(')[0]})
            </button>
          ))}
        </div>

        {/* Main Project Showcase */}
        <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm max-w-5xl mx-auto">
          
          {/* Metadata bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4 mb-6">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                {currentCase.location}
              </span>
              <h3 className="font-['Outfit'] text-xl sm:text-2xl font-bold text-slate-900">
                {currentCase.title}
              </h3>
            </div>

            <div className="flex items-center gap-4 text-xs font-medium text-slate-600">
              <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                <span>Tiempo de Ejecución: <strong>{currentCase.duration}</strong></span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span><strong>{currentCase.sqm} m²</strong></span>
              </div>
            </div>
          </div>

          {/* Project Image */}
          <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-inner">
            <img
              src={currentCase.afterImage}
              alt={currentCase.title}
              className="w-full h-[380px] sm:h-[480px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 right-4 bg-blue-600 text-white font-bold text-xs px-3 py-1 rounded-full shadow-md">
              {currentCase.material.split(',')[0]}
            </div>
          </div>

          {/* Details below photo */}
          <div className="mt-6 grid sm:grid-cols-12 gap-4 items-center bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="sm:col-span-8 text-xs sm:text-sm text-slate-600">
              <p className="mb-1 text-slate-900 font-semibold">{currentCase.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {currentCase.features.map((f, idx) => (
                  <span key={idx} className="inline-flex items-center gap-1 bg-white border border-slate-200 px-2 py-0.5 rounded-md text-slate-600">
                    <CheckCircle2 className="w-3 h-3 text-blue-500" />
                    {f}
                  </span>
                ))}
              </div>
            </div>

            <div className="sm:col-span-4 flex justify-end">
              <a
                href={`https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(
                  `Hola, vi el trabajo "${currentCase.title}" en su web y me gustaría cotizar algo similar.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors shadow-xs flex items-center justify-center gap-1.5"
              >
                <span>Cotizar Proyecto Similar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
