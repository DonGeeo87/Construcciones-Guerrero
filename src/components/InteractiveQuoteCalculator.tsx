import { useState } from 'react';
import { 
  Calculator, 
  MapPin, 
  Layers, 
  Sparkles, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Clock, 
  Building2, 
  Home, 
  Flame, 
  Maximize2 
} from 'lucide-react';
import { WHATSAPP_RAW_NUMBER, COMMUNES_COVERED } from '../data/content';

interface InteractiveQuoteCalculatorProps {
  onOpenBookingModal: () => void;
}

export default function InteractiveQuoteCalculator({ onOpenBookingModal }: InteractiveQuoteCalculatorProps) {
  const [projectType, setProjectType] = useState<'construccion' | 'remodelacion' | 'ampliacion' | 'terraza'>('construccion');
  const [commune, setCommune] = useState('Viña del Mar');
  const [material, setMaterial] = useState('Paneles SIP (Aislación Extrema)');
  const [sqm, setSqm] = useState(70);
  const [slopeTerrain, setSlopeTerrain] = useState(false);
  const [needsPermits, setNeedsPermits] = useState(true);
  const [clientName, setClientName] = useState('');
  const [customNotes, setCustomNotes] = useState('');

  const projectTypes = [
    {
      id: 'construccion',
      title: 'Construcción Desde Cero',
      subtitle: 'Casa completa llave en mano o obra gruesa',
      icon: Home,
      defaultSqm: 100,
      minSqm: 36,
      maxSqm: 350,
      timeEstimate: '3 a 5 meses'
    },
    {
      id: 'remodelacion',
      title: 'Remodelación de Hogar',
      subtitle: 'Cocinas modernas, baños o espacios abiertos',
      icon: Sparkles,
      defaultSqm: 35,
      minSqm: 10,
      maxSqm: 150,
      timeEstimate: '2 a 5 semanas'
    },
    {
      id: 'ampliacion',
      title: 'Ampliación / 2° Piso',
      subtitle: 'Nuevos dormitorios, salas o mansardas',
      icon: Maximize2,
      defaultSqm: 45,
      minSqm: 15,
      maxSqm: 180,
      timeEstimate: '4 a 8 semanas'
    },
    {
      id: 'terraza',
      title: 'Quincho & Terraza',
      subtitle: 'Pérgolas, asaderas inox y decks panorámicos',
      icon: Flame,
      defaultSqm: 28,
      minSqm: 12,
      maxSqm: 120,
      timeEstimate: '2 a 4 semanas'
    }
  ];

  const materialOptions = [
    { name: 'Paneles SIP (Aislación Extrema)', benefit: 'Rapidez récord y máxima eficiencia térmica' },
    { name: 'Concreto & Hormigón Armado', benefit: 'Máxima solidez y resistencia en pendientes' },
    { name: 'Estructuras Metálicas / Metalcon', benefit: 'Liviano, antisísmico y versátil' },
    { name: 'Madera Tratada & Pino Oregón', benefit: 'Calidez natural y nobleza estética costera' },
    { name: 'Ladrillo & Albañilería', benefit: 'Gran inercia acústica y durabilidad clásica' }
  ];

  const handleProjectTypeChange = (typeId: 'construccion' | 'remodelacion' | 'ampliacion' | 'terraza') => {
    setProjectType(typeId);
    const selected = projectTypes.find(p => p.id === typeId);
    if (selected) {
      setSqm(selected.defaultSqm);
    }
  };

  const currentProject = projectTypes.find(p => p.id === projectType)!;

  // Build customized WhatsApp message string
  const generateWhatsAppMessage = () => {
    const lines = [
      `¡Hola! Vengo del cotizador web de Construcciones Guerrero:`,
      `📌 *Proyecto:* ${currentProject.title}`,
      `📍 *Comuna V Región:* ${commune}`,
      `📐 *Superficie estimada:* ${sqm} m²`,
      `🧱 *Material de interés:* ${material}`,
      `⛰️ *Terreno en pendiente:* ${slopeTerrain ? 'Sí (cerro/desnivel)' : 'No (terreno plano)'}`,
      `📋 *Requiere regularización/permiso:* ${needsPermits ? 'Sí' : 'No / En evaluación'}`,
      clientName ? `👤 *Nombre:* ${clientName}` : '',
      customNotes ? `💬 *Detalles adicionales:* ${customNotes}` : '',
      `✨ *Me interesa agendar la visita en terreno de $30.000 con presupuesto detallado.*`
    ].filter(Boolean);

    return encodeURIComponent(lines.join('\n'));
  };

  return (
    <section id="cotizador" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 text-blue-400 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider">
            <Calculator className="w-4 h-4 text-blue-500" />
            <span>Cotizador Interactivo V Región</span>
          </div>

          <h2 className="font-['Outfit'] text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Calcula tu Proyecto y Genera tu Cotización
          </h2>

          <p className="text-slate-300 text-sm sm:text-base">
            Configura el tipo de obra, material y ubicación. Te entregaremos una estimación preliminar y podrás enviar todos los datos directo a nuestro WhatsApp en 1 click.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Configurator Form Column */}
          <div className="lg:col-span-7 bg-slate-800/80 border border-slate-700 rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl">
            
            {/* Step 1: Project Type Selection */}
            <div>
              <label className="font-['Outfit'] text-sm font-bold text-slate-200 mb-3 flex items-center justify-between">
                <span>1. Selecciona el Tipo de Obra</span>
                <span className="text-xs text-blue-400 font-semibold">Paso 1 de 4</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map((type) => {
                  const Icon = type.icon;
                  const isSelected = projectType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => handleProjectTypeChange(type.id as any)}
                      className={`p-4 rounded-xl border text-left transition-all flex items-start gap-3.5 ${
                        isSelected
                          ? 'bg-blue-600/20 border-blue-500 text-white shadow-md ring-1 ring-blue-500'
                          : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-slate-600'
                      }`}
                    >
                      <div className={`p-2.5 rounded-lg shrink-0 ${
                        isSelected ? 'bg-blue-600 text-white' : 'bg-slate-800 text-blue-400'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-slate-100">{type.title}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">{type.subtitle}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Location and Materials */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Commune */}
              <div>
                <label className="font-['Outfit'] text-sm font-bold text-slate-200 mb-2 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>2. Comuna en la V Región</span>
                </label>
                <select
                  value={commune}
                  onChange={(e) => setCommune(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-3 text-slate-200 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                >
                  {COMMUNES_COVERED.map((c) => (
                    <option key={c.name} value={c.name} className="bg-slate-900 text-slate-100">
                      {c.name} ({c.zone})
                    </option>
                  ))}
                  <option value="Otra Comuna V Región" className="bg-slate-900 text-slate-100">
                    Otra Comuna / Sector Rural V Región
                  </option>
                </select>
              </div>

              {/* Material */}
              <div>
                <label className="font-['Outfit'] text-sm font-bold text-slate-200 mb-2 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-blue-400" />
                  <span>3. Material Preferido</span>
                </label>
                <select
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-3 text-slate-200 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                >
                  {materialOptions.map((m) => (
                    <option key={m.name} value={m.name} className="bg-slate-900 text-slate-100">
                      {m.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Step 3: Area Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="font-['Outfit'] text-sm font-bold text-slate-200 flex items-center gap-1.5">
                  <span>4. Superficie Estimada a Intervenir:</span>
                </label>
                <div className="bg-blue-600/20 border border-blue-500/40 text-blue-300 font-bold px-3 py-1 rounded-lg text-sm">
                  {sqm} m²
                </div>
              </div>

              <input
                type="range"
                min={currentProject.minSqm}
                max={currentProject.maxSqm}
                step={5}
                value={sqm}
                onChange={(e) => setSqm(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>Mínimo: {currentProject.minSqm} m²</span>
                <span>Máximo: {currentProject.maxSqm} m²</span>
              </div>
            </div>

            {/* Step 4: Checkbox Conditions */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <label className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-700 cursor-pointer hover:border-slate-600 transition-colors">
                <input
                  type="checkbox"
                  checked={slopeTerrain}
                  onChange={(e) => setSlopeTerrain(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded text-blue-600 focus:ring-blue-500 bg-slate-900 border-slate-700"
                />
                <span className="text-xs text-slate-300">
                  <strong>Terreno en pendiente / Cerro:</strong> Requiere fundaciones especiales o muros de contención.
                </span>
              </label>

              <label className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-700 cursor-pointer hover:border-slate-600 transition-colors">
                <input
                  type="checkbox"
                  checked={needsPermits}
                  onChange={(e) => setNeedsPermits(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded text-blue-600 focus:ring-blue-500 bg-slate-900 border-slate-700"
                />
                <span className="text-xs text-slate-300">
                  <strong>Planos & Permiso Municipal (DOM):</strong> Requiere regularización o trámites municipales.
                </span>
              </label>
            </div>

            {/* Optional Name & Notes */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2 border-t border-slate-700">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Tu Nombre (Opcional):</label>
                <input
                  type="text"
                  placeholder="Ej: Carolina Morales"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-slate-200 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Detalles del Lugar / Idea:</label>
                <input
                  type="text"
                  placeholder="Ej: Casa en Reñaca con vista, ampliar living"
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-slate-200 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

          </div>

          {/* Dynamic Summary & WhatsApp Handover Column */}
          <div className="lg:col-span-5 bg-slate-900 border-2 border-blue-600 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl sticky top-24">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs text-blue-400 font-bold uppercase tracking-wider">
                  Resumen de tu Cotización
                </span>
                <h3 className="font-['Outfit'] text-xl font-bold text-white mt-0.5">
                  {currentProject.title}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400">Plazo Estimado:</span>
                <div className="text-sm font-bold text-blue-300 flex items-center gap-1 justify-end">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{currentProject.timeEstimate}</span>
                </div>
              </div>
            </div>

            {/* Spec Breakdown */}
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300">
                <span className="text-slate-400">Comuna:</span>
                <span className="font-semibold text-slate-100">{commune}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300">
                <span className="text-slate-400">Metraje estimado:</span>
                <span className="font-semibold text-slate-100">{sqm} m²</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300">
                <span className="text-slate-400">Sistema Constructivo:</span>
                <span className="font-semibold text-slate-100 text-right max-w-[200px] truncate">{material}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300">
                <span className="text-slate-400">Condiciones Terreno:</span>
                <span className="font-semibold text-slate-100">{slopeTerrain ? 'Pendiente / Cerro' : 'Plano'}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300">
                <span className="text-slate-400">Planos & DOM:</span>
                <span className="font-semibold text-slate-100">{needsPermits ? 'Incluido' : 'No requerido'}</span>
              </div>
            </div>

            {/* $30.000 Highlight reminder in summary */}
            <div className="bg-blue-600/15 border border-blue-500/30 rounded-xl p-4 space-y-2">
              <div className="flex items-center justify-between text-xs text-blue-300 font-bold">
                <span>Visita Técnica & Presupuesto:</span>
                <span className="text-base text-blue-400 font-extrabold">$30.000 CLP</span>
              </div>
              <p className="text-[11px] text-blue-200/90 leading-snug">
                Incluye visita en terreno, asesoría y un presupuesto detallado que se descuenta al 100% de la obra contratada.
              </p>
            </div>

            {/* Direct WhatsApp Action Button */}
            <div className="space-y-3 pt-2">
              <a
                id="calculator-send-whatsapp-btn"
                href={`https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  // Guardar lead del cotizador
                  try {
                    fetch('/api/leads', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        tipo: 'cotizador',
                        nombre: clientName,
                        telefono: '',
                        comuna: commune,
                        direccion: '',
                        tipo_proyecto: currentProject.title,
                        descripcion: `Superficie ${sqm} m² · Material: ${material} · Pendiente: ${slopeTerrain ? 'Sí' : 'No'} · Permiso DOM: ${needsPermits ? 'Sí' : 'No'}${customNotes ? ' · Notas: ' + customNotes : ''}`
                      })
                    }).catch(() => {});
                  } catch (e) { /* no bloquear WhatsApp */ }
                }}
                className="w-full flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-5 rounded-xl shadow-md transition-all text-sm active:scale-95 group"
              >
                <MessageSquare className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
                <span>Enviar Esta Cotización a WhatsApp</span>
              </a>

              <button
                id="calculator-open-modal-btn"
                onClick={onOpenBookingModal}
                className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold py-3 px-4 rounded-xl text-xs sm:text-sm border border-slate-700 transition-colors"
              >
                <span>O agenda fecha de visita en terreno directamente</span>
              </button>
            </div>

            <div className="text-center">
              <span className="text-[11px] text-slate-400">
                Atención rápida en horario hábil y fines de semana por WhatsApp.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
