// import React, { useState, useEffect } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

const CommentArea = ({ bookId }) => {
  //   const [comments, setComments] = useState([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const response = await fetch(
  //         `https://striveschool-api.herokuapp.com/api/comments/${bookId}`,
  //         {
  //           headers: {
  //             Authorization:
  //               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NGQ2M2U3MzczODAwMTUzNzQ0MDIiLCJpYXQiOjE2NzUzNDIzNzksImV4cCI6MTY3NjU1MTk3OX0.T9SspPION27bTb5U75j_Ax7maF8wvgAJveRPtqnGsmc",
  //           },
  //         }
  //       );
  //       const data = await response.json();
  //       setComments(data);
  //       console.log(data);
  //     };
  //     fetchData();
  //   }, [bookId]);

  return (
    <div>
      <h6 className="comment-title"> </h6>
      <CommentsList bookId={bookId} />
      <AddComment bookId={bookId} />
    </div>
  );
};
export default CommentArea;
