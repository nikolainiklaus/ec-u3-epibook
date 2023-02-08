import React from "react";

const SingleComment = ({ comment }) => {

  
  const deleteComment = async (commentId) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NGQ2M2U3MzczODAwMTUzNzQ0MDIiLCJpYXQiOjE2NzUzNDIzNzksImV4cCI6MTY3NjU1MTk3OX0.T9SspPION27bTb5U75j_Ax7maF8wvgAJveRPtqnGsmc",
          },
        }
      );
      if (response.ok) {
        console.log("ok");
      } else {
        console.log("error while deleting");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="comment-section">
      <p className="comment">
        "{comment.comment}" | {comment.rate}/5
      </p>
      <button
        className="delete-button"
        onClick={() => deleteComment(comment._id)}
      >
        🗑️
      </button>
    </div>
  );
};

export default SingleComment;
