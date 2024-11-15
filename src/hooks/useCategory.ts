import { useSelector } from 'react-redux'
import { TypeInitialState } from '../redux/state.model'

// Создаем хук списка товаров - возвращаем объект с массивом продуктов и состоянием загрузки с сервера
export const useCategory = () => {
  const products = useSelector((state: TypeInitialState) =>
    state.products.products.map((item) => item.category)
  )

  return ['all', ...new Set(products)]
}
