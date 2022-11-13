import { SetCategory } from "./SetCategory";
import { Subcategory } from "./Subcategory";

export interface Category {
    id: number;
    name: string;
    updatedAt: string | Date
    createdAt:string
    sub_category: Subcategory[]
    set_category: SetCategory[]
}

export interface CreateCategory {
    name: string
}

export interface UpdateCategory {
    id: number;
    category: string
}