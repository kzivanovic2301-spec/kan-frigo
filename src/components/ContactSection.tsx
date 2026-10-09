import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Mail,
  Copy,
  Check,
  ShieldCheck,
  AlertCircle,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { contact, showToast } = useApp();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contact.phoneDisplay);
    setCopied(true);
    showToast(`Broj ${contact.phoneDisplay} je kopiran u privremenu memoriju!`);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="kontakt" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Contact Instructions */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block mb-2">
                Lični kontakt
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                Kontaktirajte Me Direktno
              </h2>
              <p className="mt-3 text-slate-600 text-base leading-relaxed">
                Nema posrednika, čekaonica i zakazivanja preko interneta. 
                Javljam se lično ja — objasnite šta vam je potrebno i odmah dogovaramo datum dolaska u Beogradu.
              </p>
            </div>

            {/* Direct Phone Highlight Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-xl space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 block">
                    Glavni broj za pozive i hitne intervencije
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <a
                      href={`tel:${contact.phone}`}
                      className="text-2xl sm:text-3xl font-black text-white hover:text-sky-300 transition-colors tracking-tight"
                    >
                      {contact.phoneDisplay}
                    </a>
                    <button
                      onClick={handleCopy}
                      className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                      title="Kopiraj broj"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-sky-600/30 border border-sky-500/40 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-sky-400 fill-sky-400" />
                </div>
              </div>

              {contact.phoneSecondary && (
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-sm">
                  <span className="text-slate-400">Dodatni broj:</span>
                  <a
                    href={`tel:${contact.phoneSecondary}`}
                    className="font-bold text-slate-200 hover:text-sky-300"
                  >
                    {contact.phoneSecondaryDisplay}
                  </a>
                </div>
              )}

              {/* Instant Action Launcher */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm transition-all"
                >
                  <Phone className="w-4 h-4 fill-white" />
                  <span>Pozovi telefonom</span>
                </a>

                <a
                  href={`viber://chat?number=${contact.viberNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#7360f2] hover:bg-[#6350e0] text-white font-semibold text-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Piši na Viber</span>
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Brz izlazak na teren u Beogradu i okolini za privatne i poslovne objekte.</span>
              </div>
            </div>

            {/* Practical Advice for Fast Inquiry */}
            <div className="p-5 rounded-2xl bg-sky-50 border border-sky-200 text-slate-700 text-xs sm:text-sm space-y-2">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Brz savet za slanje upita na Viber / WhatsApp (065 8282 289):</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Ukoliko želite brzu procenu troškova, slobodno pošaljite fotografiju mesta montaže klime, rashladne komore ili objekta za toplotnu pumpu.
              </p>
            </div>
          </div>

          {/* Right Column: Working Details & Information */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Info Cards Grid */}
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/90 space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-sky-700 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Dostupnost i Dogovor</h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Pozovite za direktan dogovor termina. Prilagođavamo se vašem vremenu.
                  </p>
                  <p className="text-xs text-emerald-700 font-semibold mt-1">
                    Hitne intervencije za klime i rashladne komore po pozivu
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-sky-700 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Teritorija Dolaska</h4>
                  <p className="text-sm text-slate-600 mt-1">{contact.coverageAreaText}</p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Dolazak na kućnu adresu u svim beogradskim opštinama sa kompletnom opremom.
                  </p>
                </div>
              </div>

              {contact.email && (
                <div className="flex items-start gap-4 pt-4 border-t border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-sky-700 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Email Adresa</h4>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-sm text-sky-600 hover:underline mt-1 block"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Direct Quick WhatsApp and SMS buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`https://wa.me/${contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-900 transition-colors flex flex-col items-center justify-center text-center gap-1.5"
              >
                <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <span className="font-bold text-xs sm:text-sm">WhatsApp poruka</span>
                <span className="text-[11px] text-emerald-700">Pošalji direktan upit</span>
              </a>

              <a
                href={`sms:${contact.phone}`}
                className="p-4 rounded-2xl bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-900 transition-colors flex flex-col items-center justify-center text-center gap-1.5"
              >
                <div className="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <span className="font-bold text-xs sm:text-sm">SMS Poruka</span>
                <span className="text-[11px] text-sky-700">Pošaljite adresu i opis</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
