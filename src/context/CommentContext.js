import React, { createContext, useReducer, useEffect } from "react";
import { commentReducer } from "../reducers/commentReducer";

export const CommentContext = createContext();
const CommentContextProvider = props => {
  const [comments, dispatch] = useReducer(commentReducer, [], () => {
    const localData = localStorage.getItem("comments");
    return localData ? JSON.parse(localData) : [];
  });
  //JSON.parse - берёт строку из storage и превращает её в объект
  // [] - initial state
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);
  return (
    <CommentContext.Provider value={{ comments, dispatch }}>
      {props.children}
    </CommentContext.Provider>
  );
};

export default CommentContextProvider;
