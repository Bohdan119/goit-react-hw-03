import PropTypes from "prop-types";
import css from '../Contact/Contact.module.css'

const Contact = ({ contact, deleteContact }) => {
  return (
    <li className={css["contact-item"]}>
      <span className={css['contact-name']}>{contact.name}</span>: <span className={css['contact-number']}>{contact.number}</span>
      <button
        className={css["button-delete"]}
        onClick={() => deleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id:PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact:PropTypes.func.isRequired
};

export default Contact;
