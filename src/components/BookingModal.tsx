import { useState, FormEvent } from 'react';
import { 
  X, 
  Calendar, 
  MapPin, 
  Phone, 
  User, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  Layers, 
  Clock 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMMUNES_COVERED, WHATSAPP_RAW_NUMBER } from '../data/content';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [commune, setCommune] = useState('Viña del Mar');
  const [address, setAddress] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Mañana (09:00 - 13:00)');
  const [projectType, setProjectType] = useState('Remodelación de Hogar');
  const [description, setDescription] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // Confetti fallback safely ignored
    }
  };

  const generateWhatsAppConfirmationUrl = () => {
    const lines = [
      `¡Hola! Deseo confirmar la reserva de *Visita en Terreno ($30.000 CLP)*:`,
      `👤 *Cliente:* ${name || 'Sin especificar'}`,
      `📞 *Teléfono:* ${phone || 'Sin especificar'}`,
      `📍 *Comuna V Región:* ${commune}`,
      `🏠 *Dirección/Sector:* ${address || 'A coordinar'}`,
      `🗓️ *Fecha sugerida:* ${preferredDate || 'Lo antes posible'} (${timeSlot})`,
      `🔨 *Proyecto:* ${projectType}`,
      description ? `📝 *Detalles:* ${description}` : '',
      `✨ *Entiendo que los $30.000 incluyen visita técnica, asesoría y diseño 3D, y se descuentan al 100% al contratar la obra.*`
    ].filter(Boolean);

    return `https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
          <div>
            <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span>Visita Técnica en Terreno • Región de Valparaíso</span>
            </div>
            <h3 className="font-['Outfit'] text-xl sm:text-2xl font-bold text-white">
              Agendar Presupuesto & Diseño 3D ($30.000 CLP)
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Cerrar ventana"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
          
          {isSuccess ? (
            <div className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <h4 className="font-['Outfit'] text-2xl font-bold text-white">
                  ¡Solicitud de Visita Preparada con Éxito!
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm">
                  Hemos organizado los datos de tu propiedad en <strong>{commune}</strong>. Para coordinar la hora exacta y confirmar la asistencia del arquitecto, abre el chat directo de WhatsApp:
                </p>
              </div>

              {/* Inclusions summary pill */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs text-slate-300 text-left space-y-2">
                <div className="text-blue-400 font-bold flex items-center justify-between">
                  <span>Resumen de tu Visita Técnica:</span>
                  <span>$30.000 CLP</span>
                </div>
                <ul className="space-y-1 text-slate-400">
                  <li>• Asistencia presencial en tu terreno ({commune})</li>
                  <li>• Asesoría en materiales (SIP, hormigón, metal, madera, ladrillo)</li>
                  <li>• Imágenes 3D de cómo quedará tu propiedad</li>
                  <li>• <strong>100% descontable</strong> si ejecutas la obra</li>
                </ul>
              </div>

              {/* Direct WhatsApp Confirmation Button */}
              <div className="space-y-3">
                <a
                  href={generateWhatsAppConfirmationUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-xl shadow-xl shadow-emerald-950/60 hover:shadow-emerald-600/30 transition-all text-sm sm:text-base active:scale-95"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  <span>Confirmar Visita por WhatsApp (+56 9 9838 1384)</span>
                </a>

                <button
                  onClick={handleReset}
                  className="text-xs text-slate-400 hover:text-slate-200 underline transition-colors"
                >
                  Volver al sitio web
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Discount Guarantee Note */}
              <div className="bg-blue-950/50 border border-blue-500/30 rounded-xl p-3.5 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <p className="text-xs text-blue-200 leading-relaxed">
                  <strong>Valor de la visita: $30.000 CLP.</strong> Incluye visita en terreno, asesoría constructiva y diseño 3D en tu espacio real. <strong>Si contratas la obra, este valor se descuenta al 100% del total.</strong>
                </p>
              </div>

              {/* Name and Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-blue-400" />
                    <span>Tu Nombre y Apellido *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Marcelo González"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-slate-100 text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-blue-400" />
                    <span>Teléfono / WhatsApp *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej: +56 9 1234 5678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-slate-100 text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Commune and Address */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span>Comuna en la V Región *</span>
                  </label>
                  <select
                    value={commune}
                    onChange={(e) => setCommune(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-slate-100 text-sm focus:outline-none focus:border-blue-500"
                  >
                    {COMMUNES_COVERED.map((c) => (
                      <option key={c.name} value={c.name} className="bg-slate-900">
                        {c.name}
                      </option>
                    ))}
                    <option value="Otra Comuna V Región" className="bg-slate-900">
                      Otra localidad / Sector Rural V Región
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>Dirección / Cerro / Sector</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: Cerro Alegre / Bosques de Montemar"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-slate-100 text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Preferred Date & Time Slot */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span>Fecha Estimada para la Visita</span>
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-slate-100 text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    <span>Jornada Preferida</span>
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-slate-100 text-sm focus:outline-none focus:border-blue-500"
                  >
                    <option value="Mañana (09:00 - 13:00)">Mañana (09:00 - 13:00)</option>
                    <option value="Tarde (14:00 - 18:30)">Tarde (14:00 - 18:30)</option>
                    <option value="Sábado">Sábado por la mañana</option>
                  </select>
                </div>
              </div>

              {/* Project Type & Description */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-blue-400" />
                  <span>Tipo de Proyecto</span>
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-slate-100 text-sm focus:outline-none focus:border-blue-500"
                >
                  <option value="Construcción Casa Nueva">Construcción Casa Nueva (Llave en Mano)</option>
                  <option value="Remodelación Cocina / Baño / Interior">Remodelación Cocina / Baño / Interior</option>
                  <option value="Ampliación Segundo Piso / Mansarda">Ampliación Segundo Piso / Mansarda</option>
                  <option value="Quincho / Terraza Panorámica">Quincho / Pérgola / Terraza Panorámica</option>
                  <option value="Obra en Pendiente / Muro de Contención">Obra en Pendiente / Muro de Contención</option>
                  <option value="Diseño Arquitectónico & Planos DOM">Diseño Arquitectónico & Planos DOM</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Cuéntanos brevemente tu idea o necesidades del terreno:
                </label>
                <textarea
                  rows={3}
                  placeholder="Ej: Quiero remodelar cocina americana botando muro tabique y construir quincho con vista..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-slate-100 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:w-2/3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all text-sm flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>Continuar y Coordinar Visita ($30K)</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-1/3 bg-slate-800 hover:bg-slate-700 text-slate-300 py-3.5 px-4 rounded-xl text-xs font-semibold transition-colors"
                >
                  Cancelar
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
}
