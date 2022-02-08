import React, { useState } from "react";
import ListItem from "./ListItem";
import Form from "./Form/Form";

const List = () => {
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState([]);

  function onChange(total, a, b) {
    total[a] = total.splice(b, 1, total[a])[0];
  }

  const addPost = () => {
    if (post !== "") {
      setPosts([...posts, post]);
      setPost("");
    }
  };
  const deletePost = (i) => {
    setPosts(
      posts.filter((post, index) => {
        return index !== Number(i);
      })
    );
  };

  const upPost = (index) => {
    let total = [...posts];
    onChange(total, index, Number(index) - 1);
    setPosts(total);
  };
  const downPost = (index) => {
    let total = [...posts];
    onChange(total, index, Number(index) + 1);
    setPosts(total);
  };

  return (
    <ul style={{ border: "2px solid red", margin: "5px" }}>
      <ListItem
        content={posts}
        upPost={upPost}
        downPost={downPost}
        deletePost={deletePost}
      />
      <li>
        <Form setPost={setPost} post={post} addPost={addPost} />
      </li>
    </ul>
  );
};

export default List;
