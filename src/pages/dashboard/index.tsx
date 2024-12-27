import { type NextPage } from "next";
import { Card, Row, Col, Statistic, Typography } from 'antd';
import { UserOutlined, TeamOutlined, ProjectOutlined, FileOutlined } from '@ant-design/icons';
import DashboardLayout from "../../layouts/DashboardLayout";
import Head from "next/head";

const { Title } = Typography;

const DashboardPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard - T3 App</title>
      </Head>
      <DashboardLayout>
        <Title level={2} style={{ marginTop: 0 }}>Dashboard</Title>
        
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="Active Users"
                value={1128}
                prefix={<UserOutlined />}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="Team Members"
                value={93}
                prefix={<TeamOutlined />}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="Projects"
                value={25}
                prefix={<ProjectOutlined />}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="Files"
                value={238}
                prefix={<FileOutlined />}
              />
            </Card>
          </Col>
        </Row>

        <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
          <Col xs={24} lg={16}>
            <Card title="Recent Activity">
              <p>Your recent activity will appear here.</p>
            </Card>
          </Col>
          <Col xs={24} lg={8}>
            <Card title="Quick Actions">
              <p>Quick actions will appear here.</p>
            </Card>
          </Col>
        </Row>
      </DashboardLayout>
    </>
  );
};

export default DashboardPage; 