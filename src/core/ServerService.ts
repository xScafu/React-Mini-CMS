import { toast } from "react-toastify";
import type {
  Card,
  CardBilancio,
  Product,
  Category,
  User,
  Labels,
  ApiResponse,
} from "./Types";

// Usa variabile d'ambiente, con fallback per sviluppo locale
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

// Helper per gestire le risposte API
async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || `Errore HTTP: ${response.status}`);
  }
  return response.json();
}

// Helper per le richieste con gestione errori
async function apiRequest<T>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    });
    const data = await handleResponse<T>(response);
    return { data, error: null, success: true };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Errore sconosciuto";
    console.error(`[API Error] ${endpoint}:`, message);
    return { data: null, error: message, success: false };
  }
}

// =====================
// PRODUCTS
// =====================

export async function getProducts(): Promise<Product[]> {
  const result = await apiRequest<Product[]>("/prodotti");
  if (!result.success) {
    toast.error("Impossibile caricare i prodotti");
    return [];
  }
  return result.data ?? [];
}

export async function getProductById(id: string): Promise<Product | null> {
  const result = await apiRequest<Product>(`/prodotti/${id}`);
  if (!result.success) {
    toast.error("Impossibile caricare il prodotto");
    return null;
  }
  return result.data;
}

export async function postProduct(product: Omit<Product, "id">): Promise<boolean> {
  const toastId = toast.loading("Caricamento...");
  
  const result = await apiRequest<Product>("/prodotti", {
    method: "POST",
    body: JSON.stringify(product),
  });

  if (result.success) {
    toast.update(toastId, {
      render: "Prodotto caricato con successo",
      type: "success",
      isLoading: false,
      autoClose: 3000,
    });
    return true;
  } else {
    toast.update(toastId, {
      render: "Non è stato possibile caricare il prodotto",
      type: "error",
      isLoading: false,
      autoClose: 3000,
    });
    return false;
  }
}

export async function removeProduct(productId: string): Promise<boolean> {
  const toastId = toast.loading("Rimozione in corso...");
  
  const result = await apiRequest<void>(`/prodotti/${productId}`, {
    method: "DELETE",
  });

  if (result.success) {
    toast.update(toastId, {
      render: "Prodotto rimosso con successo",
      type: "success",
      isLoading: false,
      autoClose: 3000,
    });
    return true;
  } else {
    toast.update(toastId, {
      render: "Non è stato possibile rimuovere il prodotto",
      type: "error",
      isLoading: false,
      autoClose: 3000,
    });
    return false;
  }
}

export async function modifyProduct(product: Product): Promise<boolean> {
  if (!product.id) {
    toast.error("ID prodotto mancante");
    return false;
  }
  
  const toastId = toast.loading("Modifica in corso...");
  
  const result = await apiRequest<Product>(`/prodotti/${product.id}`, {
    method: "PUT",
    body: JSON.stringify(product),
  });

  if (result.success) {
    toast.update(toastId, {
      render: "Prodotto modificato con successo",
      type: "success",
      isLoading: false,
      autoClose: 3000,
    });
    return true;
  } else {
    toast.update(toastId, {
      render: "Non è stato possibile modificare il prodotto",
      type: "error",
      isLoading: false,
      autoClose: 3000,
    });
    return false;
  }
}

// =====================
// CATEGORIES
// =====================

export async function getCategories(): Promise<Category[]> {
  const result = await apiRequest<Category[]>("/categorie");
  if (!result.success) {
    toast.error("Impossibile caricare le categorie");
    return [];
  }
  return result.data ?? [];
}

export async function getCategoriesFromProducts(): Promise<string[]> {
  const products = await getProducts();
  const categories = [
    ...new Set(products.map((product) => product.categoria?.nomeCategoria)),
  ].filter(Boolean) as string[];
  return categories;
}

export async function postCategory(category: Omit<Category, "id">): Promise<boolean> {
  const toastId = toast.loading("Caricamento...");
  
  const result = await apiRequest<Category>("/categorie", {
    method: "POST",
    body: JSON.stringify(category),
  });

  if (result.success) {
    toast.update(toastId, {
      render: "Categoria caricata con successo",
      type: "success",
      isLoading: false,
      autoClose: 3000,
    });
    return true;
  } else {
    toast.update(toastId, {
      render: "Non è stato possibile caricare la categoria",
      type: "error",
      isLoading: false,
      autoClose: 3000,
    });
    return false;
  }
}

export async function removeCategory(categoryId: string): Promise<boolean> {
  const toastId = toast.loading("Rimozione in corso...");
  
  const result = await apiRequest<void>(`/categorie/${categoryId}`, {
    method: "DELETE",
  });

  if (result.success) {
    toast.update(toastId, {
      render: "Categoria rimossa con successo",
      type: "success",
      isLoading: false,
      autoClose: 3000,
    });
    return true;
  } else {
    toast.update(toastId, {
      render: "Non è stato possibile rimuovere la categoria",
      type: "error",
      isLoading: false,
      autoClose: 3000,
    });
    return false;
  }
}

// =====================
// DASHBOARD
// =====================

export async function getCards(): Promise<Card[]> {
  const result = await apiRequest<Card[]>("/cards");
  if (!result.success) {
    console.warn("Impossibile caricare le cards dashboard");
    return [];
  }
  return result.data ?? [];
}

export async function getBilancio(): Promise<CardBilancio[]> {
  const result = await apiRequest<CardBilancio[]>("/bilancio");
  if (!result.success) {
    console.warn("Impossibile caricare il bilancio");
    return [];
  }
  return result.data ?? [];
}

// =====================
// LABELS
// =====================

export async function getLabels(): Promise<Labels | null> {
  const result = await apiRequest<Labels>("/labels");
  if (!result.success) {
    console.warn("Impossibile caricare le labels");
    return null;
  }
  return result.data;
}

// =====================
// USERS
// =====================

export async function getUsers(): Promise<User[]> {
  const result = await apiRequest<User[]>("/utenti");
  if (!result.success) {
    toast.error("Impossibile caricare gli utenti");
    return [];
  }
  return result.data ?? [];
}

export async function getUserById(id: string): Promise<User | null> {
  const result = await apiRequest<User>(`/utenti/${id}`);
  if (!result.success) {
    toast.error("Impossibile caricare l'utente");
    return null;
  }
  return result.data;
}

export async function updateUser(user: User): Promise<boolean> {
  if (!user.id) {
    toast.error("ID utente mancante");
    return false;
  }
  
  const toastId = toast.loading("Aggiornamento in corso...");
  
  const result = await apiRequest<User>(`/utenti/${user.id}`, {
    method: "PUT",
    body: JSON.stringify(user),
  });

  if (result.success) {
    toast.update(toastId, {
      render: "Utente aggiornato con successo",
      type: "success",
      isLoading: false,
      autoClose: 3000,
    });
    return true;
  } else {
    toast.update(toastId, {
      render: "Non è stato possibile aggiornare l'utente",
      type: "error",
      isLoading: false,
      autoClose: 3000,
    });
    return false;
  }
}
