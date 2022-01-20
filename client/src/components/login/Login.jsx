import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="logo">Login Page</h3>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              className="loginInput"
              ref={email}
              required
            />
            <input
              placeholder="Password"
              type="password"
              className="loginInput"
              ref={password}
              required
            />
            <button className="loginBtn" type="submit" disabled={isFetching}>
              {isFetching ? "Loading" : "Log In"}
            </button>
            <button className="newUserBtn">Create New User</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
