import React, { useContext, useState } from "react";
import { CommentContext } from "../context/CommentContext";
import Avatar from "react-avatar";

const CommentContainer = ({ comment }) => {
  const { dispatch } = useContext(CommentContext);
  const [img, setImg] = useState([]);
  const handleChange = e => {
    return setImg(Array.from(e.target.files));
  };

  return (
    <li>
      <div className="info-container">
        <Avatar
          textSizeRatio={2.5}
          size={80}
          className="avatar-icon"
          name={`${comment.name} ${comment.surname}`}
        />
        <div className="info">
          <div className="author">
            <p className="name">{comment.name}&nbsp;</p>
            <p className="surname">{comment.surname}</p>
          </div>
          <div className="comment-time">
            <p>{comment.time}&nbsp;</p>
            <p>{comment.date}</p>
          </div>
        </div>
      </div>
      <div className="comment-container">
        <p className="title">{comment.title}</p>
        <div
          className="delete-button"
          onClick={() => dispatch({ type: "REMOVE_COMMENT", id: comment.id })}
        >
          Delete
        </div>
      </div>

      <div>
        <input
          type="file"
          id={comment.id}
          name={comment.id}
          multiple
          onChange={handleChange}
        />
      </div>
      <ul className="uploaded-images">
        {img.length > 0 ? <p>Uploaded: {img.length}</p> : null}
        {img.length > 0 &&
          img.map((file, id) => {
            return (
              <li key={`${id}${file.name}`}>
                <p>{file.name}</p>
                <img
                  className="preview-image"
                  src={URL.createObjectURL(file)}
                  alt="img"
                />
              </li>
            );
          })}
      </ul>
    </li>
  );
};

export default CommentContainer;
