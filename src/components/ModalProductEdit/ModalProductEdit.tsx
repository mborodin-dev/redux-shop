import { Button, Col, Drawer, Form, Input, InputNumber, Row, Select, Space } from 'antd'
import { useState } from 'react'
import { useActions } from '../../hooks/useActions'
import { TypeProduct } from '../../redux/slices/product.model'
import { useCategory } from '../../hooks/useCategory'

const { Option } = Select

type TypeAddProdProp = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  productOld: TypeProduct
}

export default function ModalProductEdit({ open, setOpen, productOld }: TypeAddProdProp) {
  const [product, setProduct] = useState(productOld)
  const { editProduct } = useActions()

  const categories = useCategory()
    .filter((item) => item !== 'all')
    .map((item, index) => (
      <Option key={index} value={item}>
        {item}
      </Option>
    ))

  const onClose = () => {
    setOpen(false)
  }

  const handleSubmit = () => {
    editProduct(product)
    onClose()
  }

  return (
    <>
      <Drawer
        title="Edit product"
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={handleSubmit} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form
          layout="vertical"
          initialValues={{
            ['title']: product.title,
            ['price']: product.price,
            ['category']: product.category,
            ['image']: product.image,
            ['rating']: product.rating.rate,
            ['description']: product.description,
          }}
        >
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: 'Please enter product name' }]}
          >
            <Input
              placeholder="Please enter product name"
              value={product.title}
              onChange={(e) => setProduct({ ...product, title: e.target.value })}
            />
          </Form.Item>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="price"
                label="Price"
                rules={[{ required: true, message: 'Please enter price' }]}
              >
                <InputNumber
                  placeholder="Please enter price"
                  type="number"
                  value={product.price}
                  onChange={(e) => setProduct({ ...product, price: e })}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="category"
                label="Category"
                rules={[{ required: true, message: 'Please choose the category' }]}
              >
                <Select
                  placeholder="Please choose the category"
                  value={product.category}
                  onChange={(e) => setProduct({ ...product, category: e })}
                >
                  {categories}
                  {/* <Option value="private">Private</Option>
                  <Option value="public">Public</Option> */}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="image"
                label="Image"
                rules={[{ required: true, message: 'Please enter the image url' }]}
              >
                <Input placeholder="Please enter the image url" type="url" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="rating"
                label="Rating"
                rules={[{ required: true, message: 'Please choose the rating' }]}
              >
                <Select
                  placeholder="Please choose the rating"
                  value={product.rating.rate}
                  onChange={(e) => setProduct({ ...product, rating: { rate: e, count: 0 } })}
                >
                  <Option value={1}>1</Option>
                  <Option value={2}>2</Option>
                  <Option value={3}>3</Option>
                  <Option value={4}>4</Option>
                  <Option value={5}>5</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: 'Please enter product description',
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="Please enter url description"
                  value={product.description}
                  onChange={(e) => setProduct({ ...product, description: e.target.value })}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  )
}
