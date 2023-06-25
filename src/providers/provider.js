'use client'
import { useServerInsertedHTML } from "next/navigation";
import { CssBaseline, NextUIProvider } from "@nextui-org/react";
import { ReduxProviders } from "@/redux/provider";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor } from "@/redux/store";



export default function NextProviders({ children }) {
  useServerInsertedHTML(() => {
    return <>{CssBaseline.flush()}</>;
  });

  return (
      <ReduxProviders>
        <ToastContainer limit={4}></ToastContainer>
        <PersistGate loading={null} persistor={persistor}>
          <NextUIProvider>{children}</NextUIProvider>
        </PersistGate>
      </ReduxProviders>
  );
}
