import { useContext } from "react";
import { ThemeContext } from "../App";
import ChildD from "./ChildD";
// import { UserContext } from '../App'

const ChildC = () => {
  // const user = useContext(UserContext);
  const useTheme = useContext(ThemeContext);
  return (
    <>
      <button onClick={useTheme.handleTheme}>Change Theme</button>
      <ChildD />
    </>
    // <div>
    //       Child C
    //   <br />
    //       My name is {user.name}.
    // </div>
  );
};

export default ChildC;
