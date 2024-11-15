import { TypeProduct, TypeProductState } from './slices/product.model'

export interface TypeInitialState {
  basket: TypeProduct[]
  products: TypeProductState
  isLoading: boolean
}
