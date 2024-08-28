export interface Purchaser {
    id: number;
    sid: number;
    name: string;
    type: {
      id: string;
      name: string;
      slug: string;
    };
  }
  
  export interface Awarded {
    date: string;
    suppliers_id: number;
    value: number;
    count: number;
    suppliers_name: string;
    suppliers: {
      value_eur: number;
      value_for_one: number;
      value_for_one_eur: number;
      value_for_two: number;
      value_for_two_eur: number;
      value_for_three: number;
      value_for_three_eur: number;
    }[];
  }
  
  export interface Notices {
    SZERZODESSEL_KAPCSOLATOS_INFORMACIOK_BLOKK: any[];
    OSSZEGZES_AJANLAT_ELBIRALAS_BLOKK: any[];
    ELOZETES_VITARENDEZES_BLOKK: any[];
  }
  
  export interface Data {
    initial_estimated: string;
    final: string;
    currency: string;
  }
  
  export interface TenderDetail {
    id: string;
    date: string;
    deadline_date: string;
    deadline_length_days: string;
    title: string;
    category: string;
    description: string;
    phase: string;
    phase_en: string;
    place: string;
    sid: string;
    eid: string;
    awarded_value: string;
    awarded_currency: string;
    awarded_value_eur: string;
    data: Data;
    purchaser: Purchaser;
    notices: Notices;
    awarded: Awarded[];
    offers_count_data: any;
  }
  
  export interface Tender {
    id: string;
    date: string;
    deadline_date: string;
    title: string;
    category: string;
    description: string;
    phase: string;
    phase_en: string;
    place: string;
    sid: string;
    eid: string;
    awarded_value: string;
    awarded_currency: string;
    awarded_value_eur: string;
    purchaser: Purchaser;
    awarded: Awarded[];
  }
  
  export interface List {
    data: Tender[];
    page_count: number;
    page_number: number;
    page_size: number;
    total: number;
  }
  