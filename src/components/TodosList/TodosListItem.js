import React from "react";
import PropTypes from "prop-types";
import styles from "./TodosListItem.module.css";

const TodosListItem = ({ name, id, onDelete }) => (
  <li className={styles.contactListItem}>
    <p className={styles.contact}>{name}: </p>
    <button
      className={styles.buttonDelete}
      type="button"
      onClick={() => onDelete(id)}
    >
      Delete
    </button>
  </li>
);

TodosListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodosListItem;
