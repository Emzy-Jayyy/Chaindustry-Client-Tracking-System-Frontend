import React from 'react'
import { Table } from 'antd'

const ProspectsTable = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Social Handle',
      dataIndex: 'socialHandle',
      key: 'socialHandle',
    },
    {
      title: 'Portfolio Link',
      dataIndex: 'portfolioLink',
      key: 'portfolioLink',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
  ];

  const prospectData = [
    {role: 'warm', portfolioLink: 'https://www.figma.com/', socialHandle: '@chaindustry', name: 'chaindustry'},
    {role: 'cold', portfolioLink: 'https://www.figma.com/', socialHandle: '@chaindustry', name: 'chaindustry'},
    {role: 'contract', portfolioLink: 'https://www.figma.com/', socialHandle: '@chaindustry', name: 'chaindustry'},
  ]

  return (
    <Table columns={columns} dataSource={prospectData}/>
  )
}

export default ProspectsTable