import {
  ShieldCheck,
  CheckCircle2,
  FileText,
  Wallet,
  Clock,
  MessageSquare,
  ArrowRight,
  Building2,
  Sparkles,
  Zap
} from 'lucide-react';
import { WHATSAPP_RAW_NUMBER } from '../data/content';

interface LeySectionProps {
  onOpenBookingModal: () => void;
}

export default function LeySection({ onOpenBookingModal }: LeySectionProps) {
  const benefits = [
    {
      icon: Wallet,
      title: 'Hasta 100% de rebaja',
      desc: 'En derechos municipales. 75% si la construcción vale hasta 400 UF, 50% si supera, y gratis para dueños de 65+ años o con discapacidad.',
      tag: 'Beneficio directo'
    },
    {
      icon: Building2,
      title: 'Tu casa sube de valor',
      desc: 'Una vivienda regularizada puede aumentar su valor comercial entre 30% y 50%. Los compradores pagan más por papeles en regla.',
      tag: 'Patrimonio'
    },
    {
      icon: ShieldCheck,
      title: 'Seguridad jurídica total',
      desc: 'Olvídate de multas o del riesgo de demolición. Tu vivienda queda legal, con permiso de edificación y recepción definitiva.',
      tag: 'Tranquilidad'
    },
    {
      icon: Wallet,
      title: 'Acceso a crédito y subsidios',
      desc: 'Bancos y subsidios exigen papeles al día. Regularizando abres la puerta a hipotecarios y programas del MINVU.',
      tag: 'Financiamiento'
    },
    {
      icon: Zap,
      title: 'Servicios formales',
      desc: 'Conecta tu vivienda a agua potable, electricidad y alcantarillado con contrato oficial y tarifas reguladas.',
      tag: 'Calidad de vida'
    },
    {
      icon: FileText,
      title: 'Trámite simplificado',
      desc: 'Permiso y recepción definitiva simultáneos ante la DOM. Mucho más liviano que la regularización ordinaria.',
      tag: 'Menos burocracia'
    }
  ];

  const requirements = [
    { icon: Clock, label: 'Antigüedad', value: 'Vivienda construida antes del 4 de febrero de 2016' },
    { icon: Building2, label: 'Superficie', value: 'Recintos habitables hasta 90 m² o hasta 140 m², según el caso' },
    { icon: FileText, label: 'Avalúo', value: 'Hasta 1.000 UF (90 m²) o 2.000 UF (140 m²), salvo subsidio MINVU' },
    { icon: ShieldCheck, label: 'Ubicación', value: 'Fuera de zonas de riesgo, protección o utilidad pública' }
  ];

  return (
    <section id="ley-del-mono" className="py-20 bg-slate-100/80 text-slate-900 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Ley 20.898 · Regularización</span>
          </div>

          <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            ¿Construiste sin permiso?{' '}
            <span className="text-blue-600">Regularízalo con la Ley del Mono</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            La <strong>Ley del Mono</strong> permite regularizar viviendas y ampliaciones construidas sin permiso con un trámite simplificado ante la DOM. Aprovecha el plazo vigente hasta <strong>diciembre 2027</strong> y pon tu propiedad en regla con beneficios reales.
          </p>

          {/* Plazo banner */}
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl shadow-xs">
            <p className="text-sm sm:text-base text-blue-900 font-semibold flex flex-wrap items-center justify-center gap-2">
              <Clock className="w-5 h-5 text-blue-600 shrink-0" />
              <span>Ingresa tu solicitud antes del <strong>31 de diciembre de 2027</strong>. La tramitación puede terminar después.</span>
            </p>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:border-blue-300 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                    {b.tag}
                  </span>
                </div>
                <h3 className="font-['Outfit'] text-lg font-bold text-slate-900 mb-2">{b.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Requirements + CTA */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Requirements */}
          <div className="lg:col-span-7 bg-slate-950 text-white rounded-2xl p-8 sm:p-10 border border-slate-800 shadow-xl">
            <h3 className="font-['Outfit'] text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-400" />
              ¿Tu casa puede acogerse?
            </h3>
            <div className="space-y-4">
              {requirements.map((r, i) => {
                const Icon = r.icon;
                return (
                  <div key={i} className="flex items-start gap-4 bg-slate-800/60 border border-slate-700 rounded-xl p-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-blue-400 font-bold uppercase tracking-wider">{r.label}</div>
                      <div className="text-sm text-slate-200 mt-0.5">{r.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-slate-400 mt-6 leading-relaxed">
              Requiere planos firmados por arquitecto o profesional competente. Te asesoramos con el levantamiento, la obra y la coordinación del profesional que suscribe el expediente ante la DOM.
            </p>
          </div>

          {/* CTA */}
          <div className="lg:col-span-5">
            <div className="bg-white border-2 border-blue-600 rounded-2xl p-6 sm:p-8 shadow-2xl">
              <div className="inline-flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-4 h-4" />
                <span>Evaluación de tu caso</span>
              </div>
              <h3 className="font-['Outfit'] text-2xl font-bold text-slate-900 mb-3">
                ¿Construiste sin permiso o ampliaste sin recepción?
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Agenda tu visita en terreno y revisamos si tu vivienda puede acogerse a la Ley del Mono. Te entregamos diagnóstico, plan de regularización y presupuesto detallado.
              </p>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 mb-6">
                <p className="text-xs text-emerald-800 font-medium">
                  <strong>Valor de la evaluación: $30.000</strong> — incluye visita en terreno y asesoría. <strong>100% descontable</strong> si contratas la gestión u obra.
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={onOpenBookingModal}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-5 rounded-xl transition-all shadow-md text-sm active:scale-95"
                >
                  Agendar Evaluación de Regularización
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent('Hola, tengo una vivienda/ampliación sin regularizar y quiero saber si puedo acogerme a la Ley del Mono. ¿Me pueden asesorar?')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold py-3 px-4 rounded-xl text-sm border border-slate-600 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
