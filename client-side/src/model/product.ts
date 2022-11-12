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
}