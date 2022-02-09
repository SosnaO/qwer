import React, { useState } from "react";
import List from "./List";

export default function Notes({
  content,
  post,
  index,
  upPost,
  downPost,
  deletePost,
}) {
  const [sublist, setSublist] = useState(false);
  const [del, setDel] = useState(null);

  return (
    <li key={index + 1} id={index}>
      {!sublist ? (
        <button
          style={{ margin: "10px" }}
          onClick={(e) => {
            setDel(Number(e.target.parentElement.getAttribute("id")));
            setSublist(true);
          }}
        >
          addSublist
        </button>
      ) : undefined}

      <p
        style={{
          display: "inline-block",
          minWidth: "150px",
          border: "1px solid",
          margin: "0",
          marginRight: "5px",
        }}
      >
        {post}
      </p>

      {index !== 0 && (
        <button
          onClick={(e) => {
            upPost(e.target.parentElement.getAttribute("id"));
          }}
        >
          UP
        </button>
      )}

      {content.length - 1 !== index && (
        <button
          onClick={(e) => {
            downPost(e.target.parentElement.getAttribute("id"));
          }}
        >
          DOWN
        </button>
      )}

      <button
        onClick={(e) => {
          deletePost(e.target.parentElement.getAttribute("id"));
          setSublist(false);
        }}
      >
        Delete
      </button>

      <div>
        {sublist && del === index ? (
          <button
            style={{ display: "inline-block", marginRight: "15px" }}
            onClick={(e) => {
              setSublist(false);
              setDel(null);
            }}
          >
            deleteSublist
          </button>
        ) : undefined}
        {sublist && del === index && <List />}
      </div>
    </li>
  );
}
