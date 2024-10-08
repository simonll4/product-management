export interface Product {
  id?: number;
  title: string;
  description: string;
  brand: string;
  category: {"id": number, "name": string, "image": string, "creationAt": string, "updatedAt": string};
  price: string;
  createdAt: string;
  updatedAt: string;
  productAvailable?: number;
  stockQuantity: number;
  images: string[];
}

export interface FilterProduct {
    totalItems?: number;
    totalPages?: number;
    offset?: number;
    limit?: number;
    sortBy?: string;
    filter?: string;
    sortDirection?: string;
}

export interface CreateProduct {
  title: string;
  description: string;
  brand: string;
  categoryId: number;
  price: number;
  productAvailable?: boolean;
  stockQuantity: number;
  images: string[];
}

export interface UpdateProduct {
  title?: string;
  description?: string;
  brand?: string;
  categoryId?: number;
  price?: number;
  images?: string[];
}