import React, { useContext, useState } from "react";
import { CommentContext } from "../context/CommentContext";

const CommentForm = () => {
  const { dispatch } = useContext(CommentContext);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [title, setTitle] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_COMMENT", comment: { title, name, surname } });
    setName("");
    setSurname("");
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        required
        type="text"
        placeholder="Your name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        required
        type="text"
        placeholder="Your surname"
        value={surname}
        onChange={e => setSurname(e.target.value)}
      />
      <textarea
        required
        type="text"
        placeholder="Comment"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button type="submit">Add comment</button>
    </form>
  );
};

export default CommentForm;
