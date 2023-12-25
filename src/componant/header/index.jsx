import React from "react";
import "./index.css";
import { Dropdown, Space  ,Button} from 'antd';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/laibrayslice";
import { DownOutlined, MenuOutlined } from '@ant-design/icons';

const Head = () => {
  const recive = useDispatch();
  const user = useSelector((e) => e.user);
  console.log(user);
  // const items = [
  //   {
  //     label: <Link to={"/"}>Logout</Link>,
  //     key: '0',
  //   },

   
  // ];
  return (
    <>
      <div className="allparant">
        <div className="marg">
          <h1>EXPENSVE TRACKER</h1>
        </div>
        <div className="parnt">
          {user ? (
            <Link to={"/"}>
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

      <div className='mobileview'>
      {user ? (
            <Link to={"/"}>
              <Button  type="primary" onClick={() => recive(logout())}>
                Logout
              </Button>
            </Link>
          ) : (
            <>
              <Link to={"/login"}>
                <Button >LOGIN</Button>
              </Link>
              <Link to={"/singup"}>
                <Button className="mediaclas" type="primary">SING UP</Button>
              </Link>
            </>
          )}     </div>
     
    </>
  );
};

export default Head;
