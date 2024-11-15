import './App.css'
import Header from '../components/Header/Header'
import ProductsList from '../components/ProductList/ProductList'
import { useEffect, useState } from 'react'
import { fetchProductList } from '../api/getProducts'
import { useDispatch } from 'react-redux'
import AddProductButton from '../components/AddProductButton/AddProductButton'

export default function App() {
  const [filterProd, setFilterProd] = useState('all')
  //eslint-disable-next-line
  const dispatch: any = useDispatch()

  useEffect(() => {
    dispatch(fetchProductList())
    //eslint-disable-next-line
  }, [])

  return (
    <>
      <Header setFilterProd={setFilterProd} />
      <ProductsList filterProd={filterProd} />
      <AddProductButton />
    </>
  )
}
