import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Phone,
  MessageSquare,
  CheckCircle2,
  Wind,
  Boxes,
  Flame,
  Layers,
  Sparkles,
  ShieldCheck,
  Truck,
  HelpCircle,
} from 'lucide-react';

export const ProductsSection: React.FC = () => {
  const { contact } = useApp();

  const brandList = [
    'Gree',
    'Midea',
    'Daikin',
    'Hisense',
    'Bosch',
    'Bergen',
    'Vivax',
    'Mitsubishi',
    'LG',
    'Danfoss',
    'Dixell',
    'Eliwell',
  ];

  return (
    <section id="oprema-i-prodaja" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Prodaja & Oprema</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Veliki Izbor Klima Uređaja, Rashladnih Komora i Opreme
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed">
            Ne morate gubiti vreme birajući pojedinačne modele naslepo — <strong>KAN frigo</strong> u ponudi ima 
            veliki izbor uređaja vodećih svetskih proizvođača. Preporučujemo tačno onu opremu koja najbolje odgovara vašem prostoru, 
            kvadraturi i budžetu, uz direktnu isporuku i profesionalnu ugradnju u Beogradu i okolini.
          </p>
        </div>

        {/* Brands Ticker / Strip */}
        <div className="mb-12 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-3 text-center sm:text-left">
            Zastupljeni i preporučeni brendovi opreme:
          </span>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3">
            {brandList.map((brand) => (
              <span
                key={brand}
                className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-extrabold border border-slate-200/80"
              >
                {brand}
              </span>
            ))}
            <span className="text-xs text-sky-700 font-semibold px-2">
              + ostali renomirani proizvođači
            </span>
          </div>
        </div>

        {/* 4 Core Pillars of Equipment Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* 1. Klima Uređaji */}
          <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-sky-300 transition-all flex flex-col justify-between group">
            <div>
              <div className="relative h-56 bg-slate-100 overflow-hidden">
                <img
                  src="/src/assets/images/ac_indoor_unit_1791303078533.jpg"
                  alt="Veliki izbor klima uređaja"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-1.5">
                  <Wind className="w-3.5 h-3.5 text-sky-400" />
                  <span>Klima Uređaji</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-slate-800 border border-slate-200">
                  9.000 &bull; 12.000 &bull; 18.000 &bull; 24.000+ BTU
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Veliki izbor inverter i standardnih klima
                </h3>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  Imamo na raspolaganju kompletan asortiman klima uređaja svih kapaciteta i energetskih klasa (A+++, A++). 
                  Od ekonomičnih rešenja za garsonjere do moćnih invertera za zimsko grejanje na -25°C i prostrane stambene prostore.
                </p>

                <div className="space-y-2 mb-2">
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Zidne, parapetne, kasetne i kanalske klime za stanove i lokale</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Modeli sa Wi-Fi pametnim upravljanjem i hepa/jonskim filterima</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Mogućnost isporuke i montaže u istom danu uz fabričku garanciju</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <a
                href={`tel:${contact.phone}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Pozovite za ponudu i preporuku klime</span>
              </a>
            </div>
          </div>

          {/* 2. Rashladne Komore */}
          <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-sky-300 transition-all flex flex-col justify-between group">
            <div>
              <div className="relative h-56 bg-slate-100 overflow-hidden">
                <img
                  src="/src/assets/images/rashladna_komora_1791304279402.jpg"
                  alt="Izrada i oprema za rashladne komore"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-1.5">
                  <Boxes className="w-3.5 h-3.5 text-sky-400" />
                  <span>Rashladne Komore</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-slate-800 border border-slate-200">
                  Plusne (0°C do +4°C) &bull; Minusne (-18°C do -25°C)
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Izrada i kompletna oprema za rashladne komore
                </h3>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  Radimo kompletnu izradu po meri i isporuku sve potrebne rashladne opreme za ugostiteljstvo, 
                  trgovine, mesare, pekare, cvećare, vinarije i industrijske pogone.
                </p>

                <div className="space-y-2 mb-2">
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Poliuretanski termoizolacioni paneli svih debljina i dimenzija</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Rashladni agregati, kompresori, isparivači i okretna/klizna vrata sa grejačima</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Digitalni kontroleri Danfoss, Dixell i Eliwell sa pratećom automatikom</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <a
                href={`tel:${contact.phone}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4" />
                <span>Pozovite za proračun i izradu komore</span>
              </a>
            </div>
          </div>

          {/* 3. Toplotne Pumpe */}
          <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-sky-300 transition-all flex flex-col justify-between group">
            <div>
              <div className="relative h-56 bg-slate-100 overflow-hidden">
                <img
                  src="/src/assets/images/toplotna_pumpa_1791306282003.jpg"
                  alt="Toplotne pumpe vazduh-voda"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  <span>Toplotne Pumpe</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-slate-800 border border-slate-200">
                  Vazduh - Voda &bull; Grejanje, Hlađenje & Sanitarna Voda
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Toplotne pumpe vrhunske energetske klase
                </h3>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  Najisplativije i najkomfornije rešenje za grejanje i hlađenje stambenih i poslovnih objekata. 
                  Nudimo proverene toplotne pumpe vazduh-voda prilagođene našim klimatskim uslovima.
                </p>

                <div className="space-y-2 mb-2">
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Povezivanje na podno grejanje, radijatorsko grejanje i fan-coil sisteme</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Monoblok i split varijante sa hidro-modulom</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Drastično smanjenje troškova grejanja tokom zime</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <a
                href={`tel:${contact.phone}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Pozovite za savet oko toplotne pumpe</span>
              </a>
            </div>
          </div>

          {/* 4. Multi-Split i VRV Sistemi */}
          <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-sky-300 transition-all flex flex-col justify-between group">
            <div>
              <div className="relative h-56 bg-slate-100 overflow-hidden">
                <img
                  src="/src/assets/images/ac_installation_1791303061896.jpg"
                  alt="Multi-split i VRV sistemi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-sky-400" />
                  <span>Multi & VRV Sistemi</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-slate-800 border border-slate-200">
                  Jedna spoljna jedinica &bull; Zasebna kontrola u svakoj sobi
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Multi-split i komercijalni VRV/VRF sistemi
                </h3>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  Za veće stanove, vile, poslovne zgrade i hotele gde je potrebno klimatizovati više prostorija 
                  uz minimalan broj spoljašnjih jedinica na fasadi.
                </p>

                <div className="space-y-2 mb-2">
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Povezivanje od 2 do čak nekoliko desetina unutrašnjih jedinica</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Kombinacija zidnih, plafonskih, kanalskih i kasetnih jedinica</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Proračun refnet račvi, padova pritiska i precizno punjenje freona</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <a
                href={`tel:${contact.phone}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4" />
                <span>Konsultacije za multi ili VRV sistem</span>
              </a>
            </div>
          </div>

        </div>

        {/* Helpful Direct Inquiry Action Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-sky-900 to-slate-900 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold border border-sky-400/30">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>Direktne konsultacije sa majstorom</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Niste sigurni koji uređaj ili snaga vam je potrebna?
            </h4>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              Pozovite me lično na <strong>{contact.phoneDisplay}</strong> ili pošaljite poruku na Viber/WhatsApp. 
              Objasnite kvadraturu i raspored prostorija, a ja ću vam odmah dati stručnu preporuku najpouzdanijih uređaja i tačnu ponudu sa ugradnjom.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={`tel:${contact.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm shadow-md transition-all active:scale-95"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Pozovi: {contact.phoneDisplay}</span>
            </a>

            <a
              href={`viber://chat?number=${contact.viberNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#7360f2] hover:bg-[#6350e0] text-white font-semibold text-sm transition-colors shadow-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Piši na Viber</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
