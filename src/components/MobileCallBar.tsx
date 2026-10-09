import React from 'react';
import { useApp } from '../context/AppContext';
import { Phone, MessageSquare } from 'lucide-react';

export const MobileCallBar: React.FC = () => {
  const { contact } = useApp();

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 shadow-2xl safe-area-bottom">
      <div className="flex items-center gap-2">
        {/* Main Big Call Button */}
        <a
          href={`tel:${contact.phone}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-sky-600 active:bg-sky-700 text-white font-black text-sm shadow-md shadow-sky-600/30"
        >
          <Phone className="w-4 h-4 fill-white shrink-0 animate-bounce" />
          <span className="truncate">Pozovi: {contact.phoneDisplay}</span>
        </a>

        {/* Viber quick icon */}
        <a
          href={`viber://chat?number=${contact.viberNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#7360f2] text-white shrink-0 active:scale-95 transition-transform"
          aria-label="Viber poruka"
        >
          <MessageSquare className="w-5 h-5" />
        </a>

        {/* WhatsApp quick icon */}
        <a
          href={`https://wa.me/${contact.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#25D366] text-white shrink-0 active:scale-95 transition-transform"
          aria-label="WhatsApp poruka"
        >
          <MessageSquare className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};
