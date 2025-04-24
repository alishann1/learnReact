import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="h-145 w-64 bg-base-200 text-base-content p-4 flex flex-col">
      <h2 className="text-xl font-bold mb-4">SIDEBAR</h2>

      <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/users">Users</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
