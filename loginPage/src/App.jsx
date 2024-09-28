import { useState } from "react";
import "./App.css";

function App() {
  const [hide, sethide] = useState(false);
  const [registration, setregistration] = useState(false);
  return (
    <>
      <h2>Modal Login Form</h2>
      <button onClick={() => sethide(hide ? false : true)}>Login</button>
      <h2>Modal Registration Form</h2>
      <button>Registration</button>

      {hide ? (
        <div className="container">
          {/* <div className="opacContainer"></div> */}
          <div className="loginForm">
            <i
              class="fa-regular fa-circle-xmark"
              onClick={() => sethide(false)}
            ></i>

            <h2 className="logText">
              {registration ? "Register Account" : "Login to my Account"}
            </h2>
            <input type="text" placeholder="Email Adress" />
            <input type="text" placeholder="Password" />
            {registration ? (
              <input type="text" placeholder="Confirm Password" />
            ) : null}
            <div className="checks">
              <input type="checkbox" name="" id="" />

              <span>Remember me on this computer</span>
            </div>

            <button className="log">
              {" "}
              {registration ? "Registration" : "Login"}
            </button>
            <p className="forget">Forget your password</p>

            {registration ? (
              <p
                className="createAccount"
                onClick={() => setregistration(false)}
              >
                Already Have an Account
              </p>
            ) : (
              <p
                className="createAccount"
                onClick={() => setregistration(true)}
              >
                Create a new account
              </p>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default App;
