import React from "react";
import { Table } from "antd";

const CustomizedTable = ({ type }) => {
  // Define columns and data dynamically based on the `type` prop
  let columns = [];
  let data = [];

  switch (type) {
    case "staff-information":
      columns = [
        { title: "S/N", dataIndex: "serialNumber", key: "serialNumber" },
        { title: "IMAGE", dataIndex: "image", key: "image" },
        { title: "NAME", dataIndex: "name", key: "name" },
        { title: "EMAIL", dataIndex: "email", key: "email" },
        { title: "SOCIALS", dataIndex: "socials", key: "socials" },
        { title: "POSITION", dataIndex: "position", key: "position" },
      ];
      data = [
        { key: "1", serialNumber: "1", image: "https://empato.url/image", name: "Empato", email: 'empato@gmail.com', socials:'@empato', position:'ceo' },
        // { key: "2", name: "Bob", position: "Developer", department: "IT" },
      ];
      break;

    case "schedules":
      columns = [
        { title: "S/N", dataIndex: "serialNumber", key: "serialNumber" },
        { title: "TASK", dataIndex: "task", key: "task" },
        { title: "TASK DONE", dataIndex: "taskdone", key: "taskdone" },
        { title: "DATE", dataIndex: "date", key: "date" },
      ];
      data = [
        { key: "1", serialNumber: "1", task: "reach out to empato", taskdone: "not yet", date: '14/2/25' },
        // { key: "2", username: "janedoe", email: "jane@example.com", role: "User" },
      ];
      break;

    case "contacted":
      columns = [
        { title: "S/N", dataIndex: "serialNumber", key: "serialNumber" },
        { title: "DATE", dataIndex: "date", key: "date" },
        { title: "PROSPECT LEVEL", dataIndex: "prospectLevel", key: "prospectLevel" },
        { title: "STRATEGIES", dataIndex: "strategies", key: "strategies" },
        { title: "COMMENTS", dataIndex: "comment", key: "comment" },
      ];
      data = [
        { key: "1", serialNumber: "1", date: '', prospectLevel: '', strategies: '', comment: '' },
        // { key: "2", productName: "Phone", price: 599, stock: 50 },
      ];
      break;

    case "income":
      columns = [
        { title: "S/N", dataIndex: "serialNumber", key: "serialNumber" },
        { title: "PROJECT", dataIndex: "project", key: "project" },
        { title: "ROLE", dataIndex: "role", key: "role" },
        { title: "AMOUNT", dataIndex: "amount", key: "amount" },
        { title: "DATE", dataIndex: "date", key: "date" },
      ];
      data = [
        { key: "1",  serialNumber: "1", project: '', role: '', amount: '', date: ''},
        // { key: "2", productName: "Phone", price: 599, stock: 50 },
      ];
      break;

    case "project":
      columns = [
        { title: "S/N", dataIndex: "serialNumber", key: "serialNumber" },
        { title: "NAME", dataIndex: "name", key: "name" },
        { title: "DURATION", dataIndex: "duration", key: "duration" },
        { title: "ROLE", dataIndex: "role", key: "role" },
        { title: "STATUS", dataIndex: "status", key: "status" },
        { title: "AMOUNT", dataIndex: "amount", key: "amount" },
      ];
      data = [
        { key: "1",  serialNumber: "1", name: '', duration: '', role: '', status: '', amount: ''},
        // { key: "2", productName: "Phone", price: 599, stock: 50 },
      ];
      break;

    case "client":
      columns = [
        { title: "S/N", dataIndex: "serialNumber", key: "serialNumber" },
        { title: "PROJECT", dataIndex: "project", key: "project" },
        { title: "PROJECT AMOUNT", dataIndex: "amount", key: "amount" },
        { title: "START-END DATE", dataIndex: "date", key: "date" },
        { title: "STATUS", dataIndex: "status", key: "status" },
      ];
      data = [
        { key: "1",  serialNumber: "1", project: '', amount: '', date: '', status: ''},
        // { key: "2", productName: "Phone", price: 599, stock: 50 },
      ];
      break;

    default:
      columns = [{ title: "No Data Available", dataIndex: "empty", key: "empty" }];
      data = [];
  }

  return <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />;
};

export default CustomizedTable;
