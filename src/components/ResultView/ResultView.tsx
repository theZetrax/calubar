import React from 'react'
import { Descriptions } from 'antd'

export type ResultsProps = {
  totalNumberRebars: number
  totalLengthRebars: number
  wastedRebars: number
}

const ResultView = (props: ResultsProps) => {
  const { totalNumberRebars, totalLengthRebars, wastedRebars } = props

  return (
    <Descriptions title="Required Rebars" column={4} bordered>
      <Descriptions.Item span={4} label="Total Number of Rebar(s) (meters)">
        {totalNumberRebars} Unit(s)
      </Descriptions.Item>
      <Descriptions.Item span={2} label="Total Length of Rebar(s) (meters)">
        {totalLengthRebars} Meter(s)
      </Descriptions.Item>
      <Descriptions.Item span={2} label="Wasted Rebar(s) (meters)">
        {wastedRebars} Meter(s)
      </Descriptions.Item>
    </Descriptions>
  )
}

export default ResultView
