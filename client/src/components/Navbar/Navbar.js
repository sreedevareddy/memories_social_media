import React, { useEffect, useState } from "react";
import memories from "../../images/memories.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./styles.css";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    dispatch({type: 'LOGOUT'});
    navigate('/');
    setUser(null);
  }

  useEffect(() => {
    // const token = user?.token;
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <div className="AppBar">
      <div className="link">
        <Link className="typography" to="./">
          Memories
        </Link>
      </div>
      <img src={memories} alt="memories" />
      <div className="toolBar">
        {user ? (
          <div className="profile">
            <img
              referrerPolicy="no-referrer"
              className="avatar"
              src={user.result.imageUrl}
              alt="S"
            />
            {/* <p>{user.result.name.charAt(0)}</p> */}
            <div className="typography username">{user.result.name}</div>
            <button onClick={logout} className="btn logout">Logout</button>
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
