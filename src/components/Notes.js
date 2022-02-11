import React, { useState } from "react";
import List from "./List";
import styles from "./styles.module.css";

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
          className={styles.btn}
          onClick={(e) => {
            setDel(Number(e.target.parentElement.getAttribute("id")));
            setSublist(true);
          }}
        >
          addSublist
        </button>
      ) : undefined}
      <p className={styles.text}>{post}</p>
      {index !== 0 && (
        <button
          className={styles.btn}
          onClick={(e) => {
            upPost(e.target.parentElement.getAttribute("id"));
          }}
        >
          UP
        </button>
      )}

      {content.length - 1 !== index && (
        <button
          className={styles.btn}
          onClick={(e) => {
            downPost(e.target.parentElement.getAttribute("id"));
          }}
        >
          DOWN
        </button>
      )}

      <button
        className={styles.btn}
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
            className={styles.btn}
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
