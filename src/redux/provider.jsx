"use client";

import { ToastContainer } from "react-toastify";
import { store, persistor } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "react-toastify/dist/ReactToastify.css";

export function ReduxProviders({ children }) {
  return (
    <Provider store={store}>
      <ToastContainer limit={4}></ToastContainer>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
