import React from "react";
import Home from "../afterLogin";
import Index from "../text";
import { useSelector } from "react-redux";
import Login from "../login";

const Main = () => {
  const user = useSelector((e) => e.user);
  return <div>{user ?  <Login/> : <Index/>}</div>;
};

export default Main;
