import { useState } from "react";
import shortid from "shortid";
import styles from "./TodosForm.module.css";

export default function TodosForm({ onSubmit }) {
  const [name, setName] = useState("");

  const id = shortid.generate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, id });
    reset();
  };
  const reset = () => {
    setName("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.formLabel}>
        Name
        <input
          className={styles.formInput}
          type="text"
          name="name"
          id={shortid.generate()}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleChange}
        />
      </label>

      <button className={styles.buttonSubmit} type="submit">
        Add todos
      </button>
    </form>
  );
}
