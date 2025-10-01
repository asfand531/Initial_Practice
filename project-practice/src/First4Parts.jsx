import { useState } from "react";
import "./App.css";

function First4Parts() {
  //8. Display text below as user types
  const [input, setInput] = useState();

  //9. Message toggler
  const [showMessage, setShowMessage] = useState(true);
  const handleClick = () => {
    setShowMessage((prev) => !prev);
  };

  // 10. Login rendering
  const [msg, setMsg] = useState("Please log in!");
  const [btn, setBtn] = useState(true);
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    setBtn(false);
    setMsg(`Welcome ${login.username}!`);
    setLogin({
      username: "",
      password: "",
    });
  };

  // 11. Different messages based on status prop
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const handleLoading = () => {
    setLoading(true);
    setBtn(false);
  };

  const handleError = () => {
    setError(true);
    setBtn(false);
  };

  return (
    <>
      {/* 8. Display text below as user types */}
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <p>{input}</p>
      </div>

      {/* 9. Message toggler */}
      <div>
        <button onClick={handleClick}>{showMessage ? "Hide" : "Show"}</button>

        {showMessage && <p>Your message</p>}
      </div>

      {/* 10. Login rendering */}
      <div>
        {btn ? <h2>Login</h2> : <h2>Welcome</h2>}
        {msg}
        <br />

        {btn && (
          <>
            <input
              type="text"
              name="username"
              value={login.username}
              onChange={handleChange}
              placeholder="Username"
            />
            <input
              type="password"
              name="password"
              value={login.password}
              onChange={handleChange}
              placeholder="Password"
            />
            <br />
            <br />
            <button onClick={handleLogin}>Login</button>
            <br />
            <br />
          </>
        )}
      </div>

      {/* 11. Different messages based on status prop */}
      <div>
        {btn ? <h2>Login</h2> : <h2>Success</h2>}
        {loading ? <h2>Loading</h2> : <h2>Login</h2>}
        {error ? <h2>Error</h2> : <h2>Login</h2>}
        {msg}
        <br />

        {btn && (
          <>
            <button onClick={handleLogin}>Success</button>
            <button onClick={handleLoading}>Loading</button>
            <button onClick={handleError}>Error</button>
            <br />
            <br />
          </>
        )}
      </div>
    </>
  );
}

export default First4Parts;
