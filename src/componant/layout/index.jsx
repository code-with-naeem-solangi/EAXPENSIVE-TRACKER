import React from "react";
import Head from "../header";
import Index from "../text";
import { Outlet } from "react-router-dom";

const LayOut = () => {
  const user = null;
  return (
    <>
      <div>
        <Head />
        <div>
          {user ? <Index /> : null}
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default LayOut;
