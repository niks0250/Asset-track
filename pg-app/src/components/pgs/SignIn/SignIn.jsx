import React from "react";
import {Link} from "react-router-dom";
import {useState} from "react";
import Axios from "axios";
let SignIN=()=>{
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const addToList1=()=>{
        Axios({
          method: "POST",
          data:{
            email:email,
            password: password,
          },
          withCredentials: true,
          url: "http://localhost:5000/auth/signin",
        }).then((res)=>console.log(res));
    };
return (
<>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');\n*{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Poppins',sans-serif;\n}\n.contain{\n  margin-top: 70px;\n  display: grid;\n  width: 100%;\n  place-items: center;\n  background-color: rgba(238, 232, 232, 0);\n}\n::selection{\n  background: #ff80bf;\n\n}\n.container1{\n  background: #353333;\n  max-width: 350px;\n  width: 100%;\n  padding: 25px 30px;\n  border-radius: 5px;\n  box-shadow: 0 10px 10px lightgray;\n}\n.container1 form .title{\n  font-size: 30px;\n  font-weight: 600;\n  margin: 20px 0 10px 0;\n  position: relative;\n  color: white\n}\n.container1 form .title:before{\n  content: '';\n  position: absolute;\n  height: 4px;\n  width: 33px;\n  left: 0px;\n  bottom: 3px;\n  border-radius: 5px;\n  background: linear-gradient(to right, #99004d 0%, #ff0080 100%);\n}\n.container1 form .input-box{\n  width: 100%;\n  height: 45px;\n  margin-top: 25px;\n  position: relative;\n}\n.container1 form .input-box input{\n  width: 100%;\n  height: 100%;\n  outline: none;\n  font-size: 16px;\n  border: none;\n}\n.container1 form .underline::before{\n  content: '';\n  position: absolute;\n  height: 2px;\n  width: 100%;\n  background: #ccc;\n  left: 0;\n  bottom: 0;\n}\n.container1 form .underline::after{\n  content: '';\n  position: absolute;\n  height: 2px;\n  width: 100%;\n  background: linear-gradient(to right, #99004d 0%, #ff0080 100%);\n  left: 0;\n  bottom: 0;\n  transform: scaleX(0);\n  transform-origin: left;\n  transition: all 0.3s ease;\n}\n.container1 form .input-box input:focus ~ .underline::after,\n.container form .input-box input:valid ~ .underline::after{\n  transform: scaleX(1);\n  transform-origin: left;\n}\n.container1 form .button{\n  margin: 40px 0 20px 0;\n}\n.container1 .input-box input[type=\"submit\"]{\n  background: linear-gradient(to right, #99004d 0%, #ff0080 100%);\n  font-size: 17px;\n  color: #fff;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.container1 .input-box input[type=\"submit\"]:hover{\n  letter-spacing: 1px;\n  background: linear-gradient(to left, #99004d 0%, #ff0080 100%);\n}\n.container1 .option{\n  font-size: 14px;\n  text-align: center;\n  color: white;\n}\n.container1 .facebook a,\n.container1 .twitter a{\n  display: block;\n  height: 45px;\n  width: 100%;\n  font-size: 15px;\n  text-decoration: none;\n  padding-left: 20px;\n  line-height: 45px;\n  color: #fff;\n  border-radius: 5px;\n  transition: all 0.3s ease;\n}\n\n.container1 .facebook i,\n.container1 .twitter i{\n  padding-right: 12px;\n  font-size: 20px;\n}\n.container1 .twitter a{\n  background: linear-gradient(to right,  #00acee 0%, #1abeff 100%);\n  margin: 20px 0 15px 0;\n}\n.container1 .twitter a:hover{\n  background: linear-gradient(to left,  #00acee 0%, #1abeff 100%);\n  margin: 20px 0 15px 0;\n}\n.container1 .facebook a{\n  background: linear-gradient( to right,  #3b5998 0%, #476bb8 100%);\n  margin: 20px 0 50px 0;\n}\n.container1 .facebook a:hover{\n  background: linear-gradient( to left,  #3b5998 0%, #476bb8 100%);\n  margin: 20px 0 50px 0;\n}\n\n"
    }}
  />
  <meta charSet="UTF-8" />
  <link rel="stylesheet" href="../assets/css/signin.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
  />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <div className="contain">
    <div className="container1">
      <form >
        <div className="title">Sign In</div>
        <div className="input-box underline">
          <input
            type="text"
            onChange={(event)=>{
                setemail(event.target.value);
            }}
            placeholder="Enter Your Email"
            required=""
          />
          <div className="underline" />
        </div>
        <div className="input-box">
          <input
            type="password"
            onChange={(event)=>{
                setpassword(event.target.value);
            }}
            placeholder="Enter Your Password"
            required=""
          />
          <div className="underline" />
        </div>
        <div className="input-box button">
          <input type="submit" onClick={addToList1}  value="Submit" />
        </div>
      </form>
      <div className="option">or Connect With Social Media</div>
      <div className="twitter">
        <a href="#">
          <i className="fab fa-twitter" />
          Sign in With Twitter
        </a>
      </div>
      <div className="facebook">
        <a href="#">
          <i className="fab fa-facebook-f" />
          Sign in With Facebook
        </a>
      </div>
    </div>
  </div>
</>
)
};
export default SignIN
