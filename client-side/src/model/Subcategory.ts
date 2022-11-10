export interface Subcategory {
    id: number;
    name: string;
    updatedAt: string | Date
    createdAt:string
}

export interface CreateSubcategory {
    name: string;
    categoryId: number
}