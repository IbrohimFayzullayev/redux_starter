import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="ui pointing menu container">
          <Link className="item">Streamer</Link>
          <div className="right menu">
            <Link to="/" className="item">
              Streams
            </Link>
            <Link className="item">Login</Link>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Header;
