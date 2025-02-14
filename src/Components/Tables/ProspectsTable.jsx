import React from "react";
import {Link, useNavigate } from "react-router-dom";
import { Table } from "antd";

const ProspectsTable = ({ data, link }) => {
  // const navigate = useNavigate()
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <Link to={`/dashboard/prospects/${record.key}`}>{text}</Link>
      ),
    },
    {
      title: "Social Handle",
      dataIndex: "socialHandle",
      key: "socialHandle",
    },
    {
      title: "Portfolio Link",
      dataIndex: "portfolioLink",
      key: "portfolioLink",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
  ];


  // function handleNavigate(index) {
  //   navigate(`/dashboard/prospects/${index}`)
  // }

  // const prospectData = [
  //   {role: 'warm', portfolioLink: 'https://www.figma.com/', socialHandle: '@chaindustry', name: 'chaindustry'},
  //   {role: 'cold', portfolioLink: 'https://www.figma.com/', socialHandle: '@chaindustry', name: 'chaindustry'},
  //   {role: 'contract', portfolioLink: 'https://www.figma.com/', socialHandle: '@chaindustry', name: 'chaindustry'},
  // ]

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        // onRow={(record, index) => ({
        //   onClick: () => {
        //     handleNavigate(index)
        //   },
        //   style: {cursor: 'pointer'}
        // })}
      />
    </>
  );
};

export default ProspectsTable;
