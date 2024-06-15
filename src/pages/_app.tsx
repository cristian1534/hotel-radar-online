import "@/app/globals.css";
import { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Layout from "@/adapters/ui/components/customs/Layout";
import { Provider } from "react-redux";
import store from "@/adapters/ui/redux/store/store";
import { ErrorProvider } from "@/adapters/ui/errors/errorContext";
import ErrorComponent from "@/adapters/ui/errors/error";
import { useSelector } from "react-redux";
import { RootState } from "@/adapters/ui/redux/store/store";

const inter = Inter({ subsets: ["latin"] });

interface MyAppContentProps extends AppProps {}

const MyAppContent: React.FC<MyAppContentProps> = ({ Component, pageProps, router }) => {
  const error = useSelector((state: RootState) => state.user.error);

  if (error) {
    return <ErrorComponent />;
  }

  return (
    <Layout>
      <Component {...pageProps} router={router} />
    </Layout>
  );
};

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div className={inter.className}>
      <Provider store={store}>
        <ErrorProvider>
          <MyAppContent Component={Component} pageProps={pageProps} router={router} />
        </ErrorProvider>
      </Provider>
    </div>
  );
}

export default MyApp;
