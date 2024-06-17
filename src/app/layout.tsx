"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "@/adapters/ui/redux/store/store";

import { ErrorProvider } from "@/adapters/ui/errors/errorContext";
import ErrorComponent from "@/adapters/ui/errors/error";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <ErrorProvider>
            {children}
            <ErrorComponent />
          </ErrorProvider>
        </Provider>
      </body>
    </html>
  );
}
