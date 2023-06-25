import { Divider, Layout } from "antd";
import { useLocation } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import LandingPage from "../LandingPage";

const { Content } = Layout;

const DefaultLayout = () => {
  return (
    <Layout className="min-h-screen w-screen">
      <Layout>
        <Layout>
          <Content className="py-4">
            <LandingPage />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
