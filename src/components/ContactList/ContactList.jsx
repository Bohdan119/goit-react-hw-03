import PropTypes from "prop-types";
import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css"


const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css['contact-list']}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} deleteContact={deleteContact} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact:PropTypes.func.isRequired,
};

export default ContactList;
