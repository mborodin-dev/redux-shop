import s from './ProductList.module.scss'
import { useProducts } from '../../hooks/useProducts'
import ProductCard from '../ProductCard/ProductCard'
import ProductSkeleton from '../ProductSkeleton/ProductSkeleton'

type TypeProductListProps = {
  filterProd: string
}

export default function ProductsList({ filterProd }: TypeProductListProps) {
  const { products, isLoading } = useProducts()

  return (
    <main className={s.main}>
      {isLoading ? (
        <>
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
        </>
      ) : (
        products
          .filter((item) => {
            if (filterProd === 'all') return item
            return item.category === filterProd
          })
          .map((item) => <ProductCard key={item.id} product={item} />)
          .reverse()
      )}
    </main>
  )
}
