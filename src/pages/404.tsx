import { type NextPage } from "next";
import { Button, Result } from 'antd';
import { useRouter } from 'next/router';
import Head from "next/head";

const Custom404: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to bottom, #2e026d, #15162c)',
      }}>
        <Result
          status="404"
          title={<span style={{ color: 'white' }}>404</span>}
          subTitle={<span style={{ color: 'rgba(255, 255, 255, 0.85)' }}>Sorry, the page you visited does not exist.</span>}
          extra={
            <Button 
              type="primary" 
              onClick={() => void router.push('/')}
              size="large"
            >
              Back Home
            </Button>
          }
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            padding: '48px 32px',
            maxWidth: '500px',
            margin: '24px'
          }}
        />
      </div>
    </>
  );
};

export default Custom404; 