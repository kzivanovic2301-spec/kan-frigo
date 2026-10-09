import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Phone,
  MessageSquare,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Copy,
  Check,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { contact, showToast } = useApp();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contact.phoneDisplay);
    setCopied(true);
    showToast(`Broj telefona ${contact.phoneDisplay} je kopiran!`);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/50 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline & Direct Contact Callout */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Belgrade Area Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-900 text-xs sm:text-sm font-semibold shadow-xs">
              <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
              <span>Teren rada: <strong>Beograd i okolina</strong></span>
            </div>

            {/* Main Punchy Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-[1.2]">
              Ugradnja i servis klima uređaja,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">
                izrada i servis rashladnih komora,
              </span>{' '}
              montaža i servis toplotnih pumpi, VRV sistema i multi sistema
            </h1>

            {/* Subtitle explaining personal service & Belgrade focus */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
              <strong>KAN frigo</strong> pruža kompletne usluge ugradnje i servisa klima uređaja, profesionalne izrade i servisiranja rashladnih komora (plusnih i minusnih), 
              kao i stručne montaže i održavanja toplotnih pumpi, centralnih VRV sistema i multi sistema. 
              Pokrivamo <strong>Beograd i okolinu</strong> — <strong>pozovite me lično</strong> za direktan dogovor i besplatnu procenu.
            </p>

            {/* Key Value Propositions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Klime, rashladne komore i toplotne pumpe</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Centralni VRV/VRF i multi-split sistemi</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Brz izlazak na teren u Beogradu i okolini</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Rad po fabričkim standardima i direktan kontakt</span>
              </div>
            </div>

            {/* Direct Call to Action Box */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Pozovite za dogovor i besplatnu procenu
                  </span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <a
                      href={`tel:${contact.phone}`}
                      className="text-2xl sm:text-3xl font-black text-slate-900 hover:text-sky-600 transition-colors tracking-tight"
                    >
                      {contact.phoneDisplay}
                    </a>
                    <button
                      onClick={handleCopy}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                      title="Kopiraj broj"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  {contact.phoneSecondary && (
                    <div className="text-xs text-slate-500 mt-0.5">
                      Rezervni telefon:{' '}
                      <a href={`tel:${contact.phoneSecondary}`} className="font-semibold text-slate-700 hover:underline">
                        {contact.phoneSecondaryDisplay}
                      </a>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 text-xs text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 self-start sm:self-center">
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  <span>Dostupan za poziv</span>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                <a
                  href={`tel:${contact.phone}`}
                  className="sm:col-span-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow-md shadow-sky-600/30 transition-all active:scale-[0.98]"
                >
                  <Phone className="w-4 h-4 fill-white" />
                  <span>Pozovi majstora</span>
                </a>

                <a
                  href={`viber://chat?number=${contact.viberNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#7360f2] hover:bg-[#6350e0] text-white font-semibold text-sm shadow-xs transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Piši na Viber</span>
                </a>

                <a
                  href={`https://wa.me/${contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm shadow-xs transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="text-[12px] text-slate-500 flex items-center gap-1.5 pt-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>
                  Možete poslati i sliku vaše postojeće klime ili mesta za ugradnju preko Vibera radi brže procene!
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 border-4 border-white bg-slate-100">
              <img
                src="/src/assets/images/ac_hero_belgrade_1791303045047.jpg"
                alt="Servis klima uređaja Beograd"
                className="w-full h-[360px] sm:h-[440px] lg:h-[480px] object-cover"
                loading="eager"
              />

              {/* Gradient Overlay for Crisp Text Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/10" />

              {/* Floating Belgrade Badge on Image */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-600" />
                <span>Teren: Beograd i okolina</span>
              </div>

              {/* Bottom Card Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-700/80 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-sky-400 font-bold block">
                      Specijalizovane delatnosti:
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-100 mt-0.5">
                      Klime &bull; Rashladne komore &bull; Toplotne pumpe &bull; VRV &bull; Multi
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-300">Termini:</span>
                    <p className="text-xs font-bold text-emerald-400">Danas za sutra</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative subtle aura */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-sky-300/20 rounded-full blur-3xl pointer-events-none -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
};
