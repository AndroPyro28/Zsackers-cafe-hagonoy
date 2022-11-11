export interface SetCategory {
    id: number;
    name: string;
    updatedAt: string | Date
    createdAt:string
}

export interface createSetCategory {
    name: string
    subcategoryId: number
}