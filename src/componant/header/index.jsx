import React from "react";
import "./index.css";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/laibrayslice";
const Head = () => {
  const recive = useDispatch();
  const user = useSelector((e) => e.user);
  console.log(user);
  return (
    <>
      <div className="allparant">
        <div className="marg">
          <h1>EXPENSVE TRACKER</h1>
        </div>
        <div className="parnt">
          {user ? (
            <Link to={"/text"}>
              <Button type="primary" onClick={() => recive(logout())}>
                Logout
              </Button>
            </Link>
          ) : (
            <>
              <Link to={"/login"}>
                <Button className="righ">LOGIN</Button>
              </Link>
              <Link to={"/singup"}>
                <Button type="primary">SING UP</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Head;
