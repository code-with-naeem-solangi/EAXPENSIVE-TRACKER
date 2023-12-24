import React from "react";
import { Button, Form, Input } from "antd";
import "./index.css";
import { useNavigate, Link } from "react-router-dom";

const Singup = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
    localStorage.setItem("SingUp", JSON.stringify(values));
    navigate("/login");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="allP">
      <div className="main">
        <h1>SINGUP PAGE</h1>

        <div>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="Email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Confrim Password"
              name="Confrim password"
              rules={[
                {
                  required: true,
                  message: "Please input your Confrim password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                
              >
                SingUp
              </Button>
            </Form.Item>
            <p style={{ textAlign: "center" }}>
              Alreday Have An Account?
              <Link to={"/login"}>
                <a> LOGIN</a>
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Singup;
