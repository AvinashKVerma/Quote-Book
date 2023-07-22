import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const QuoteForm = (props) => {
  const { addData } = props;
  const [name, setNames] = useState("");
  const [body, setBody] = useState("");

  const handleNameChange = (event) => {
    setNames(event.target.value);
  };

  const handleQuoteChange = (event) => {
    setBody(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      id: uuidv4(),
      name: name,
      body: body,
    };
    addData(formData);
    setNames("");
    setBody("");
  };

  return (
    <div>
      <h3>Add Quote</h3>
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
