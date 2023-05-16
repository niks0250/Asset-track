import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { func } = useContext(AuthContext);
  const navigate = useNavigate();
  async function submitfunc(e) {
    try {
      e.preventDefault();
      const formData = {
        email,
        password,
      };
      await axios.post("http://localhost:5000/auth/login", formData);
      await func();
      navigate("/pg/list");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#00ffff",
            display: "flex",
            flexDirection: "column",
            width: "42%",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <div
            style={{
              fontSize: "30px",
              fontWeight: "500",
              fontFamily: "cursive",
              color: "blue",
              paddingTop: "30px",
              textDecoration: "underline",
              marginBottom: "0px",
            }}
          >
            Login Form
          </div>
          <form
            onSubmit={submitfunc}
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "7%",
              width: "80%",
            }}
          >
            <p
              style={{
                color: "Blue",
                fontSize: "20px",
                fontWeight: "600",
                paddingTop: "0px",
                marginBottom: "8px",
              }}
            >
              Email
            </p>
            <input
              type="email"
              value={email}
              placeholder="Enter the email"
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <p
              style={{
                color: "Blue",
                fontSize: "20px",
                fontWeight: "600",
                paddingTop: "25px",
                // paddingBottom: "0px",
                marginBottom: "8px",
              }}
            >
              Password
            </p>
            <input
              type="password"
              value={password}
              style={{ marginTop: "0px", paddingTop: "0px" }}
              placeholder="Enter the password"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <button
              type="submit"
              style={{
                color: "white",
                backgroundColor: " #0099ff",
                fontWeight: "600",
                // border: "1.4px solid blue",
                marginTop: "40px",
                borderRadius: "24px",
                width: "30%",
                padding: "1vh 1vh",
                textDecoration: "none",
                fontWeight: "600",
                marginLeft: "130px",
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
