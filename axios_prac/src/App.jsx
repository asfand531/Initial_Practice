import { useState } from "react";
import Demo from "./component/Demo";
import "./App.css";
import Category from "./component/Category";

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

        <Category data={data} setData={setData} />
      </div>
    </>
  );
};

export default App;
