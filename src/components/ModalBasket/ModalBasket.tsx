import { ShoppingCartOutlined, CloseCircleOutlined } from '@ant-design/icons'
import { Button, notification, Space, ConfigProvider } from 'antd'
import { useBasket } from '../../hooks/useBasket'
import s from './ModalBasket.module.scss'
import { useEffect, useState } from 'react'
import { useActions } from '../../hooks/useActions'

export default function ModalBasket() {
  const basket = useBasket()
  const [api, contextHolder] = notification.useNotification({ maxCount: 1 })
  const [openBasket, setOpenBasket] = useState(false)
  const { toggleBasket } = useActions()

  useEffect(() => {
    if (openBasket) {
      api.destroy()
      setTimeout(() => {
        openNotification()
      }, 100)
    }
    //eslint-disable-next-line
  }, [basket])

  const openNotification = () => {
    api.info({
      message: `BASKET`,
      description: (
        <>
          <ol>
            {basket.map((item) => (
              <div className={s.basket_item} key={item.id}>
                <Button
                  icon={<CloseCircleOutlined />}
                  variant="link"
                  color="danger"
                  onClick={() => {
                    toggleBasket(item)
                  }}
                />
                <div>{item.title}</div>
                <div>
                  <b>{item.price} $</b>
                </div>
              </div>
            ))}
          </ol>
          <h2>Price: {basket.reduce((acc, item) => acc + item.price!, 0)} $</h2>
        </>
      ),
      placement: 'topRight',
      icon: <ShoppingCartOutlined />,
      duration: 0,
      onClose() {
        setOpenBasket(false)
      },
    })
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Notification: {
            width: 540,
          },
        },
      }}
    >
      {contextHolder}
      <Space>
        <Button
          type="primary"
          onClick={() => {
            if (openBasket) {
              api.destroy()
              setOpenBasket(false)
            } else {
              openNotification()
              setOpenBasket(true)
            }
          }}
          icon={<ShoppingCartOutlined />}
        />
      </Space>
    </ConfigProvider>
  )
}
