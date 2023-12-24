import { Button, Form, Input, Modal } from "antd";
import React, { useState } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addExpensive,
  expenDelete,
  expensiveedit,
} from "../store/laibrayslice.jsx";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expensive, setExpensive] = useState("");
  const [expensiveid, setExpensiveid] = useState("");
  const [form] = Form.useForm();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const recive = useDispatch();
  const selct = useSelector((s) => s.expensive);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
    setExpensive("");
    setExpensiveid("");
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    setIsModalOpen(false);
    if (expensiveid) {
      const edit = {
        ...values,
        id: expensiveid,
      };
      recive(expensiveedit(edit));
    } else {
      recive(addExpensive(values));
    }
    setExpensive("");
    setIsModalOpen(false);
    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const delet = (t) => {
    recive(expenDelete(t));
  };
  const edit = (t) => {
    setExpensiveid(t.id);
    setIsModalOpen(true);
    form.setFieldsValue({
      Title: t.Title,
      Description: t.Description,
      Amount: t.Amount,
    });
    recive(expensiveedit(t));
  };

  return (
    <div className="mgn">
      <Button onClick={showModal} className="prsnl">
        ADD EXPENCE
      </Button>
      <Modal
        style={{ margin: "auto" }}
        footer={null}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Title"
            name="Title"
            rules={[{ required: true, message: "Please input your Title!" }]}
          >
            <Input placeholder="Enter your Title!" />
          </Form.Item>
          <Form.Item
            label="Description"
            name="Description"
            rules={[
              { required: true, message: "Please input your Description!" },
            ]}
          >
            <Input placeholder="Enter your Description!" />
          </Form.Item>
          <Form.Item
            label="Amount"
            name="Amount"
            rules={[{ required: true, message: "Please input your Amount!" }]}
          >
            <Input placeholder="Enter your Amount!" />
          </Form.Item>

          <div className="felex">
            <Form.Item>
              <Button type="primary" htmlType="reset" onClick={handleCancel}>
                Cancel
              </Button>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                {expensive ? "update" : "Submit"}
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Modal>
      <div>
        {selct.map((t) => {
          return (
            <div className="prn">
              <div className="flex" key={t.id}>
                <h3>{t.Title}</h3>
                <h3>{t.Amount}</h3>
              </div>
              <div>
                <p>{t.Description}</p>
                <Button
                  onClick={() => {
                    edit(t);
                  }}
                  
                >
                  EDIT
                </Button>
                <Button
                  onClick={() => {
                    delet(t.id);
                  }}
                  className="mrgn"
                >
                  DELETE
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
