// Contact.jsx
import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

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
      <button className={css.button} type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
