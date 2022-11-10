import { Subcategory } from "./Subcategory";

export interface Category {
    id: number;
    name: string;
    updatedAt: string | Date
    createdAt:string
    sub_category: Subcategory[]
}

export interface CreateCategory {
    name: string
}