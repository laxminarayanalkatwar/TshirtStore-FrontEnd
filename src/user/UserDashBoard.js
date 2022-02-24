import React from "react";
import { Link } from "react-router-dom";
import Base from "../core/Base";


const UserDashBoard = () => {
  return (
    <Base title="UserDashBoard page" description="Welcome">
      <button className="text-success"><Link  to="/">Now Go For Purchase</Link></button>
    </Base>
  );
};


export default UserDashBoard;
