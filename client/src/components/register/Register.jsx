import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Password doesn't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: email.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="logo">Register Page</h3>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="User Name"
              ref={username}
              className="loginInput"
              required
            />
            <input
              placeholder="Email"
              ref={email}
              className="loginInput"
              required
              type="email"
            />
            <input
              placeholder="Password"
              ref={password}
              className="loginInput"
              required
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              ref={passwordAgain}
              className="loginInput"
              type="password"
              minLength="6"
              required
            />
            <button className="loginBtn" type="submit">
              Sign up
            </button>
            <button className="loginBtn">Log into account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
