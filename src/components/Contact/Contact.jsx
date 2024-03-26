import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ name, number, onDelete }) => {
  return (
    <div className={css.container}>
      <div className={css.title}>
        <p className={css.name}>
          <FaUser className={css.icon} /> {name}
        </p>
        <p className={css.number}>
          <FaPhoneAlt className={css.icon} /> {number}
        </p>
      </div>
      <button className={css.button} type="button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
