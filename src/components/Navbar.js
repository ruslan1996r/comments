import React, { useContext } from "react";
import { CommentContext } from "../context/CommentContext";

const Navbar = () => {
  const { comments } = useContext(CommentContext);
  const { dispatch } = useContext(CommentContext);
  return (
    <div className="navbar">
      <h1>Write some comment</h1>
      <p>
        There are currently {comments.length}
        {comments.length > 1 ? " comments" : " comment"}
      </p>
      <div
        className="delete-button"
        onClick={() => dispatch({ type: "DELETE_ALL" })}
      >
        Delete all
      </div>
    </div>
  );
};

export default Navbar;
