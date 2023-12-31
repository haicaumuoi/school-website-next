import React from "react";
import { Button, Layout, Menu } from "antd";
import { UserOutlined, HomeOutlined, SettingOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../../redux/slices/darkModeSlice";
import schoolLogo from "../../../component/assets/school-logo.png";
import Image from "next/image";
import Link from "next/link";

const { Header } = Layout;

const HeaderComponent = () => {
  const isDarkMode = useSelector((state) => state.darkMode);
  const user = useSelector((state) => state.user);
  const validUser = user?.schoolId !== -1;
  const dispatch = useDispatch();

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <Header className="flex justify-between items-center h-24 bg-white w-screen">
      <Image alt="logo" width={100} src={schoolLogo} />
      <Menu mode="horizontal" className="w-6/12 h-10">
        <Menu.Item
          key="1"
          className="font-black text-xl uppercase"
          onClick={() => handleToggleDarkMode()}
        >
          Discover
        </Menu.Item>
        <Menu.Item key="2" className="font-black text-xl uppercase">
          Learning
        </Menu.Item>
        <Menu.Item key="3" className="font-black text-xl uppercase">
          Community
        </Menu.Item>
        <Menu.Item key="4" className="font-black text-xl uppercase">
          Connect
        </Menu.Item>
        <Menu.Item key="5" className="font-black text-xl uppercase">
          {user ? (<Link href="/personal">Personal</Link>) : (
            <Link href="/login">Login</Link>
          )}
    
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderComponent;
