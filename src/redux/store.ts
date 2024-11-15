import { configureStore } from '@reduxjs/toolkit'
import { productsReducers } from './slices/products.slice'
import { basketReducers } from './slices/basket.slice'

// Создаем общий объект редюсеров корзины и продуктов для хранения в всторе
const reducers = {
  products: productsReducers,
  basket: basketReducers,
}

export const store = configureStore({
  reducer: { ...reducers },
})
