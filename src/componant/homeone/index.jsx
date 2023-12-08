import React from "react";
import Home from "../afterLogin";
import Index from "../text";
import { useSelector } from "react-redux";

const Main = () => {
  const user = useSelector((e) => e.user);
  return <div>{user ? <Home /> : <Index />}</div>;
};

export default Main;
