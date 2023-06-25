"use client";
import { addNotification } from "@/component/utilities/commonServices/CommonService";
import { googleSignIn } from "@/component/utilities/firebase/firebase";
import { blue, yellow } from "@ant-design/colors";
import { ConfigProvider, Divider, theme } from "antd";
import Image from "next/image";
import { useSelector } from "react-redux";
import HeaderComponent from "./(landingPage)/layouts/HeaderComponent";
import DefaultLayout from "./(landingPage)/layouts/DefaultLayout";
import FooterComponent from "./(landingPage)/layouts/FooterComponent";

export default function Home() {
  const isDarkMode = useSelector((state) => state.darkMode);
  const { defaultAlgorithm, darkAlgorithm } = theme;
  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        token: {
          colorBgBase: "#fff",
          colorBgContainer: "fff",
          colorPrimaryBg: yellow[3],
          colorBgLayout: "#fff",
          colorPrimary: yellow[3],
          colorTextHeading: "#000",
          colorTextBase: "#000",
        },
      }}
    >
      <main className="flex min-h-screen flex-col items-center justify-between">
        <HeaderComponent />
        <DefaultLayout />
        <Divider className="mt-24 w-10/12" />
        <FooterComponent />
      </main>
    </ConfigProvider>
  );
}
