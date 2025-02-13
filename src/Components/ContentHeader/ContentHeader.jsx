import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';

const ContentHeader = ({title, modal, buttonInfo}) => {
  return (
    <div className="flex flex-justify-between flex-align">
      <h1 style={{ fontSize: "2rem" }}>{title}</h1>
      <Button
        icon={<PlusCircleFilled />}
        style={{ borderRadius: "10px", height: 45 }}
        onClick={modal}
      >
        {buttonInfo}
      </Button>
    </div>
  );
}

export default ContentHeader