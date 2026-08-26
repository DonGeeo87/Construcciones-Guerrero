import { useState, MouseEvent, TouchEvent } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Clock, 
  Layers, 
  ChevronLeft, 
  ChevronRight, 
  ArrowLeftRight 
} from 'lucide-react';
import { BEFORE_AFTER_CASES, WHATSAPP_RAW_NUMBER } from '../data/content';

export default function BeforeAfterSlider() {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 to 100

  const currentCase = BEFORE_AFTER_CASES[activeCaseIndex];

  const handleSliderMove = (e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
    const container = e.currentTarget.getBoundingClientRect();
    let clientX = 0;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }
    const offset = clientX - container.left;
    const percentage = Math.max(0, Math.min(100, (offset / container.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <section id="antes-despues" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider">
            <ArrowLeftRight className="w-4 h-4 text-blue-600" />
            <span>Transformaciones Reales en la V Región</span>
          </div>

          <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Mira el Antes y el Después
          </h2>

          <p className="text-slate-600 text-base">
            Arrastra la barra para comparar el estado inicial y el resultado terminado. Gracias al diseño 3D previo, los clientes sabían con precisión cómo se vería su propiedad antes de invertir.
          </p>
        </div>

        {/* Project Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {BEFORE_AFTER_CASES.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveCaseIndex(idx);
                setSliderPosition(50);
              }}
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

        {/* Main Interactive Comparison Stage */}
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
            </div>
          </div>

          {/* Interactive Split Visual Canvas */}
          <div
            className="relative h-[380px] sm:h-[480px] rounded-xl overflow-hidden cursor-ew-resize select-none border border-slate-200 shadow-inner group"
            onMouseMove={(e) => {
              if (e.buttons === 1) handleSliderMove(e);
            }}
            onClick={handleSliderMove}
            onTouchMove={handleSliderMove}
          >
            {/* After Image (Full Background) */}
            <img
              src={currentCase.afterImage}
              alt="Después de la remodelación"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 right-4 bg-emerald-600 text-white font-bold text-xs px-3 py-1 rounded-full shadow-md z-10 pointer-events-none">
              DESPUÉS (OBRA TERMINADA)
            </div>

            {/* Before Image (Clipped Left Layer) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={currentCase.beforeImage}
                alt="Antes de la remodelación"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100%', minWidth: '100%' }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-slate-900 text-white font-bold text-xs px-3 py-1 rounded-full shadow-md z-10 pointer-events-none">
                ANTES
              </div>
            </div>

            {/* Draggable Divider Line and Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none flex items-center justify-center"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-9 h-9 -ml-4 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center border-2 border-white ring-4 ring-black/10">
                <ArrowLeftRight className="w-4 h-4" />
              </div>
            </div>

            {/* Helper tooltip */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/80 text-white text-[11px] px-3 py-1 rounded-full backdrop-blur-sm pointer-events-none flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
              <span>Desliza para comparar</span>
            </div>
          </div>

          {/* Details below photo */}
          <div className="mt-6 grid sm:grid-cols-12 gap-4 items-center bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="sm:col-span-8 text-xs sm:text-sm text-slate-600">
              <p className="mb-1 text-slate-900 font-semibold">{currentCase.description}</p>
              <span className="text-slate-500"><strong>Materiales clave:</strong> {currentCase.material}</span>
            </div>

            <div className="sm:col-span-4 flex justify-end">
              <a
                href={`https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(
                  `Hola, vi la transformación de "${currentCase.title}" en su web y me gustaría cotizar algo similar.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors shadow-xs"
              >
                Cotizar Proyecto Similar
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
