import { Product } from "./product";

export interface CartProduct {
    id: number;
    product: Product,
    quantity: number;
}

export interface UpdateQuantity {
    id: number;
    action: string;
}