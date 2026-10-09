import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  X,
  Phone,
  DollarSign,
  Tag,
  Camera,
  Upload,
  Plus,
  Trash2,
  Check,
  RotateCcw,
  Sparkles,
  Info,
  Image as ImageIcon,
} from 'lucide-react';
import { ACProduct, WorkShowcase, ServiceItem } from '../types';
import { PRESET_AC_IMAGES, PRESET_WORK_IMAGES } from '../data/defaultData';

export const OwnerModal: React.FC = () => {
  const {
    isOwnerModalOpen,
    setIsOwnerModalOpen,
    ownerActiveTab,
    setOwnerActiveTab,
    contact,
    updateContact,
    services,
    updateService,
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    works,
    addWork,
    deleteWork,
    resetToDefaults,
    showToast,
  } = useApp();

  // Local draft states
  const [contactDraft, setContactDraft] = useState(contact);

  // New AC Product state
  const [newBrand, setNewBrand] = useState('Gree');
  const [newModel, setNewModel] = useState('');
  const [newBtu, setNewBtu] = useState('12.000 BTU');
  const [newEnergy, setNewEnergy] = useState('A++');
  const [newType, setNewType] = useState<'Inverter' | 'Standard (On/Off)'>('Inverter');
  const [newArea, setNewArea] = useState('Do 45 m²');
  const [newPriceType, setNewPriceType] = useState<'on_inquiry' | 'fixed'>('on_inquiry');
  const [newPriceRsd, setNewPriceRsd] = useState<string>('');
  const [newPriceNote, setNewPriceNote] = useState('Pozovite za cenu sa ugradnjom');
  const [newImageUrl, setNewImageUrl] = useState<string>(PRESET_AC_IMAGES[0]);
  const [newFeatures, setNewFeatures] = useState<string>('Grejanje do -20°C\nWi-Fi upravljanje\nVisoka energetska efikasnost');

  // New Work photo state
  const [newWorkTitle, setNewWorkTitle] = useState('');
  const [newWorkLocation, setNewWorkLocation] = useState('Novi Beograd');
  const [newWorkCategory, setNewWorkCategory] = useState<'Montaža' | 'Servis' | 'Popravka'>('Montaža');
  const [newWorkDesc, setNewWorkDesc] = useState('');
  const [newWorkImageUrl, setNewWorkImageUrl] = useState<string>(PRESET_WORK_IMAGES[0]);

  if (!isOwnerModalOpen) return null;

  // Handle local image file upload for AC
  const handleAcImageFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setNewImageUrl(reader.result);
          showToast('Slika uspešno učitana sa uređaja!');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle local image file upload for Work
  const handleWorkImageFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setNewWorkImageUrl(reader.result);
          showToast('Fotografija rada je učitana sa uređaja!');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveContact = (e: React.FormEvent) => {
    e.preventDefault();
    updateContact(contactDraft);
  };

  const handleAddNewProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newModel.trim()) {
      showToast('Molimo unesite model klime.');
      return;
    }

    const featureList = newFeatures
      .split('\n')
      .map((f) => f.trim())
      .filter((f) => f.length > 0);

    addProduct({
      brand: newBrand,
      model: newModel,
      capacityBtu: newBtu,
      energyClass: newEnergy,
      type: newType,
      areaCoverage: newArea,
      priceType: newPriceType,
      priceRsd: newPriceType === 'fixed' && newPriceRsd ? parseInt(newPriceRsd, 10) : undefined,
      priceNote: newPriceNote,
      imageUrl: newImageUrl,
      features: featureList.length > 0 ? featureList : ['Pouzdan rad', 'Uključena garancija'],
      inStock: true,
      popular: false,
    });

    // Reset new form
    setNewModel('');
    setNewPriceRsd('');
    setNewPriceType('on_inquiry');
  };

  const handleAddNewWork = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newWorkTitle.trim()) {
      showToast('Molimo unesite naslov ili kratak opis rada.');
      return;
    }

    addWork({
      title: newWorkTitle,
      location: newWorkLocation,
      date: 'Oktobar 2026',
      imageUrl: newWorkImageUrl,
      description: newWorkDesc || 'Izvršena profesionalna montaža sa vakumiranjem i ispitivanjem sistema.',
      category: newWorkCategory,
    });

    setNewWorkTitle('');
    setNewWorkDesc('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-black">
              ⚙️
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg text-white">
                Vlasnički Režim — Podešavanje Sajta
              </h3>
              <p className="text-xs text-slate-300">
                Unesite vaše brojeve telefona, cene klima i ubacite svoje fotografije sa terena
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsOwnerModalOpen(false)}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 px-6 pt-3 border-b border-slate-200 bg-slate-50 shrink-0 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setOwnerActiveTab('contact')}
            className={`px-4 py-2.5 text-xs font-bold rounded-t-xl transition-colors shrink-0 cursor-pointer ${
              ownerActiveTab === 'contact'
                ? 'bg-white text-sky-700 border-t-2 border-sky-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            1. Kontakt & Telefon
          </button>

          <button
            onClick={() => setOwnerActiveTab('services')}
            className={`px-4 py-2.5 text-xs font-bold rounded-t-xl transition-colors shrink-0 cursor-pointer ${
              ownerActiveTab === 'services'
                ? 'bg-white text-sky-700 border-t-2 border-sky-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            2. Cene Usluga
          </button>

          <button
            onClick={() => setOwnerActiveTab('works')}
            className={`px-4 py-2.5 text-xs font-bold rounded-t-xl transition-colors shrink-0 cursor-pointer ${
              ownerActiveTab === 'works'
                ? 'bg-white text-sky-700 border-t-2 border-sky-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            3. Slike Vaših Radova
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* TAB 1: KONTAKT PODACI */}
          {ownerActiveTab === 'contact' && (
            <form onSubmit={handleSaveContact} className="space-y-5">
              <div className="bg-sky-50 border border-sky-200 p-4 rounded-2xl text-xs text-sky-900 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <p>
                  Ovi podaci se odmah prikazuju na celom sajtu, u navigaciji, u sekciji za pozive i u donjem meniju za mobilne telefone.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Naziv servisa / Firme
                  </label>
                  <input
                    type="text"
                    value={contactDraft.companyName}
                    onChange={(e) => setContactDraft({ ...contactDraft, companyName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:outline-none"
                    placeholder="npr. KAN frigo"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Ime majstora
                  </label>
                  <input
                    type="text"
                    value={contactDraft.technicianName}
                    onChange={(e) => setContactDraft({ ...contactDraft, technicianName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:outline-none"
                    placeholder="npr. Majstor Marko"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Glavni broj telefona (za prikaz)
                  </label>
                  <input
                    type="text"
                    value={contactDraft.phoneDisplay}
                    onChange={(e) => setContactDraft({ ...contactDraft, phoneDisplay: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:outline-none"
                    placeholder="065 8282 289"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Telefon za poziv (tel: format bez razmaka)
                  </label>
                  <input
                    type="text"
                    value={contactDraft.phone}
                    onChange={(e) => setContactDraft({ ...contactDraft, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:outline-none"
                    placeholder="+381658282289"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Viber / WhatsApp broj (bez plusa, npr. 381658282289)
                  </label>
                  <input
                    type="text"
                    value={contactDraft.viberNumber}
                    onChange={(e) => setContactDraft({ ...contactDraft, viberNumber: e.target.value, whatsappNumber: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:outline-none"
                    placeholder="381658282289"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email adresa
                  </label>
                  <input
                    type="email"
                    value={contactDraft.email || ''}
                    onChange={(e) => setContactDraft({ ...contactDraft, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:outline-none"
                    placeholder="pufta82@gmail.com"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-3">
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow-sm cursor-pointer"
                >
                  Sačuvaj Kontakt Podatke
                </button>
              </div>
            </form>
          )}

          {/* TAB 2: CENE USLUGA */}
          {ownerActiveTab === 'services' && (
            <div className="space-y-6">
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl text-xs text-amber-900">
                Pošto još nemate sve cene definisane, možete ostaviti <strong>"Cena na upit"</strong> (podrazumevano), 
                ili ako želite unesite početnu cenu (npr. "od 3.500 RSD" ili fiksnu cenu u dinarima).
              </div>

              <div className="space-y-4">
                {services.map((srv) => (
                  <div key={srv.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-slate-900 text-sm">{srv.title}</h4>
                      <span className="text-xs text-slate-500">{srv.duration}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-end">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">
                          Tip cene:
                        </label>
                        <select
                          value={srv.priceType}
                          onChange={(e) =>
                            updateService(srv.id, {
                              priceType: e.target.value as 'on_inquiry' | 'fixed' | 'from',
                            })
                          }
                          className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white"
                        >
                          <option value="on_inquiry">Cena na upit (Pozovite)</option>
                          <option value="from">Cena od (npr. od 3.500 RSD)</option>
                          <option value="fixed">Fiksna cena (RSD)</option>
                        </select>
                      </div>

                      {srv.priceType !== 'on_inquiry' && (
                        <div>
                          <label className="block text-[11px] font-bold text-slate-600 mb-1">
                            Iznos u dinarima (RSD):
                          </label>
                          <input
                            type="number"
                            value={srv.priceRsd || ''}
                            onChange={(e) =>
                              updateService(srv.id, {
                                priceRsd: e.target.value ? parseInt(e.target.value, 10) : undefined,
                              })
                            }
                            placeholder="npr. 3500"
                            className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white"
                          />
                        </div>
                      )}

                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">
                          Kratka napomena:
                        </label>
                        <input
                          type="text"
                          value={srv.priceNote || ''}
                          onChange={(e) => updateService(srv.id, { priceNote: e.target.value })}
                          placeholder="npr. U zavisnosti od zaprljanosti"
                          className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: SLIKE VAŠIH RADOVA */}
          {ownerActiveTab === 'works' && (
            <div className="space-y-6">
              
              {/* Add New Work Photo */}
              <div className="p-5 rounded-2xl bg-sky-50/70 border border-sky-200 space-y-4">
                <h4 className="font-extrabold text-sm text-sky-950 flex items-center gap-1.5">
                  <Camera className="w-4 h-4 text-sky-600" />
                  <span>Dodaj sliku svoje montaže / servisa</span>
                </h4>

                <form onSubmit={handleAddNewWork} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Naslov rada
                      </label>
                      <input
                        type="text"
                        value={newWorkTitle}
                        onChange={(e) => setNewWorkTitle(e.target.value)}
                        placeholder="npr. Ugradnja Gree klime sa kanalizovanim crevima"
                        className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Kategorija
                      </label>
                      <select
                        value={newWorkCategory}
                        onChange={(e) => setNewWorkCategory(e.target.value as any)}
                        className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white"
                      >
                        <option value="Montaža">Montaža</option>
                        <option value="Servis">Servis</option>
                        <option value="Popravka">Popravka</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Lokacija u Beogradu
                      </label>
                      <input
                        type="text"
                        value={newWorkLocation}
                        onChange={(e) => setNewWorkLocation(e.target.value)}
                        placeholder="npr. Novi Beograd, Blok 63"
                        className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Kratak opis izvedenog rada
                      </label>
                      <input
                        type="text"
                        value={newWorkDesc}
                        onChange={(e) => setNewWorkDesc(e.target.value)}
                        placeholder="npr. Probušen zid, postavljeni antivibracioni nosači, vakumirano."
                        className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white"
                      />
                    </div>
                  </div>

                  {/* Upload picture */}
                  <div className="space-y-2 pt-2 border-t border-sky-200">
                    <label className="block text-[11px] font-bold text-slate-800">
                      Fotografija rada sa terena:
                    </label>

                    <div className="flex flex-wrap items-center gap-3">
                      <label className="cursor-pointer inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition-colors">
                        <Upload className="w-3.5 h-3.5" />
                        <span>Učitaj fotografiju sa telefona</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleWorkImageFileUpload}
                          className="hidden"
                        />
                      </label>

                      <span className="text-xs text-slate-500">ili URL:</span>
                      <input
                        type="text"
                        value={newWorkImageUrl}
                        onChange={(e) => setNewWorkImageUrl(e.target.value)}
                        placeholder="https://..."
                        className="flex-1 min-w-[200px] px-3 py-1.5 text-xs rounded-xl border border-slate-300 bg-white"
                      />
                    </div>

                    {newWorkImageUrl && (
                      <div className="flex items-center gap-3 pt-1">
                        <img
                          src={newWorkImageUrl}
                          alt="Pregled rada"
                          className="w-16 h-12 object-cover rounded-lg border border-slate-300"
                        />
                        <span className="text-xs text-slate-500">Pregled odabrane fotografije rada</span>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs cursor-pointer"
                    >
                      + Dodaj u galeriju radova
                    </button>
                  </div>
                </form>
              </div>

              {/* Existing works list */}
              <div className="space-y-3">
                <h4 className="font-extrabold text-xs uppercase tracking-wider text-slate-500">
                  Objavljeni radovi u galeriji ({works.length}):
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {works.map((item) => (
                    <div
                      key={item.id}
                      className="p-3 rounded-2xl bg-white border border-slate-200 flex items-center justify-between gap-3 shadow-xs"
                    >
                      <div className="flex items-center gap-3 overflow-hidden">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-14 h-14 object-cover rounded-xl border border-slate-200 shrink-0"
                        />
                        <div className="overflow-hidden">
                          <p className="font-bold text-slate-900 text-xs truncate">{item.title}</p>
                          <p className="text-[11px] text-sky-700">{item.location}</p>
                          <span className="text-[10px] text-slate-400">{item.category}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => deleteWork(item.id)}
                        className="p-2 rounded-lg text-rose-500 hover:bg-rose-50 shrink-0 cursor-pointer"
                        title="Obriši ovu sliku"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between shrink-0">
          <button
            onClick={() => {
              if (confirm('Da li želite da vratite sve podatke i cene na fabrička podešavanja?')) {
                resetToDefaults();
              }
            }}
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 font-semibold cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Resetuj na početno</span>
          </button>

          <button
            onClick={() => {
              setIsOwnerModalOpen(false);
              showToast('Sve izmene su sačuvane!');
            }}
            className="px-6 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs sm:text-sm cursor-pointer shadow-sm"
          >
            Završi i Zatvori
          </button>
        </div>

      </div>
    </div>
  );
};
