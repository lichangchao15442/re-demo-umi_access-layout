import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import {history } from 'umi'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = () => {
  const onFinish = values => {
    const { username } = values
    if (username === 'lcc') {
      localStorage.setItem('role', 'guest')
    } else if (username === 'lgm') {
      localStorage.setItem('role', 'admin')
    }
    history.push('/')
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return <Form
    {...layout}
    name="basic"
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input placeholder="lcc或者lgm,lcc有dashboard的权限，lgm有list的权限" />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password  placeholder="随便输"/>
    </Form.Item>

    <Form.Item {...tailLayout}>
      <Button type="primary" htmlType="submit">
        Submit
    </Button>
    </Form.Item>
  </Form>
}

export default Login