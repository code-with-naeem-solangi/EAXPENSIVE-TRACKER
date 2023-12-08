import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div style={{ fontSize: "30px", marginLeft: "20px" }}>
      <h2>EXPLORE EXPENSVE TRACKER</h2>
      <p style={{ maxWidth: "1100px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magni
        deleniti ut eveniet modi dolor soluta reiciendis deserunt minus,
        assumenda cumque id nemo dolores nihil voluptatum vitae! Rem, iusto
        vero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        magni deleniti ut eveniet modi dolor soluta reiciendis deserunt minus,
        assumenda cumque id nemo dolores nihil voluptatum vitae! Rem, iusto
        vero.
      </p>
      <Link to={"/login"}>
        <Button style={{ width: "10%", height: "50px", fontSize: "20px" }}>
          LOGIN
        </Button>
      </Link>
    </div>
  );
};

export default Index;
