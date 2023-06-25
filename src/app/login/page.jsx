import { googleSignIn } from "@/component/utilities/firebase/firebase";
import {
  FacebookFilled,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  createFromIconfontCN,
} from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center h-screen">
      <button className="w-full">Log in with Google</button>
      <div className="my-4 text-center">OR</div>
      <button className="w-full">Log in with Facebook</button>
    </div>
  );
};

export default Login;
