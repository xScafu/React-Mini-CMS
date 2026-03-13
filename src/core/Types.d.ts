import type { IconName } from "lucide-react/dynamic";
export interface UnderCategory {
    idSottoCategoria?: string;
    nomeSottoCategoria: string;
    tagSottoCategoria: string;
}
export interface Category {
    idCategoria?: string;
    nomeCategoria: string;
    tagCategoria: string;
    sottoCategorie?: UnderCategory[];
}
export interface Product {
    _id: string;
    categoria: Category;
    nome: string;
    prezzo: string;
    quantita: string;
    costo: string;
    dataAcquisto: string;
    dataSpeciale?: string;
}
export interface Card {
    key?: number;
    _id: string;
    label: string;
    value: string;
    icon: IconName;
}
export interface CardBilancio {
    _id: string;
    value: number;
    moneySymbol: string;
    details: [{
        id: string;
        label: string;
        value: number;
        moneySymbol: string;
    }];
}
export interface User {
    address: {
        geolocation: {
            lat: string;
            long: string;
        };
        city: string;
        province: string;
        street: string;
        number: number;
        zipcode: string;
    };
    _id: string;
    email: string;
    username: string;
    password: string;
    name: {
        firstname: string;
        lastname: string;
    };
    gender: string;
    phone: string;
    __v: number;
}
