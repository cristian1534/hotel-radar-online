import "@/app/globals.css";
import { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Layout from "@/adapters/ui/components/customs/Layout";
import { Provider } from "react-redux";
import store from "@/adapters/ui/redux/store/store";

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </div>
  );
}

export default MyApp;
