export interface UnderCategory {
  idSottoCategoria?: string;
  nomeSottoCategoria: string;
  tagSottoCategoria: string;
}

export interface Category {
  category?: {
    idCategoria?: string;
    nomeCategoria: string;
    tagCategoria: string;
    sottoCategorie?: UnderCategory[];
  };
}
export interface Product {
  product?: {
    id?: string;
    categoria: Category;
    nome: string;
    prezzo: string;
    quantita: string;
    costo: string;
    dataAcquisto: string;
    dataSpeciale?: string;
  };
}
export interface Card {
  key?: number;
  id: string;
  label: string;
  value: string;
  icon: string;
}

export interface CardBilancio {
  id: string;
  value: number;
  moneySymbol: string;
  details: [{ id: string; label: string; value: number; moneySymbol: string }];
}
