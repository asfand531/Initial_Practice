import axios from "axios";
import { useEffect } from "react";
import "./Demo.css";

function Demo({ data, setData, loading, setLoading, error, setError }) {
  const url = "https://dummyjson.com";
  const handleData = async () => {
    try {
      await axios.get(`${url}/products/`).then((res) => {
        setData(res.data.products);
        setLoading(false);
      });
    } catch (error) {
      setError("Error", error);
      setLoading(false);
    }
  };

  // This only runs on first render.
  useEffect(() => {
    console.log("Data handle function: ", handleData());
  }, []);

  console.log("What stored inside the data state: ", data);

  if (loading)
    return (
      <>
        <div className="loading">
          <div>Loading...</div>
        </div>
      </>
    );
  if (error)
    return (
      <>
        <div className="error">Error: {error}</div>
      </>
    );

  return (
    <>
      <div>
        <ul className="card-container">
          {data.map((products) => (
            <>
              <div className="card">
                <li>Title: {products.title}</li>
                <li>Category: {products.category}</li>
                <li>Ratings: {products.rating}</li>
                <li>Description: {products.description}</li>
              </div>
            </>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Demo;
