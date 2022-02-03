import React from "react";
import TodosListItem from "./TodosListItem";
import PropTypes from "prop-types";
const TodosList = ({ todos, onDelete }) => (
  <ul>
    {todos.map(({ name, id }) => (
      <TodosListItem key={id} id={id} name={name} onDelete={onDelete} />
    ))}
  </ul>
);
TodosList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodosList;
