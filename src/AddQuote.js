import React from "react";
import QuoteForm from "./QuoteForm";

const AddQuote = (props) => {
  const { addData } = props;

  const formSubmission = (formData) => {
    addData(formData);
  };
  return (
    <div>
      <h2>Add Quote</h2>
      <QuoteForm formSubmission={formSubmission} />
    </div>
  );
};

export default AddQuote;
