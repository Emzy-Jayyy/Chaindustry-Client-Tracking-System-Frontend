import React from "react";
import { Form, Input } from "antd";

const {TextArea} = Input;

const FormTextArea = ({firstLabel, secondLabel}) => {
  return (
    <>
      <Form.Item label={<strong>{firstLabel}</strong>}>
        <TextArea
          placeholder="Autosize height with minimum and maximum number of lines"
          autoSize={{
            minRows: 2,
            maxRows: 6,
          }}
        />
      </Form.Item>
      <Form.Item label={<strong>{secondLabel}</strong>}>
        <TextArea
          placeholder="Autosize height with minimum and maximum number of lines"
          autoSize={{
            minRows: 2,
            maxRows: 8,
          }}
        />
      </Form.Item>
      {/* <Form.Item label={<strong>Problems Identified</strong>}>
        <TextArea
          placeholder="Autosize height with minimum and maximum number of lines"
          autoSize={{
            minRows: 2,
            maxRows: 6,
          }}
        />
      </Form.Item>
      <Form.Item label={<strong>Problems Identified</strong>}>
        <TextArea
          placeholder="Autosize height with minimum and maximum number of lines"
          autoSize={{
            minRows: 2,
            maxRows: 6,
          }}
        />
      </Form.Item> */}
    </>
  );
};

export default FormTextArea;
