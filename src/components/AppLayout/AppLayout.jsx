import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { GlobalStyle } from "../../GlobalStyle";
import { Main } from "./AppLayout.style";

function AppLayout() {
  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<p>Loading...</p>}>
        <>
          <Main>
            <Outlet />
          </Main>
        </>
      </Suspense>
    </>
  );
}

export default AppLayout;
