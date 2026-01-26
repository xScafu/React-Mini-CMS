export interface Product {
  id: string;
  tipo: string;
  nome: string;
  prezzo: number;
  quantita: number;
  costo: number;
  dataAcquisto: string;
  dataSpeciale?: string;
  index: number;
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
