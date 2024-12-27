import { type ReactNode } from 'react';
import { Layout, Card, Typography } from 'antd';
import { useRouter } from 'next/router';

const { Content } = Layout;
const { Title } = Typography;

interface AuthLayoutProps {
  children: ReactNode;
  title?: string;
}

const AuthLayout = ({ children, title = 'Welcome' }: AuthLayoutProps) => {
  const router = useRouter();

  return (
    <Layout>
      <Content style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to bottom, #2e026d, #15162c)',
      }}>
        <div style={{ width: '100%', maxWidth: 400, padding: '0 16px' }}>
          <Card
            style={{
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              borderRadius: 8,
            }}
            bodyStyle={{ padding: '32px 24px' }}
          >
            <div style={{ textAlign: 'center', marginBottom: 32 }}>
              <Title 
                level={2} 
                style={{ 
                  margin: 0,
                  marginBottom: 8,
                  cursor: 'pointer' 
                }}
                onClick={() => void router.push('/')}
              >
                T3 App
              </Title>
              <Title level={4} style={{ margin: 0, fontWeight: 'normal' }}>
                {title}
              </Title>
            </div>
            {children}
          </Card>
        </div>
      </Content>
    </Layout>
  );
};

export default AuthLayout; 