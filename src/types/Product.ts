export type Product = {
    _id: string,
    author: string,
    name: string,
    price: number,
    image: string,
    sale_price: number,
    desc: string,
    category: string,
    status: number
}
export type ProductCreateType = {
    name:string
}
export type ProductCart = {
    _id: string,
    author: string,
    name: string,
    price: number,
    image: string,
    sale_price: number,
    desc: string,
    category: string,
    status: number,
    value: number
}