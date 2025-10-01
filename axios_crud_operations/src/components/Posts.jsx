import { useEffect, useState } from "react";
import { getPost, deletePost, updatePost } from "../api/PostApi";
import "../App.css";

function Posts() {
  const [data, setData] = useState([]);

  const getPostData = async () => {
    const res = await getPost();
    console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  // Function to delete post
  const handleDeletePost = async (id) => {
    try {
      const res = await deletePost(id);
      console.log(res);

      if (res.status === 200) {
        getPostData();
      }
      //   const newUpdatedPosts = data.filter((item) => {
      //     return item.id !== id;
      //   });
      //   setData(newUpdatedPosts);
      //   }
    } catch (error) {
      console.log(error);
    }
      
      
      
  };

  return (
    <>
      <section className="update-data"></section>
      <section className="section-post">
        <ol>
          {data.map((item) => {
            const { id, body, title } = item;
            return (
              <li key={id}>
                <p>Title: {title}</p>
                <p>Body: {body}</p>
                <button>edit</button>
                <button
                  className="btn-delete"
                  onClick={() => handleDeletePost(id)} // This "id" comes from the "<li key={id}>". Because if I want to delete the item we need to check the unique thing in it to pick and delete the item, so in case, "id" is the unique thing.
                >
                  delete
                </button>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
}

export default Posts;
