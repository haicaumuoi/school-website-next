'use client';
import { addNotification } from '@/component/utilities/commonServices/CommonService';
import { googleSignIn } from '@/lib/firebase';
import { store } from '@/redux/store';
import { theme } from 'antd'
import { useRouter } from 'next/navigation';

const Personal = () => {
  const loginToken = store.getState().authReducer.token;
  const router = useRouter();
  if (!loginToken) {
    addNotification(
      "error",
      "Please login to continue",
      "You are not logged in"
    );
    router.push("/login")
  }
    return (
        <div>
          Personal Detials
          </div>
       
  )
}

export default Personal