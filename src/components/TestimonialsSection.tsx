import { useState } from 'react';
import { 
  Star, 
  Quote, 
  MapPin, 
  CheckCircle2, 
  ThumbsUp, 
  Sparkles, 
  Building2 
} from 'lucide-react';
import { TESTIMONIALS, WHATSAPP_RAW_NUMBER } from '../data/content';

export default function TestimonialsSection() {
  const [filterCommune, setFilterCommune] = useState<string>('todos');

  const filteredTestimonials = filterCommune === 'todos'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.commune.toLowerCase().includes(filterCommune.toLowerCase()));

  const communeFilters = [
    { label: 'Todos los Clientes', value: 'todos' },
    { label: 'Concón', value: 'Concón' },
    { label: 'Viña del Mar', value: 'Viña del Mar' },
    { label: 'Valparaíso', value: 'Valparaíso' },
    { label: 'Quilpué', value: 'Quilpué' },
    { label: 'Costa Norte', value: 'Puchuncaví' },
  ];

  return (
    <section id="testimonios" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider">
            <ThumbsUp className="w-4 h-4 text-blue-600" />
            <span>Opiniones & Reseñas Verificadas</span>
          </div>

          <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Clientes Satisfechos en Toda la V Región
          </h2>

          <p className="text-slate-600 text-base">
            Conoce las experiencias reales de familias que confiaron en nosotros para diseñar, remodelar y construir sus hogares en Valparaíso, Viña, Concón y el interior.
          </p>

          {/* Social Proof Stats Banner */}
          <div className="inline-flex flex-wrap items-center justify-center gap-6 bg-white border border-slate-200 shadow-sm px-6 py-3 rounded-xl">
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm font-bold text-slate-900">4.9 / 5.0</span>
            </div>
            <div className="text-xs text-slate-600">
              <strong className="text-blue-600 font-bold">+140 proyectos</strong> entregados con éxito en la V Región
            </div>
            <div className="text-xs text-slate-600 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Visitas 100% descontables</span>
            </div>
          </div>
        </div>

        {/* Commune Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {communeFilters.map((chip) => (
            <button
              key={chip.value}
              onClick={() => setFilterCommune(chip.value)}
              className={`px-4 py-2 rounded-xl text-xs transition-all ${
                filterCommune === chip.value
                  ? 'bg-blue-600 text-white font-bold shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 font-medium'
              }`}
            >
              {chip.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              id={`testimonial-${testimonial.id}`}
              className="bg-white border border-slate-200 hover:border-blue-300 rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md group relative"
            >
              <div className="space-y-4">
                {/* Header with avatar, name and location */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-blue-100"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                        <span>{testimonial.name}</span>
                        {testimonial.verified && (
                          <span title="Cliente con obra verificada">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-slate-500 mt-0.5">
                        <MapPin className="w-3 h-3 text-blue-500" />
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex text-amber-400 shrink-0">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Project Tag */}
                <div className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-xs flex items-center justify-between">
                  <span className="text-slate-700 font-semibold">{testimonial.projectType}</span>
                  <span className="text-blue-600 font-medium text-[11px]">{testimonial.materialUsed.split(',')[0]}</span>
                </div>

                {/* Highlight Quote Phrase */}
                <p className="text-xs font-bold text-blue-700 flex items-center gap-1.5">
                  <Quote className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span>"{testimonial.highlightPhrase}"</span>
                </p>

                {/* Main Comment Text */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {testimonial.comment}
                </p>
              </div>

              {/* Footer info */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>{testimonial.date}</span>
                <span className="text-emerald-600 font-semibold">Obra 100% Entregada</span>
              </div>
            </div>
          ))}
        </div>

        {/* Callout box to join satisfied clients */}
        <div className="mt-12 text-center bg-slate-900 border border-slate-800 rounded-2xl p-8 max-w-3xl mx-auto text-white shadow-xl">
          <h3 className="font-['Outfit'] text-xl font-bold text-white mb-2">
            Únete a cientos de familias con proyectos exitosos en la región
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm mb-6">
            Empieza con nuestra visita en terreno de $30.000 y visualiza tu diseño antes de comenzar.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(
              'Hola, leí las opiniones en su web y quiero agendar una visita técnica para mi proyecto.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-md active:scale-95"
          >
            <span>Conversar con un Experto por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
