import React from "react";
import CommentContextProvider from "./context/CommentContext";
import Navbar from "./components/Navbar";
import CommentList from "./components/CommentList";
import CommentForm from "./components/CommentForm";

function App() {
  return (
    <div className="App">
      <CommentContextProvider>
        <div className="sidebar">
          <Navbar />
          <CommentForm />
        </div>
        <CommentList />
      </CommentContextProvider>
    </div>
  );
}

export default App;
