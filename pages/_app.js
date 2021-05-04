import { GlobalStyles } from "../styles/globalstyles";
import { Provider } from "react-redux";
import store from "../src/lib/store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
