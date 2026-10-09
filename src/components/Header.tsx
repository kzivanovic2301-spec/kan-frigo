import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Phone,
  MessageSquare,
  MapPin,
  Menu,
  X,
  ShieldCheck,
  Check,
  Copy,
} from 'lucide-react';

export const Header: React.FC = () => {
  const { contact, showToast } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(contact.phoneDisplay);
    setCopied(true);
    showToast(`Broj telefona ${contact.phoneDisplay} je kopiran!`);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top Belgrade Notice Bar */}
      <div className="bg-slate-900 text-slate-100 px-4 py-2 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span className="font-medium text-slate-200">
              Teren rada: <strong className="text-white font-semibold">Beograd i okolina</strong>
            </span>
          </div>
          
          <div className="flex items-center gap-3 text-xs text-slate-300">
            <span className="hidden sm:inline text-sky-300 font-medium">
              ❄️ Klime &bull; Rashladne komore &bull; Toplotne pumpe &bull; VRV i multi sistemi
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-sky-600 to-blue-700 flex items-center justify-center text-white shadow-md shadow-sky-600/20 group-hover:scale-105 transition-transform">
              <span className="font-extrabold text-xl tracking-tight">❄️</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight">
                  {contact.companyName}
                </span>
                <span className="hidden md:inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                  <ShieldCheck className="w-3 h-3 text-sky-600" />
                  Beograd i okolina
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium truncate max-w-[240px] sm:max-w-none">
                Klime &bull; Rashladne komore &bull; Toplotne pumpe &bull; VRV & Multi
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <a href="#usluge" className="hover:text-sky-600 transition-colors">Usluge</a>
            <a href="#oprema-i-prodaja" className="hover:text-sky-600 transition-colors">Izbor i prodaja opreme</a>
            <a href="#nasi-radovi" className="hover:text-sky-600 transition-colors">Galerija radova</a>
            <a href="#beograd-lokacije" className="hover:text-sky-600 transition-colors">Gde radimo</a>
            <a href="#kontakt" className="hover:text-sky-600 transition-colors">Kontakt</a>
          </nav>

          {/* Direct Contact Group (High Prominence) */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="text-right">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Direktan kontakt sa majstorom
              </span>
              <div className="flex items-center justify-end gap-1.5">
                <a
                  href={`tel:${contact.phone}`}
                  className="text-base lg:text-lg font-black text-slate-900 hover:text-sky-600 transition-colors tracking-tight"
                >
                  {contact.phoneDisplay}
                </a>
                <button
                  onClick={handleCopyPhone}
                  className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                  title="Kopiraj broj telefona"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Direct Call Button */}
            <a
              href={`tel:${contact.phone}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow-md shadow-sky-600/20 transition-all hover:shadow-lg active:scale-95"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Pozovi odmah</span>
            </a>

            {/* Viber quick chat */}
            <a
              href={`viber://chat?number=${contact.viberNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#7360f2]/10 hover:bg-[#7360f2]/20 text-[#7360f2] transition-colors border border-[#7360f2]/30"
              title="Pišite na Viber"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href={`tel:${contact.phone}`}
              className="inline-flex items-center justify-center p-2 rounded-xl bg-sky-600 text-white shadow-sm"
              aria-label="Pozovite majstora"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Otvori navigaciju"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-base font-semibold text-slate-800">
            <a
              href="#usluge"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Usluge i servis
            </a>
            <a
              href="#oprema-i-prodaja"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Izbor i prodaja opreme
            </a>
            <a
              href="#nasi-radovi"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Galerija radova
            </a>
            <a
              href="#beograd-lokacije"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Lokacije u Beogradu
            </a>
            <a
              href="#kontakt"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Kontakt podaci
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-200 space-y-2">
            <div className="text-xs text-slate-500 font-medium">Pozovite direktno majstora:</div>
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-sky-600 text-white font-bold text-base shadow-sm"
            >
              <Phone className="w-5 h-5 fill-white" />
              <span>{contact.phoneDisplay}</span>
            </a>
            
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`viber://chat?number=${contact.viberNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-purple-50 text-purple-700 border border-purple-200 text-sm font-semibold"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Viber</span>
              </a>
              <a
                href={`https://wa.me/${contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 text-sm font-semibold"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
