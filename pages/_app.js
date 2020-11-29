import "../styles/index.css";

import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css";
import useRouterScroll from "../components/useRouterScroll"; //styles of nprogress
//Binding events.
NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
function MyApp({ Component, pageProps }) {
  useRouterScroll();
  return <Component {...pageProps} />;
}
export default MyApp;
