import { Category } from "./Category";
import { SetCategory } from "./SetCategory";
import { Subcategory } from "./Subcategory";

export interface CreateProduct {
    productName: string,
    productPrice: string,
    productStock: string | number,
    image: null | any,
    details: string
    categoryId: string,
    subcategoryId: string
    setcategoryId: string
}

export interface Product {
    id: number;
    productName: string;
    price: number;
    createdAt: string;
    updatedAt: string;
    details: string
    image_url: string;
    image_id: string;
    stock: number;
    categoryId: number;
    setcategoryId: number;
    subcategoryId: number;
    category: Category;
    sub_category: Subcategory;
    set_category: SetCategory;
    archive: boolean;
    cart_product: any[]
}

export interface UpdateProduct {
    id: number,
    productName: string,
    price: number,
    details: string,
    stock: number,
    image_url: string,
    image_id:string,
    categoryId: number,
    subcategoryId: number,
    setcategoryId: number,
}

export interface Search {
    searchName:string;
    categoryId: number;
    setcategoryId: number;
    subcategoryId:number;
}

export interface getBySubcategory {
    subcategoryId: number;
}