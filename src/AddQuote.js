import React from "react";
import QuoteForm from "./QuoteForm";

const AddQuote = ({ addData }) => {
  return (
    <div>
      <QuoteForm addData={addData} />
    </div>
  );
};

export default AddQuote;
