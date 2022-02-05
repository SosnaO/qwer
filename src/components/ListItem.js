import React from "react";
import Notes from "./Notes";

const ListItem = ({ content, upPost, downPost, deletePost }) => {
  return (
    <>
      {content.map((post, index) => (
        <Notes
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

export default ListItem;
