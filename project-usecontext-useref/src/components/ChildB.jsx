import { useRef } from "react";
import ChildC from "./ChildC";

const ChildB = () => {
  /**
   * Note:
   * There are 3 important steps of useRef():
   * 1. Create a reference (useRef).
   * 2. Link reference.
   * 3. Access reference.
   */

  // 1.
  const textRef = useRef();

  function handleTextColor() {
    // 3.
    textRef.current.style.color = "red";
  }
  return (
    <div>
      <h2
        // 2.
        ref={textRef}
      >
        Child B
      </h2>
      <button onClick={handleTextColor}>Change Child B text color</button>
      <ChildC />
    </div>
  );
};

export default ChildB;
