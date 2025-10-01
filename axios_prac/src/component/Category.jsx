import React, { useEffect } from "react";
import axios from "axios";

function Category() {
  const updateData = async (e) => {
    const API = "https://jsonplaceholder.typicode.com/todos/";
    try {
      await axios
        .put(API)
        .then((res) => console.log(res))
        .then(console.log);
    } catch (error) {
      console.log(error);
    }
    useEffect(() => {
      updateData();
    }, []);
    const abc="asdasd";
    console.log(abc);
  };

  return <div></div>;
}

export default Category;
