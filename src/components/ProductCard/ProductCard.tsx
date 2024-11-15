import { useState } from 'react'
import s from './Product.module.scss'
import { TypeProduct } from '../../redux/slices/product.model'
import { useBasket } from '../../hooks/useBasket'
import { useActions } from '../../hooks/useActions'
import { Rate } from 'antd'
import ModalProductEdit from '../ModalProductEdit/ModalProductEdit'

type ProductItemProps = {
  product: TypeProduct
}

const ProductCard = ({ product }: ProductItemProps) => {
  const basket = useBasket()
  const { removeProduct, toggleBasket } = useActions()
  const isExist = basket.some((r) => r.id === product.id)
  const [open, setOpen] = useState(false)

  const showDrawer = () => {
    setOpen(true)
  }

  const [showFullDescription, setShowFullDescription] = useState(false)
  const description = product.description

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription)
  }

  return (
    <div className={s.productCard}>
      <div className={s.imageContainer}>
        <img src={product.image} alt="Product image" className={s.image} />
      </div>
      <div className={s.priceContainer}>
        <span className={s.currentPrice}>{product.price} $</span>
      </div>
      <div className={s.stock}>
        <Rate allowHalf defaultValue={product.rating.rate} disabled />({product.rating.count})
      </div>
      <div className={s.title}>{product.title}</div>
      <div className={s.description}>
        {showFullDescription ? description : `${description.slice(0, 100)}...`}
        {description.length > 20 && (
          <button onClick={toggleDescription} className={s.showMore}>
            {showFullDescription ? 'Скрыть' : 'Показать полностью...'}
          </button>
        )}
      </div>

      <div className={s.buttonContainer}>
        <button
          className={s.button}
          onClick={() => {
            toggleBasket(product)
          }}
        >
          {isExist ? 'Remove basket' : 'To basket'}
        </button>
        <button
          className={s.button}
          onClick={() => {
            removeProduct(product.id)
            if (isExist) toggleBasket(product)
          }}
        >
          Delete
        </button>
        {product.local ? (
          <button className={s.button} onClick={showDrawer}>
            Edit
          </button>
        ) : (
          ''
        )}
      </div>
      {open ? <ModalProductEdit open={open} setOpen={setOpen} productOld={product} /> : ''}
    </div>
  )
}

export default ProductCard
