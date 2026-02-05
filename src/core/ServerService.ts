import { toast } from "react-toastify";
import type { Card, CardBilancio, Product, Category } from "./Types";

const API_URL = "http://localhost:3000";

export async function getProducts() {
  try {
    const response = await fetch(`${API_URL}/prodotti`);
    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function postProduct(product: Product) {
  toast
    .promise(
      fetch(`${API_URL}/prodotti`, {
        method: "POST",
        body: JSON.stringify(product),
      }),
      {
        pending: "Caricamento.",
        success: "Prodotto caricato con successo.",
        error: "Non è stato possibile caricare il prodotto.",
      },
    )
    .then(() => getProducts())
    .finally(() => getCategories());
}

export async function removeProduct(product: Product) {
  toast
    .promise(
      fetch(`${API_URL}/prodotti/${product.id}`, {
        method: "DELETE",
      }),
      {
        pending: "Caricamento.",
        success: "Prodotto rimosso con successo.",
        error: "Non è stato possibile rimuovere il prodotto.",
      },
    )
    .then(() => getProducts())
    .finally(() => getCategories());
}

export async function modifyProduct(product: Product) {
  toast.promise(
    fetch(`${API_URL}/prodotti/${product.id}`, {
      method: "PUT",
      body: JSON.stringify(product),
    }),
    {
      pending: "Caricamento.",
      success: "Prodotto modificato con successo.",
      error: "Non è stato possibile modificare il prodotto.",
    },
  );
}

export async function getCategories() {
  try {
    const response = await fetch(`${API_URL}/prodotti`);
    const data: Product[] = await response.json();
    const categories = [...new Set(data.map((product) => product.categoria))];
    return categories;
  } catch (error) {
    console.log(error);
  }
}

export async function postCategories(categories: Category) {
  toast
    .promise(
      fetch(`${API_URL}/categorie`, {
        method: "POST",
        body: JSON.stringify(categories),
      }),
      {
        pending: "Caricamento.",
        success: "Categorie caricate con successo.",
        error: "Non è stato possibile caricare le catogorie dei prodotti.",
      },
    )
    .then(() => getCategories());
}

export async function getCards() {
  try {
    const response = await fetch(`${API_URL}/cards`);
    const data: Card[] = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getBilancio() {
  try {
    const response = await fetch(`${API_URL}/bilancio`);
    const data: CardBilancio[] = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
