const { ipcRenderer } = window.require('electron')

import React, { CSSProperties, useState } from 'react'

import { Typography, Space, InputNumber, Button, Form } from 'antd'
import './App.css'

import { ResultsProps, ResultView } from '@components/ResultView'

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

  const [result, setResult] = useState<ResultsProps>(undefined)
  const [loading, setLoading] = useState<boolean>(false)

  // Handling Form Reset
  const [form] = Form.useForm()
  const handleReset = () => {
    form.resetFields([0, 1, 2, 3])
    setResult(undefined)
  }

  ipcRenderer.on('calculate-bars-complete', (_event, { result }) => {
    setResult(result)
    setLoading(false)
  })

  const handleCalculate = () => {
    setLoading(true)

    // Sort in ascending order
    const lengths = [
      { length: length1, quantity: quantity1 },
      { length: length2, quantity: quantity2 },
    ].sort((a, b) => b.length - a.length)

    if ([length1 * quantity1, length2 * quantity2].reduce((prev, acc) => acc + prev) === 0) {
      setLoading(false)
      return
    }
    ipcRenderer.send('calculate-bars', { lengths })
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
              onChange={(value) => setLength1(value)}
              onReset={() => setLength1(0)}
            />
          </Form.Item>
          <Form.Item name={1} label="Quantity #1 (unit)">
            <InputNumber
              min={0}
              value={quantity1}
              defaultValue={0}
              onChange={(value) => setQuantity1(value)}
              onReset={() => setQuantity1(0)}
            />
          </Form.Item>
          <Form.Item name={2} label="Length #2 (meter)">
            <InputNumber
              min={0}
              value={length2}
              defaultValue={0}
              onChange={(value) => setLength2(value)}
              onReset={() => setLength2(0)}
            />
          </Form.Item>
          <Form.Item name={3} label="Quantity #2 (unit)">
            <InputNumber
              min={0}
              value={quantity2}
              defaultValue={0}
              onChange={(value) => setQuantity2(value)}
              onReset={() => setQuantity2(0)}
            />
          </Form.Item>
        </Form>
        <Space>
          <Button onClick={handleCalculate} loading={loading} type="primary">
            Calculate
          </Button>
          <Button onClick={handleReset}>Reset</Button>
        </Space>

        {result && (
          <ResultView
            totalLengthRebars={result.totalLengthRebars}
            totalNumberRebars={result.totalNumberRebars}
            wastedRebars={result.wastedRebars}
          />
        )}
      </Space>
    </div>
  )
}

export default App
