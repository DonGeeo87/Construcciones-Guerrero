import { 
  Building2, 
  Phone, 
  MessageSquare, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Mail, 
  Compass, 
  Sparkles,
  ArrowUp
} from 'lucide-react';
import { COMPANY_PHONE, WHATSAPP_RAW_NUMBER, COMMUNES_COVERED } from '../data/content';

interface FooterProps {
  onOpenBookingModal: () => void;
}

export default function Footer({ onOpenBookingModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-['Outfit'] font-bold text-xl text-slate-100">
                  Construcciones <span className="text-blue-500">Guerrero</span>
                </span>
                <span className="text-[11px] text-slate-400 font-medium tracking-wide uppercase">
                  Remodelaciones & Construcción V Región
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Constructores expertos en remodelaciones, pintura, cierres perimetrales, portones, muros, terrazas, techos y quinchos en toda la Región de Valparaíso, Chile. Trabajo serio, presupuesto transparente y obras que duran.
            </p>

            {/* Inclusions highlight */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 text-xs text-slate-300 space-y-1">
              <div className="text-blue-400 font-bold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>Presupuesto con Visita en Terreno: $30.000</span>
              </div>
              <p className="text-slate-400 text-[11px]">
                Incluye visita en terreno y asesoría técnica. <strong>100% descontable</strong> si contratas la obra.
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-['Outfit'] text-sm font-bold text-slate-100 uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><a href="#presupuesto-30k" className="hover:text-blue-400 transition-colors">Presupuesto $30K</a></li>
              <li><a href="#servicios" className="hover:text-blue-400 transition-colors">Servicios Integrales</a></li>
              <li><a href="#materiales" className="hover:text-blue-400 transition-colors">Materiales & SIP</a></li>
              <li><a href="#trabajos" className="hover:text-blue-400 transition-colors">Nuestros Trabajos</a></li>
              <li><a href="#testimonios" className="hover:text-blue-400 transition-colors">Opiniones Clientes</a></li>
              <li><a href="#cotizador" className="hover:text-blue-400 transition-colors">Cotizador Online</a></li>
              <li><a href="#cobertura" className="hover:text-blue-400 transition-colors">Mapa Cobertura</a></li>
            </ul>
          </div>

          {/* Col 3: Materials Specialty (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-['Outfit'] text-sm font-bold text-slate-100 uppercase tracking-wider">
              Sistemas Constructivos
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>Paneles SIP (Aislación Extrema)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>Concreto & Hormigón Armado H20/H30</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>Estructuras Metálicas & Metalcon</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>Madera Tratada & Pino Oregón</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>Ladrillo Princesa & Fiscal</span>
              </li>
            </ul>

            <div className="pt-2">
              <span className="text-[11px] text-slate-500 block mb-1">Garantía por contrato:</span>
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Obra respaldada y garantizada</span>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & WhatsApp CTA (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-['Outfit'] text-sm font-bold text-slate-100 uppercase tracking-wider">
              Contacto Directo
            </h4>

            <div className="space-y-2.5 text-xs text-slate-300">
              <a
                href={`https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(
                  'Hola! Me gustaría cotizar o agendar una visita técnica para mi hogar en la Región de Valparaíso.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-950/60 border border-emerald-600/40 text-emerald-300 hover:bg-emerald-900/60 transition-colors"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400 fill-current shrink-0" />
                <div>
                  <span className="block text-[10px] text-emerald-400 font-bold uppercase">WhatsApp Oficial</span>
                  <span className="font-bold text-sm text-white">{COMPANY_PHONE}</span>
                </div>
              </a>

              <div className="flex items-start gap-2 text-slate-400 pt-1">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>Cobertura en Viña del Mar, Valparaíso, Concón, Quilpué, Villa Alemana, Quillota, Maitencillo y toda la V Región.</span>
              </div>

              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Lunes a Sábado: 08:30 - 19:30 hrs</span>
              </div>
            </div>

            <button
              onClick={onOpenBookingModal}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4" />
              <span>Agendar Visita en Terreno ($30K)</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Construcciones Guerrero. Todos los derechos reservados. Región de Valparaíso, Chile.
          </div>

          <div className="flex items-center gap-4">
            <span>Remodelaciones • Construcción • Pintura • Cierres y Terrazas</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1"
              aria-label="Subir al inicio"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Inicio</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
