import React from "react";
import QuotesItem from "./QuotesItem";

const QuotesList = (props) => {
  const { quotes, del, editData } = props;
  return (
    <div>
      {quotes.length ? (
        <div>
          <h3>My Quotes - {quotes.length}</h3>
          <ul style={{ listStyle: "none" }}>
            {quotes.map((ele) => {
              return (
                <li key={ele.id}>
                  <QuotesItem
                    id={ele.id}
                    name={ele.name}
                    body={ele.body}
                    del={del}
                    editData={editData}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div>
          <h4>No quotes found</h4>
          <p>Add your first quote</p>
        </div>
      )}
    </div>
  );
};

export default QuotesList;
