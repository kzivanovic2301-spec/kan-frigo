import React from 'react';
import { ShieldCheck, UserCheck, Sparkles, Clock, Wrench, ThumbsUp } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const WhyChooseUs: React.FC = () => {
  const { contact } = useApp();

  const reasons = [
    {
      icon: <UserCheck className="w-6 h-6 text-sky-600" />,
      title: 'Direktno sa majstorom',
      desc: 'Razgovarate direktno sa majstorom koji će raditi na vašoj klimi ili rashladnoj komori i zna tačno šta je potrebno.',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-sky-600" />,
      title: 'Čistoća i rad bez prašine',
      desc: 'Vodimo maksimalno računa o čistoći prostora, nameštaju i zidovima tokom rada. Vaš dom ili lokal ostaje uredan.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-sky-600" />,
      title: 'Kvalitetni materijali i delovi',
      desc: 'Ugrađujemo proverene i kvalitetne materijale, pouzdan bakar, nosače i originalne komponente za dugotrajan rad.',
    },
    {
      icon: <Clock className="w-6 h-6 text-sky-600" />,
      title: 'Poštovanje dogovorenog vremena',
      desc: 'Termin u Beogradu dogovaramo u tačno definisano vreme bez čekanja celog dana. Pozovemo vas i pre dolaska.',
    },
    {
      icon: <Wrench className="w-6 h-6 text-sky-600" />,
      title: 'Fabrički standardi',
      desc: 'Radimo po fabričkim standardima proizvođača, uz stručno povezivanje instalacija i dopunu freona po fabričkoj gramaži.',
    },
    {
      icon: <ThumbsUp className="w-6 h-6 text-sky-600" />,
      title: 'Iskrena procena bez skrivenih troškova',
      desc: 'Pre početka radova otvoreno kažemo šta je potrebno i koja je cena. Nema neprijatnih iznenađenja nakon završenog posla.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-2">
            Zašto klijenti biraju {contact.companyName}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
            Majstorski Rad i Pošten Odnos
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Klima uređaji i rashladne komore zahtevaju stručno održavanje i pravilan rad — zato radimo po najvišim standardima rashladne tehnike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-slate-800/80 border border-slate-700/80 hover:border-sky-500/50 transition-all hover:bg-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-950/80 border border-sky-800 flex items-center justify-center mb-5">
                  {r.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {r.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
