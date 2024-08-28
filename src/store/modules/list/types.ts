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
    value_for_two: number;
    value_for_two_eur: number;
    suppliers: {
      name: string;
      id: number;
      slug: string;
      value_for_three: number;
      value_for_one_eur: number;
      count: number;
      value_for_one: number;
      value_for_three_eur: number;
      suppliers_id: number;
      value_eur: number;
      offers_count: number[];
      suppliers_name: string;
      value: number;
    }[];
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
  