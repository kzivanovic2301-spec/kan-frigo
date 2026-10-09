import React from 'react';
import { useApp } from '../context/AppContext';
import { Phone, MapPin, ShieldCheck, Settings } from 'lucide-react';
import { BELGRADE_MUNICIPALITIES } from '../data/defaultData';

export const Footer: React.FC = () => {
  const { contact, isOwnerMode, setIsOwnerMode, openOwnerModalWithTab } = useApp();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 sm:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center text-white text-lg font-black">
                ❄️
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                {contact.companyName}
              </span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              Ugradnja i servis klima uređaja, izrada i servis rashladnih komora, montaža toplotnih pumpi, VRV i multi sistema.
            </p>

            <div className="flex items-center gap-2 text-xs text-sky-400 bg-slate-900 px-3 py-2 rounded-xl border border-slate-800">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>Zona rada: <strong>Beograd i okolina</strong></span>
            </div>
          </div>

          {/* Quick Contact Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Direktan Kontakt
            </h4>
            
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-slate-500 block">Poziv / Viber / WhatsApp:</span>
                <a
                  href={`tel:${contact.phone}`}
                  className="font-bold text-base text-white hover:text-sky-400 transition-colors block mt-0.5"
                >
                  {contact.phoneDisplay}
                </a>
              </div>

              {contact.email && (
                <div>
                  <span className="text-slate-500 block">Email adresa:</span>
                  <a
                    href={`mailto:${contact.email}`}
                    className="font-semibold text-slate-300 hover:text-sky-400"
                  >
                    {contact.email}
                  </a>
                </div>
              )}

              <div className="pt-1">
                <span className="text-emerald-400 font-semibold block">Dostupni za poziv i dogovor</span>
                <span className="text-slate-400 block">Dolazak na adresu u Beogradu i okolini</span>
              </div>
            </div>
          </div>

          {/* Services Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Usluge KAN frigo
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>&bull; Ugradnja i servis klima uređaja</li>
              <li>&bull; Izrada i servis rashladnih komora</li>
              <li>&bull; Montaža i servis toplotnih pumpi</li>
              <li>&bull; VRV / VRF centralni sistemi</li>
              <li>&bull; Multi-split sistemi</li>
              <li>&bull; Prodaja klima uređaja i opreme</li>
            </ul>
          </div>

          {/* Belgrade Boroughs Served */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Opštine u Beogradu
            </h4>
            <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-400">
              {BELGRADE_MUNICIPALITIES.slice(0, 10).map((m) => (
                <span key={m.name} className="bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">
                  {m.name}
                </span>
              ))}
              <span className="text-slate-500">+ sva ostala prigradska mesta</span>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} {contact.companyName}. Sva prava zadržana. Beograd, Srbija.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                setIsOwnerMode(!isOwnerMode);
                openOwnerModalWithTab('contact');
              }}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <Settings className="w-3.5 h-3.5 text-amber-400" />
              <span>{isOwnerMode ? 'Isključi vlasnički režim' : 'Vlasnički režim (cene, slike & telefon)'}</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
