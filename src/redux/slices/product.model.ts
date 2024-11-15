interface IRate {
  count: number
  rate: number
}

export interface TypeProductState {
  products: TypeProduct[]
  isLoading: boolean
}

export interface TypeProduct {
  id: number
  title: string
  price: number | null
  category: string
  description: string
  image: string
  rating: IRate
  local?: boolean
}
