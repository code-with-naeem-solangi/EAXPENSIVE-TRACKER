import React from "react";
import Head from "../header";
import Index from "../text";
import { Outlet } from "react-router-dom";
import Home from "../afterLogin";
import { useSelector } from "react-redux";
import Main from "../homeone";

const LayOut = () => {
  const user = null;

  return (
    <>
      <div>
        <Head />
        {user ?  <Index/> :null}
        <Outlet/>
      
      </div>
    </>
  );
};

export default LayOut;
