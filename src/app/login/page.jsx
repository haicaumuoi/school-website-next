"use client";
import { addNotification } from "@/component/utilities/commonServices/CommonService";
import { googleSignIn } from "@/lib/firebase";
import { store } from "@/redux/store";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={() => {
          googleSignIn(store.dispatch);
        }}
        className="w-full"
      >
        Log in with Google
      </button>
      <div className="my-4 text-center">OR</div>
      <button className="w-full">Log in with Facebook</button>
    </div>
  );
};

export default Login;
