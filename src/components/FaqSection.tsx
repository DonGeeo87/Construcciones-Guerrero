import { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  MessageSquare, 
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { FAQS, WHATSAPP_RAW_NUMBER, COMPANY_PHONE } from '../data/content';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 text-blue-400 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-blue-500" />
            <span>Preguntas Frecuentes</span>
          </div>

          <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Resolvemos Todas tus Dudas
          </h2>

          <p className="text-slate-300 text-sm sm:text-base">
            Conoce cómo funciona el presupuesto de $30.000, los plazos de diseño 3D, formas de pago y garantías legales.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-800 border-blue-500 shadow-md'
                    : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-['Outfit'] text-base sm:text-lg font-bold text-slate-100 flex items-center gap-3">
                    <span className="text-blue-400 text-sm font-black">0{index + 1}.</span>
                    <span>{faq.question}</span>
                  </span>

                  <div className={`p-1.5 rounded-full ${isOpen ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-400'}`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-sm leading-relaxed border-t border-slate-700/80 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support box */}
        <div className="mt-12 text-center bg-slate-800/90 border border-slate-700 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h4 className="font-['Outfit'] text-lg font-bold text-white">¿Tienes otra pregunta específica para tu terreno?</h4>
            <p className="text-xs text-slate-400">Nuestro equipo técnico responde rápidamente por WhatsApp.</p>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(
              'Hola, tengo una consulta sobre una obra en la Región de Valparaíso.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition-all shadow-md active:scale-95 shrink-0"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Chatear al +56 9 9838 1384</span>
          </a>
        </div>

      </div>
    </section>
  );
}
