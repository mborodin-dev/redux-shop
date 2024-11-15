import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TypeProduct, TypeProductState } from './product.model'
import { fetchProductList } from '../../api/getProducts'

const initialStateProd: TypeProductState = {
  products: [],
  isLoading: false,
}

export const productsSlice = createSlice({
  name: 'products',
  initialState: initialStateProd,
  reducers: {
    // Получение товаров из хранилища
    getProducts(state) {
      return state
    },
    // Добавление товара в стор (для модалки)
    addProduct(state, action: PayloadAction<TypeProduct>) {
      state.products.push(action.payload)
    },
    // Редактирование товара
    editProduct(state, action: PayloadAction<TypeProduct>) {
      const itemIndex = state.products.findIndex((product) => product.id === action.payload.id)
      state.products.splice(itemIndex, 1, action.payload)
    },
    // Удаление товара из стора (для кнопки удаления)
    removeProduct(state, action: PayloadAction<number>) {
      state.products = state.products.filter((product) => product.id !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      // Вызывается прямо перед выполнением запроса и задает статус загрузки данных с сервера
      .addCase(fetchProductList.pending, (state) => {
        state.isLoading = true
      })
      // Вызывается при успешной загрузке данных
      .addCase(fetchProductList.fulfilled, (state, action) => {
        state.isLoading = false
        state.products = action.payload
      })
  },
})

export const { actions: productsActions, reducer: productsReducers } = productsSlice
