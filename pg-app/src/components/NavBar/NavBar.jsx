import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Logout from "../Auth/Logout";

let NavBar = () => {
  const { loggedIn } = useContext(AuthContext);
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <div className="container">
          <Link to={"/"} className="navbar-brand text-info">
            Asset <span className="text-primary">Tracking</span>
          </Link>
          <span>
            {loggedIn == false && (
              <>
                <Link
                  to="/Register"
                  style={{
                    color: "blue",
                    backgroundColor: "#1affff",
                    fontWeight: "600",
                    // border: "1.4px solid blue",
                    borderRadius: "24px",
                    padding: "1vh 3vh",
                    textDecoration: "none",
                    fontWeight: "600"
                  }}
                >
                  Register
                </Link>
              </>
            )}
            {loggedIn == false && (
              <>
                <Link to="/Login" style={{
                    color: "blue",
                    backgroundColor: "#1affff",
                    fontWeight: "600",
                    // border: "1.4px solid blue",
                    borderRadius: "24px",
                    padding: "1vh 3vh",
                    textDecoration: "none",
                    marginLeft: "20px",
                  }}>Login</Link>
              </>
            )}
            {loggedIn == true && (
              <>
                <Logout />
              </>
            )}
          </span>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
