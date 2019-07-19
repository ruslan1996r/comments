import React, { useContext } from "react";
import { CommentContext } from "../context/CommentContext";
import CommentDetails from "./CommentContainer";

const CommentList = () => {
  const { comments } = useContext(CommentContext);
  return comments.length ? (
    <div className="comment-list">
      <ul>
        {comments.map(comment => {
          return <CommentDetails comment={comment} key={comment.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No comments to read</div>
  );
};

export default CommentList;
