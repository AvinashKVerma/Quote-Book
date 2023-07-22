import React from "react";

const QuotesItem = (props) => {
  const { id, name, body, del } = props;

  const handleClick = () => {
    del(id);
  };
  return (
    <div>
      <b>{body}</b>
      <br />
      <b>{name}</b>
      <button onClick={handleClick}>x</button>
      <br />
      <br />
    </div>
  );
};

export default QuotesItem;
