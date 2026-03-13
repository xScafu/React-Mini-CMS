import { toast } from "react-toastify";
import type { Card, CardBilancio, Product, Category, User } from "./Types";

export async function getProducts() {
  try {
    const response = await fetch(`/api/products`);
    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function postProduct(product: Product) {
  toast
    .promise(
      fetch(`/api/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }),
      {
        pending: "Caricamento.",
        success: "Prodotto caricato con successo.",
        error: "Non è stato possibile caricare il prodotto.",
      }
    )
    .then(() => getProducts())
    .finally(() => getCategories());
}

export async function removeProduct(product: Product) {
  toast
    .promise(
      fetch(`/api/products/${product._id}`, {
        method: "DELETE",
      }),
      {
        pending: "Caricamento.",
        success: "Prodotto rimosso con successo.",
        error: "Non è stato possibile rimuovere il prodotto.",
      }
    )
    .then(() => getProducts())
    .finally(() => getCategories());
}

export async function modifyProduct(product: Product) {
  toast.promise(
    fetch(`/api/products/${product._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    }),
    {
      pending: "Caricamento.",
      success: "Prodotto modificato con successo.",
      error: "Non è stato possibile modificare il prodotto.",
    }
  );
}

export async function getCategories() {
  try {
    const response = await fetch(`/api/categories`);
    const data: Category[] = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function postCategories(categories: Category) {
  toast
    .promise(
      fetch(`/api/categories`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(categories),
      }),
      {
        pending: "Caricamento.",
        success: "Categorie caricate con successo.",
        error: "Non è stato possibile caricare le categorie.",
      }
    )
    .then(() => getCategories());
}

export async function getCards() {
  try {
    const response = await fetch(`/api/cards`);
    const data: Card[] = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getBilancio() {
  try {
    const response = await fetch(`/api/budget`);
    const data: CardBilancio[] = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getLabels() {
  try {
    const response = await fetch(`/api/labels`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getUsers(): Promise<User[]> {
  try {
    const response = await fetch(`/api/users`);
    return await response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}
