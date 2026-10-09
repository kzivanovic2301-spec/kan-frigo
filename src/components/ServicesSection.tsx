import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Sparkles,
  Wrench,
  Wind,
  ThermometerSnowflake,
  Boxes,
  Flame,
  Layers,
  Phone,
  MessageSquare,
  CheckCircle2,
  Clock,
  Edit3,
} from 'lucide-react';
import { ServiceItem } from '../types';

export const ServicesSection: React.FC = () => {
  const { services, contact, isOwnerMode, openOwnerModalWithTab } = useApp();

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-sky-600" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-sky-600" />;
      case 'Wind':
        return <Wind className="w-6 h-6 text-sky-600" />;
      case 'Boxes':
        return <Boxes className="w-6 h-6 text-sky-600" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-sky-600" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-sky-600" />;
      case 'ThermometerSnowflake':
      default:
        return <ThermometerSnowflake className="w-6 h-6 text-sky-600" />;
    }
  };

  const formatServicePrice = (item: ServiceItem) => {
    if (item.priceType === 'on_inquiry' || !item.priceRsd) {
      return (
        <span className="text-slate-800 font-bold text-lg">
          Cena na upit <span className="text-xs font-normal text-slate-500 block">Pozovite za tačnu procenu</span>
        </span>
      );
    }
    if (item.priceType === 'from') {
      return (
        <span className="text-slate-900 font-extrabold text-xl">
          od {item.priceRsd.toLocaleString('sr-RS')} RSD
        </span>
      );
    }
    return (
      <span className="text-slate-900 font-extrabold text-xl">
        {item.priceRsd.toLocaleString('sr-RS')} RSD
      </span>
    );
  };

  return (
    <section id="usluge" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block mb-2">
              Usluge KAN frigo
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Ugradnja, Servis i Izrada Rashladnih i Termotehničkih Sistema
            </h2>
            <p className="mt-3 text-slate-600 text-base leading-relaxed">
              Specijalizovani za ugradnju i servis klima uređaja, kompletnu izradu i servis rashladnih komora, montažu toplotnih pumpi, kao i izvođenje VRV i multi-split sistema u Beogradu i okolini. 
              Svaki posao radimo pedantno, po propisima struke i sa garancijom.
            </p>
          </div>

          {isOwnerMode && (
            <button
              onClick={() => openOwnerModalWithTab('services')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-bold border border-amber-300 self-start"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Uredi cene usluga (Vlasnik)</span>
            </button>
          )}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 transition-all hover:shadow-lg shadow-xs group relative"
            >
              <div>
                {/* Header of Card */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-100/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {getServiceIcon(item.iconName)}
                  </div>
                  {item.badge && (
                    <span className="text-xs font-bold text-sky-700 bg-sky-100 px-3 py-1 rounded-full border border-sky-200">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {item.shortDesc}
                </p>

                {/* What is included */}
                <div className="space-y-2 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                    Šta je uključeno u ovu uslugu:
                  </span>
                  {item.includes.map((inc, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Price & Call CTA */}
              <div className="pt-6 border-t border-slate-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                      Cena usluge
                    </span>
                    {formatServicePrice(item)}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5 fill-white" />
                    <span>Pozovi za dogovor</span>
                  </a>

                  <a
                    href={`viber://chat?number=${contact.viberNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 font-semibold text-xs sm:text-sm transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Dogovori preko Vibera</span>
                  </a>
                </div>

                {isOwnerMode && (
                  <div className="mt-3 pt-2 text-right border-t border-dashed border-slate-200">
                    <button
                      onClick={() => openOwnerModalWithTab('services')}
                      className="text-xs text-amber-700 hover:text-amber-900 font-semibold cursor-pointer underline"
                    >
                      Uredi cenu ove usluge
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
