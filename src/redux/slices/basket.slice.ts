import { createSlice } from '@reduxjs/toolkit'
import { TypeProduct } from './product.model'

const initialStateBasket: TypeProduct[] = []

export const basketSlice = createSlice({
  name: 'basket',
  initialState: initialStateBasket,
  reducers: {
    // Создаем редюсер для добавления/удаления товары из корзины
    toggleBasket: (state, { payload: product }) => {
      const isExist = state.some((r) => r.id === product.id)

      if (isExist) {
        const index = state.findIndex((item) => item.id === product.id)

        if (index !== -1) {
          state.splice(index, 1)
        }
      } else {
        state.push(product)
      }
    },
  },
})

export const { actions: basketActions, reducer: basketReducers } = basketSlice
