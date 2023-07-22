import React, { useState, useEffect } from "react";
import QuoteForm from "./QuoteForm";
import QuotesList from "./QuotesList";

const QuotesConatiner = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("quote")) || [];
    setQuotes(result);
  }, []);

  useEffect(() => {
    localStorage.setItem("quote", JSON.stringify(quotes));
  }, [quotes]);

  const addData = (formdata) => {
    setQuotes([formdata, ...quotes]);
  };

  const del = (dele) => {
    const newAray = quotes.filter((ele) => ele.id !== dele);
    setQuotes(newAray);
  };
  return (
    <div>
      <QuotesList quotes={quotes} del={del} />
      <QuoteForm addData={addData} />
    </div>
  );
};

export default QuotesConatiner;
