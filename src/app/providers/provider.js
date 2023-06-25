'use client'
import { useServerInsertedHTML } from "next/navigation";
import { CssBaseline, NextUIProvider } from "@nextui-org/react";
import { ReduxProviders } from "@/redux/provider";


export default function NextProviders({ children }) {
  useServerInsertedHTML(() => {
    return <>{CssBaseline.flush()}</>;
  });

  return (
      <ReduxProviders>
        <NextUIProvider>{children}</NextUIProvider>
      </ReduxProviders>
  );
}
