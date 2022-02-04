
import React, { useState } from "react";
import ListContent from "./ListContent";
import Form from "./Form/Form";

const List = () => {
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState([]);

  function onChange(arr, a, b) {
    arr[a] = arr.splice(b, 1, arr[a])[0];
  }

  const addPost = () => {
    if (post !== "") {
      setPosts([...posts, post]);
      setPost("");
    }
  };
  const deletePost = (i) => {
    setPosts(
      posts.filter((index) => {
        return index !== Number(i);
      })
    );
  };

  const upPost = (index) => {
    let arr = [...posts];
    onChange(arr, index, Number(index) - 1);
    setPosts(arr);
  };
  const downPost = (index) => {
    let arr1 = [...posts];
    onChange(arr1, index, Number(index) + 1);
    setPosts(arr1);
  };

  return (
    <ul style={{ border: "2px solid red", margin: "5px" }}>
      <ListContent
        content={posts}
        upPost={upPost}
        downPost={downPost}
        deletePost={deletePost}
      />
      <li style={{ listStyleType: "none" }}>
        <Form setPost={setPost} post={post} addPost={addPost} />
      </li>
    </ul>
  );
};

export default List;
