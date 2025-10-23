import { useState } from "react";
import Demo from "./component/Demo";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <>
      <div>
        <Demo
          data={data}
          setData={setData}
          loading={loading}
          setLoading={setLoading}
          error={error}
          setError={setError}
        />
      </div>
    </>
  );
};

export default App;
