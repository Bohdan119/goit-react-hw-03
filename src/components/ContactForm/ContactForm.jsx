import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

const ContactForm = ({ addContact }) => {
  const initialValues = {
    name: "",
    number: "",
  };

    const validationSchema = Yup.object().shape({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .max(50, "Name must be at most 50 characters")
        .required("Name is required"),
      number: Yup.string()
        .min(3, "Number must be at least 3 characters")
        .max(50, "Number must be at most 50 characters")
        .required("Number is required"),
    });

  const handleContactForm = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    addContact(newContact);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleContactForm}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field id="name" type="text" name="name" />
          </div>
          <div>
            <label htmlFor="number">Phone number</label>
            <Field id="number" type="tel" name="number" />
          </div>
          <div>
            <button type="submit" disabled={isSubmitting}>
              Add Contact
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
