import React from "react";
import QuoteForm from "./QuoteForm";

const FormEdit = (props) => {
  const { id, name, body, editData, handleToggle } = props;

  const formSubmission = (formData) => {
    editData(formData);
  };
  return (
    <div>
      <h3>Edit Quote</h3>
      <QuoteForm
        id={id}
        author={name}
        quote={body}
        formSubmission={formSubmission}
        handleToggle={handleToggle}
      />
    </div>
  );
};

export default FormEdit;
