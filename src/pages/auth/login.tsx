import { type NextPage } from "next";
import { signIn } from "next-auth/react";
import { Button, Form, Input, Space, Divider } from 'antd';
import { GithubOutlined, GoogleOutlined } from '@ant-design/icons';
import AuthLayout from "../../layouts/AuthLayout";
import Head from "next/head";

const LoginPage: NextPage = () => {
  const onFinish = (values: { email: string; password: string }) => {
    console.log('Success:', values);
    // Implement your login logic here
  };

  return (
    <>
      <Head>
        <title>Login - T3 App</title>
      </Head>
      <AuthLayout title="Sign in to your account">
        <Form
          name="login"
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please enter a valid email!' }
            ]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password size="large" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              Sign in
            </Button>
          </Form.Item>
        </Form>

        <Divider>Or continue with</Divider>

        <Space direction="horizontal" size="middle" style={{ width: '100%', justifyContent: 'center' }}>
          <Button 
            icon={<GithubOutlined />} 
            size="large"
            onClick={() => void signIn('github')}
          >
            GitHub
          </Button>
          <Button 
            icon={<GoogleOutlined />} 
            size="large"
            onClick={() => void signIn('google')}
          >
            Google
          </Button>
        </Space>
      </AuthLayout>
    </>
  );
};

export default LoginPage; 