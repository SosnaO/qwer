import React from "react";
import styles from "../../components/styles.module.css";
const Form = (props) => {
  return (
    <form>
      <input
        className={styles.input}
        name="post"
        type="text"
        component="input"
        value={props.post}
        onChange={(e) => {
          props.setPost(e.target.value);
        }}
      />
      <button
        className={styles.btn}
        onClick={(e) => {
          e.preventDefault();
          props.addPost();
        }}
      >
        Add
      </button>
    </form>
  );
};

export default Form;
