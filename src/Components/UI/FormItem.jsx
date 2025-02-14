import React from "react";
import { Form, Input } from "antd";


const FormItem = ({firstLabel, secondLabel, thirdLabel, fourthLabel}) => {

  return (
    <>
      <Form.Item name={firstLabel.toLowerCase()} label={<strong>{firstLabel}</strong>} >
        <Input size="large"  />
      </Form.Item>
      <Form.Item name={secondLabel.toLowerCase()} label={<strong>{secondLabel}</strong>}>
        <Input size="large"  />
      </Form.Item>
      <Form.Item name={thirdLabel.toLowerCase()} label={<strong>{thirdLabel}</strong>}>
        <Input size="large"  />
      </Form.Item>
      <Form.Item name={thirdLabel.toLowerCase()} label={<strong>{fourthLabel}</strong>}>
        <Input size="large" />
      </Form.Item>
    </>
  );
};

export default FormItem;
