import { Category } from "./Category";
import { SetCategory } from "./SetCategory";
import { Subcategory } from "./Subcategory";

export interface CreateProduct {
    productName: string,
    productPrice: string,
    productStock: string | number,
    image: null | any,
    categoryId: string,
    subcategoryId: string
    setcategoryId: string
}

export interface Product {
    id: number;
    productName: string;
    price: string;
    createdAt: string;
    updatedAt: string;
    image_url: string;
    image_id: string;
    stock: number;
    categoryId: number;
    setcategoryId: number;
    subcategoryId: number;
    category: Category;
    sub_category: Subcategory;
    set_category: SetCategory;
}

export interface Search {
    searchName:string;
    categoryId: number;
    setcategoryId: number;
    subcategoryId:number;
}