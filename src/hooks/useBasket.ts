import { useSelector } from 'react-redux'
import { TypeInitialState } from '../redux/state.model'

// Создаем хук корзины - возвращаем из хранилища массив элементов в корзине
export const useBasket = () => {
  const basket = useSelector((state: TypeInitialState) => state.basket)

  return basket
}
