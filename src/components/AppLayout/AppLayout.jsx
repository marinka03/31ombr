import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { GlobalStyle } from "../../GlobalStyle";
import Header from "../Header";
import { Main } from "./AppLayout.style";
// import Footer from "../Footer/Footer";

function AppLayout() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <>
          <Main>
            <Outlet />
          </Main>
          {/* <Footer /> */}
        </>
      </Suspense>
    </>
  );
}

export default AppLayout;
