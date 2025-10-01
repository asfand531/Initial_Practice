import { createContext, useState } from "react";
import "./App.css";
import ChildA from "./components/ChildA";

/**
 * Note:
 * There are 3 steps of useContext:
 * 1. createContext
 * 2. Provider
 * 3. Consume
 */

//Step-1: create Context
// export const UserContext = createContext();

//Step-2: Wrap all the child inside the provider
//Step-3: Pass value
//Step-4: Consumer k andar ja k consume kr lo.

export const ThemeContext = createContext();

function App() {
  // const [user, setUser] = useState({ name: "Verna" });

  const [theme, setTheme] = useState("white");
  const [textColor, setTextColor] = useState("black");
  const [border, setBorder] = useState("black");
  const handleTheme = () => {
    const newTheme = theme === "white" ? "black" : "white";
    const newColor = textColor === "black" ? "white" : "black";
    const newBorder = border === "black" ? "red" : "black";
    setTheme(newTheme);
    setTextColor(newColor);
    setBorder(newBorder);
    // document.body.style.backgroundColor = newTheme;
    // document.body.style.color = newColor;
  };
  document.body.style.backgroundColor = "gray";


  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme, handleTheme }}>
        <div
          style={{
            backgroundColor: theme,
            color: textColor,
            margin: 0,
            padding: 30,
            // height: 400,
            // width: 400,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // border: `10px solid ${border}`,
          }}
        >
          <ChildA />
        </div>
      </ThemeContext.Provider>

      {/* <div>
        <UserContext.Provider value={user}>
          <ChildA />
        </UserContext.Provider>
      </div> */}
    </>
  );
}

export default App;
