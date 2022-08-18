import React from "react";
import memories from "../../images/memories.png";
import { Link } from "react-router-dom";

import "./styles.css";

const Navbar = () => {
  const user = null;

  return (
    <div className="AppBar">
      <div className="link">
        <Link className="typography" to="./">Memories</Link>
      </div>
      <img src={memories} alt="memories" />
      <div className="toolBar">
        {user ? (
          <div className="profile">
            <image
              className="avatar"
              alt={user.result.name}
              src={user.result.imageUrl}
            />
            <p>{user.result.name.charAt(0)}</p>
            <div className="typography username">{user.result.name}</div>
            <button className="btn logout">Logout</button>
          </div>
        ) : (
          <Link to="./auth">
            <button className="btn login">Sign in</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
