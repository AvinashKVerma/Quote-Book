import React, { useState, useEffect } from "react";
import QuotesList from "./QuotesList";
import AddQuote from "./AddQuote";

const QuotesConatiner = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("quotes")) || [];
    setQuotes(result);
  }, []);

  useEffect(() => {
    localStorage.setItem("quotes", JSON.stringify(quotes));
  }, [quotes]);

  const addData = (formdata) => {
    setQuotes([formdata, ...quotes]);
  };

  const editData = (formdata) => {
    const result = quotes.map((q) => {
      if (q.id === formdata.id) {
        return { ...q, ...formdata };
      } else {
        return { ...q };
      }
    });
    setQuotes(result);
  };

  const del = (dele) => {
    const newAray = quotes.filter((ele) => ele.id !== dele);
    setQuotes(newAray);
  };
  return (
    <div>
      <QuotesList quotes={quotes} del={del} editData={editData} />
      {/* <QuoteForm addData={addData} /> */}
      <AddQuote addData={addData} />
    </div>
  );
};

export default QuotesConatiner;
