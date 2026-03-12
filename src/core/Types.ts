// Sotto-categoria
export interface UnderCategory {
  idSottoCategoria?: string;
  nomeSottoCategoria: string;
  tagSottoCategoria: string;
}

// Categoria (struttura flat per l'endpoint /categorie)
export interface Category {
  id?: string;
  nomeCategoria: string;
  tagCategoria: string;
  sottoCategorie?: UnderCategory[];
}

// Categoria embedded nel prodotto
export interface ProductCategory {
  idCategoria?: string;
  nomeCategoria: string;
  tagCategoria: string;
  sottoCategorie?: UnderCategory[];
}

// Prodotto (struttura flat come nel db.json)
export interface Product {
  id?: string;
  nome: string;
  categoria: ProductCategory;
  costo: string;
  prezzo: string;
  quantita: string;
  dataAcquisto: string;
  dataSpeciale?: string;
}

// Card Dashboard
export interface Card {
  id: string;
  label: string;
  value: number;
  icon: string;
  moneySymbol?: string;
}

// Dettaglio Bilancio
export interface BilancioDetail {
  id: string;
  label: string;
  value: number;
  moneySymbol: string;
}

// Card Bilancio
export interface CardBilancio {
  id: string;
  value: number;
  moneySymbol: string;
  details: BilancioDetail[];
}

// Labels per le colonne della tabella
export interface Labels {
  [key: string]: string;
}

// Utente
export interface User {
  id: string;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  gender: string;
  phone: string;
  address: {
    city: string;
    province: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
  __v?: number;
}

// Risposta API generica per gestione errori
export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  success: boolean;
}
