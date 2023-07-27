import React, { useState } from "react";
import FormEdit from "./FormEdit";

const QuotesItem = (props) => {
  const { id, name, body, del, editData } = props;
  const [edit, setEdit] = useState(false);

  const handleDelete = () => {
    del(id);
  };

  const handleToggle = () => {
    setEdit(!edit);
  };

  return (
    <div>
      {!edit ? (
        <div>
          {body}
          <br />
          <b>
            <i>{name}</i>
          </b>
          <button onClick={handleToggle}>edit</button>
          <button onClick={handleDelete}>delete</button>
          <br />
          <br />
        </div>
      ) : (
        <>
          <FormEdit
            id={id}
            name={name}
            body={body}
            editData={editData}
            handleToggle={handleToggle}
          />
          <button onClick={handleToggle}>Cancel</button>
          <br />
          <br />
        </>
      )}
    </div>
  );
};

export default QuotesItem;
