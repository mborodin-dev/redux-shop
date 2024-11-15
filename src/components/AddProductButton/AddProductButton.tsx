import { FloatButton } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import ModalAddProduct from '../ModalAddProduct/ModalAddProduct'
import { useState } from 'react'

export default function AddProductButton() {
  const [open, setOpen] = useState(false)

  const showDrawer = () => {
    setOpen(true)
  }

  return (
    <>
      <FloatButton onClick={showDrawer} icon={<PlusOutlined />} tooltip="Add new product" />
      {open ? <ModalAddProduct open={open} setOpen={setOpen} /> : ''}
    </>
  )
}
