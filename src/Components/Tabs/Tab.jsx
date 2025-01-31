import React from 'react'
import { Tabs, Button } from 'antd';

const operations = <Button>Extra Action</Button>;

const items = [
    {
      key: '1',
      label: 'Tab 1',
      children: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: 'Tab 2',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Tab 3',
      children: 'Content of Tab Pane 3',
    },
    {
      key: '4',
      label: 'Tab 4',
      children: 'Content of Tab Pane 3',
    },
  ];

const Tab = () => {
  return (
    <Tabs defaultActiveKey="1" items={items} type="card" tabBarExtraContent={operations} />
  )
}

export default Tab