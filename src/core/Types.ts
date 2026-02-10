export interface Product {
  id?: string;
  categoria: {
    id?: string;
    nomeCategoria: string;
    tagCategoria: string;
    sottoCategorie?: [
      {
        id?: string;
        nomeSottoCategoria: string;
        tagSottoCategoria: string;
      }
    ];
  };
  nome: string;
  prezzo: string;
  quantita: string;
  costo: string;
  dataAcquisto: string;
  dataSpeciale?: string;
}

export interface Category {
  id?: string;
  nomeCategoria: string;
  tagCategoria: string;
  sottoCategorie?: [
    {
      id?: string;
      nomeSottoCategoria: string;
      tagSottoCategoria: string;
    }
  ];
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
