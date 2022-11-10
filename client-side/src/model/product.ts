export interface CreateProduct {
    productName: string,
    productPrice: string,
    productStock: string | number,
    image: null | any,
    categoryId: string,
    subcategoryId: string
}