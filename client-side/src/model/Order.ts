import { CartProduct } from "./Cart-Product";

export interface CreateOrder {
   address: string;
   contact: string;
   cartProducts: CartProduct[];
   paymentType: string;
   totalAmount: number;
}
