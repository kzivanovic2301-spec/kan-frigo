import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const FaqSection: React.FC = () => {
  const { contact } = useApp();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Kako da zakažem servis ili montažu?',
      a: `Najjednostavnije je da me direktno pozovete na ${contact.phoneDisplay} ili pošaljete poruku na Viber/WhatsApp. Ne koristimo komplikovane formulare na sajtu — javljam se lično i odmah usklađujemo datum i satnicu koja vama odgovara.`,
    },
    {
      q: 'Da li radite na celoj teritoriji Beograda?',
      a: 'Da! Pokrivamo sve beogradske opštine: Novi Beograd, Zemun, Vračar, Stari Grad, Palilula, Voždovac, Čukarica, Zvezdara, Rakovica, Savski Venac, Surčin, Borču, kao i Pančevo i prigradska naselja.',
    },
    {
      q: 'Da li radite servis i popravku rashladnih komora za firme i ugostitelje?',
      a: 'Da, KAN frigo vrši stručan servis, dijagnostiku i popravku plusnih i minusnih rashladnih komora za restorane, kafiće, markete, pekare, mesare i skladišta u Beogradu i okolini. Radimo zamenu agregata, kompresora, digitalnih kontrolera i hitno otklanjanje kvarova.',
    },
    {
      q: 'Da li mogu kod vas da kupim klimu i odmah zakažem ugradnju?',
      a: 'Apsolutno. Imamo u ponudi proverene inverter klime (Gree, Midea, Hisense, Daikin i dr.). Donosimo uređaj na vašu adresu i vršimo stručnu ugradnju po fabričkim standardima.',
    },
    {
      q: 'Zašto je neophodan redovan godišnji servis?',
      a: 'U klimi se tokom rada nakupljaju vlaga, prašina, buđ i bakterije koje udišete, a neprijatan miris pri paljenju je znak da je klima zagađena. Redovnim hemijskim pranjem i dezinfekcijom čuvate zdravlje i obezbeđujete pravilan rad sistema.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
            <span>Česta pitanja</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Sve Što Treba da Znate
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Odgovori na najčešća pitanja klijenata u Beogradu.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-900 text-base">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-sky-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-1">
                    <p className="pt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-slate-600">
            Imate pitanje koje nije navedeno?
          </p>
          <a
            href={`tel:${contact.phone}`}
            className="inline-flex items-center gap-2 mt-2 text-sky-600 hover:text-sky-800 font-bold text-sm"
          >
            <Phone className="w-4 h-4" />
            <span>Pozovite majstora i pitajte slobodno: {contact.phoneDisplay}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
