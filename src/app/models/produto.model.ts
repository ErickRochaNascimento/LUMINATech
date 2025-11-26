export interface Produtos extends Array<Produto> {}

export interface Produto{
    id: number | string
    title: string
    description: string
    price: number | string
    rating: number | string
    thumbnail: string
}

export interface ProdutosAPI {
  products: Produtos;
}