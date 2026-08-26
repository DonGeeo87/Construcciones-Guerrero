import { useState } from 'react';
import { MessageSquare, X, Sparkles } from 'lucide-react';
import { WHATSAPP_RAW_NUMBER, COMPANY_PHONE } from '../data/content';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-none">
      
      {/* Floating Prompt Notification */}
      {showTooltip && (
        <div className="pointer-events-auto bg-slate-900 border border-slate-700 text-slate-100 p-3.5 rounded-xl shadow-2xl max-w-xs animate-in slide-in-from-bottom-5 duration-300 text-xs space-y-1.5 relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-white p-1"
            aria-label="Cerrar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>¿Cotizar o agendar visita?</span>
          </div>

          <p className="text-slate-300 text-[11px] leading-relaxed">
            Visita técnica y presupuesto detallado desde <strong>$30.000</strong> (100% descontable). ¡Hablemos por WhatsApp!
          </p>

          <a
            href={`https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(
              'Hola, vi su sitio web y me gustaría hablar con un profesional para mi proyecto en la V Región.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-1.5 px-3 rounded-lg text-[11px] transition-colors mt-1"
          >
            Abrir WhatsApp ({COMPANY_PHONE})
          </a>
        </div>
      )}

      {/* Floating Button */}
      <a
        id="floating-whatsapp-trigger"
        href={`https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(
          'Hola! Me gustaría cotizar un servicio de construcción/remodelación en la Región de Valparaíso.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp al +56 9 9838 1384"
        className="pointer-events-auto w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xl flex items-center justify-center transform hover:scale-110 active:scale-95 transition-all ring-4 ring-emerald-500/30 group"
      >
        <MessageSquare className="w-7 h-7 fill-current group-hover:rotate-6 transition-transform" />
      </a>
    </div>
  );
}
