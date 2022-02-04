import React from "react";

const Form = (props) => {
  return (
    <form>
      <input
        name="post"
        type="text"
        component="input"
        value={props.post}
        onChange={(e) => {
          props.setPost(e.target.value);
        }}
      />
      <button
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
