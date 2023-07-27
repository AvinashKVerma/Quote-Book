import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const QuoteForm = (props) => {
  const { id: slno, author, quote, formSubmission, handleToggle } = props;
  const id = slno ? slno : uuidv4();
  const [name, setNames] = useState(author ? author : "");
  const [body, setBody] = useState(quote ? quote : "");

  const handleNameChange = (event) => {
    setNames(event.target.value);
  };

  const handleQuoteChange = (event) => {
    setBody(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      id: id,
      name: name,
      body: body,
    };
    formSubmission(formData);
    if (handleToggle) {
      handleToggle();
    }
    setNames("");
    setBody("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="author">Author</label>
        <br />
        <input
          id="author"
          name="author"
          value={name}
          onChange={handleNameChange}
        />
        <br />
        <label htmlFor="quote">Quote</label>
        <br />
        <textarea
          id="quote"
          name="quote"
          value={body}
          onChange={handleQuoteChange}
        />
        <br />
        <input type="submit" value="save" />
      </form>
    </div>
  );
};

export default QuoteForm;
