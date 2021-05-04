import { GlobalStyles } from "../styles/globalstyles";

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
