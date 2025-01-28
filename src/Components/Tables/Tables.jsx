import React from 'react'
import { Space, Table, Tag } from 'antd';

const Tables = () => {

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: 'Financial Strength',
    dataIndex: 'financial',
    key: 'financial',
  },
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time'
  }
]

const data = [
    {
      key: '1',
      name: 'John Brown',
      location: 'Egypt',
      financial: 'Strong',
      time: '00:00'
    },
    {
      key: '2',
      name: 'Jim Green',
      location: 'Las Vegas',
      financial: 'Average',
      time: '00:00'
    },
    {
      key: '3',
      name: 'Joe Black',
      location: 'San-Francisco',
      financial: 'Medium',
      time: '00:00'
    },
  ];
  return (
    <Table columns={columns} dataSource={data} />
  )
}

export default Tables