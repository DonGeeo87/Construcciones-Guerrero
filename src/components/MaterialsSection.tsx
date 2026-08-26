import { useState } from 'react';
import { 
  Layers, 
  Thermometer, 
  Zap, 
  Check, 
  ShieldCheck, 
  MapPin, 
  Sparkles, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { MATERIALS_SPECIALTY, WHATSAPP_RAW_NUMBER } from '../data/content';

export default function MaterialsSection() {
  const [selectedMaterialId, setSelectedMaterialId] = useState(MATERIALS_SPECIALTY[0].id);

  const activeMaterial = MATERIALS_SPECIALTY.find(m => m.id === selectedMaterialId) || MATERIALS_SPECIALTY[0];

  return (
    <section id="materiales" className="py-20 bg-slate-900 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 text-blue-400 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider">
            <Layers className="w-4 h-4 text-blue-500" />
            <span>Sistemas Constructivos & Materiales</span>
          </div>

          <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Dominamos los Materiales Ideales para el Clima de la V Región
          </h2>

          <p className="text-slate-300 text-base">
            Desde la humedad salina de la costa (Viña, Concón, Maitencillo) hasta las variaciones térmicas de los valles (Quilpué, Villa Alemana, Quillota). Te asesoramos en la mejor elección.
          </p>
        </div>

        {/* Material Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {MATERIALS_SPECIALTY.map((mat) => {
            const isActive = mat.id === selectedMaterialId;
            return (
              <button
                key={mat.id}
                onClick={() => setSelectedMaterialId(mat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md scale-105'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                }`}
              >
                <span>{mat.name.split('(')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Material Detailed Showcase */}
        <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-6 sm:p-10 shadow-xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs px-3 py-1 rounded-md font-bold uppercase tracking-wider">
                  {activeMaterial.tagline}
                </span>

                <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-slate-900 px-3 py-1 rounded-md border border-slate-700">
                  <Thermometer className="w-3.5 h-3.5 text-blue-400" />
                  <span>Aislación Térmica: <strong>{activeMaterial.thermalEfficiency}</strong></span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-slate-900 px-3 py-1 rounded-md border border-slate-700">
                  <Zap className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Rapidez de Obra: <strong>{activeMaterial.speed}</strong></span>
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="font-['Outfit'] text-2xl sm:text-3xl font-bold text-white mb-3">
                  {activeMaterial.name}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {activeMaterial.description}
                </p>
              </div>

              {/* Advantages List */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  Ventajas Clave de este Material:
                </h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {activeMaterial.advantages.map((adv, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200 bg-slate-900/80 p-2.5 rounded-lg border border-slate-700">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{adv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Climate compatibility note */}
              <div className="bg-slate-900 border-l-4 border-blue-500 p-4 rounded-r-xl text-xs text-slate-300">
                <span className="font-bold text-blue-400 block mb-0.5">Adaptabilidad Climática en la V Región:</span>
                {activeMaterial.idealForClimate}
              </div>

              {/* WhatsApp Quick Ask */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(
                    `Hola! Me gustaría cotizar una obra usando *${activeMaterial.name}* en la Región de Valparaíso.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition-all shadow-md active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Consultar factibilidad de {activeMaterial.name.split(' ')[0]} por WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden shadow-xl border border-slate-700 aspect-4/3 sm:aspect-auto sm:h-96">
                <img
                  src={activeMaterial.image}
                  alt={activeMaterial.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-slate-300 bg-slate-900/90 p-3 rounded-xl backdrop-blur-md border border-slate-700">
                  <div className="flex items-center gap-2 text-blue-400 font-bold mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Estándar Constructivo NCh</span>
                  </div>
                  <span>Todos los materiales cuentan con certificación de calidad y cálculo antisísmico.</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
