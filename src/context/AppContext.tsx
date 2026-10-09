import React, { createContext, useContext, useState, useEffect } from 'react';
import { ContactInfo, ACProduct, ServiceItem, WorkShowcase } from '../types';
import {
  DEFAULT_CONTACT_INFO,
  DEFAULT_AC_PRODUCTS,
  DEFAULT_SERVICES,
  DEFAULT_WORKS,
} from '../data/defaultData';

interface AppContextType {
  contact: ContactInfo;
  updateContact: (newContact: Partial<ContactInfo>) => void;
  products: ACProduct[];
  addProduct: (product: Omit<ACProduct, 'id'>) => void;
  updateProduct: (id: string, updated: Partial<ACProduct>) => void;
  deleteProduct: (id: string) => void;
  services: ServiceItem[];
  updateService: (id: string, updated: Partial<ServiceItem>) => void;
  works: WorkShowcase[];
  addWork: (work: Omit<WorkShowcase, 'id'>) => void;
  deleteWork: (id: string) => void;
  resetToDefaults: () => void;
  isOwnerMode: boolean;
  setIsOwnerMode: (val: boolean) => void;
  isOwnerModalOpen: boolean;
  setIsOwnerModalOpen: (val: boolean) => void;
  ownerActiveTab: 'contact' | 'services' | 'products' | 'works';
  setOwnerActiveTab: (tab: 'contact' | 'services' | 'products' | 'works') => void;
  openOwnerModalWithTab: (tab: 'contact' | 'services' | 'products' | 'works') => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEY_CONTACT = 'kan_frigo_contact_v6';
const STORAGE_KEY_PRODUCTS = 'kan_frigo_products_v6';
const STORAGE_KEY_SERVICES = 'kan_frigo_services_v6';
const STORAGE_KEY_WORKS = 'kan_frigo_works_v6';
const STORAGE_KEY_OWNER_MODE = 'kan_frigo_owner_mode_v6';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [contact, setContact] = useState<ContactInfo>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_CONTACT);
      return saved ? JSON.parse(saved) : DEFAULT_CONTACT_INFO;
    } catch {
      return DEFAULT_CONTACT_INFO;
    }
  });

  const [products, setProducts] = useState<ACProduct[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PRODUCTS);
      return saved ? JSON.parse(saved) : DEFAULT_AC_PRODUCTS;
    } catch {
      return DEFAULT_AC_PRODUCTS;
    }
  });

  const [services, setServices] = useState<ServiceItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_SERVICES);
      return saved ? JSON.parse(saved) : DEFAULT_SERVICES;
    } catch {
      return DEFAULT_SERVICES;
    }
  });

  const [works, setWorks] = useState<WorkShowcase[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_WORKS);
      return saved ? JSON.parse(saved) : DEFAULT_WORKS;
    } catch {
      return DEFAULT_WORKS;
    }
  });

  const [isOwnerMode, setIsOwnerMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_OWNER_MODE);
      return saved === 'true';
    } catch {
      return false;
    }
  });

  const [isOwnerModalOpen, setIsOwnerModalOpen] = useState(false);
  const [ownerActiveTab, setOwnerActiveTab] = useState<'contact' | 'services' | 'products' | 'works'>('contact');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_CONTACT, JSON.stringify(contact));
  }, [contact]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_PRODUCTS, JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_SERVICES, JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_WORKS, JSON.stringify(works));
  }, [works]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_OWNER_MODE, isOwnerMode ? 'true' : 'false');
  }, [isOwnerMode]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3200);
  };

  const updateContact = (newContact: Partial<ContactInfo>) => {
    setContact((prev) => ({ ...prev, ...newContact }));
    showToast('Kontakt podaci su uspešno ažurirani!');
  };

  const addProduct = (productData: Omit<ACProduct, 'id'>) => {
    const newProduct: ACProduct = {
      ...productData,
      id: `ac-${Date.now()}`,
    };
    setProducts((prev) => [newProduct, ...prev]);
    showToast(`Klima "${newProduct.brand} ${newProduct.model}" je uspešno dodata!`);
  };

  const updateProduct = (id: string, updated: Partial<ACProduct>) => {
    setProducts((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updated } : item))
    );
    showToast('Podaci o klimi su ažurirani!');
  };

  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((item) => item.id !== id));
    showToast('Klima uređaj je uklonjen iz ponude.');
  };

  const updateService = (id: string, updated: Partial<ServiceItem>) => {
    setServices((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updated } : item))
    );
    showToast('Cena i opis usluge su sačuvani!');
  };

  const addWork = (workData: Omit<WorkShowcase, 'id'>) => {
    const newWork: WorkShowcase = {
      ...workData,
      id: `work-${Date.now()}`,
    };
    setWorks((prev) => [newWork, ...prev]);
    showToast('Nova fotografija rada je dodata u galeriju!');
  };

  const deleteWork = (id: string) => {
    setWorks((prev) => prev.filter((item) => item.id !== id));
    showToast('Fotografija rada je obrisana.');
  };

  const resetToDefaults = () => {
    setContact(DEFAULT_CONTACT_INFO);
    setProducts(DEFAULT_AC_PRODUCTS);
    setServices(DEFAULT_SERVICES);
    setWorks(DEFAULT_WORKS);
    showToast('Svi podaci su vraćeni na fabrička podešavanja.');
  };

  const openOwnerModalWithTab = (tab: 'contact' | 'services' | 'products' | 'works') => {
    setOwnerActiveTab(tab);
    setIsOwnerModalOpen(true);
  };

  return (
    <AppContext.Provider
      value={{
        contact,
        updateContact,
        products,
        addProduct,
        updateProduct,
        deleteProduct,
        services,
        updateService,
        works,
        addWork,
        deleteWork,
        resetToDefaults,
        isOwnerMode,
        setIsOwnerMode,
        isOwnerModalOpen,
        setIsOwnerModalOpen,
        ownerActiveTab,
        setOwnerActiveTab,
        openOwnerModalWithTab,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
