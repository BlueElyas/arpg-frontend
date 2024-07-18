import { Outlet } from "react-router";
import Header from "../siteHeader/Header";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;
