// ProductSkeleton.jsx
import s from './ProductSkeleton.module.scss'

const ProductSkeleton = () => {
  return (
    <div className={s.productSkeleton}>
      <div className={s.imageSkeleton} />
      <div className={s.priceSkeleton} />
      <div className={s.ratingSkeleton}>
        <div className={s.starSkeleton} />
        <div className={s.starSkeleton} />
        <div className={s.starSkeleton} />
        <div className={s.starSkeleton} />
        <div className={s.starSkeleton} />
        <div className={s.reviewsSkeleton} />
      </div>
      <div className={s.titleSkeleton} />
      <div className={s.descriptionSkeleton}>
        <div className={s.lineSkeleton} />
        <div className={s.lineSkeleton} />
        <div className={s.lineSkeleton} />
      </div>
      <div className={s.buttonContainerSkeleton}>
        <div className={s.buttonSkeleton} />
        <div className={s.buttonSkeleton} />
      </div>
    </div>
  )
}

export default ProductSkeleton
