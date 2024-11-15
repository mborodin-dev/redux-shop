import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { TypeProduct } from '../redux/slices/product.model'

// Выносим отдельно наш url для получения данных с сервера. (Лучше хранить в .env файле для безопасности)
// const url = 'https://fakestoreapi.com/products/'

// получаем массив товаров и добавляем каждому свойство "local" для будущео распознавания редактирования
export const fetchProductList = createAsyncThunk<TypeProduct[]>(
  'products/fetchProductList',
  async () => {
    const response = await (await axios.get('https://fakestoreapi.com/products/')).data
    return response.map((item: TypeProduct) => {
      item.local = false
      return item
    })
  }
)
