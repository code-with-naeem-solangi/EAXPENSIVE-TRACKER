import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "./index.css";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/laibrayslice";
import { useNavigate, Link } from "react-router-dom";
const Login = () => {
  const navi = useNavigate();
  const recive = useDispatch();
  const onFinish = (values) => {
    console.log("Success:", values);
    const singUPUser = JSON.parse(localStorage.getItem("SingUp"));
    if (singUPUser) {
      if (
        singUPUser.email === values.email &&
        singUPUser.password === values.password
      ) {
        recive(loginUser(singUPUser));
        navi("/");
      } else {
        alert("Invalid credentials");
      }
    } else {
      alert("user not found");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="allP">
      <div className="main">
        <h1>LOGIN PAGE</h1>

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
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Login
              </Button>
            </Form.Item>
            <p style={{ textAlign: "center" }}>
              Don't Have An Account?
              <Link to={"/singup"}>
                <a> SINGUP</a>
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
