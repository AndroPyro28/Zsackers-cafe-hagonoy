import { SetCategory } from "./SetCategory";

export interface Subcategory {
    id: number;
    name: string;
    updatedAt: string | Date
    createdAt:string
    set_category: SetCategory[]
}

export interface CreateSubcategory {
    name: string;
    categoryId: number
}