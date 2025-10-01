import "./App.css";
import Former from "./Former";
import FormExample from "./FormExample";
import Nav from "./Nav";
import Navbar from "./Navbar";
import Prod from "./Prod";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Prod />} />
          <Route path="nav" element={<Nav />} />
          <Route path="form-examples" element={<FormExample />} />
          <Route path="former" element={<Former />} />
          <Route path="*" element={<Prod />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
