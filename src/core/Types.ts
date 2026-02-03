export interface Product {
  id: string;
  categoria: string;
  nome: string;
  prezzo: number;
  quantita: number;
  costo: number;
  dataAcquisto: string;
  dataSpeciale?: string;
  index: number;
}

export interface Category {
  id: string;
  name: string;
  tag: string;
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
