import s from './Header.module.scss'
import { Badge, Select } from 'antd'
import { useBasket } from '../../hooks/useBasket'
import { useCategory } from '../../hooks/useCategory'
import ModalBasket from '../ModalBasket/ModalBasket'

type TypeHeaderProps = {
  setFilterProd: React.Dispatch<React.SetStateAction<string>>
}

export default function Header({ setFilterProd }: TypeHeaderProps) {
  const basket = useBasket()
  const categories = useCategory().map((item) => {
    return {
      value: item,
      label: item.toUpperCase(),
    }
  })

  const handleChange = (value: string) => {
    setFilterProd(value)
  }

  return (
    <header className={s.header}>
      <nav className={s.header_categories}>
        {categories.length > 1 ? (
          <Select
            defaultValue="all"
            style={{ minWidth: 170 }}
            onChange={handleChange}
            options={categories}
          />
        ) : (
          'Loading categories ...'
        )}
      </nav>

      <div className={s.header_basket}>
        <Badge count={basket.length} offset={[0, 30]} color="green">
          <ModalBasket />
        </Badge>
      </div>
    </header>
  )
}
