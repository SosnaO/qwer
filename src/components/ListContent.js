import React from "react";
import Content from "./Content";

const ListContent = ({ content, upPost, downPost, deletePost }) => {
  return (
    <>
      {content.map((post, index) => (
        <Content
          key={index}
          content={content}
          post={post}
          index={index}
          upPost={upPost}
          downPost={downPost}
          deletePost={deletePost}
        />
      ))}
    </>
  );
};

export default ListContent;
