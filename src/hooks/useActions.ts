import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { productsActions } from '../redux/slices/products.slice'
import { useMemo } from 'react'
import { basketActions } from '../redux/slices/basket.slice'

// Спредим объекты-экшены из наших слайсов (продуктов и корзины) в общий объект.
const rootActions = {
  ...productsActions,
  ...basketActions,
}

// Создаем хук для общения со всеми экшенами. Они сразу будут обернуты в диспатч за счет утилиты и мемоизированны.
export const useActions = () => {
  const dispatch = useDispatch()

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
