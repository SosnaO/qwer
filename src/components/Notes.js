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
  const [ind, setInd] = useState(null);

  return (
    <li key={index + 1} id={index}>
      {!sublist ? (
        <button
          style={{ margin: "10px" }}
          onClick={(e) => {
            let thisIndex = e.target.parentElement.getAttribute("id");
            setInd(Number(thisIndex));
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
            let thisIndex = e.target.parentElement.getAttribute("id");
            upPost(thisIndex);
          }}
        >
          UP
        </button>
      )}

      {content.length - 1 !== index && (
        <button
          onClick={(e) => {
            let thisIndex = e.target.parentElement.getAttribute("id");
            downPost(thisIndex);
          }}
        >
          DOWN
        </button>
      )}

      <button
        onClick={(e) => {
          let thisIndex = e.target.parentElement.getAttribute("id");
          deletePost(thisIndex);
          setSublist(false);
        }}
      >
        Delete
      </button>

      <div>
        {sublist && ind === index ? (
          <button
            style={{ display: "inline-block", marginRight: "15px" }}
            onClick={(e) => {
              setSublist(false);
              setInd(null);
            }}
          >
            deleteSublist
          </button>
        ) : undefined}
        {sublist && ind === index && <List />}
      </div>
    </li>
  );
}
