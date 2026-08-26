import { 
  MapPin, 
  Sparkles, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2, 
  Wrench,
  Wallet 
} from 'lucide-react';
import { WHATSAPP_RAW_NUMBER, COMPANY_PHONE } from '../data/content';

interface HeroProps {
  onOpenBookingModal: () => void;
}

export default function Hero({ onOpenBookingModal }: HeroProps) {
  const specialtiesPills = [
    'Remodelaciones',
    'Pintura',
    'Cierres y Portones',
    'Terrazas y Quinchos',
    'Techos'
  ];

  return (
    <section id="hero-section" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-slate-900 text-white">
      {/* Background image with subtle overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=85"
          alt="Construcción y remodelación en la Región de Valparaíso"
          className="w-full h-full object-cover object-center opacity-25 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/90 to-slate-900/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/15 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Value Proposition & Hooks */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Location Pill */}
            <div className="inline-flex items-center gap-2 bg-slate-800 border border-blue-500/40 rounded-full px-4 py-1.5 text-xs sm:text-sm text-slate-200 shadow-sm backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-ping" />
              <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
              <span className="font-medium">Región de Valparaíso, Chile</span>
              <span className="text-slate-600">|</span>
              <span className="text-blue-400 font-bold">Constructores Profesionales</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-['Outfit'] text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.12] text-white">
              Construcciones <span className="text-blue-500">Guerrero</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Somos constructores expertos en <strong>remodelaciones, pintura, cierres perimetrales, portones, muros, terrazas, techos y quinchos</strong> en toda la Región de Valparaíso. Trabajo serio, presupuesto transparente y obras que duran.
            </p>

            {/* Experience Grid */}
            <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0">
              <div className="bg-slate-800/90 p-3.5 rounded-xl border border-slate-700 shadow-sm text-left">
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-0.5">Experiencia</p>
                <p className="text-lg font-bold text-white">+15 Años</p>
              </div>
              <div className="bg-slate-800/90 p-3.5 rounded-xl border border-slate-700 shadow-sm text-left">
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-0.5">Obras</p>
                <p className="text-lg font-bold text-white">+140</p>
              </div>
              <div className="bg-slate-800/90 p-3.5 rounded-xl border border-slate-700 shadow-sm text-left">
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-0.5">Región</p>
                <p className="text-lg font-bold text-white">Valparaíso</p>
              </div>
            </div>

            {/* Specialties Pills Bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <span className="text-xs text-slate-400 font-bold mr-1 uppercase tracking-wider">Especialidades:</span>
              {specialtiesPills.map((spec) => (
                <span
                  key={spec}
                  className="bg-slate-800/80 border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-blue-300 text-xs px-3 py-1 rounded-md transition-colors font-medium"
                >
                  {spec}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              
              {/* WhatsApp Direct CTA */}
              <a
                id="hero-whatsapp-cta-btn"
                href={`https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(
                  'Hola! Vi su web y me interesa cotizar o agendar una visita en terreno para mi proyecto en la Región de Valparaíso.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-3 rounded-xl shadow-lg shadow-blue-900/30 transition-all active:scale-95 text-sm whitespace-nowrap"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Cotizar por WhatsApp</span>
              </a>

              {/* Book $30k visit CTA */}
              <button
                id="hero-book-visit-btn"
                onClick={onOpenBookingModal}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-blue-400 text-slate-200 hover:text-white font-bold px-5 py-3 rounded-xl transition-all shadow-sm active:scale-95 text-sm whitespace-nowrap"
              >
                <Wrench className="w-5 h-5 text-blue-400" />
                <span>Agendar Visita ($30.000)</span>
              </button>
            </div>

            {/* Trust bullet features */}
            <div className="pt-3 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left border-t border-slate-800">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Descontable de la obra</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Wallet className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Presupuesto transparente</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Obra garantizada por contrato</span>
              </div>
            </div>

          </div>

          {/* Right Column: $30.000 Budget Box */}
          <div className="lg:col-span-5">
            <div
              id="hero-budget-card"
              className="relative bg-white text-slate-800 border-2 border-blue-600 rounded-2xl p-6 sm:p-7 shadow-2xl"
            >
              {/* Badge Top */}
              <div className="absolute -top-3.5 right-6 bg-blue-600 text-white font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                ¡Deducible de tu contrato!
              </div>

              <div className="text-center pb-4 border-b border-slate-200">
                <div className="inline-flex items-center gap-1.5 text-blue-600 text-xs font-bold uppercase tracking-wider mb-1">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>Pack Presupuesto</span>
                </div>
                <div className="text-4xl sm:text-5xl font-black text-blue-600 my-1">
                  $30.000 <span className="text-sm text-slate-500 font-normal">CLP</span>
                </div>
                <p className="text-xs text-blue-800 bg-blue-50 py-1 px-3 rounded-full inline-block font-bold mt-1">
                  Visita técnica + Asesoría + Presupuesto detallado
                </p>
              </div>

              {/* What is included checklist */}
              <div className="py-4 space-y-3">
                <ul className="space-y-3 text-xs text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Visita en terreno:</strong> Evaluamos tu espacio personalmente en cualquier comuna de la V Región.</span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Asesoría técnica:</strong> Definimos la mejor solución para tu remodelación, pintura, cierre o terraza.</span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Presupuesto detallado:</strong> Sin sorpresas ni costos ocultos, con cubicación completa.</span>
                  </li>
                </ul>
              </div>

              {/* Discount Notice Banner */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-center my-1">
                <p className="text-xs text-emerald-800 font-medium">
                  <strong>¡Garantía Total!</strong> Si decides contratar la obra, los <strong>$30.000 se descuentan al 100%</strong> de tu presupuesto.
                </p>
              </div>

              {/* Action Button inside card */}
              <button
                id="hero-card-schedule-btn"
                onClick={onOpenBookingModal}
                className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Agendar mi Visita por $30.000</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="mt-3 text-center">
                <a
                  href={`https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(
                    'Hola, me gustaría agendar la visita en terreno de $30.000.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors"
                >
                  O coordina directamente por WhatsApp: +56 9 9838 1384
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
