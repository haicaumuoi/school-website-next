"use client";
import { addNotification } from "@/component/utilities/commonServices/CommonService";
import { googleSignIn } from "@/lib/firebase";
import { store } from "@/redux/store";
import _ from "lodash";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Login = () => {
  const user = store.getState().authReducer.user;
  const router = useRouter();
  console.log(_.get(user, "schoolId"), user, _.get(user, "schoolId") == -1)
  useEffect(() => {
      if(_.get(user, "schoolId") != -1 && _.get(user, "schoolId") != null) {
      router.push("/");
      } else if (_.get(user, "schoolId") == -1){
        router.push("/register");
      } else {
        return;
      }
  }, [user, router]);


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
      <button className="w-full" onClick={() => {
              addNotification("success","", "Login successfully");
      }}>Log in with Facebook</button>
    </div>
  );
};

export default Login;
