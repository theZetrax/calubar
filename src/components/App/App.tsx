import React, { CSSProperties, useState } from 'react'
import { Typography, Space, InputNumber, Button, Form } from 'antd'
import './App.css'

const { Title } = Typography

const appStyles: CSSProperties = {
  padding: '2em',
}

const titleStyles: React.CSSProperties = {
  color: 'gray',
}

const App = (props: any) => {
  const [length1, setLength1] = useState<number>(0)
  const [quantity1, setQuantity1] = useState<number>(0)
  const [length2, setLength2] = useState<number>(0)
  const [quantity2, setQuantity2] = useState<number>(0)

  // Handling Form Reset
  const [form] = Form.useForm()
  const handleReset = () => {
    form.resetFields([0, 1, 2, 3])
  }

  // On change events
  const length1OnChange = (value: number) => {
    setLength1(value)
  }
  const quantity1OnChange = (value: number) => {
    setQuantity1(value)
  }
  const length2OnChange = (value: number) => {
    setLength1(value)
  }
  const quantity2OnChange = (value: number) => {
    setQuantity2(value)
  }

  return (
    <div style={appStyles}>
      <Title style={titleStyles} level={3}>
        Calculate Your Bars Here
      </Title>
      <hr style={{ height: '1px', border: 'none', backgroundColor: 'lightgray' }} />

      <Space direction="vertical">
        <Form form={form}>
          <Form.Item name={0} label="Length #1 (meter)">
            <InputNumber
              min={0}
              value={length1}
              defaultValue={0}
              onChange={length1OnChange}
              onReset={() => setLength1(0)}
            />
          </Form.Item>
          <Form.Item name={1} label="Quantity #1 (unit)">
            <InputNumber
              min={0}
              value={quantity1}
              defaultValue={0}
              onChange={quantity1OnChange}
              onReset={() => setQuantity1(0)}
            />
          </Form.Item>
          <Form.Item name={2} label="Length #2 (meter)">
            <InputNumber
              min={0}
              value={length2}
              defaultValue={0}
              onChange={length2OnChange}
              onReset={() => setLength2(0)}
            />
          </Form.Item>
          <Form.Item name={3} label="Quantity #2 (unit)">
            <InputNumber
              min={0}
              value={quantity2}
              defaultValue={0}
              onChange={quantity2OnChange}
              onReset={() => setQuantity2(0)}
            />
          </Form.Item>
        </Form>
        <Space>
          <Button type="primary">Calculate</Button>
          <Button onClick={handleReset}>Reset</Button>
        </Space>
      </Space>
    </div>
  )
}

export default App
