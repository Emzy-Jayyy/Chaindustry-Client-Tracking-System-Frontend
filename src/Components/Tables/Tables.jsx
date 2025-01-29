import React from 'react'
import { Space, Table, Tag } from 'antd';

const Tables = () => {

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    filters: [
      { text: 'John Brown', value: 'John Brown' },
      { text: 'Jim Green', value: 'Jim Green' },
    ],
    onFilter: (value, record) => record.name.includes(value),
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    sorter: (a,b) => (a.age - b.age),
    filters: [
      {text: 'Above 50' , value: 'Above50'},
      {text: 'less than 50', value: 'lessThan50'}
    ],
    onFilter: (value, record) => {
      if (value === 'Above50') return record.age >= 50;
      if (value === 'lessThan50') return record.age < 50 ;
    },
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
      age: 67,
      location: 'Egypt',
      financial: 'Strong',
      time: '01:00'
    },
    {
      key: '2',
      name: 'Emzy Jay',
      age: 34,
      location: 'chicago',
      financial: 'Weak',
      time: '00:00'
    },
    {
      key: '3',
      name: 'Jim Green',
      age: 90,
      location: 'Las Vegas',
      financial: 'Average',
      time: '02:00'
    },
    {
      key: '4',
      name: 'Joe Black',
      age: 45,
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