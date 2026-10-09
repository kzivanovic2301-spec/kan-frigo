import React, { useState } from 'react';
import { BELGRADE_MUNICIPALITIES } from '../data/defaultData';
import { useApp } from '../context/AppContext';
import { MapPin, Phone, CheckCircle2, AlertCircle, Navigation } from 'lucide-react';

export const BelgradeCoverage: React.FC = () => {
  const { contact } = useApp();
  const [selectedMuni, setSelectedMuni] = useState<string | null>(null);

  return (
    <section id="beograd-lokacije" className="py-16 sm:py-20 bg-slate-100 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-sky-600" />
            <span>Zona poslovanja</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Beograd i Okolina
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Servis klima uređaja, montažu i servis rashladnih komora vršimo 
            <strong className="text-slate-900 font-semibold"> u Beogradu i okolini</strong> (sve gradske opštine i prigradska naselja).
            Dolazimo na vašu adresu ili u poslovni objekat kompletno opremljeni profesionalnim alatom i dijagnostikom.
          </p>
        </div>

        {/* Belgrade Area Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {BELGRADE_MUNICIPALITIES.map((item) => {
            const isSelected = selectedMuni === item.name;
            return (
              <button
                key={item.name}
                type="button"
                onClick={() => setSelectedMuni(isSelected ? null : item.name)}
                className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-sky-600 text-white border-sky-600 shadow-md scale-[1.02]'
                    : 'bg-white text-slate-800 border-slate-200/80 hover:border-sky-300 hover:shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className={`font-bold text-sm sm:text-base ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                    {item.name}
                  </span>
                  <CheckCircle2 className={`w-4 h-4 shrink-0 ${isSelected ? 'text-white' : 'text-emerald-600'}`} />
                </div>
                <p className={`text-xs leading-normal ${isSelected ? 'text-sky-100' : 'text-slate-500'}`}>
                  {item.sub}
                </p>
              </button>
            );
          })}
        </div>

        {/* Notice Box about Exclusivity & Direct Call */}
        <div className="mt-8 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0 text-amber-700">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-base">
                Vaše naselje nije navedeno ili ste na obodu Beograda?
              </h4>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                Pozovite direktno majstora — za prigradska mesta oko Beograda (Ripanj, Barajevo, Umka, Vrčin, Pančevo i sl.) 
                dogovaramo dolazak bez problema po dogovoru.
              </p>
            </div>
          </div>

          <a
            href={`tel:${contact.phone}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shrink-0 transition-colors shadow-xs"
          >
            <Phone className="w-4 h-4" />
            <span>Pozovi: {contact.phoneDisplay}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
