import { useState } from "react";

const Former = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div>
        <form>
          <label htmlFor="username">
            Username:
            <input
              type="text"
              name="username"
              id="username"
              value={input.username}
              onChange={handleInput}
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              id="email"
              value={input.email}
              onChange={handleInput}
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              id="password"
              value={input.password}
              onChange={handleInput}
            />
          </label>
        </form>
      </div>
      <section>
        Username: {input.username}
        <br />
        Email: {input.email}
        <br />
        Password: {input.password}
      </section>
    </>
  );
};

export default Former;
