import { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Menu, 
  X, 
  Compass, 
  CheckCircle2, 
  Sparkles, 
  Building2 
} from 'lucide-react';
import { COMPANY_PHONE, WHATSAPP_RAW_NUMBER, BUDGET_OFFER_DETAILS } from '../data/content';

interface NavbarProps {
  onOpenBookingModal: () => void;
}

export default function Navbar({ onOpenBookingModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Materiales', href: '#materiales' },
    { name: 'Nuestros Trabajos', href: '#trabajos' },
    { name: 'Opiniones', href: '#testimonios' },
    { name: 'Cotizador', href: '#cotizador' },
    { name: 'Cobertura', href: '#cobertura' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 text-slate-900 py-3'
          : 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-white py-3.5'
      }`}
    >
      {/* Top micro bar for V Region contact banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3 group" id="nav-brand-logo">
            <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-white font-bold text-xl shadow-sm group-hover:bg-blue-600 transition-colors">
              G
            </div>
            <div className="flex flex-col">
              <span className={`font-['Outfit'] font-bold text-xl leading-tight tracking-tight flex items-center gap-1 ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}>
                Construcciones <span className="text-blue-600">Guerrero</span>
              </span>
              <span className={`text-[10px] font-semibold tracking-wider uppercase ${
                isScrolled ? 'text-slate-500' : 'text-slate-400'
              }`}>
                Remodelaciones & Construcción V Región
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7" id="desktop-nav-menu">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs uppercase font-bold tracking-wider transition-colors ${
                  isScrolled 
                    ? 'text-slate-600 hover:text-blue-600' 
                    : 'text-slate-300 hover:text-blue-400'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-3 ml-5 xl:ml-8">
            <a
              id="nav-whatsapp-direct-btn"
              href={`https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(
                'Hola, quiero cotizar un proyecto y agendar la visita de $30.000 en la Región de Valparaíso.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3.5 py-2.5 rounded-lg transition-all shadow-sm active:scale-95"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp Directo</span>
            </a>

            <button
              id="nav-book-visit-btn"
              onClick={onOpenBookingModal}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-all shadow-md active:scale-95"
            >
              <Compass className="w-4 h-4" />
              <span>Agendar Visita $30K</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`https://wa.me/${WHATSAPP_RAW_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-emerald-600 rounded-lg text-white"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
            </a>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-slate-200 hover:bg-slate-800'
              }`}
              aria-label="Menú principal"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-white border-b border-slate-200 text-slate-800 px-4 pt-3 pb-6 space-y-3 mt-3 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-xs text-blue-900 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Presupuesto con visita en terreno: <strong>$30.000 CLP</strong></span>
            </div>
            <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase">
              100% Descontable
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-700 hover:text-blue-600 hover:bg-slate-100 px-3 py-2 rounded-md text-xs uppercase font-bold tracking-wider transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-lg text-sm flex items-center justify-center gap-2 shadow-md"
            >
              <Compass className="w-4 h-4" />
              <span>Agendar Visita Técnica ($30.000)</span>
            </button>

            <a
              href={`https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(
                'Hola, quiero consultar por servicios de construcción y presupuesto en la V Región.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-lg text-sm flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Contactar al +56 9 9838 1384</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
